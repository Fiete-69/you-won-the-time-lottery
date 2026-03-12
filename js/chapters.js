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
    title: "Heute hier, Morgen dort (und jeder findet's ganz normal)",
    subtitle: "Wir sitzen in einem Metallrohr, rasen mit 900 km/h durch die Luft — und finden das langweilig. Kurz innehalten.",
    topic: "Luftfahrt",
    cardImage: "images/chapters/Flugzeug.jpg",
    heroImage: "images/chapters/Flugzeug.jpg",
    accentColor: null,              // null = Standard-Salbeigrün (#6B9A8B)
    publishDate: "2026-03-15",
    body: [

      /* ── 1. Ein Gedanke, der einen kurz umhaut ── */
      {
        type: "intro",
        text: "Stell dir vor, du erklärst deiner Urgroßmutter, dass du morgen früh in Frankfurt frühstückst und abends Sushi in Tokio isst. Sie würde dich vermutlich **mit dem Löffel schlagen** und nach dem Arzt rufen."
      },
      {
        type: "paragraph",
        text: "Und weißt du was? *Sie hätte nicht mal Unrecht.*"
      },
      {
        type: "paragraph",
        text: "Was wir heute als völlig \u201Enormalen\u201C Dienstag betrachten — Koffer packen, zum Flughafen fahren, einsteigen, schlafen, aufwachen, andere Seite der Welt — ist objektiv betrachtet eines der verrücktesten Dinge, die die Menschheit je hingekriegt hat. Wir sitzen in einem **70 Tonnen schweren Metallrohr**, das mit **900 Stundenkilometern** in **zehn Kilometern Höhe** durch die Luft rast, trinken dabei Tomatensaft (warum eigentlich immer Tomatensaft?) und finden das alles sogar oft langweilig."
      },
      {
        type: "pullquote",
        text: "Wir haben verlernt, staunend aus dem Fenster zu schauen. Dabei **fliegen wir**. *Wir. Fliegen. Einfach so.*",
        attribution: "You won the Time Lottery"
      },

      /* ── 2. Hintergrund & Geschichte ── */
      {
        type: "heading",
        text: "Wie wir vom Boden losgekommen sind"
      },
      {
        type: "paragraph",
        text: "Jahrtausende lang war der Mensch das einzige Wesen auf diesem Planeten, das unbedingt fliegen wollte — aber es einfach nicht konnte. Vögel: kein Problem. Insekten: easy. Menschen: nope, Schwerkraft sagt nein."
      },
      {
        type: "paragraph",
        text: "Die Sehnsucht war trotzdem immer da. **Ikarus** flog der Sonne entgegen — und wir alle kennen das Ende. *(Spoiler: schlecht ausgegangen.)* **Leonardo da Vinci** zeichnete im 15. Jahrhundert Flugmaschinen, die seiner Zeit um Jahrhunderte voraus waren."
      },
      {
        type: "paragraph",
        text: "Dann kamen **die Gebrüder Wright**. **1903**, in Kitty Hawk, North Carolina, hob ein Flugzeug zum ersten Mal kontrolliert ab — für ganze **zwölf Sekunden**. Zwölf Sekunden! Eine kurze Zeit, aber ein gewaltiger Schritt für die Menschheit."
      },
      {
        type: "paragraph",
        text: "Innerhalb *weniger Jahrzehnte* entwickelte sich aus diesem wackeligen Holzgestell mit Propeller das moderne Passagierflugzeug. Und plötzlich war die Welt eine andere. Nicht kleiner — aber *erreichbarer*."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Der kürzeste kommerzielle Flug der Welt dauert gerade einmal **57 Sekunden** — er verbindet zwei schottische Inseln, die nur 2,7 Kilometer auseinanderliegen. Warum überhaupt fliegen? Weil das raue Meer oft keine Bootsfahrt erlaubt.",
        attribution: "You won the Time Lottery"
      },

      /* ── 3. Warum es unser Leben bereichert ── */
      {
        type: "heading",
        text: "Konkret, überdreht und ehrlich: Was das Fliegen bedeutet"
      },
      {
        type: "paragraph",
        text: "Lass uns kurz innehalten und uns vorstellen, wie die Welt *ohne* Flugzeuge aussähe."
      },
      {
        type: "paragraph",
        text: "*Stell dir vor: Du willst deine Freundin in Neuseeland besuchen. Ohne Flugzeug.* Du packst deinen Koffer, buchst eine Schiffsreise, verabschiedest dich von deiner Familie — die ahnt, dass sie dich eine Weile nicht sehen wird — und schaukelst dann **wochenlang** über den Ozean. Wenn du ankommst, bist du seekrank, bärtig und hast hoffentlich noch nicht vergessen, warum du überhaupt gefahren bist. Deine Freundin hat aber inzwischen einen Neuseeländer geheiratet und die ganze Reise war für die Katz."
      },
      {
        type: "paragraph",
        text: "Stattdessen: Du buchst einen Flug, schläfst ein bisschen, schaust zwei Filme, isst ein Fertiggericht, das du zuhause nie anfassen würdest, und landest **24 Stunden später** am anderen Ende der Welt. Frisch genug, um direkt zum Strand zu fahren."
      },
      {
        type: "paragraph",
        text: "Das Flugzeug hat nicht nur Reisen möglich gemacht — es hat die Art verändert, wie wir *die Welt denken*. Kontinente, die früher für die meisten Menschen abstrakte Begriffe auf einer Landkarte waren, sind heute Reiseziele. **Bangkok. Buenos Aires. Kapstadt. Reykjavik.** Alles erreichbar. Alles real."
      },
      {
        type: "paragraph",
        text: "Familien, die über Kontinente verteilt leben, können sich trotzdem sehen und umarmen. Kulturen begegnen sich. Menschen lernen, dass \u201Edie anderen\u201C gar nicht so anders sind. Und manchmal lernt man auch, dass das Essen in Vietnam tatsächlich *besser* ist als das, was man zuhause als \u201Evietnamesisch\u201C bezeichnet hat."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Jeden Tag sind weltweit rund **100.000 Flüge** in der Luft — das sind etwa **10 Millionen Menschen** gleichzeitig, die irgendwo zwischen Himmel und Erde hängen. Die längste Nonstop-Strecke der Welt verbindet Singapur mit New York: *knapp 19 Stunden in der Luft.*",
        attribution: "You won the Time Lottery"
      },

      /* ── 4. Kleine Reflexion ── */
      {
        type: "heading",
        text: "Ein Denkanstoß — ohne Kitsch"
      },
      {
        type: "paragraph",
        text: "Wir reden viel darüber, was uns das Fliegen kostet — an Geld, an CO₂, an Nerven beim Check-in. Das sind echte Gespräche, die wir führen müssen. Aber manchmal vergessen wir dabei, was es uns *gibt*."
      },
      {
        type: "pullquote",
        text: "Es gibt uns die Welt. Nicht als Bild im Reiseprospekt. Nicht als Doku auf Netflix. Sondern *wirklich* — leibhaftig, mit allen Gerüchen, Geräuschen und Geschmäckern.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "paragraph",
        text: "Das Salz der Meeresluft in **Lissabon**. Der Lärm eines Marktplatzes in **Marrakesch**. Die Stille eines Reisfeldes in **Japan** bei Sonnenaufgang."
      },
      {
        type: "paragraph",
        text: "Das Flugzeug ist kein Wunder mehr für uns — aber *vielleicht sollte es das wieder sein*. Zumindest für einen kurzen Moment, wenn wir das nächste Mal abheben und die Erde unter uns kleiner wird."
      },
      {
        type: "closing",
        text: "Dann kurz die Kopfhörer rausnehmen. Aus dem Fenster schauen. Und denken: **Krass. Wir fliegen gerade. Einfach so.**"
      },

      /* ── 5. Mini-Alltags-Test ── */
      {
        type: "heading",
        text: "Mini-Alltags-Test: Der Staunen-Moment"
      },
      {
        type: "paragraph",
        text: "Beim nächsten Flug — oder beim nächsten Mal, wenn du ein Flugzeug am Himmel siehst: *Halte kurz inne. Schau hin.* Und erinnere dich daran, dass da oben Menschen sitzen, die gerade in wenigen Stunden ans andere Ende der Welt reisen. Was für deine Urgroßmutter ein **Wunder** gewesen wäre, ist für dich Alltag. Lass das kurz sacken."
      },

      /* ── 6. Nachdenk-Fragen ── */
      {
        type: "heading",
        text: "Nachdenk-Fragen"
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Welche Reise hat dich am meisten verändert** — und wärst du ohne das Flugzeug jemals hingekommen?",
          "**Gibt es ein Land oder einen Ort**, den du immer besuchen wolltest, aber noch nicht hattest? Was hält dich wirklich davon ab?",
          "**Wann hast du zuletzt wirklich gestaunt** — nicht über eine App oder ein Meme, sondern über etwas in der echten Welt?",
          "**Wie würde dein Leben aussehen**, wenn Reisen so aufwendig wäre wie vor 150 Jahren? Was würdest du vermissen?",
          "**Nimmst du dir beim Reisen Zeit**, wirklich anzukommen — oder bist du schon wieder am Planen, bevor du überhaupt gelandet bist?",
          "**Was wäre das Erste**, was du tun würdest, wenn du morgen einen Freiflug irgendwohin auf der Welt hättest? Wo würde die Reise hingehen?"
        ]
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
