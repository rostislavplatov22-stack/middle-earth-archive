import type { V70DetailRecord } from "@/lib/v70-detail-data";
export type V77CharacterSignificance = "Legendary" | "Epic" | "Rare" | "Notable";
export type V77CharacterTheme = "wizard" | "hobbit" | "ranger" | "elf" | "dark" | "forest" | "king" | "dwarf" | "shieldmaiden";
export type V77Character = {
  slug: string;
  title: string;
  subtitle: string;
  age: string;
  significance: V77CharacterSignificance;
  accent: string;
  realm: string;
  status: string;
  theme: V77CharacterTheme;
  description: string;
};

const catalogImageByTheme: Record<V77CharacterTheme, string> = {
  wizard: "/v72/assets/char-gandalf.webp",
  hobbit: "/v72/assets/char-frodo.webp",
  ranger: "/v72/assets/char-aragorn.webp",
  elf: "/v72/assets/char-galadriel.webp",
  dark: "/v72/assets/realm-mordor.webp",
  forest: "/v72/assets/realm-lorien.webp",
  king: "/v72/assets/realm-gondor.webp",
  dwarf: "/v72/assets/realm-rivendell.webp",
  shieldmaiden: "/v72/assets/char-galadriel.webp",
};

const detailImageByTheme: Record<V77CharacterTheme, string> = {
  wizard: "/v70/assets/char-gandalf.webp",
  hobbit: "/v70/assets/char-frodo.webp",
  ranger: "/v70/assets/char-aragorn.webp",
  elf: "/v70/assets/char-galadriel.webp",
  dark: "/v70/assets/realm-mordor.webp",
  forest: "/v70/assets/realm-lorien.webp",
  king: "/v70/assets/realm-gondor-wide.webp",
  dwarf: "/v70/assets/realm-rivendell.webp",
  shieldmaiden: "/v70/assets/char-galadriel.webp",
};

const heroImageByAge = (age: string, theme: V77CharacterTheme) => {
  if (theme === "dark") return "/v70/assets/realm-mordor.webp";
  if (theme === "forest" || theme === "elf" || theme === "shieldmaiden") return "/v70/assets/realm-lorien.webp";
  if (theme === "king" || theme === "ranger") return "/v70/assets/realm-gondor-wide.webp";
  if (theme === "dwarf") return "/v70/assets/realm-rivendell.webp";
  if (age.includes("First Age")) return "/v70/assets/chronicle-silmarillion.webp";
  if (age.includes("Second Age")) return "/v70/assets/age-second.webp";
  return "/v70/assets/archive-hall-bg.webp";
};

