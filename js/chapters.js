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
 *   { type: "audio",    src: "audio/file.mp3", image: "images/...", label: "Kapitel anhören" }
 */

const CHAPTERS = [

  /* ── KAPITEL 1: Das Flugzeug ─────────────────────────────── */
  {
    id: "flugzeug",
    status: "published",            // "published" | "coming-soon"
    order: 1,
    title: "Heute hier, Morgen dort (und jeder findet's ganz normal)",
    subtitle: "Wir sitzen in einem Metallrohr, rasen mit 900 km/h durch die Luft und finden das langweilig. Kurz innehalten.",
    topic: "Luftfahrt",
    cardImage: "images/chapters/Flugzeug.jpg",
    heroImage: "images/hero/Fliegen.png",
    accentColor: null,              // null = Standard-Salbeigrün (#6B9A8B)
    publishDate: "2026-03-15",
    body: [

      /* ── 0. Audio Player ── */
      {
        type: "audio",
        src: "audio/Fliegen V2.mp3",
        image: "images/chapters/Flugzeug.jpg",
        label: "Kapitel 1 anhören"
      },

      /* ── 1. Ein Gedanke, der einen kurz umhaut ── */
      {
        type: "intro",
        text: "Stell dir vor, du erklärst deiner Urgroßmutter, dass du morgen früh in Frankfurt frühstückst und abends Sushi in Tokio isst. Sie würde dich mit verdrehten Augen ansehen und würde denken, dass du den Verstand verloren hast. Und weißt du was? Sie hätte nicht mal Unrecht. Denn vor wenigen Generationen war das Szenario noch undenkbar."
      },
      {
        type: "paragraph",
        text: "Was wir heute als völlig \u201Enormalen\u201C Dienstag betrachten: Koffer packen, zum Flughafen fahren, einsteigen, schlafen, aufwachen, andere Seite der Welt. Objektiv betrachtet ist das eines der verrücktesten Dinge, die die Menschheit je hingekriegt hat. Wir sitzen in einem **70 Tonnen schweren Metallrohr**, das mit **900 Stundenkilometern** in **zehn Kilometern Höhe** durch die Luft rast, trinken dabei Tomatensaft (warum eigentlich immer Tomatensaft?) und finden das alles sogar oft langweilig."
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
        text: "Jahrtausende lang war der Mensch das einzige Wesen auf diesem Planeten, das unbedingt fliegen wollte, aber es einfach nicht konnte. Vögel: kein Problem. Insekten: easy. Menschen: nope, Schwerkraft sagt nein."
      },
      {
        type: "paragraph",
        text: "Die Sehnsucht war trotzdem immer da. **Ikarus** flog der Sonne entgegen, und wir alle kennen das Ende. *(Spoiler: schlecht ausgegangen.)* **Leonardo da Vinci** zeichnete im 15. Jahrhundert Flugmaschinen, die seiner Zeit um Jahrhunderte voraus waren."
      },
      {
        type: "paragraph",
        text: "Dann kamen **die Gebrüder Wright**. **1903**, in Kitty Hawk, North Carolina, hob ein Flugzeug zum ersten Mal kontrolliert ab, für ganze **zwölf Sekunden**. Zwölf Sekunden! Eine kurze Zeit, aber ein gewaltiger Schritt für die Menschheit."
      },
      {
        type: "paragraph",
        text: "Innerhalb *weniger Jahrzehnte* entwickelte sich aus diesem wackeligen Holzgestell mit Propeller das moderne Passagierflugzeug. Und plötzlich war die Welt eine andere. Nicht kleiner, aber *erreichbarer*."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Der kürzeste kommerzielle Flug der Welt dauert gerade einmal **57 Sekunden**. Er verbindet zwei schottische Inseln, die nur 2,7 Kilometer auseinanderliegen. Warum überhaupt fliegen? Weil das raue Meer oft keine Bootsfahrt erlaubt.",
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
        text: "*Stell dir vor: Du willst deine Freundin in Neuseeland besuchen. Ohne Flugzeug.* Du packst deinen Koffer, buchst eine Schiffsreise, verabschiedest dich von deiner Familie, die ahnt, dass sie dich eine Weile nicht sehen wird, und schaukelst dann **wochenlang** über den Ozean. Wenn du ankommst, bist du seekrank, bärtig und hast hoffentlich noch nicht vergessen, warum du überhaupt gefahren bist. Deine Freundin hat aber inzwischen einen Neuseeländer geheiratet und die ganze Reise war für die Katz."
      },
      {
        type: "paragraph",
        text: "Stattdessen: Du buchst einen Flug, schläfst ein bisschen, schaust zwei Filme, isst ein Fertiggericht, das du zuhause nie anfassen würdest, und landest **24 Stunden später** am anderen Ende der Welt. Frisch genug, um direkt zum Strand zu fahren."
      },
      {
        type: "paragraph",
        text: "Das Flugzeug hat nicht nur Reisen möglich gemacht, es hat die Art verändert, wie wir *die Welt denken*. Kontinente, die früher für die meisten Menschen abstrakte Begriffe auf einer Landkarte waren, sind heute Reiseziele. **Bangkok. Buenos Aires. Kapstadt. Reykjavik.** Alles erreichbar. Alles real."
      },
      {
        type: "paragraph",
        text: "Familien, die über Kontinente verteilt leben, können sich trotzdem sehen und umarmen. Kulturen begegnen sich. Menschen lernen, dass \u201Edie anderen\u201C gar nicht so anders sind. Und manchmal lernt man auch, dass das Essen in Vietnam tatsächlich *besser* ist als das, was man zuhause als \u201Evietnamesisch\u201C bezeichnet hat."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Jeden Tag sind weltweit rund **100.000 Flüge** in der Luft, das sind etwa **10 Millionen Menschen** gleichzeitig, die irgendwo zwischen Himmel und Erde hängen. Die längste Nonstop-Strecke der Welt verbindet Singapur mit New York: *knapp 19 Stunden in der Luft.*",
        attribution: "You won the Time Lottery"
      },

      /* ── 4. Kleine Reflexion ── */
      {
        type: "heading",
        text: "Ein echter Denkanstoß"
      },
      {
        type: "paragraph",
        text: "Wir reden viel darüber, was uns das Fliegen kostet: an Geld, an CO₂, an Nerven beim Check-in. Das sind echte Gespräche, die wir führen müssen. Aber manchmal vergessen wir dabei, was es uns *gibt*."
      },
      {
        type: "pullquote",
        text: "Es gibt uns die Welt. Nicht als Bild im Reiseprospekt. Nicht als Doku auf Netflix. Sondern *wirklich*. Leibhaftig, mit allen Gerüchen, Geräuschen und Geschmäckern.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "paragraph",
        text: "Das Salz der Meeresluft in **Lissabon**. Der Lärm eines Marktplatzes in **Marrakesch**. Die Stille eines Reisfeldes in **Japan** bei Sonnenaufgang."
      },
      {
        type: "paragraph",
        text: "Das Flugzeug ist kein Wunder mehr für uns, aber *vielleicht sollte es das wieder sein*. Zumindest für einen kurzen Moment, wenn wir das nächste Mal abheben und die Erde unter uns kleiner wird."
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
        text: "Beim nächsten Flug oder beim nächsten Mal, wenn du ein Flugzeug am Himmel siehst: *Halte kurz inne. Schau hin.* Und erinnere dich daran, dass da oben Menschen sitzen, die gerade in wenigen Stunden ans andere Ende der Welt reisen. Was für deine Urgroßmutter ein **Wunder** gewesen wäre, ist für dich Alltag. Lass das kurz sacken."
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
          "Welche Reise hat dich am meisten verändert und wärst du ohne das Flugzeug jemals hingekommen?",
          "Gibt es ein Land oder einen Ort, den du immer besuchen wolltest aber bisher noch nicht hast? Was hält dich wirklich davon ab?",
          "Wann hast du zuletzt wirklich gestaunt, nicht über eine App oder ein Meme, sondern über etwas in der echten Welt?",
          "Wie würde dein Leben aussehen, wenn Reisen so aufwendig wäre wie vor 150 Jahren? Was würdest du vermissen?",
          "Nimmst du dir beim Reisen Zeit, wirklich anzukommen? Oder bist du schon wieder am Planen, bevor du überhaupt gelandet bist?",
          "Wenn du morgen einen Freiflug gewinnen würdest und jeden Ort auf der Welt besuchen könntest? Wo würde die Reise hingehen?"
        ]
      },

      /* ── 7. Podcast Audio Player ── */
      {
        type: "audio",
        src: "audio/1 - Fliegen Podcast.mp3",
        image: "images/chapters/Flugzeug.jpg",
        label: "Kapitel 1 - Podcast Folge - Heute hier, Morgen dort (und jeder findet\u2019s ganz normal)"
      }
    ],
    nextChapterId: "glas"
  },

  /* ── KAPITEL 2: Das Glas ─────────────────────────────────── */
  {
    id: "glas",
    status: "published",
    order: 2,
    title: "Das unsichtbare Wunder",
    subtitle: "Es ist überall, aber du siehst es nie. Ein Stück geschmolzener Sand, der die Menschheitsgeschichte umgeschrieben hat.",
    topic: "Alltag",
    cardImage: "images/chapters/Glas.jpg",
    heroImage: "images/hero/Glas.jpg",
    accentColor: null,
    publishDate: "2026-03-22",
    body: [

      /* ── 0. Audio Player (Text) ── */
      {
        type: "audio",
        src: "audio/2 - Glas Text.mp3",
        image: "images/chapters/Glas.jpg",
        label: "Kapitel 2 anhören"
      },

      /* ── 1. Einleitung ── */
      {
        type: "intro",
        text: "Es ist überall, aber du siehst es nie. Es ist in deiner Hand, während du das hier liest. Es ist zwischen dir und dem Regen. Es ist der Grund, warum du dein eigenes Gesicht kennst. Es hat die Medizin revolutioniert, die Astronomie auf den Kopf gestellt, die Architektur neu erfunden und nebenbei dafür gesorgt, dass du deinen Wein nicht aus einem Pappbecher trinken musst. Die Rede ist vom Wundermaterial Glas!"
      },
      {
        type: "paragraph",
        text: "**Und jetzt nimm alles Glas aus deinem Leben. Jetzt sofort!**"
      },
      {
        type: "paragraph",
        text: "Nein, wirklich. Stell dir vor, jemand drückt einen Knopf und, puff, jedes einzelne Stück Glas auf diesem Planeten löst sich in Luft auf. Einfach weg. Dein Fenster? Ein Loch in der Wand. Dein Handy? Ein hübscher Rahmen mit Elektronik, aber Bildschirme oder der Fernseher ist Geschichte. Deine Brille? Nur noch ein Drahtgestell auf deiner Nase. Der Spiegel im Bad? Ein dunkles Rechteck, das dir nie wieder sagen wird, ob du so aus dem Haus gehen kannst. Jedes Krankenhaus der Welt steht still. Jedes Labor. Jedes Gewächshaus. Das Internet bricht zusammen, weil ohne Glasfaserkabel nicht mehr viel geht."
      },
      {
        type: "paragraph",
        text: "Die Zivilisation, wie wir sie kennen? Erledigt. In unter einer Sekunde. Nicht durch einen Krieg, nicht durch einen Asteroiden, nicht durch eine Pandemie. Sondern weil ein Material fehlt, das uns im Alltag ständig begleitet, aber über das wir selten einen Gedanken verlieren."
      },
      {
        type: "paragraph",
        text: "Willkommen beim unterschätztesten Wundermaterial aller Zeiten: Glas. Und das Verrückteste daran? Es ist nichts anderes als Sand. Quarzsand, der irgendwo jenseits von 1.700 Grad Celsius beschließt, dass er jetzt mal eben durchsichtig wird und mal eben die Menschheitsgeschichte umschreibt."
      },

      /* ── 2. Geschichte ── */
      {
        type: "heading",
        text: "Von Blitzen, Sand und glücklichen Zufällen, eine kurze Geschichte des Glases"
      },
      {
        type: "paragraph",
        text: "Die Geschichte von Glas ist ein bisschen wie die Entstehung der besten Rezepte: Jemand hat irgendwas zusammengeschmissen, es wurde heiß, und am Ende kam was Geniales raus. Die ältesten Glasfunde sind tausende Jahre alt. Schon im alten Ägypten und in Mesopotamien haben Menschen herausgefunden, dass man aus Sand, Hitze und ein paar Zusätzen etwas herstellen kann, das durchsichtig ist und glänzt. Wie genau der allererste Moment ablief, weiß niemand so richtig (und ich werde hier jetzt keine dramatische Szene erfinden, in der ein Phönizier am Strand mal eben per Zufall das Glas erfindet, auch wenn das eine nette Geschichte wäre, die tatsächlich so ähnlich überliefert ist)."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Es gibt tatsächlich natürlich entstandenes Glas. Wenn ein Blitz in Sand einschlägt, entstehen sogenannte Fulgurite. Bizarre, röhrenförmige Glasgebilde. Die Natur macht also auch Glas. Sie braucht dafür nur ein paar Millionen Volt und eine Sekunde.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "paragraph",
        text: "Was wir wissen: Lange Zeit war Glas ein Luxusgut. Kleine Perlen, Schmuck, kostbare Gefäße. Fenster aus Glas? Vergiss es. Die meisten Menschen guckten jahrhundertelang durch Holzläden oder geöltes Pergament nach draußen. Stell dir das mal vor: Du willst wissen, ob es regnet, und musst dafür ein Stück totes Schaf zur Seite schieben. Romantisch."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Die Römer waren unter den Ersten, die Fensterglas herstellten, allerdings war es trüb, dick und wellig. Trotzdem: Licht rein, Wind draußen. Revolutionär.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "paragraph",
        text: "Dann kam Murano. Die kleine Insel bei Venedig wurde ab dem 13. Jahrhundert zum Glasmacher-Mekka. Die Handwerker dort waren so gut (und ihre Geheimnisse so wertvoll), dass sie die Insel quasi nicht verlassen durften. Wer sein Wissen weitergab, riskierte, sagen wir mal: ernsthafte Konsequenzen. Glas war damals so geheim wie heute das Coca-Cola-Rezept. Nur mit mehr Todesdrohungen, wenn man etwas ausplauderte. Murano-Glasmacher genossen in Venedig einen Sonderstatus, ihre Töchter durften sogar in den Adel einheiraten."
      },

      /* ── 3. Mini-Geschichte: Kathedrale ── */
      {
        type: "heading",
        text: "Mini-Geschichte: Die Kathedrale, die aus Licht gebaut wurde"
      },
      {
        type: "paragraph",
        text: "Im Mittelalter passierte etwas Unerhörtes. Baumeister begannen, riesige Fenster in Kirchenwände zu setzen. Nicht kleine Gucklöcher, nein: gewaltige, farbige Glasflächen, die ganze Wände ersetzten. Die Gotik war geboren, und mit ihr eine Architektur, die im Grunde sagte: \u201EW\u00E4nde? \u00DCberbewertet. Wir nehmen Licht.\u201C"
      },
      {
        type: "paragraph",
        text: "Wer schon mal in einer gotischen Kathedrale stand, wenn die Sonne durch die bunten Fenster f\u00E4llt, wei\u00DF, was ich meine. Da steht man als erwachsener Mensch mit offenem Mund und denkt: \u201EWow.\u201C Nicht mehr, nicht weniger. Einfach wow. Und das alles, weil jemand vor Hunderten von Jahren dachte: \u201EWas, wenn wir die Wand weglassen und stattdessen buntes Glas reinsetzen?\u201C"
      },
      {
        type: "paragraph",
        text: "Diese Fenster erz\u00E4hlten Geschichten f\u00FCr Menschen, die nicht lesen konnten. Sie waren Netflix, Bibliothek und Kunstgalerie in einem. Und sie bestanden aus nichts anderem als gef\u00E4rbtem Sand und einer ziemlich guten Idee."
      },

      /* ── 4. Zwei Gesichter ── */
      {
        type: "heading",
        text: "Die zwei Gesichter des Glases: Schutzschild und Tor zur Welt"
      },
      {
        type: "paragraph",
        text: "Was Glas so besonders macht, ist sein Doppelleben. Es ist gleichzeitig Barriere und Einladung. Es h\u00E4lt drau\u00DFen, was drau\u00DFen bleiben soll (Regen, K\u00E4lte, die Nachbarskatze), und l\u00E4sst trotzdem alles durch, was wir brauchen: Licht, W\u00E4rme, den Blick auf die Welt."
      },
      {
        type: "paragraph",
        text: "Kein anderes Material schafft diesen Spagat. Eine Mauer sch\u00FCtzt, aber sie sperrt auch ein. Ein Vorhang l\u00E4sst Luft durch, aber kein Licht. Glas sagt: \u201EDu kannst beides haben.\u201C Und das ist, wenn man mal dr\u00FCber nachdenkt, ziemlich gro\u00DFz\u00FCgig f\u00FCr geschmolzenen Sand."
      },

      /* ── 5. Warum Glas unser Leben bereichert ── */
      {
        type: "heading",
        text: "Warum Glas unser Leben reicher macht, als wir denken"
      },
      {
        type: "paragraph",
        text: "Jetzt wird's ernst. Also, so ernst wie ein Kapitel \u00FCber Glas werden kann. Lass uns mal durchgehen, was Glas eigentlich alles f\u00FCr uns tut und was passieren w\u00FCrde, wenn es pl\u00F6tzlich verschwinden w\u00FCrde."
      },
      {
        type: "paragraph",
        text: "**Fenster.** Ohne Glas w\u00E4ren unsere Wohnungen entweder dunkel wie H\u00F6hlen oder zugig wie ein Scheunenfest im November. Fenster aus Glas sind der Grund, warum wir gleichzeitig Licht, W\u00E4rme und den Anblick von Regen genie\u00DFen k\u00F6nnen, ohne nass zu werden. Das ist, wenn man dr\u00FCber nachdenkt, komplett verr\u00FCckt. Du sitzt in deinem warmen Wohnzimmer, trinkst Tee und guckst zu, wie drau\u00DFen die Welt untergeht. Dank eines St\u00FCcks geschmolzenen Sands."
      },
      {
        type: "paragraph",
        text: "**Brillen.** Ungef\u00E4hr jeder zweite in Europa braucht eine Sehhilfe. Ohne Glas (oder seine modernen Verwandten) w\u00FCrde die H\u00E4lfte der Bev\u00F6lkerung durch die Gegend stolpern wie neugeborene Welpen. Keine B\u00FCcher lesen, keine Stra\u00DFenschilder erkennen, kein Netflix. Okay, Netflix g\u00E4be es auch nicht, weil, richtig, Bildschirme sind auch aus Glas."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Die ersten Lesesteine (Vorl\u00E4ufer der Brille) tauchten vermutlich im 13. Jahrhundert in Italien auf. M\u00F6nche legten sich geschliffene Halbkugeln aus Glas auf ihre Texte, um besser lesen zu k\u00F6nnen. Die Lesebrille ist also im Grunde eine Erfindung von Leuten, die einfach unbedingt weiterlesen wollten. Sympathisch.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "paragraph",
        text: "**Spiegel.** Bevor es Spiegel gab, wussten Menschen nur ungef\u00E4hr, wie sie aussahen. Wasseroberfl\u00E4chen, poliertes Metall, die ehrliche Meinung der Schwiegermutter. Aber ein richtiger Spiegel? Der kam erst mit Glas. Und pl\u00F6tzlich konnten wir uns selbst sehen. Wirklich sehen. Das klingt banal, aber denk mal dr\u00FCber nach: Der Spiegel hat das Selbstbild der Menschheit ver\u00E4ndert. Portr\u00E4tmalerei, Mode, Kosmetik, alles Kinder des Spiegels. Glas hat uns nicht nur die Welt gezeigt. Es hat uns uns selbst gezeigt. Ob wir das immer sehen wollten, steht auf einem anderen Blatt. Ohne Spiegel h\u00E4tten wir keine Ahnung, wie wir aussehen. Klingt erstmal befreiend, w\u00E4re aber im Alltag ein Desaster. Spinat zwischen den Z\u00E4hnen? Merkst du nicht. Frisur wie nach einem Kampf mit einem Orkan der Stufe 12? F\u00E4llt dir gar nicht auf. Wir w\u00FCrden alle rumlaufen wie Figuren aus einem Tim-Burton-Film und es nicht mal wissen."
      },
      {
        type: "paragraph",
        text: "**Medizin.** Mikroskope, Reagenzgl\u00E4ser, Petrischalen, Laborflaschen: die gesamte moderne Medizin steht auf einem Fundament aus Glas. Ohne Glas h\u00E4tten wir Bakterien nie gesehen. Wir w\u00FC\u00DFten nicht, warum Wunden sich entz\u00FCnden. Impfstoffe werden in Glasfl\u00E4schchen aufbewahrt. Glas hat, ganz ohne \u00DCbertreibung, Millionen von Leben gerettet."
      },
      {
        type: "paragraph",
        text: "**Glasfaser.** Das Internet, das dir dieses Kapitel \u00FCber Glas soeben mal per Mausklick vorbeigebracht hat, rast zu einem gro\u00DFen Teil durch hauchdünne Glasfasern um die Welt. Licht schie\u00DFt durch Glas, und zack: du kannst deiner Freundin in Australien in Echtzeit ein Meme schicken und zwei Sekunden danach ein lustiges Katzenvideo aus Canada anschauen. Glas verbindet die Welt. Buchst\u00E4blich."
      },
      {
        type: "pullquote",
        text: "**Fun Fact:** Eine einzelne Glasfaser ist d\u00FCnner als ein menschliches Haar, kann aber Datenmengen transportieren, f\u00FCr die du fr\u00FCher einen Lastwagen voller Festplatten gebraucht h\u00E4ttest.",
        attribution: "You won the Time Lottery"
      },

      /* ── 6. Mini-Geschichte: Galileo ── */
      {
        type: "heading",
        text: "Mini-Geschichte: Der Mann, der durch Glas die Sterne sah"
      },
      {
        type: "paragraph",
        text: "Irgendwann im fr\u00FChen 17. Jahrhundert (die genauen Umst\u00E4nde sind, wie so oft, ein bisschen neblig) richtete ein gewisser Galileo Galilei ein Fernrohr gen Himmel. Dieses Fernrohr bestand im Wesentlichen aus einem Rohr und zwei geschliffenen Glaslinsen. Nicht viel gr\u00F6\u00DFer als eine K\u00FCchenrolle. Und was er sah, stellte das gesamte Weltbild auf den Kopf: Krater auf dem Mond. Monde um Jupiter. Die Milchstra\u00DFe als Ansammlung unz\u00E4hliger Sterne. Zwei St\u00FCcke Glas in einem Rohr. Das war alles, was n\u00F6tig war, um die Menschheit aus dem Zentrum des Universums zu schubsen. Wenn das kein Argument daf\u00FCr ist, Glas ein bisschen mehr Respekt zu zollen!"
      },

      /* ── 7. Mini-Alltags-Test: Glas-Safari ── */
      {
        type: "heading",
        text: "Mini-Alltags-Test: Die Glas-Safari"
      },
      {
        type: "paragraph",
        text: "Nimm dir heute ein paar Minuten und z\u00E4hl mal alle Gegenst\u00E4nde in deiner Wohnung, die Glas enthalten. Fenster, Tassen, Displays, Lampen, Ofent\u00FCr, Duschkabine, Parfumflaschen, Bilderrahmen ... Schreib die Zahl auf. Ich wette, du kommst auf \u00FCber 30. Und dann \u00FCberleg mal kurz, wie dein Tag ohne auch nur eines davon aussehen w\u00FCrde. Spoiler: nicht gut."
      },

      /* ── 8. Reflexion ── */
      {
        type: "heading",
        text: "Kleine Reflexion: Das Unsichtbare sehen und Zerb\u00FCchlichkeit als Superkraft"
      },
      {
        type: "paragraph",
        text: "Das Verr\u00FCckte an Glas ist: Je besser es ist, desto weniger f\u00E4llt es auf. Ein perfektes Fenster ist eines, durch das du hindurchschaust, ohne es zu bemerken. Ein gutes Brillenglas ist eines, das du vergisst, weil du einfach nur siehst. Glas will nicht gesehen werden. Es will, dass du die Welt dahinter siehst."
      },
      {
        type: "paragraph",
        text: "Und wenn das nicht die sch\u00F6nste Metapher f\u00FCr all die Dinge ist, die unser Leben leichter machen, ohne dass wir es merken, dann wei\u00DF ich es auch nicht. Die besten Dinge im Leben sind oft die, die so selbstverst\u00E4ndlich funktionieren, dass wir sie \u00FCbersehen. Der Wasserhahn, der einfach l\u00E4uft. Die Stra\u00DFe, die einfach da ist. Die Freundin, die einfach zuh\u00F6rt. Glas erinnert uns daran, dass das Unsichtbare manchmal das Wertvollste ist. Nicht das, was gl\u00E4nzt und schreit und sich in den Vordergrund dr\u00E4ngt. Sondern das, was still seinen Job macht und uns dabei hilft, klarer zu sehen."
      },
      {
        type: "paragraph",
        text: "Und dann kommt auch noch hinzu, dass Glas zerb\u00FCchlich ist. Was sich im ersten Moment ziemlich entt\u00E4uschend anh\u00F6rt und sich als gro\u00DFer Nachteil anf\u00FChlt, macht in Wirklichkeit das Glas erst wirklich wertvoll."
      },
      {
        type: "paragraph",
        text: "Denk mal dr\u00FCber nach: Gerade *weil* Glas zerbrechen kann, gehen wir vorsichtig damit um. Wir halten das Weinglas behutsam. Wir tragen die Glasvase mit beiden H\u00E4nden. Wir sagen Kindern: \u201EVorsicht, das ist aus Glas!\u201C Glas erzieht uns zur Achtsamkeit, ohne ein Wort zu sagen."
      },
      {
        type: "paragraph",
        text: "Und ist das nicht eine ziemlich gute Metapher f\u00FCr alles, was uns wirklich wichtig ist? Beziehungen sind zerb\u00FCchlich. Vertrauen ist zerb\u00FCchlich. Gesundheit ist zerb\u00FCchlich. Und genau deshalb sind sie so wertvoll. W\u00E4re alles unkaputtbar, w\u00FCrden wir mit allem umgehen wie mit einem IKEA-Plastikbecher: achtlos, beil\u00E4ufig, egal."
      },
      {
        type: "paragraph",
        text: "Glas erinnert uns jeden Tag daran, dass die sch\u00F6nsten Dinge im Leben Pflege brauchen. Dass \u201Ezerb\u00FCchlich\u201C nicht \u201Eschwach\u201C bedeutet. Dass etwas, das zerbrechen kann, deshalb nicht weniger wert ist, sondern mehr. (Und ja, das war jetzt fast ein bisschen poetisch, f\u00FCr ein Kapitel \u00FCber geschmolzenen Sand. Ich wei\u00DF.)"
      },

      /* ── 9. Mini-Alltags-Test: Scherben-Übung ── */
      {
        type: "heading",
        text: "Mini-Alltags-Test: Die Scherben-\u00DCbung"
      },
      {
        type: "paragraph",
        text: "N\u00E4chstes Mal, wenn dir etwas aus Glas zerbricht (und es wird passieren, das ist so sicher wie das Amen in der Kirche und die Versp\u00E4tung der Deutschen Bahn), halte kurz inne. Bevor du fluchst, bevor du den Besen holst, nimm dir drei Sekunden. Schau dir die Scherben an. Und dann frag dich: Was in meinem Leben behandle ich gerade so, als w\u00E4re es unzerbrechlich, obwohl es das nicht ist? Eine Freundschaft, die ich vernachl\u00E4ssige? Meine Gesundheit, die ich ignoriere? Zeit mit Menschen, die mir wichtig sind? Drei Sekunden. Mehr braucht es nicht. Dann darfst du fluchen und den Besen holen."
      },

      /* ── 10. Nachdenk-Fragen ── */
      {
        type: "heading",
        text: "6 Fragen zum Nachdenken"
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Welcher Gegenstand aus Glas benutzt du jeden Tag, ohne auch nur eine Sekunde dar\u00FCber nachzudenken?",
          "Gibt es etwas in deinem Leben, das, wie Glas, im Hintergrund funktioniert und das du viel zu selten wertsch\u00E4tzt?",
          "Wann ist dir zuletzt etwas Wertvolles zerbrochen, im w\u00F6rtlichen oder \u00FCbertragenen Sinne? Und was hast du daraus mitgenommen?",
          "Hast du schon mal erlebt, dass etwas Selbstverst\u00E4ndliches pl\u00F6tzlich nicht mehr da war, und dir erst dann klar wurde, wie wichtig es ist?",
          "Wer in deinem Leben ist wie Glas: unauff\u00E4llig, aber unverzichtbar?",
          "In welchen Bereichen deines Lebens bist du durchsichtig und ehrlich, und wo versteckst du dich hinter einer Fassade?"
        ]
      },

      /* ── 11. Audio Player (Podcast) ── */
      {
        type: "audio",
        src: "audio/2 - Glas Podcast.mp3",
        image: "images/chapters/Glas.jpg",
        label: "Kapitel 2 - Podcast Folge - Das unsichtbare Wunder"
      }
    ],
    nextChapterId: "supermarkt"
  },

  /* ── KAPITEL 3: Der Supermarkt ───────────────────────────── */
  {
    id: "supermarkt",
    status: "published",
    order: 3,
    title: "Das Lagerhaus der Wunder",
    subtitle: "Jeder Gang ist ein Triumph der Menschheit, und wir schieben unseren Einkaufswagen teilnahmslos hindurch.",
    topic: "Alltag",
    cardImage: "images/chapters/Supermarkt.jpg",
    heroImage: "images/hero/Supermarkt.png",
    accentColor: "#C4904A",         // Warmes Goldbraun passt zum Thema Lebensmittel
    publishDate: "2026-03-29",
    body: [
      {
        type: "intro",
        text: "Stell dir vor, du wachst morgen früh auf und es gibt keinen Supermarkt mehr. Keine Regale, keine Kühlabteilung, keine frischen Brötchen. Was würde es bedeuten, dich selbst zu ernähren? Für die meisten Menschen wäre es eine Katastrophe. Und genau deshalb ist der Supermarkt um die Ecke eines der unterschätztesten Wunder unserer Zeit."
      },
      {
        type: "heading",
        text: "Eine globale Lieferkette für dein Mittagessen"
      },
      {
        type: "paragraph",
        text: "Ein durchschnittlicher deutscher Supermarkt führt zwischen 15.000 und 30.000 verschiedene Artikel. Hinter jedem dieser Produkte steckt eine Lieferkette, die mehrere Kontinente umspannt: Der Kaffee aus Äthiopien, die Avocado aus Peru, der Lachs aus Norwegen, das Olivenöl aus Griechenland. Alles landet innerhalb weniger Tage, manchmal Stunden, frisch und erschwinglich in deinem Einkaufskorb."
      },
      {
        type: "pullquote",
        text: "Für den größten Teil der Menschheitsgeschichte war Hunger keine Nachricht, er war der Alltag. Wir sind die erste Generation, die ihn für selbstverständlich hält, ihn besiegt zu haben.",
        attribution: "You won the Time Lottery"
      },
      {
        type: "heading",
        text: "Die Kühlung, die die Welt veränderte"
      },
      {
        type: "paragraph",
        text: "Ohne Kühlkette wäre unser heutiger Supermarkt unmöglich. Die Erfindung der mechanischen Kühlung im 19. Jahrhundert und ihr weltweiter Ausbau im 20. Jahrhundert hat mehr Menschenleben gerettet als jede Medizin. Lebensmittelvergiftungen, die früher ganze Städte betrafen, sind heute für die meisten von uns eine abstrakte Gefahr. Die Kühlschranktür, an der du täglich vorbeigehst, ist eine der wichtigsten Errungenschaften der Menschheit."
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Im Mittelalter gaben Menschen bis zu 80 % ihres Einkommens für Essen aus, heute sind es im Schnitt 12 %",
          "Frische Erdbeeren im Januar? Vor 50 Jahren undenkbar, heute normal",
          "Ein Supermarktmitarbeiter koordiniert täglich Lieferungen aus bis zu 40 Ländern",
          "Die Kühlkette eines Supermarkts verbraucht etwa so viel Strom wie 200 Einfamilienhäuser und hält damit Tonnen von Lebensmitteln frisch"
        ]
      },
      {
        type: "closing",
        text: "Das nächste Mal, wenn du frustriert vor dem Regal stehst, weil die Lieblingssorte ausverkauft ist: Halte kurz inne. Du stehst inmitten des größten Logistikwunders der Geschichte. Tausende von Menschen auf der ganzen Welt haben dafür gesorgt, dass du heute Abend gut essen kannst. Guten Appetit."
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
    subtitle: "Wie ein Gerät in der Wohnzimmerecke die Art, wie wir die Welt sehen, für immer neu geschrieben hat.",
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
    subtitle: "Impfungen, Antibiotika, Röntgen: Warum wir einer unsichtbaren Revolution täglich das Leben verdanken.",
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
