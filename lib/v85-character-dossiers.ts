export type V85CharacterDossier = {
  slug: string;
  name: string;
  epithet: string;
  race: string;
  era: string;
  role: string;
  summary: string;
  rarity: "Legendary" | "Mythic" | "Noble" | "Shadow";
  image: string;
  accent: "gold" | "silver" | "ember" | "shadow";
  sections: {
    title: string;
    body: string;
  }[];
  metadata: {
    label: string;
    value: string;
  }[];
};

export const v85CharacterDossiers: V85CharacterDossier[] = [
  {
    slug: "gandalf",
    name: "Gandalf",
    epithet: "The Grey Pilgrim",
    race: "Istar",
    era: "Third Age",
    role: "Wizard",
    summary: "A keeper of hidden fire and one of the central guides of the Free Peoples.",
    rarity: "Mythic",
    image: "/v102/gandalf-catalog-card.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A keeper of hidden fire and one of the central guides of the Free Peoples. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Gandalf connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Istar" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Wizard" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "aragorn",
    name: "Aragorn",
    epithet: "Heir of Isildur",
    race: "Man",
    era: "Third Age",
    role: "Ranger / King",
    summary: "A hidden king shaped by exile, restraint, and the burden of ancient lineage.",
    rarity: "Legendary",
    image: "/v108/aragorn-catalog-card.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A hidden king shaped by exile, restraint, and the burden of ancient lineage. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Aragorn connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Man" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Ranger / King" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "galadriel",
    name: "Galadriel",
    epithet: "Lady of Lórien",
    race: "Elf",
    era: "First Age — Third Age",
    role: "Ring-bearer",
    summary: "One of the greatest of the Eldar remaining in Middle-earth, guardian of memory and light.",
    rarity: "Mythic",
    image: "/v107/galadriel-catalog-card.webp",
    accent: "silver",
    sections: [
      {
        title: "Archive Interpretation",
        body: "One of the greatest of the Eldar remaining in Middle-earth, guardian of memory and light. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Galadriel connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Elf" },
      { label: "Era", value: "First Age — Third Age" },
      { label: "Role", value: "Ring-bearer" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "frodo-baggins",
    name: "Frodo Baggins",
    epithet: "Ring-bearer",
    race: "Hobbit",
    era: "Third Age",
    role: "Bearer of the One Ring",
    summary: "A quiet figure whose endurance altered the fate of the age.",
    rarity: "Legendary",
    image: "/v113/frodo-catalog-card.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A quiet figure whose endurance altered the fate of the age. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Frodo Baggins connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Hobbit" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Bearer of the One Ring" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "samwise-gamgee",
    name: "Samwise Gamgee",
    epithet: "The Faithful Companion",
    race: "Hobbit",
    era: "Third Age",
    role: "Ring-bearer / Gardener",
    summary: "A loyal friend whose courage was rooted in humility, love, and simple goodness.",
    rarity: "Legendary",
    image: "/v78-2/characters/samwise-gamgee.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A loyal friend whose courage was rooted in humility, love, and simple goodness. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Samwise Gamgee connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Hobbit" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Ring-bearer / Gardener" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "sauron",
    name: "Sauron",
    epithet: "The Dark Lord",
    race: "Maia",
    era: "Second Age — Third Age",
    role: "Lord of Mordor",
    summary: "A will of domination bound to craft, fear, and the pursuit of absolute control.",
    rarity: "Shadow",
    image: "/v100/sauron-catalog-card.webp",
    accent: "shadow",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A will of domination bound to craft, fear, and the pursuit of absolute control. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Sauron connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Maia" },
      { label: "Era", value: "Second Age — Third Age" },
      { label: "Role", value: "Lord of Mordor" },
      { label: "Archive Class", value: "Shadow Record" }
    ]
  },
  {
    slug: "saruman",
    name: "Saruman",
    epithet: "The White",
    race: "Istar",
    era: "Third Age",
    role: "Wizard",
    summary: "A mind of great order and pride, corrupted by ambition and the desire to master power.",
    rarity: "Legendary",
    image: "/v78-2/characters/saruman.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A mind of great order and pride, corrupted by ambition and the desire to master power. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Saruman connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Istar" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Wizard" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "legolas",
    name: "Legolas",
    epithet: "Prince of the Woodland Realm",
    race: "Elf",
    era: "Third Age",
    role: "Archer",
    summary: "A swift-eyed prince whose grace and precision carried the memory of the Elves into war.",
    rarity: "Legendary",
    image: "/v113/legolas-catalog-card.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A swift-eyed prince whose grace and precision carried the memory of the Elves into war. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Legolas connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Elf" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Archer" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "gimli",
    name: "Gimli",
    epithet: "Son of Glóin",
    race: "Dwarf",
    era: "Third Age",
    role: "Warrior",
    summary: "A fierce warrior of the Dwarves whose loyalty and honor reshaped old divisions.",
    rarity: "Legendary",
    image: "/v78-2/characters/gimli.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A fierce warrior of the Dwarves whose loyalty and honor reshaped old divisions. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Gimli connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Dwarf" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Warrior" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "boromir",
    name: "Boromir",
    epithet: "Captain of Gondor",
    race: "Man",
    era: "Third Age",
    role: "Steward's Son",
    summary: "A proud son of a besieged realm, torn between valor, desperation, and temptation.",
    rarity: "Legendary",
    image: "/v78-2/characters/boromir.webp",
    accent: "ember",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A proud son of a besieged realm, torn between valor, desperation, and temptation. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Boromir connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Man" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Steward's Son" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "elrond",
    name: "Elrond",
    epithet: "Lord of Rivendell",
    race: "Half-elven",
    era: "Second Age — Third Age",
    role: "Lore-master",
    summary: "A keeper of counsel, memory, healing, and ancient wisdom at the edge of fading time.",
    rarity: "Legendary",
    image: "/v78-2/characters/elrond.webp",
    accent: "silver",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A keeper of counsel, memory, healing, and ancient wisdom at the edge of fading time. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Elrond connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Half-elven" },
      { label: "Era", value: "Second Age — Third Age" },
      { label: "Role", value: "Lore-master" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "arwen",
    name: "Arwen",
    epithet: "Evenstar",
    race: "Half-elven",
    era: "Third Age",
    role: "Princess of Rivendell",
    summary: "A figure of grace and choice, binding love, mortality, and the fate of kingdoms.",
    rarity: "Legendary",
    image: "/v78-2/characters/arwen.webp",
    accent: "silver",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A figure of grace and choice, binding love, mortality, and the fate of kingdoms. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Arwen connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Half-elven" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Princess of Rivendell" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "eowyn",
    name: "Éowyn",
    epithet: "Shieldmaiden of Rohan",
    race: "Woman",
    era: "Third Age",
    role: "Shieldmaiden",
    summary: "A noble heart confined by duty, who broke the shadow of fear on the field of battle.",
    rarity: "Legendary",
    image: "/v78-2/characters/eowyn.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A noble heart confined by duty, who broke the shadow of fear on the field of battle. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Éowyn connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Woman" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Shieldmaiden" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "theoden",
    name: "Théoden",
    epithet: "King of Rohan",
    race: "Man",
    era: "Third Age",
    role: "King",
    summary: "A king restored from shadow, whose final ride became the measure of courage.",
    rarity: "Legendary",
    image: "/v78-2/characters/theoden.webp",
    accent: "ember",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A king restored from shadow, whose final ride became the measure of courage. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Théoden connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Man" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "King" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "faramir",
    name: "Faramir",
    epithet: "Captain of Ithilien",
    race: "Man",
    era: "Third Age",
    role: "Captain",
    summary: "A man of restraint and discernment, tested by power yet refusing its lure.",
    rarity: "Legendary",
    image: "/v78-2/characters/faramir.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A man of restraint and discernment, tested by power yet refusing its lure. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Faramir connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Man" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Captain" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "bilbo-baggins",
    name: "Bilbo Baggins",
    epithet: "The Burglar",
    race: "Hobbit",
    era: "Third Age",
    role: "Ring-finder",
    summary: "A reluctant adventurer whose small act of mercy shaped the fate of the world.",
    rarity: "Legendary",
    image: "/v78-2/characters/bilbo-baggins.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A reluctant adventurer whose small act of mercy shaped the fate of the world. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Bilbo Baggins connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Hobbit" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Ring-finder" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "thranduil",
    name: "Thranduil",
    epithet: "Elvenking",
    race: "Elf",
    era: "Third Age",
    role: "King",
    summary: "A sovereign of the Woodland Realm, proud, watchful, and bound to the deep memory of the forest.",
    rarity: "Legendary",
    image: "/v78-2/characters/thranduil.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A sovereign of the Woodland Realm, proud, watchful, and bound to the deep memory of the forest. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Thranduil connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Elf" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "King" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "witch-king-of-angmar",
    name: "Witch-king of Angmar",
    epithet: "Lord of the Nazgûl",
    race: "Ringwraith",
    era: "Second Age — Third Age",
    role: "Nazgûl",
    summary: "The chief servant of the Shadow, a terror crowned in sorcery and dread.",
    rarity: "Shadow",
    image: "/v78-2/characters/witch-king-of-angmar.webp",
    accent: "shadow",
    sections: [
      {
        title: "Archive Interpretation",
        body: "The chief servant of the Shadow, a terror crowned in sorcery and dread. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Witch-king of Angmar connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Ringwraith" },
      { label: "Era", value: "Second Age — Third Age" },
      { label: "Role", value: "Nazgûl" },
      { label: "Archive Class", value: "Shadow Record" }
    ]
  },
  {
    slug: "luthien",
    name: "Lúthien",
    epithet: "Tinúviel",
    race: "Elf / Maia descent",
    era: "First Age",
    role: "Princess",
    summary: "A singer of unmatched grace, whose love and courage entered the deepest legend.",
    rarity: "Mythic",
    image: "/v78-2/characters/luthien.webp",
    accent: "silver",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A singer of unmatched grace, whose love and courage entered the deepest legend. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Lúthien connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Elf / Maia descent" },
      { label: "Era", value: "First Age" },
      { label: "Role", value: "Princess" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "beren",
    name: "Beren",
    epithet: "One-handed",
    race: "Man",
    era: "First Age",
    role: "Hero",
    summary: "A mortal whose oath carried him beyond fear, into the heart of impossible legend.",
    rarity: "Legendary",
    image: "/v78-2/characters/beren.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A mortal whose oath carried him beyond fear, into the heart of impossible legend. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Beren connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Man" },
      { label: "Era", value: "First Age" },
      { label: "Role", value: "Hero" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "feanor",
    name: "Fëanor",
    epithet: "Maker of the Silmarils",
    race: "Elf",
    era: "First Age",
    role: "Prince / Craftsman",
    summary: "A genius of flame and pride, creator of beauty and architect of ruin.",
    rarity: "Mythic",
    image: "/v78-2/characters/feanor.webp",
    accent: "ember",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A genius of flame and pride, creator of beauty and architect of ruin. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Fëanor connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Elf" },
      { label: "Era", value: "First Age" },
      { label: "Role", value: "Prince / Craftsman" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "morgoth",
    name: "Morgoth",
    epithet: "The Black Foe",
    race: "Vala",
    era: "First Age",
    role: "Dark Power",
    summary: "The first great enemy, whose shadow entered the foundations of the world.",
    rarity: "Shadow",
    image: "/v78-2/characters/morgoth.webp",
    accent: "shadow",
    sections: [
      {
        title: "Archive Interpretation",
        body: "The first great enemy, whose shadow entered the foundations of the world. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Morgoth connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Vala" },
      { label: "Era", value: "First Age" },
      { label: "Role", value: "Dark Power" },
      { label: "Archive Class", value: "Shadow Record" }
    ]
  },
  {
    slug: "isildur",
    name: "Isildur",
    epithet: "Bearer of the Ring",
    race: "Man",
    era: "Second Age",
    role: "King",
    summary: "A king of great lineage whose single choice carried consequences through an age.",
    rarity: "Legendary",
    image: "/v78-2/characters/isildur.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A king of great lineage whose single choice carried consequences through an age. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Isildur connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Man" },
      { label: "Era", value: "Second Age" },
      { label: "Role", value: "King" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  },
  {
    slug: "denethor",
    name: "Denethor II",
    epithet: "Steward of Gondor",
    race: "Man",
    era: "Third Age",
    role: "Steward",
    summary: "A proud ruler of sharp mind and broken hope, consumed by vision and despair.",
    rarity: "Legendary",
    image: "/v78-2/characters/denethor.webp",
    accent: "gold",
    sections: [
      {
        title: "Archive Interpretation",
        body: "A proud ruler of sharp mind and broken hope, consumed by vision and despair. This dossier is written as a curated museum record: restrained, cinematic, and focused on significance rather than raw exposition."
      },
      {
        title: "Narrative Weight",
        body: "Denethor II connects personal choice with the movement of history. The character record is treated as a premium archival object, balancing identity, era, role, and symbolic importance."
      },
      {
        title: "Visual Direction",
        body: "Portrait treatment should remain dark, editorial, and museum-like: controlled contrast, warm obsidian shadows, ivory text, and fine champagne-gold accents."
      }
    ],
    metadata: [
      { label: "Race", value: "Man" },
      { label: "Era", value: "Third Age" },
      { label: "Role", value: "Steward" },
      { label: "Archive Class", value: "Primary Record" }
    ]
  }
];

export function getV85CharacterDossier(slug: string) {
  return v85CharacterDossiers.find((entry) => entry.slug === slug);
}

export function getAllV85CharacterSlugs() {
  return v85CharacterDossiers.map((entry) => entry.slug);
}