export const v77Characters: V77Character[] = [
  { slug: "gandalf", title: "Gandalf the Grey", subtitle: "Istari, bearer of Narya", age: "Third Age", significance: "Legendary", accent: "Istari", realm: "Middle-earth", status: "Returned as the White", theme: "wizard", description: "A wandering Maia sent to oppose the Shadow through counsel, courage, and restraint." },
  { slug: "frodo-baggins", title: "Frodo Baggins", subtitle: "Ring-bearer of the Shire", age: "Third Age", significance: "Legendary", accent: "Hobbit", realm: "The Shire", status: "Ring-bearer", theme: "hobbit", description: "A quiet hobbit whose endurance carries the central burden of the War of the Ring." },
  { slug: "aragorn", title: "Aragorn", subtitle: "Heir of Isildur, King Elessar", age: "Third Age", significance: "Legendary", accent: "Dúnedain", realm: "Gondor / Arnor", status: "King Elessar", theme: "ranger", description: "The hidden heir who restores the line of kings after years as a ranger in the wild." },
  { slug: "galadriel", title: "Galadriel", subtitle: "Lady of Lórien and bearer of Nenya", age: "First Age — Third Age", significance: "Legendary", accent: "Noldor", realm: "Lórien", status: "Keeper of Nenya", theme: "elf", description: "One of the greatest Eldar remaining in Middle-earth, bound to memory, power, and restraint." },
  { slug: "samwise-gamgee", title: "Samwise Gamgee", subtitle: "Gardener of the Shire", age: "Third Age", significance: "Epic", accent: "Hobbit", realm: "The Shire", status: "Companion of the Ring-bearer", theme: "hobbit", description: "Frodo’s loyal companion, remembered for courage, mercy, and practical strength." },
  { slug: "bilbo-baggins", title: "Bilbo Baggins", subtitle: "Burglar of Erebor", age: "Third Age", significance: "Epic", accent: "Hobbit", realm: "The Shire", status: "Ring-finder", theme: "hobbit", description: "The unexpected adventurer whose journey to Erebor becomes a hinge of later history." },
  { slug: "merry-brandybuck", title: "Meriadoc Brandybuck", subtitle: "Knight of Rohan", age: "Third Age", significance: "Epic", accent: "Hobbit", realm: "The Shire / Rohan", status: "Companion of the Fellowship", theme: "hobbit", description: "A hobbit of Buckland whose courage reaches the fields of the Pelennor." },
  { slug: "pippin-took", title: "Peregrin Took", subtitle: "Guard of the Citadel", age: "Third Age", significance: "Epic", accent: "Hobbit", realm: "The Shire / Gondor", status: "Companion of the Fellowship", theme: "hobbit", description: "A young Took whose curiosity becomes service in the heart of Gondor." },
  { slug: "legolas", title: "Legolas", subtitle: "Prince of the Woodland Realm", age: "Third Age", significance: "Epic", accent: "Sindar", realm: "Woodland Realm", status: "Fellowship archer", theme: "elf", description: "An Elven archer of the Fellowship, moving between woodland memory and war." },
  { slug: "gimli", title: "Gimli", subtitle: "Son of Glóin", age: "Third Age", significance: "Epic", accent: "Dwarf", realm: "Erebor / Aglarond", status: "Fellowship warrior", theme: "dwarf", description: "A Dwarven warrior whose friendship with Legolas becomes a rare bridge between peoples." },
  { slug: "boromir", title: "Boromir", subtitle: "Captain of the White Tower", age: "Third Age", significance: "Epic", accent: "Man of Gondor", realm: "Gondor", status: "Captain of Gondor", theme: "ranger", description: "The proud son of Denethor, torn between duty, desperation, and the temptation of the Ring." },
  { slug: "faramir", title: "Faramir", subtitle: "Captain of Ithilien", age: "Third Age", significance: "Epic", accent: "Man of Gondor", realm: "Gondor", status: "Steward of Gondor", theme: "ranger", description: "A captain-scholar of Gondor, defined by wisdom, discipline, and mercy." },
  { slug: "denethor", title: "Denethor II", subtitle: "Steward of Gondor", age: "Third Age", significance: "Epic", accent: "Man of Gondor", realm: "Gondor", status: "Ruling Steward", theme: "ranger", description: "The last ruling Steward before the return of the king, marked by vigilance and despair." },
  { slug: "eowyn", title: "Éowyn", subtitle: "Shieldmaiden of Rohan", age: "Third Age", significance: "Epic", accent: "Rohirrim", realm: "Rohan", status: "Lady of Ithilien", theme: "shieldmaiden", description: "A noblewoman of Rohan whose courage breaks one of the great terrors of the age." },
  { slug: "eomer", title: "Éomer", subtitle: "Marshal of the Mark", age: "Third Age", significance: "Epic", accent: "Rohirrim", realm: "Rohan", status: "King of Rohan", theme: "ranger", description: "A rider and later king of Rohan, bound to loyalty, battle, and renewal." },
  { slug: "theoden", title: "Théoden", subtitle: "King of Rohan", age: "Third Age", significance: "Legendary", accent: "Rohirrim", realm: "Rohan", status: "King of the Mark", theme: "king", description: "The restored king of Rohan, remembered for the ride to Gondor and a royal death in battle." },
  { slug: "grima-wormtongue", title: "Gríma Wormtongue", subtitle: "Servant of Saruman", age: "Third Age", significance: "Rare", accent: "Man of Rohan", realm: "Rohan / Isengard", status: "Fallen counsellor", theme: "dark", description: "A corrupted counsellor whose whispering weakens the house of Théoden." },
  { slug: "saruman", title: "Saruman", subtitle: "The White Wizard", age: "Third Age", significance: "Legendary", accent: "Istari", realm: "Isengard", status: "Fallen Wizard", theme: "wizard", description: "The head of the White Council who turns from wisdom toward domination." },
  { slug: "radagast", title: "Radagast the Brown", subtitle: "One of the Istari", age: "Third Age", significance: "Rare", accent: "Istari", realm: "Rhosgobel", status: "Wizard of birds and beasts", theme: "wizard", description: "A wizard closely tied to the natural world and the creatures of Middle-earth." },
  { slug: "elrond", title: "Elrond", subtitle: "Lord of Rivendell", age: "Second Age — Third Age", significance: "Legendary", accent: "Half-elven", realm: "Rivendell", status: "Keeper of Vilya", theme: "elf", description: "A loremaster and ruler of Rivendell, preserving memory through the long defeat." },
  { slug: "arwen", title: "Arwen Undómiel", subtitle: "Evenstar of her people", age: "Third Age", significance: "Epic", accent: "Half-elven", realm: "Rivendell / Gondor", status: "Queen of the Reunited Kingdom", theme: "elf", description: "The Evenstar whose choice binds the fate of Elves and Men through Aragorn." },
  { slug: "celeborn", title: "Celeborn", subtitle: "Lord of Lórien", age: "Second Age — Third Age", significance: "Epic", accent: "Sindar", realm: "Lórien", status: "Lord of the Golden Wood", theme: "elf", description: "A lord of Lórien whose record is tied to Galadriel and the endurance of Elven realms." },
  { slug: "haldir", title: "Haldir", subtitle: "Marchwarden of Lórien", age: "Third Age", significance: "Rare", accent: "Elf", realm: "Lórien", status: "Border warden", theme: "elf", description: "A guardian of Lórien’s borders, connected to the Fellowship’s passage through the Golden Wood." },
  { slug: "glorfindel", title: "Glorfindel", subtitle: "Elf-lord of Rivendell", age: "First Age — Third Age", significance: "Epic", accent: "Elf", realm: "Rivendell", status: "Returned lord", theme: "elf", description: "An Elf-lord remembered across deep time, associated with courage and rescue." },
  { slug: "cirdan", title: "Círdan", subtitle: "Shipwright of the Grey Havens", age: "First Age — Third Age", significance: "Legendary", accent: "Teleri", realm: "Grey Havens", status: "Lord of the Havens", theme: "elf", description: "One of the oldest Elves in Middle-earth, keeper of ships, memory, and final departures." },
  { slug: "sauron", title: "Sauron", subtitle: "The Dark Lord", age: "Second Age — Third Age", significance: "Legendary", accent: "Maia", realm: "Mordor", status: "Defeated Dark Lord", theme: "dark", description: "The chief enemy of the Second and Third Ages, bound to rings, domination, and Mordor." },
  { slug: "witch-king-of-angmar", title: "Witch-king of Angmar", subtitle: "Lord of the Nazgûl", age: "Third Age", significance: "Legendary", accent: "Nazgûl", realm: "Angmar / Mordor", status: "Destroyed at Pelennor", theme: "dark", description: "The greatest of the Ringwraiths, a terror of the North and of the War of the Ring." },
  { slug: "nazgul", title: "The Nazgûl", subtitle: "Ringwraiths of Sauron", age: "Second Age — Third Age", significance: "Legendary", accent: "Ringwraiths", realm: "Mordor", status: "Servants of the Ring", theme: "dark", description: "The Nine corrupted by rings of power, serving as extensions of Sauron’s will." },
  { slug: "smeagol-gollum", title: "Sméagol / Gollum", subtitle: "Bearer corrupted by the Ring", age: "Third Age", significance: "Epic", accent: "Stoor Hobbit", realm: "Misty Mountains / Mordor", status: "Destroyed with the Ring", theme: "dark", description: "A tragic bearer whose corruption and obsession shape the fate of the Ring." },
  { slug: "shelob", title: "Shelob", subtitle: "Great spider of Cirith Ungol", age: "Third Age", significance: "Rare", accent: "Great Spider", realm: "Ephel Dúath", status: "Lurking horror", theme: "dark", description: "An ancient spider-like creature whose lair becomes one of the quest’s darkest thresholds." },
  { slug: "treebeard", title: "Treebeard", subtitle: "Eldest of the Ents", age: "Third Age", significance: "Rare", accent: "Ent", realm: "Fangorn Forest", status: "Entmoot elder", theme: "forest", description: "The oldest shepherd of the trees, slow to anger and immense once roused." },
  { slug: "tom-bombadil", title: "Tom Bombadil", subtitle: "Master of the Old Forest", age: "Third Age", significance: "Rare", accent: "Unknown", realm: "Old Forest", status: "Unaffected by the Ring", theme: "forest", description: "A mysterious figure outside ordinary categories, tied to song, forest, and ancient independence." },
  { slug: "goldberry", title: "Goldberry", subtitle: "River-daughter", age: "Third Age", significance: "Rare", accent: "Unknown", realm: "Old Forest", status: "Lady of the House", theme: "forest", description: "A luminous presence connected to Tom Bombadil, water, and the older magic of the land." },
  { slug: "thorin-oakenshield", title: "Thorin Oakenshield", subtitle: "King under the Mountain", age: "Third Age", significance: "Epic", accent: "Dwarf", realm: "Erebor", status: "Restored king", theme: "dwarf", description: "The heir of Durin whose quest to reclaim Erebor changes the northern map." },
  { slug: "balin", title: "Balin", subtitle: "Dwarf of Erebor", age: "Third Age", significance: "Rare", accent: "Dwarf", realm: "Erebor / Moria", status: "Lord of Moria", theme: "dwarf", description: "A companion of Thorin and later leader of the ill-fated attempt to reclaim Moria." },
  { slug: "dain-ironfoot", title: "Dáin Ironfoot", subtitle: "King under the Mountain", age: "Third Age", significance: "Epic", accent: "Dwarf", realm: "Erebor", status: "King of Durin’s Folk", theme: "dwarf", description: "A Dwarven lord who becomes king after the Battle of Five Armies." },
  { slug: "bard-the-bowman", title: "Bard the Bowman", subtitle: "Slayer of Smaug", age: "Third Age", significance: "Epic", accent: "Man of Dale", realm: "Dale", status: "King of Dale", theme: "ranger", description: "The archer of Lake-town whose shot brings down the dragon Smaug." },
  { slug: "beorn", title: "Beorn", subtitle: "Skin-changer of the Anduin Vale", age: "Third Age", significance: "Rare", accent: "Skin-changer", realm: "Anduin Vale", status: "Guardian of his house", theme: "forest", description: "A formidable skin-changer who aids Thorin’s company and shapes northern resistance." },
  { slug: "thranduil", title: "Thranduil", subtitle: "Elvenking of the Woodland Realm", age: "Third Age", significance: "Epic", accent: "Sindar", realm: "Woodland Realm", status: "Elvenking", theme: "elf", description: "The woodland king whose realm stands between beauty, caution, and northern peril." },
  { slug: "smaug", title: "Smaug", subtitle: "Dragon of Erebor", age: "Third Age", significance: "Epic", accent: "Dragon", realm: "Erebor", status: "Slain dragon", theme: "dark", description: "The great dragon whose occupation of Erebor sets the Quest of the Lonely Mountain in motion." },
  { slug: "isildur", title: "Isildur", subtitle: "Heir of Elendil", age: "Second Age", significance: "Legendary", accent: "Dúnedain", realm: "Gondor / Arnor", status: "Bearer of the Ring", theme: "ranger", description: "The king who cuts the Ring from Sauron and fails to destroy it." },
  { slug: "elendil", title: "Elendil", subtitle: "High King of the Dúnedain", age: "Second Age", significance: "Legendary", accent: "Númenórean", realm: "Arnor / Gondor", status: "Fallen in the Last Alliance", theme: "king", description: "The leader of the Faithful in Middle-earth and father of the kingdoms in exile." },
  { slug: "anarion", title: "Anárion", subtitle: "Son of Elendil", age: "Second Age", significance: "Epic", accent: "Númenórean", realm: "Gondor", status: "Co-founder of Gondor", theme: "king", description: "The brother of Isildur and co-founder of the South-kingdom." },
  { slug: "gil-galad", title: "Gil-galad", subtitle: "High King of the Noldor", age: "Second Age", significance: "Legendary", accent: "Noldor", realm: "Lindon", status: "Fallen in the Last Alliance", theme: "elf", description: "The last High King of the Noldor in Middle-earth, central to the Last Alliance." },
  { slug: "celebrimbor", title: "Celebrimbor", subtitle: "Smith of Eregion", age: "Second Age", significance: "Legendary", accent: "Noldor", realm: "Eregion", status: "Maker of the Three", theme: "elf", description: "The master smith whose work is tied to the greatest rings of the Elves." },
  { slug: "elros", title: "Elros", subtitle: "First King of Númenor", age: "Second Age", significance: "Legendary", accent: "Half-elven", realm: "Númenor", status: "Founder of royal line", theme: "king", description: "The brother of Elrond who chooses the fate of Men and founds the line of Númenor." },
  { slug: "ar-pharazon", title: "Ar-Pharazôn", subtitle: "Last King of Númenor", age: "Second Age", significance: "Legendary", accent: "Númenórean", realm: "Númenor", status: "Lost king", theme: "king", description: "The proud last king whose rebellion leads Númenor to catastrophe." },
  { slug: "tar-miriel", title: "Tar-Míriel", subtitle: "Queen of Númenor", age: "Second Age", significance: "Epic", accent: "Númenórean", realm: "Númenor", status: "Last rightful queen", theme: "elf", description: "The last rightful ruler of Númenor, caught in the final downfall of the island kingdom." },
  { slug: "beren", title: "Beren", subtitle: "Bearer of the Silmaril", age: "First Age", significance: "Legendary", accent: "Man", realm: "Beleriand", status: "Returned from death", theme: "ranger", description: "The mortal hero whose quest for a Silmaril becomes one of the great love-stories of the age." },
  { slug: "luthien", title: "Lúthien Tinúviel", subtitle: "Daughter of Thingol and Melian", age: "First Age", significance: "Legendary", accent: "Elf / Maia lineage", realm: "Doriath", status: "Returned from death", theme: "elf", description: "The greatest singer of the Elder Days, whose story reshapes the fate of Elves and Men." },
  { slug: "thingol", title: "Thingol", subtitle: "King of Doriath", age: "First Age", significance: "Legendary", accent: "Sindar", realm: "Doriath", status: "Slain king", theme: "king", description: "The king of Doriath whose realm, marriage, and Silmaril bind many First Age threads." },
  { slug: "melian", title: "Melian", subtitle: "Queen of Doriath", age: "First Age", significance: "Legendary", accent: "Maia", realm: "Doriath", status: "Departed Middle-earth", theme: "elf", description: "A Maia whose protection gives Doriath its hidden strength and mystery." },
  { slug: "turin-turambar", title: "Túrin Turambar", subtitle: "Son of Húrin", age: "First Age", significance: "Legendary", accent: "Man", realm: "Beleriand", status: "Tragic hero", theme: "ranger", description: "A tragic hero whose life is marked by valor, doom, and the shadow of Morgoth." },
  { slug: "hurin", title: "Húrin Thalion", subtitle: "Lord of Dor-lómin", age: "First Age", significance: "Epic", accent: "Man", realm: "Dor-lómin", status: "Captive of Morgoth", theme: "ranger", description: "A great warrior whose defiance before Morgoth becomes a bitter line of the First Age." },
  { slug: "morwen", title: "Morwen Eledhwen", subtitle: "Lady of Dor-lómin", age: "First Age", significance: "Rare", accent: "Man", realm: "Dor-lómin", status: "Mother of Túrin", theme: "elf", description: "A proud and sorrowful figure tied to the house of Hador and the fate of Túrin." },
  { slug: "nienor", title: "Niënor Níniel", subtitle: "Daughter of Húrin", age: "First Age", significance: "Rare", accent: "Man", realm: "Beleriand", status: "Tragic figure", theme: "elf", description: "A figure of sorrow in the tale of the Children of Húrin." },
  { slug: "tuor", title: "Tuor", subtitle: "Messenger to Gondolin", age: "First Age", significance: "Epic", accent: "Man", realm: "Gondolin", status: "Linked to the sea-longing", theme: "ranger", description: "A mortal hero whose path reaches Gondolin and the line of Eärendil." },
  { slug: "idril", title: "Idril Celebrindal", subtitle: "Princess of Gondolin", age: "First Age", significance: "Epic", accent: "Noldor", realm: "Gondolin", status: "Mother of Eärendil", theme: "elf", description: "A princess of Gondolin whose foresight helps preserve a future after the city falls." },
  { slug: "turgon", title: "Turgon", subtitle: "King of Gondolin", age: "First Age", significance: "Legendary", accent: "Noldor", realm: "Gondolin", status: "Fallen king", theme: "king", description: "The hidden king of Gondolin, ruler of one of the greatest Elven cities." },
  { slug: "maeglin", title: "Maeglin", subtitle: "Prince of Gondolin", age: "First Age", significance: "Rare", accent: "Elf", realm: "Gondolin", status: "Betrayer of Gondolin", theme: "dark", description: "A gifted and troubled prince whose betrayal contributes to Gondolin’s fall." },
  { slug: "earendil", title: "Eärendil", subtitle: "Mariner bearing the Silmaril", age: "First Age", significance: "Legendary", accent: "Half-elven", realm: "Sea / Valinor", status: "Star of hope", theme: "elf", description: "The mariner whose voyage and Silmaril become a sign of hope in the heavens." },
  { slug: "elwing", title: "Elwing", subtitle: "Bearer of the Silmaril", age: "First Age", significance: "Epic", accent: "Half-elven", realm: "Havens of Sirion", status: "Transformed and preserved", theme: "elf", description: "A bearer of the Silmaril whose fate joins Eärendil and the plea to the West." },
  { slug: "feanor", title: "Fëanor", subtitle: "Maker of the Silmarils", age: "First Age", significance: "Legendary", accent: "Noldor", realm: "Valinor / Beleriand", status: "Exiled prince", theme: "elf", description: "The unmatched craftsman whose pride and oath ignite much of the First Age." },
  { slug: "finrod-felagund", title: "Finrod Felagund", subtitle: "King of Nargothrond", age: "First Age", significance: "Epic", accent: "Noldor", realm: "Nargothrond", status: "Friend of Men", theme: "elf", description: "A noble Elven king remembered for friendship, song, and sacrifice." },
  { slug: "fingolfin", title: "Fingolfin", subtitle: "High King of the Noldor", age: "First Age", significance: "Legendary", accent: "Noldor", realm: "Hithlum", status: "Fallen before Morgoth", theme: "king", description: "A High King whose challenge to Morgoth becomes one of the great defiant moments of the age." },
  { slug: "maedhros", title: "Maedhros", subtitle: "Son of Fëanor", age: "First Age", significance: "Epic", accent: "Noldor", realm: "Beleriand", status: "Bound by the Oath", theme: "elf", description: "The eldest son of Fëanor, caught between leadership, oath, and ruin." },
  { slug: "morgoth", title: "Morgoth", subtitle: "The first Dark Lord", age: "First Age", significance: "Legendary", accent: "Vala", realm: "Angband", status: "Cast beyond the world", theme: "dark", description: "The original Dark Lord whose shadow defines the wars and griefs of the First Age." },
  { slug: "huan", title: "Huan", subtitle: "Hound of Valinor", age: "First Age", significance: "Rare", accent: "Hound", realm: "Beleriand", status: "Faithful companion", theme: "forest", description: "The great hound whose loyalty and doom are woven into the tale of Beren and Lúthien." },
];

