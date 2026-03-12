/**
 * CHAPTERS.JS — "You won the Time Lottery"
 *
 * This is the ONLY file you need to edit to add a new chapter.
 *
 * To add a new chapter each week:
 *   1. Copy the object template below
 *   2. Fill in the fields
 *   3. Set status: "published"
 *   4. Add your images to images/hero/ and images/chapters/
 *   5. Done — no build step needed!
 *
 * BODY BLOCK TYPES:
 *   { type: "intro",     text: "..." }
 *   { type: "heading",   text: "..." }
 *   { type: "paragraph", text: "..." }
 *   { type: "image",     src: "...", alt: "...", caption: "..." }
 *   { type: "list",      items: ["...", "..."], ordered: false }
 *   { type: "pullquote", text: "...", attribution: "..." }
 *   { type: "video",     embedUrl: "https://www.youtube.com/embed/ID", caption: "..." }
 *   { type: "podcast",   label: "...", url: "...", description: "..." }
 *   { type: "closing",   text: "..." }
 */

const CHAPTERS = [

  /* ── KAPITEL 1: Das Flugzeug ─────────────────────────────── */
  {
    id: "flugzeug",
    status: "published",            // "published" | "coming-soon"
    order: 1,
    title: "Das Wunder in Sitz 32B",
    subtitle: "Wie ein Metallrohr uns in wenigen Stunden um die Welt katapultiert — und wir dabei einfach schlafen.",
    topic: "Luftfahrt",
    cardImage: "images/chapters/Flugzeug.jpg",
    heroImage: "images/chapters/Flugzeug.jpg",
    accentColor: null,              // null = Standard-Salbeigrün (#6B9A8B)
    publishDate: "2026-03-15",
    body: [
      {
        type: "intro",
        text: "Vor nur 120 Jahren war es für einen Menschen schlicht unmöglich, in acht Stunden von Deutschland nach New York zu reisen. Die Überquerung des Atlantiks dauerte Wochen — für die wenigen, die es sich leisten konnten. Heute beschweren wir uns darüber, dass das WLAN an Bord zu langsam ist."
      },
      {
        type: "heading",
        text: "Ein fliegender Wohnblock — mit 900 km/h"
      },
      {
        type: "paragraph",
        text: "Ein modernes Großraumflugzeug wie der Airbus A380 wiegt beladen über 560 Tonnen. Das entspricht ungefähr dem Gewicht von 80 ausgewachsenen Elefanten. Und dennoch hebt dieses Gebilde ab, erreicht Reiseflughöhen von fast 13.000 Metern und hält dort eine Kabine auf angenehmen 22 Grad — während draußen -60 Grad Celsius herrschen und der Luftdruck so niedrig ist, dass ungeschütztes Atmen tödlich wäre."
      },
      {
        type: "pullquote",
        text: "Jede sichere Landung ist ein kleines Wunder, das wir nie feiern. Vielleicht sollten wir damit anfangen.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "heading",
        text: "Zahlen, die uns eigentlich sprachlos machen sollten"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Über 100.000 Flüge starten und landen weltweit jeden Tag sicher",
          "Das Fliegen ist 95× sicherer als das Autofahren (pro Kilometer)",
          "Ein einziges Triebwerk leistet mehr als 30.000 PS",
          "Die Bordelektronik eines modernen Flugzeugs umfasst mehrere Millionen Codezeilen",
          "Der Autopilot steuert das Flugzeug über 99 % der Flugdauer selbstständig"
        ]
      },
      {
        type: "paragraph",
        text: "Hinter jedem dieser Flüge stecken Jahrzehnte der Ingenieurskunst, Tausende von Sicherheitsprüfungen und ein weltweites Netzwerk aus Fluglotsen, Technikern und Piloten, das rund um die Uhr arbeitet — damit wir pünktlich zu unserem Meeting kommen oder unsere Familie in der Ferne besuchen können."
      },
      {
        type: "heading",
        text: "Was wirklich passiert, wenn wir einsteigen"
      },
      {
        type: "paragraph",
        text: "Die Druckkabine, in der wir sitzen, ist eines der faszinierendsten Konstrukte der Menschheit. Die Außenhülle des Flugzeugs muss enormem Druck standhalten — und gleichzeitig so leicht wie möglich sein. Moderne Flugzeuge bestehen daher zu über 50 % aus Kohlefaserverbundwerkstoffen, die leichter als Aluminium, aber härter als Stahl sind. Jede Niete, jede Schweißnaht ist tausendfach getestet."
      },
      {
        type: "closing",
        text: "Wenn du das nächste Mal in einem Flugzeug sitzt und über die knappe Beinfreiheit seufzt — schau kurz aus dem Fenster. Du sitzt in einem beheizten Metallrohr, sieben Meilen über dem Erdboden, mit fast Schallgeschwindigkeit. Das Frühstück kostet 8 Euro. Das Wunder ist kostenlos."
      }
    ],
    nextChapterId: "supermarkt"
  },

  /* ── KAPITEL 2: Der Supermarkt ───────────────────────────── */
  {
    id: "supermarkt",
    status: "published",
    order: 2,
    title: "Das Lagerhaus der Wunder",
    subtitle: "Jeder Gang ist ein Triumph der Menschheit — und wir schieben unseren Einkaufswagen teilnahmslos hindurch.",
    topic: "Alltag",
    cardImage: "images/chapters/Supermarkt.jpg",
    heroImage: "images/chapters/Supermarkt.jpg",
    accentColor: "#C4904A",         // Warmes Goldbraun passt zum Thema Lebensmittel
    publishDate: "2026-03-22",
    body: [
      {
        type: "intro",
        text: "Stell dir vor, du wachst morgen früh auf — und es gibt keinen Supermarkt mehr. Keine Regale, keine Kühlabteilung, keine frischen Brötchen. Was würde es bedeuten, dich selbst zu ernähren? Für die meisten Menschen wäre es eine Katastrophe. Und genau deshalb ist der Supermarkt um die Ecke eines der unterschätztesten Wunder unserer Zeit."
      },
      {
        type: "heading",
        text: "Eine globale Lieferkette — für dein Mittagessen"
      },
      {
        type: "paragraph",
        text: "Ein durchschnittlicher deutscher Supermarkt führt zwischen 15.000 und 30.000 verschiedene Artikel. Hinter jedem dieser Produkte steckt eine Lieferkette, die mehrere Kontinente umspannt: Der Kaffee aus Äthiopien, die Avocado aus Peru, der Lachs aus Norwegen, das Olivenöl aus Griechenland — alles landet innerhalb weniger Tage, manchmal Stunden, frisch und erschwinglich in deinem Einkaufskorb."
      },
      {
        type: "pullquote",
        text: "Für den größten Teil der Menschheitsgeschichte war Hunger keine Nachricht — er war der Alltag. Wir sind die erste Generation, die ihn für selbstverständlich hält, ihn besiegt zu haben.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "heading",
        text: "Die Kühlung, die die Welt veränderte"
      },
      {
        type: "paragraph",
        text: "Ohne Kühlkette wäre unser heutiger Supermarkt unmöglich. Die Erfindung der mechanischen Kühlung im 19. Jahrhundert — und ihr weltweiter Ausbau im 20. Jahrhundert — hat mehr Menschenleben gerettet als jede Medizin. Lebensmittelvergiftungen, die früher ganze Städte betrafen, sind heute für die meisten von uns eine abstrakte Gefahr. Die Kühlschranktür, an der du täglich vorbeigehst, ist eine der wichtigsten Errungenschaften der Menschheit."
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Im Mittelalter gaben Menschen bis zu 80 % ihres Einkommens für Essen aus — heute sind es im Schnitt 12 %",
          "Frische Erdbeeren im Januar? Vor 50 Jahren undenkbar, heute normal",
          "Ein Supermarktmitarbeiter koordiniert täglich Lieferungen aus bis zu 40 Ländern",
          "Die Kühlkette eines Supermarkts verbraucht etwa so viel Strom wie 200 Einfamilienhäuser — und hält damit Tonnen von Lebensmitteln frisch"
        ]
      },
      {
        type: "closing",
        text: "Das nächste Mal, wenn du frustriert vor dem Regal stehst, weil die Lieblingssorte ausverkauft ist — halte kurz inne. Du stehst inmitten des größten Logistikwunders der Geschichte. Tausende von Menschen auf der ganzen Welt haben dafür gesorgt, dass du heute Abend gut essen kannst. Guten Appetit."
      }
    ],
    nextChapterId: null
  },

  /* ── KAPITEL 3: Coming Soon — Der Fernseher ─────────────── */
  {
    id: "fernseher",
    status: "coming-soon",
    order: 3,
    title: "Die Box, die alles veränderte",
    subtitle: "Wie ein Gerät in der Wohnzimmerecke die Art, wie wir die Welt sehen, für immer neu schrieb.",
    topic: "Technologie",
    cardImage: "images/chapters/fernseher-card.jpg",
    heroImage: null,
    accentColor: null,
    publishDate: null,              // noch nicht geplant
    body: [],
    nextChapterId: null
  },

  /* ── KAPITEL 4: Coming Soon — Die medizinische Versorgung ── */
  {
    id: "medizin",
    status: "coming-soon",
    order: 4,
    title: "Der stille Lebensretter",
    subtitle: "Impfungen, Antibiotika, Röntgen — warum wir einer unsichtbaren Revolution täglich das Leben verdanken.",
    topic: "Medizin",
    cardImage: "images/chapters/medizin-card.jpg",
    heroImage: null,
    accentColor: null,
    publishDate: null,
    body: [],
    nextChapterId: null
  }

  /*
   * ── VORLAGE FÜR EIN NEUES KAPITEL ──────────────────────────
   *
   * Einfach diese Vorlage unten einfügen und ausfüllen:
   *
   * {
   *   id: "mein-thema",
   *   status: "published",
   *   order: 5,
   *   title: "Mein Titel",
   *   subtitle: "Mein Untertitel.",
   *   topic: "Kategorie",
   *   cardImage: "images/chapters/mein-thema-card.jpg",
   *   heroImage: "images/hero/mein-thema-hero.jpg",
   *   accentColor: null,
   *   publishDate: "2026-04-05",
   *   body: [
   *     { type: "intro",     text: "Einleitungstext..." },
   *     { type: "heading",   text: "Abschnittstitel" },
   *     { type: "paragraph", text: "Fließtext..." },
   *     { type: "pullquote", text: "Zitat...", attribution: "Quelle" },
   *     { type: "closing",   text: "Abschlusstext..." }
   *   ],
   *   nextChapterId: null
   * },
   */
];
