/**
 * HERO-SHADER.JS — Bright, warm WebGL shader animation for the hero section.
 * Adapted from the shader animation prompt to vanilla WebGL (no dependencies).
 *
 * Creates soft, expanding concentric rings in brand colors (yellow, sage green, coral)
 * on a warm cream background — bright, friendly, positive.
 */

(function () {
  'use strict';

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    // WebGL not available — CSS background remains visible
    canvas.style.display = 'none';
    return;
  }

  // ── VERTEX SHADER (fullscreen quad) ─────────────────────────

  const vertSrc = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // ── FRAGMENT SHADER ──────────────────────────────────────────
  // Bright cream background with soft, expanding rings in brand colors.
  // Inspired by the provided shader prompt, adapted for a warm/friendly palette.

  const fragSrc = `
    precision highp float;
    uniform vec2 u_resolution;
    uniform float u_time;

    void main(void) {
      vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      float t = u_time * 0.022;

      // ── Warm cream base ───────────────────────────────────
      vec3 bg = vec3(0.992, 0.980, 0.961); // #FDFAF5

      // ── Brand accent colors (soft but clearly visible) ──
      vec3 yellow = vec3(0.960, 0.820, 0.380); // warm amber-yellow
      vec3 green  = vec3(0.600, 0.790, 0.740); // sage green
      vec3 coral  = vec3(0.940, 0.660, 0.620); // soft coral

      float d = length(uv);
      float lw = 0.005;
      vec3 color = bg;

      // ── Primary rings from center ─────────────────────────
      for (int i = 0; i < 5; i++) {
        float fi   = float(i);
        float phase  = fract(t + fi * 0.20);
        float radius = phase * 2.2;
        float fade   = (1.0 - phase) * (1.0 - phase); // quadratic fade
        float brightness = lw * (fi * 0.8 + 1.5);
        float ring   = brightness / (abs(d - radius) + lw * 0.5);
        ring = min(ring, 1.0) * fade * 0.90;

        // Rotate: yellow → green → coral → yellow …
        int ci = int(mod(fi, 3.0));
        vec3 c = (ci == 0) ? yellow : ((ci == 1) ? green : coral);
        color = mix(color, c, ring);
      }

      // ── Secondary offset rings (gentle drift) ────────────
      vec2 offset = vec2(sin(t * 1.1) * 0.25, cos(t * 0.8) * 0.18);
      float d2 = length(uv - offset);

      for (int i = 0; i < 4; i++) {
        float fi    = float(i);
        float phase  = fract(t * 0.75 + fi * 0.25 + 0.5);
        float radius = phase * 1.6;
        float fade   = (1.0 - phase) * (1.0 - phase);
        float ring   = lw * 1.5 / (abs(d2 - radius) + lw * 0.5);
        ring = min(ring, 1.0) * fade * 0.70;

        int ci = int(mod(fi + 1.0, 3.0));
        vec3 c = (ci == 0) ? yellow : ((ci == 1) ? coral : green);
        color = mix(color, c, ring);
      }

      // ── Soft radial gradient vignette (brighter center) ──
      float vignette = 1.0 - smoothstep(0.6, 1.8, d) * 0.12;
      color *= vignette;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  // ── COMPILE SHADERS ──────────────────────────────────────────

  function compileShader(type, src) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vert = compileShader(gl.VERTEX_SHADER, vertSrc);
  const frag = compileShader(gl.FRAGMENT_SHADER, fragSrc);
  if (!vert || !frag) return;

  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return;
  }
  gl.useProgram(program);

  // ── FULLSCREEN QUAD ──────────────────────────────────────────

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
    -1,  1,
     1, -1,
     1,  1,
  ]), gl.STATIC_DRAW);

  const posLoc = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  // ── UNIFORMS ─────────────────────────────────────────────────

  const uResolution = gl.getUniformLocation(program, 'u_resolution');
  const uTime       = gl.getUniformLocation(program, 'u_time');

  // ── RESIZE ───────────────────────────────────────────────────

  function resize() {
    const w = canvas.clientWidth  * window.devicePixelRatio;
    const h = canvas.clientHeight * window.devicePixelRatio;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
    gl.uniform2f(uResolution, canvas.width, canvas.height);
  }

  window.addEventListener('resize', resize);
  resize();

  // ── ANIMATION LOOP ────────────────────────────────────────────

  let startTime = performance.now();
  let rafId;

  function animate() {
    rafId = requestAnimationFrame(animate);
    resize();
    const elapsed = (performance.now() - startTime) / 1000;
    gl.uniform1f(uTime, elapsed);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  animate();

  // Pause when tab is hidden (battery/performance friendly)
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
    } else {
      startTime = performance.now() - startTime;
      animate();
    }
  });

})();
