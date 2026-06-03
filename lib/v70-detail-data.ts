export type V70DetailKind = "character" | "realm" | "location" | "artifact" | "age";

export type V69RelatedEntry = {
  title: string;
  type: string;
  href: string;
  image: string;
};

export type V70DetailRecord = {
  slug: string;
  kind: V70DetailKind;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  heroImage?: string;
  accent: string;
  era: string;
  realm: string;
  status: string;
  rarity: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  metrics: { label: string; value: string; note: string }[];
  sections: { title: string; body: string }[];
  facts: { label: string; value: string }[];
  timeline: { year: string; title: string; body: string }[];
  related: V69RelatedEntry[];
};

const asset = (name: string) => `/v70/assets/${name}`;

export const v70Records: V70DetailRecord[] = [
  {
    slug: "galadriel",
    kind: "character",
    eyebrow: "Character Dossier",
    title: "Galadriel",
    subtitle: "Lady of Lórien and bearer of Nenya",
    description:
      "One of the greatest of the Eldar remaining in Middle-earth, Galadriel preserves a realm of memory, restraint, and ancient power. Her archive entry connects the First Age, the fall of kingdoms, the protection of Lórien, and the final fading of the Elves.",
    image: asset("detail-galadriel-portrait.webp"),
    heroImage: asset("realm-lorien.webp"),
    accent: "Noldor",
    era: "First Age — Third Age",
    realm: "Lórien",
    status: "Keeper of Nenya",
    rarity: "Legendary",
    primaryActionLabel: "Search related lore",
    primaryActionHref: "/catalog?query=Galadriel",
    metrics: [
      { label: "Lineage", value: "House of Finarfin", note: "Eldarin nobility" },
      { label: "Ring", value: "Nenya", note: "The Ring of Adamant" },
      { label: "Archive Links", value: "128", note: "Characters, realms, artifacts" },
      { label: "Significance", value: "Legendary", note: "Canon-critical record" }
    ],
    sections: [
      {
        title: "Archive Overview",
        body:
          "Galadriel's dossier is structured around power restrained rather than power displayed. The premium detail view treats her as a central archive node: lineage, realm, ring, and departure are all surfaced without overwhelming the page."
      },
      {
        title: "Design Intent",
        body:
          "The page uses a portrait-led composition, dark glass panels, delicate gold rules, and a museum-like facts rail so the entry feels like a preserved royal archive rather than a normal profile page."
      },
      {
        title: "Connected Lore",
        body:
          "Related entries prioritize Lórien, Nenya, the Phial, Celeborn, the Fellowship, and the final voyage west — the most useful continuation paths for exploration."
      }
    ],
    facts: [
      { label: "Race", value: "Elf" },
      { label: "House", value: "Finarfin" },
      { label: "Realm", value: "Lórien" },
      { label: "Artifact", value: "Nenya" },
      { label: "Known as", value: "Lady of Light" },
      { label: "Page Type", value: "Character" }
    ],
    timeline: [
      { year: "First Age", title: "Exile and memory", body: "Her earliest record binds the detail page to the deep-time structure of the archive." },
      { year: "Second Age", title: "The preservation of Elven power", body: "Connections to the Rings of Power are surfaced through artifact and age links." },
      { year: "Third Age", title: "Lórien and the Fellowship", body: "The core visual entry focuses on the Golden Wood and the test of the Ring-bearer." },
      { year: "End of Third Age", title: "Departure west", body: "The closing state links to Valinor, endings, and the fading of the Elves." }
    ],
    related: [
      { title: "Lórien", type: "Location", href: "/locations/lorien", image: asset("realm-lorien.webp") },
      { title: "The One Ring", type: "Artifact", href: "/artifacts/the-one-ring", image: asset("artifact-ring.webp") },
      { title: "Phial of Galadriel", type: "Artifact", href: "/artifacts/phial-of-galadriel", image: asset("artifact-phial.webp") }
    ]
  },
  {
    slug: "gandalf",
    kind: "character",
    eyebrow: "Character Dossier",
    title: "Gandalf the Grey",
    subtitle: "Istari, bearer of Narya, guide of the Free Peoples",
    description:
      "A wandering counselor whose record spans kingdoms, rings, battles, and quiet interventions. This detail page treats Gandalf as a living index for the Third Age.",
    image: asset("char-gandalf.webp"),
    heroImage: asset("archive-hall-bg.webp"),
    accent: "Istari",
    era: "Third Age",
    realm: "Middle-earth",
    status: "Returned as the White",
    rarity: "Legendary",
    primaryActionLabel: "Trace the Istari",
    primaryActionHref: "/catalog?query=Istari",
    metrics: [
      { label: "Order", value: "Istari", note: "Wizards" },
      { label: "Ring", value: "Narya", note: "The Ring of Fire" },
      { label: "Archive Links", value: "146", note: "Battles, journeys, councils" },
      { label: "Significance", value: "Legendary", note: "Third Age axis" }
    ],
    sections: [
      { title: "Archive Overview", body: "Gandalf's page balances mythic scale with travel-log clarity: councils, journeys, battles, and companions are all reachable from a single dossier." },
      { title: "Interface Role", body: "The layout uses a narrower portrait and timeline-first sections because Gandalf is best understood as a sequence of interventions across the map." },
      { title: "Connected Lore", body: "Moria, the Fellowship, Narya, Isengard, Minas Tirith, and the White Council should be exposed as related nodes." }
    ],
    facts: [
      { label: "Order", value: "Istari" },
      { label: "Also known as", value: "Mithrandir" },
      { label: "Ring", value: "Narya" },
      { label: "Return", value: "Gandalf the White" },
      { label: "Page Type", value: "Character" }
    ],
    timeline: [
      { year: "Third Age 1000", title: "Arrival", body: "One of the Istari arrives to contest Sauron indirectly." },
      { year: "2941", title: "The Quest of Erebor", body: "A key archive branch connecting Bilbo, Thorin, and the Ring." },
      { year: "3019", title: "War of the Ring", body: "The dossier converges with Minas Tirith and the fall of Sauron." }
    ],
    related: [
      { title: "The One Ring", type: "Artifact", href: "/artifacts/the-one-ring", image: asset("artifact-ring.webp") },
      { title: "Gondor", type: "Realm", href: "/realms/gondor", image: asset("realm-gondor.webp") },
      { title: "Third Age", type: "Age", href: "/ages/third-age", image: asset("age-third.webp") }
    ]
  },
  {
    slug: "aragorn",
    kind: "character",
    eyebrow: "Character Dossier",
    title: "Aragorn",
    subtitle: "Heir of Isildur, King Elessar",
    description: "A ranger-king dossier built around hidden lineage, the reforging of hope, and the restoration of the realm of Men.",
    image: asset("char-aragorn.webp"),
    heroImage: asset("realm-gondor-wide.webp"),
    accent: "Dúnedain",
    era: "Third Age",
    realm: "Gondor / Arnor",
    status: "King Elessar",
    rarity: "Legendary",
    primaryActionLabel: "Open royal lineage",
    primaryActionHref: "/catalog?query=Aragorn",
    metrics: [
      { label: "Line", value: "Isildur", note: "Royal descent" },
      { label: "Weapon", value: "Andúril", note: "Flame of the West" },
      { label: "Archive Links", value: "104", note: "Realms and battles" },
      { label: "Significance", value: "Legendary", note: "Restoration arc" }
    ],
    sections: [
      { title: "Archive Overview", body: "Aragorn's record is a bridge between wandering anonymity and royal restoration." },
      { title: "Design Intent", body: "The page combines rugged portraiture with royal metrics to make the transformation from ranger to king visible." }
    ],
    facts: [
      { label: "People", value: "Dúnedain" },
      { label: "Title", value: "King Elessar" },
      { label: "Weapon", value: "Andúril" },
      { label: "Page Type", value: "Character" }
    ],
    timeline: [
      { year: "Third Age", title: "Ranger of the North", body: "The hidden heir moves through the wild before claiming his lineage." },
      { year: "3019", title: "Restoration", body: "The kingship of Gondor is restored after the War of the Ring." }
    ],
    related: [
      { title: "Gondor", type: "Realm", href: "/realms/gondor", image: asset("realm-gondor.webp") },
      { title: "Andúril", type: "Artifact", href: "/artifacts/anduril", image: asset("artifact-anduril.webp") },
      { title: "Third Age", type: "Age", href: "/ages/third-age", image: asset("age-third.webp") }
    ]
  },
  {
    slug: "frodo-baggins",
    kind: "character",
    eyebrow: "Character Dossier",
    title: "Frodo Baggins",
    subtitle: "Ring-bearer of the Shire",
    description: "A quiet record of endurance and burden, linking the smallest domestic geography to the fate of the whole archive.",
    image: asset("char-frodo.webp"),
    heroImage: asset("map-middle-earth.webp"),
    accent: "Hobbit",
    era: "Third Age",
    realm: "The Shire",
    status: "Ring-bearer",
    rarity: "Legendary",
    primaryActionLabel: "Trace the quest",
    primaryActionHref: "/catalog?query=Frodo",
    metrics: [
      { label: "People", value: "Hobbit", note: "The Shire" },
      { label: "Burden", value: "One Ring", note: "Ring-bearer" },
      { label: "Archive Links", value: "91", note: "Quest path" },
      { label: "Significance", value: "Legendary", note: "Central quest" }
    ],
    sections: [
      { title: "Archive Overview", body: "Frodo's page is intentionally restrained: the drama comes from the contrast between smallness and cosmic consequence." },
      { title: "Connected Lore", body: "The One Ring, Samwise, Mordor, Rivendell, and the Grey Havens should remain one click away." }
    ],
    facts: [
      { label: "People", value: "Hobbit" },
      { label: "Home", value: "The Shire" },
      { label: "Object", value: "The One Ring" },
      { label: "Page Type", value: "Character" }
    ],
    timeline: [
      { year: "3018", title: "Departure", body: "The Ring leaves the Shire and the quest begins." },
      { year: "3019", title: "Mount Doom", body: "The archive's central artifact arc reaches its end." }
    ],
    related: [
      { title: "The One Ring", type: "Artifact", href: "/artifacts/the-one-ring", image: asset("artifact-ring.webp") },
      { title: "Rivendell", type: "Realm", href: "/realms/rivendell", image: asset("realm-rivendell.webp") },
      { title: "Mordor", type: "Realm", href: "/realms/mordor", image: asset("realm-mordor.webp") }
    ]
  },
  {
    slug: "gondor",
    kind: "realm",
    eyebrow: "Realm Dossier",
    title: "Gondor",
    subtitle: "The Realm of Men",
    description:
      "A sovereign realm shaped by vigilance, lineage, and endurance. The detail page frames Gondor as an archive of citadels, stewards, kings, and last defenses against the Shadow.",
    image: asset("realm-gondor-wide.webp"),
    heroImage: asset("detail-gondor-hero.webp"),
    accent: "Realm of Men",
    era: "Second Age — Fourth Age",
    realm: "South-kingdom",
    status: "Restored Kingdom",
    rarity: "Canonical Core",
    primaryActionLabel: "Explore Gondor records",
    primaryActionHref: "/catalog?query=Gondor",
    metrics: [
      { label: "Capital", value: "Minas Tirith", note: "City of the Stewards" },
      { label: "People", value: "Men", note: "Dúnedain lineage" },
      { label: "Archive Links", value: "172", note: "Cities, kings, battles" },
      { label: "Significance", value: "Core Realm", note: "Political center" }
    ],
    sections: [
      { title: "Archive Overview", body: "Gondor's page needs breadth: geography, lineages, cities, wars, and royal restoration are all arranged as a formal realm dossier." },
      { title: "Visual Logic", body: "The layout uses a wide cinematic landscape and stat-led panels to make the realm feel monumental rather than like a simple location page." }
    ],
    facts: [
      { label: "Capital", value: "Minas Tirith" },
      { label: "People", value: "Men" },
      { label: "Line", value: "Dúnedain" },
      { label: "Page Type", value: "Realm" }
    ],
    timeline: [
      { year: "Second Age", title: "Foundation", body: "The South-kingdom enters the archive as part of Númenórean legacy." },
      { year: "Third Age", title: "Stewardship", body: "Gondor endures without a king under the rule of the Stewards." },
      { year: "Fourth Age", title: "Restoration", body: "The realm is renewed under King Elessar." }
    ],
    related: [
      { title: "Aragorn", type: "Character", href: "/characters/aragorn", image: asset("char-aragorn.webp") },
      { title: "Minas Tirith", type: "Location", href: "/locations/minas-tirith", image: asset("map-minas-tirith.webp") },
      { title: "Andúril", type: "Artifact", href: "/artifacts/anduril", image: asset("artifact-anduril.webp") }
    ]
  },
  {
    slug: "lorien",
    kind: "location",
    eyebrow: "Location Dossier",
    title: "Lórien",
    subtitle: "The Golden Wood",
    description:
      "A woodland realm preserved as if outside the ordinary current of time. Its detail page emphasizes gold-filtered memory, Elven protection, and the presence of Galadriel.",
    image: asset("realm-lorien.webp"),
    heroImage: asset("realm-lorien.webp"),
    accent: "Golden Wood",
    era: "Second Age — Third Age",
    realm: "Wilderland",
    status: "Fading Elven refuge",
    rarity: "Legendary Location",
    primaryActionLabel: "Open Lórien archive",
    primaryActionHref: "/catalog?query=Lorien",
    metrics: [
      { label: "Region", value: "Wilderland", note: "East of the Misty Mountains" },
      { label: "Ruler", value: "Galadriel", note: "With Celeborn" },
      { label: "Archive Links", value: "84", note: "Characters and artifacts" },
      { label: "Tone", value: "Timeless", note: "Preserved memory" }
    ],
    sections: [
      { title: "Archive Overview", body: "The Lórien dossier is designed as an atmospheric location entry: the imagery and spacing should make the user feel they are entering a preserved grove." },
      { title: "Connected Lore", body: "Galadriel, Nenya, the Fellowship, the Mirror, and the departure of the Elves become the main related paths." }
    ],
    facts: [
      { label: "Type", value: "Location" },
      { label: "Known as", value: "The Golden Wood" },
      { label: "Region", value: "Wilderland" },
      { label: "Associated", value: "Galadriel" }
    ],
    timeline: [
      { year: "Second Age", title: "Elven refuge", body: "The land grows as a preserved enclave of Elven memory." },
      { year: "Third Age", title: "The Fellowship arrives", body: "The location becomes one of the quest's most luminous pauses." }
    ],
    related: [
      { title: "Galadriel", type: "Character", href: "/characters/galadriel", image: asset("char-galadriel.webp") },
      { title: "Phial of Galadriel", type: "Artifact", href: "/artifacts/phial-of-galadriel", image: asset("artifact-phial.webp") },
      { title: "Third Age", type: "Age", href: "/ages/third-age", image: asset("age-third.webp") }
    ]
  },
  {
    slug: "minas-tirith",
    kind: "location",
    eyebrow: "Location Dossier",
    title: "Minas Tirith",
    subtitle: "City of the Stewards",
    description: "The fortified heart of Gondor, presented as a civic and military archive node with links to kingship, stewardship, siege, and renewal.",
    image: asset("map-minas-tirith.webp"),
    heroImage: asset("realm-gondor-wide.webp"),
    accent: "White City",
    era: "Third Age",
    realm: "Gondor",
    status: "Restored capital",
    rarity: "Major Location",
    primaryActionLabel: "Explore city records",
    primaryActionHref: "/catalog?query=Minas%20Tirith",
    metrics: [
      { label: "Realm", value: "Gondor", note: "South-kingdom" },
      { label: "Role", value: "Capital", note: "Stewardship and crown" },
      { label: "Archive Links", value: "73", note: "Battles and rulers" },
      { label: "Type", value: "City", note: "Fortified archive" }
    ],
    sections: [
      { title: "Archive Overview", body: "Minas Tirith is treated as an architectural record: seven levels, civic memory, siege history, and royal restoration." },
      { title: "Connected Lore", body: "Denethor, Aragorn, Gandalf, Pelennor Fields, and the White Tree should be directly reachable." }
    ],
    facts: [
      { label: "Type", value: "City" },
      { label: "Realm", value: "Gondor" },
      { label: "Known as", value: "The White City" },
      { label: "Page Type", value: "Location" }
    ],
    timeline: [
      { year: "Third Age", title: "City of the Stewards", body: "The city holds the realm in the absence of the king." },
      { year: "War of the Ring", title: "Siege", body: "The defensive record becomes one of the archive's major battle nodes." }
    ],
    related: [
      { title: "Gondor", type: "Realm", href: "/realms/gondor", image: asset("realm-gondor.webp") },
      { title: "Gandalf", type: "Character", href: "/characters/gandalf", image: asset("char-gandalf.webp") },
      { title: "Aragorn", type: "Character", href: "/characters/aragorn", image: asset("char-aragorn.webp") }
    ]
  },
  {
    slug: "the-one-ring",
    kind: "artifact",
    eyebrow: "Artifact Dossier",
    title: "The One Ring",
    subtitle: "Artifact of Power",
    description:
      "The central artifact record of the Third Age, designed as a dark luxury object study: dangerous, magnetic, and archive-defining.",
    image: asset("detail-ring-hero.webp"),
    heroImage: asset("artifact-ring.webp"),
    accent: "Ruling Ring",
    era: "Second Age — Third Age",
    realm: "Mordor",
    status: "Destroyed",
    rarity: "Mythic Artifact",
    primaryActionLabel: "Trace ring-bearers",
    primaryActionHref: "/catalog?query=One%20Ring",
    metrics: [
      { label: "Forged", value: "Orodruin", note: "Mount Doom" },
      { label: "Maker", value: "Sauron", note: "Dark Lord" },
      { label: "Archive Links", value: "211", note: "Characters and battles" },
      { label: "Threat", value: "Absolute", note: "Will and domination" }
    ],
    sections: [
      { title: "Archive Overview", body: "The One Ring page should feel like a contained artifact chamber. The design avoids clutter and puts the object, provenance, and danger hierarchy first." },
      { title: "Object Study", body: "The page uses large dark negative space, a gold-lit artifact image, and restrained inscriptions to suggest power without turning the interface into noisy fantasy decoration." },
      { title: "Connected Lore", body: "Sauron, Isildur, Gollum, Bilbo, Frodo, Mordor, and Mount Doom become the core related path network." }
    ],
    facts: [
      { label: "Type", value: "Ring" },
      { label: "Maker", value: "Sauron" },
      { label: "Place", value: "Orodruin" },
      { label: "Fate", value: "Destroyed" },
      { label: "Page Type", value: "Artifact" }
    ],
    timeline: [
      { year: "Second Age", title: "Forging", body: "The artifact is made in secret to dominate the other Rings of Power." },
      { year: "Third Age", title: "Rediscovery", body: "The Ring passes through small hands into the center of history." },
      { year: "3019", title: "Destruction", body: "The artifact arc ends at Mount Doom." }
    ],
    related: [
      { title: "Frodo Baggins", type: "Character", href: "/characters/frodo-baggins", image: asset("char-frodo.webp") },
      { title: "Mordor", type: "Realm", href: "/realms/mordor", image: asset("realm-mordor.webp") },
      { title: "Third Age", type: "Age", href: "/ages/third-age", image: asset("age-third.webp") }
    ]
  },
  {
    slug: "phial-of-galadriel",
    kind: "artifact",
    eyebrow: "Artifact Dossier",
    title: "Phial of Galadriel",
    subtitle: "A preserved light in dark places",
    description: "An artifact page built around contrast: small vessel, immense hope, and an interface that makes light feel precious rather than loud.",
    image: asset("artifact-phial.webp"),
    heroImage: asset("realm-lorien.webp"),
    accent: "Elven Artifact",
    era: "Third Age",
    realm: "Lórien",
    status: "Gift of Galadriel",
    rarity: "Epic Artifact",
    primaryActionLabel: "Open artifact chain",
    primaryActionHref: "/catalog?query=Phial",
    metrics: [
      { label: "Origin", value: "Lórien", note: "Gifted to Frodo" },
      { label: "Bearer", value: "Frodo", note: "Later Sam" },
      { label: "Archive Links", value: "47", note: "Quest and Lórien" },
      { label: "Tone", value: "Hope", note: "Light preserved" }
    ],
    sections: [
      { title: "Archive Overview", body: "The phial detail page uses luminous restraint: dark panels and small gold highlights keep the object magical but not noisy." }
    ],
    facts: [
      { label: "Type", value: "Vessel" },
      { label: "Origin", value: "Lórien" },
      { label: "Associated", value: "Galadriel" },
      { label: "Page Type", value: "Artifact" }
    ],
    timeline: [
      { year: "Third Age", title: "Given in Lórien", body: "Galadriel gives the phial to Frodo as a light in dark places." },
      { year: "Shelob's Lair", title: "Light against darkness", body: "The artifact becomes crucial in one of the quest's darkest passages." }
    ],
    related: [
      { title: "Galadriel", type: "Character", href: "/characters/galadriel", image: asset("char-galadriel.webp") },
      { title: "Lórien", type: "Location", href: "/locations/lorien", image: asset("realm-lorien.webp") },
      { title: "Frodo Baggins", type: "Character", href: "/characters/frodo-baggins", image: asset("char-frodo.webp") }
    ]
  },
  {
    slug: "anduril",
    kind: "artifact",
    eyebrow: "Artifact Dossier",
    title: "Andúril",
    subtitle: "Flame of the West",
    description: "A royal artifact page centered on reforging, lineage, and the visible return of kingship.",
    image: asset("artifact-anduril.webp"),
    heroImage: asset("realm-gondor-wide.webp"),
    accent: "Sword Reforged",
    era: "Third Age",
    realm: "Gondor",
    status: "Royal blade",
    rarity: "Legendary Artifact",
    primaryActionLabel: "Open sword lineage",
    primaryActionHref: "/catalog?query=Anduril",
    metrics: [
      { label: "Before", value: "Narsil", note: "Broken blade" },
      { label: "Bearer", value: "Aragorn", note: "King Elessar" },
      { label: "Archive Links", value: "66", note: "Lineage and war" },
      { label: "Symbol", value: "Restoration", note: "The return of the king" }
    ],
    sections: [
      { title: "Archive Overview", body: "Andúril's page should feel ceremonial: a sword study, royal document, and prophecy object in one layout." }
    ],
    facts: [
      { label: "Type", value: "Sword" },
      { label: "Bearer", value: "Aragorn" },
      { label: "Before", value: "Narsil" },
      { label: "Page Type", value: "Artifact" }
    ],
    timeline: [
      { year: "Second Age", title: "Narsil", body: "The original sword enters the archive through the fall of Sauron." },
      { year: "Third Age", title: "Reforged", body: "The blade becomes Andúril, symbol of the returning king." }
    ],
    related: [
      { title: "Aragorn", type: "Character", href: "/characters/aragorn", image: asset("char-aragorn.webp") },
      { title: "Gondor", type: "Realm", href: "/realms/gondor", image: asset("realm-gondor.webp") },
      { title: "Narsil", type: "Artifact", href: "/artifacts/narsil", image: asset("artifact-narsil.webp") }
    ]
  },
  {
    slug: "third-age",
    kind: "age",
    eyebrow: "Age Dossier",
    title: "Third Age",
    subtitle: "The Age of Men",
    description:
      "The archive's most navigable age: a long twilight of Elven fading, the rise of Men, and the final contest with Sauron.",
    image: asset("detail-age-hero.webp"),
    heroImage: asset("archive-hall-bg.webp"),
    accent: "Age of Men",
    era: "Third Age",
    realm: "Middle-earth",
    status: "Completed era",
    rarity: "Core Chronology",
    primaryActionLabel: "Browse Third Age",
    primaryActionHref: "/catalog?age=third-age",
    metrics: [
      { label: "Duration", value: "3,021 years", note: "Approximate archive span" },
      { label: "Entries", value: "4,962+", note: "Largest active cluster" },
      { label: "Key Arc", value: "War of the Ring", note: "Terminal conflict" },
      { label: "Transition", value: "Fourth Age", note: "Dominion of Men" }
    ],
    sections: [
      { title: "Archive Overview", body: "The Third Age page acts as a master chronology. It needs dense navigation but premium restraint, so major arcs are grouped into eras, wars, quests, and realm transitions." },
      { title: "Interface Role", body: "Age pages use wider data bands and timeline panels because the user is usually trying to orient themselves in history rather than inspect a single object." }
    ],
    facts: [
      { label: "Type", value: "Age" },
      { label: "Dominant arc", value: "War of the Ring" },
      { label: "Next", value: "Fourth Age" },
      { label: "Page Type", value: "Age" }
    ],
    timeline: [
      { year: "T.A. 1000", title: "The Istari arrive", body: "A major strategic line begins against Sauron." },
      { year: "T.A. 2941", title: "The Ring is found", body: "A quiet discovery becomes the central artifact arc." },
      { year: "T.A. 3018–3019", title: "War of the Ring", body: "The decisive sequence of the age closes the Third Age." }
    ],
    related: [
      { title: "Gandalf", type: "Character", href: "/characters/gandalf", image: asset("char-gandalf.webp") },
      { title: "The One Ring", type: "Artifact", href: "/artifacts/the-one-ring", image: asset("artifact-ring.webp") },
      { title: "Gondor", type: "Realm", href: "/realms/gondor", image: asset("realm-gondor.webp") }
    ]
  },
  {
    slug: "second-age",
    kind: "age",
    eyebrow: "Age Dossier",
    title: "Second Age",
    subtitle: "The Age of Elves and Númenórean power",
    description: "A chronology page focused on the rise of Númenor, the forging of Rings, and the first great fall of Sauron.",
    image: asset("age-second.webp"),
    heroImage: asset("map-middle-earth.webp"),
    accent: "Age of Elves",
    era: "Second Age",
    realm: "Middle-earth / Númenor",
    status: "Completed era",
    rarity: "Core Chronology",
    primaryActionLabel: "Browse Second Age",
    primaryActionHref: "/catalog?age=second-age",
    metrics: [
      { label: "Entries", value: "1,540+", note: "Chronology cluster" },
      { label: "Key Arc", value: "Rings of Power", note: "Artifact network" },
      { label: "Fall", value: "Númenor", note: "Major transition" },
      { label: "After", value: "Third Age", note: "War continues" }
    ],
    sections: [
      { title: "Archive Overview", body: "The Second Age dossier balances grand political collapse with the artifact logic of the Rings of Power." }
    ],
    facts: [
      { label: "Type", value: "Age" },
      { label: "Major arc", value: "Rings of Power" },
      { label: "Transition", value: "Third Age" },
      { label: "Page Type", value: "Age" }
    ],
    timeline: [
      { year: "S.A.", title: "Rings forged", body: "The artifact network begins." },
      { year: "Late S.A.", title: "Last Alliance", body: "The age ends in a victory that does not fully end the threat." }
    ],
    related: [
      { title: "The One Ring", type: "Artifact", href: "/artifacts/the-one-ring", image: asset("artifact-ring.webp") },
      { title: "Galadriel", type: "Character", href: "/characters/galadriel", image: asset("char-galadriel.webp") },
      { title: "Third Age", type: "Age", href: "/ages/third-age", image: asset("age-third.webp") }
    ]
  }
];

export function getV69Record(kind: V70DetailKind, slug: string) {
  return v70Records.find((record) => record.kind === kind && record.slug === slug);
}

export function getV69RecordsByKind(kind: V70DetailKind) {
  return v70Records.filter((record) => record.kind === kind);
}

export function getV69StaticParams(kind: V70DetailKind) {
  return getV69RecordsByKind(kind).map((record) => ({ slug: record.slug }));
}