export const v77CharacterCatalogEntries = v77Characters.map((character, index) => ({
  id: character.slug,
  kind: "Characters" as const,
  title: character.title,
  subtitle: character.subtitle,
  description: character.description,
  image: catalogImageByTheme[character.theme],
  href: `/characters/${character.slug}`,
  age: character.age,
  significance: character.significance,
  size: index === 0 ? "tall" as const : "normal" as const,
}));

export const v77CharacterSearchEntries = v77Characters.map((character) => ({
  title: character.title,
  type: "character",
  slug: character.slug,
  href: `/characters/${character.slug}`,
  excerpt: `${character.subtitle}. ${character.description}`,
  image: catalogImageByTheme[character.theme],
}));

export function getV77CharacterBySlug(slug: string) {
  return v77Characters.find((character) => character.slug === slug);
}

export function getV77CharacterDetailRecord(slug: string): V70DetailRecord | undefined {
  const character = getV77CharacterBySlug(slug);
  if (!character) return undefined;

  const image = detailImageByTheme[character.theme];
  const heroImage = heroImageByAge(character.age, character.theme);
  const searchHref = `/catalog?query=${encodeURIComponent(character.title)}`;
  const ageTitle = character.age.includes("First") ? "First Age" : character.age.includes("Second") ? "Second Age" : character.age.includes("Third") ? "Third Age" : "Character Era";
  const ageHref = character.age.includes("Second") ? "/ages/second-age" : character.age.includes("Third") ? "/ages/third-age" : `/catalog?query=${encodeURIComponent(ageTitle)}`;
  const ageImage = character.age.includes("Second") ? "/v70/assets/age-second.webp" : "/v70/assets/age-third.webp";

  return {
    slug: character.slug,
    kind: "character",
    eyebrow: "Character Dossier",
    title: character.title,
    subtitle: character.subtitle,
    description: character.description,
    image,
    heroImage,
    accent: character.accent,
    era: character.age,
    realm: character.realm,
    status: character.status,
    rarity: character.significance,
    primaryActionLabel: "Search related records",
    primaryActionHref: searchHref,
    metrics: [
      { label: "People", value: character.accent, note: "Character lineage" },
      { label: "Era", value: character.age, note: "Primary archive age" },
      { label: "Realm", value: character.realm, note: "Linked region" },
      { label: "Significance", value: character.significance, note: "Archive priority" },
    ],
    sections: [
      { title: "Archive Overview", body: `${character.title} is added as a real Middle-earth character record, connected to the catalog, Palantír search, and the premium dossier system.` },
      { title: "Dossier Notes", body: character.description },
      { title: "Connected Lore", body: `Use the catalog search to explore records related to ${character.title}, including their age, realm, people, and major narrative links.` },
    ],
    facts: [
      { label: "Name", value: character.title },
      { label: "People", value: character.accent },
      { label: "Era", value: character.age },
      { label: "Realm", value: character.realm },
      { label: "Status", value: character.status },
      { label: "Page Type", value: "Character" },
    ],
    timeline: [
      { year: character.age, title: "Primary record", body: `${character.title} is indexed under ${character.age}.` },
      { year: "Archive", title: "Catalog linkage", body: "This dossier is reachable from the character catalog and Palantír search." },
    ],
    related: [
      { title: "Character Catalog", type: "Catalog", href: "/catalog?type=characters", image: "/v70/assets/archive-hall-bg.webp" },
      { title: ageTitle, type: "Age", href: ageHref, image: ageImage },
      { title: "Palantír Search", type: "Search", href: searchHref, image },
    ],
  };
}
