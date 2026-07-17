/* Data for the French Foundation course.
   Plain JS globals (not fetched JSON) so pages work over file:// too. */

// Week 1: nasal vowels and silent final letters, shown together since both
// are about spelling-to-sound gaps rather than a new alphabet.
var WEEK1_VOCAB = [
  { fr: "maison", romaji: "meh-zohn", en: "house", notes: "nasal 'on'" },
  { fr: "enfant", romaji: "ahn-fahn", en: "child", notes: "nasal 'an' + nasal 'an' again; final 't' silent" },
  { fr: "vin", romaji: "van", en: "wine", notes: "nasal 'in'" },
  { fr: "parfum", romaji: "par-fum", en: "perfume", notes: "nasal 'um'" },
  { fr: "beaucoup", romaji: "boh-koo", en: "a lot / very much", notes: "final 'p' silent" },
  { fr: "petit", romaji: "puh-tee", en: "small", notes: "final 't' silent" },
  { fr: "Paris", romaji: "pa-ree", en: "Paris", notes: "final 's' silent" },
  { fr: "nez", romaji: "nay", en: "nose", notes: "final 'z' sounds like 'ay', not 'z'" },
  { fr: "grand", romaji: "grahn", en: "big / tall", notes: "final 'd' silent; nasal 'an'" },
  { fr: "pain", romaji: "pan", en: "bread", notes: "nasal 'ain'" },
  { fr: "matin", romaji: "ma-tan", en: "morning", notes: "nasal 'in'" },
  { fr: "jardin", romaji: "zhar-dan", en: "garden", notes: "nasal 'in'" },
  { fr: "bien", romaji: "byan", en: "well / good", notes: "nasal 'ien'" },
  { fr: "chien", romaji: "shyan", en: "dog", notes: "nasal 'ien'" },
  { fr: "combien", romaji: "kohm-byan", en: "how much / how many", notes: "nasal 'ien'" },
  { fr: "restaurant", romaji: "res-toh-rahn", en: "restaurant", notes: "nasal 'an'; final 't' silent" },
  { fr: "croissant", romaji: "krwa-sahn", en: "croissant", notes: "nasal 'an'; final 't' silent" },
  { fr: "garçon", romaji: "gar-sohn", en: "boy / waiter", notes: "nasal 'on'" },
  { fr: "salon", romaji: "sa-lohn", en: "living room", notes: "nasal 'on'" },
  { fr: "argent", romaji: "ar-zhahn", en: "money", notes: "nasal 'ar' + nasal 'ent'; final 't' silent" },
  { fr: "content", romaji: "kohn-tahn", en: "happy", notes: "nasal 'on' + nasal 'ent'; final 't' silent" },
  { fr: "temps", romaji: "tahn", en: "weather / time", notes: "nasal 'em'; final 'ps' silent" },
  { fr: "gens", romaji: "zhahn", en: "people", notes: "nasal 'en'; final 's' silent" },
  { fr: "français", romaji: "frahn-seh", en: "French", notes: "nasal 'an'; final 's' silent" },
  { fr: "brun", romaji: "bruhn", en: "brown", notes: "nasal 'un'" }
];

// Reference grid of the four nasal vowel spelling patterns
var NASAL_VOWEL_PATTERNS = [
  { char: "on / om", romaji: "bon, nom" },
  { char: "an / am / en / em", romaji: "an, enfant" },
  { char: "in / im / ain / ein", romaji: "vin, pain" },
  { char: "un / um", romaji: "un, parfum" }
];

// Week 2: liaison (linking words) examples
var WEEK2_VOCAB = [
  { fr: "les amis", romaji: "lay-zah-mee", en: "the friends", notes: "liaison: s → z sound before a vowel" },
  { fr: "vous êtes", romaji: "voo-zet", en: "you are", notes: "liaison: s → z sound" },
  { fr: "un grand homme", romaji: "un grahn-tom", en: "a great man", notes: "liaison: d → t sound" },
  { fr: "ils ont", romaji: "eel-zohn", en: "they have", notes: "liaison: s → z sound" },
  { fr: "nous avons", romaji: "noo-zah-vohn", en: "we have", notes: "liaison: s → z sound" },
  { fr: "c'est incroyable", romaji: "seh-tan-krwa-yabl", en: "that's incredible", notes: "liaison: t sound links the words" }
];

var WEEK3_VOCAB = [
  { fr: "Bonjour", romaji: "bohn-zhoor", en: "Hello (daytime)" },
  { fr: "Bonsoir", romaji: "bohn-swahr", en: "Good evening" },
  { fr: "Excusez-moi", romaji: "ex-kew-zay-mwah", en: "Excuse me" },
  { fr: "Pardon", romaji: "par-dohn", en: "Sorry / pardon" },
  { fr: "Merci beaucoup", romaji: "mair-see boh-koo", en: "Thank you very much" },
  { fr: "Je vous en prie", romaji: "zhuh voo-zahn pree", en: "You're welcome" },
  { fr: "Oui", romaji: "wee", en: "Yes" },
  { fr: "Non", romaji: "nohn", en: "No" },
  { fr: "Je ne comprends pas", romaji: "zhuh nuh kohm-prahn pah", en: "I don't understand" },
  { fr: "Bonjour, je m'appelle 〇〇. Enchanté(e).", romaji: "bohn-zhoor, zhuh ma-pel [name]. ahn-shahn-tay.", en: "Hello, my name is 〇〇. Nice to meet you.", notes: "Enchanté (male speaker) / Enchantée (female speaker, pronounced the same)." }
];

var WEEK4_VOCAB = [
  { fr: "un", romaji: "un", en: "1" },
  { fr: "deux", romaji: "duh", en: "2" },
  { fr: "trois", romaji: "trwah", en: "3" },
  { fr: "quatre", romaji: "katr", en: "4" },
  { fr: "cinq", romaji: "sank", en: "5" },
  { fr: "six", romaji: "sees", en: "6" },
  { fr: "sept", romaji: "set", en: "7" },
  { fr: "huit", romaji: "weet", en: "8" },
  { fr: "neuf", romaji: "nuhf", en: "9" },
  { fr: "dix", romaji: "dees", en: "10" },
  { fr: "vingt", romaji: "van", en: "20" },
  { fr: "trente", romaji: "trahnt", en: "30" },
  { fr: "quarante", romaji: "ka-rahnt", en: "40" },
  { fr: "cinquante", romaji: "sank-ahnt", en: "50" },
  { fr: "soixante", romaji: "swa-sahnt", en: "60" },
  { fr: "soixante-dix", romaji: "swa-sahnt-dees", en: "70", notes: "literally \"sixty-ten\" — the first quirk" },
  { fr: "quatre-vingts", romaji: "katr-van", en: "80", notes: "literally \"four-twenties\"" },
  { fr: "quatre-vingt-dix", romaji: "katr-van-dees", en: "90", notes: "literally \"four-twenty-ten\"" },
  { fr: "cent", romaji: "sahn", en: "100" },
  { fr: "Quelle heure est-il ?", romaji: "kel uhr eh-teel", en: "What time is it?" },
  { fr: "Il est 〜 heures", romaji: "eel eh ... uhr", en: "It's 〜 o'clock" },
  { fr: "C'est combien ?", romaji: "seh kohm-byan", en: "How much is it?" },
  { fr: "Vous acceptez la carte ?", romaji: "voo zak-sep-tay la kart", en: "Do you take card?" }
];

// Example euro prices for reading-aloud practice (Week 4)
var EURO_EXAMPLES = [
  { eur: "€10", fr: "dix euros", romaji: "dees uh-roh" },
  { eur: "€15", fr: "quinze euros", romaji: "kanz uh-roh" },
  { eur: "€20", fr: "vingt euros", romaji: "van uh-roh" },
  { eur: "€50", fr: "cinquante euros", romaji: "sank-ahnt uh-roh" },
  { eur: "€70", fr: "soixante-dix euros", romaji: "swa-sahnt-dees uh-roh" },
  { eur: "€80", fr: "quatre-vingts euros", romaji: "katr-van uh-roh" },
  { eur: "€100", fr: "cent euros", romaji: "sahn uh-roh" }
];

var WEEK5_VOCAB = [
  { fr: "Je suis végétarien(ne)", romaji: "zhuh swee vay-zhay-ta-ryan(-ryen)", en: "I am vegetarian" },
  { fr: "Je ne mange pas de viande ni de poisson", romaji: "zhuh nuh mahnzh pah duh vyahnd nee duh pwa-sohn", en: "I don't eat meat or fish" },
  { fr: "Il y a 〜 dedans ?", romaji: "eel ee ah ... duh-dahn", en: "Does this have 〜 in it?", notes: "Use with viande (meat), poisson (fish), bouillon (stock)." },
  { fr: "J'ai une réservation au nom de 〇〇", romaji: "zhay ewn ray-zair-va-syohn oh nohm duh [name]", en: "I have a reservation under 〇〇" },
  { fr: "Qu'est-ce que vous recommandez ?", romaji: "kes-kuh voo ruh-ko-mahn-day", en: "What do you recommend?" },
  { fr: "C'était délicieux, merci", romaji: "say-teh day-lee-syuh, mair-see", en: "That was delicious, thank you" },
  { fr: "Le bouillon est à base de viande ou de poisson ?", romaji: "luh boo-yohn eh-tah bahz duh vyahnd oo duh pwa-sohn", en: "Is the stock meat- or fish-based?", notes: "Many \"vegetable\" soups and sauces use meat or fish stock as a base — worth asking specifically." }
];

var WEEK6_VOCAB = [
  { fr: "L'enregistrement", romaji: "lahn-ruh-zhee-struh-mahn", en: "Check-in" },
  { fr: "Le départ", romaji: "luh day-par", en: "Check-out" },
  { fr: "J'ai perdu la clé de ma chambre", romaji: "zhay pair-dew la klay duh ma shahmbr", en: "I lost my room key" },
  { fr: "Je peux laisser mes bagages ?", romaji: "zhuh puh leh-say may ba-gahzh", en: "Can I leave my luggage?" },
  { fr: "Pouvez-vous m'appeler un taxi ?", romaji: "poo-vay voo ma-play un tak-see", en: "Could you call me a taxi?" },
  { fr: "Quel est le mot de passe du Wi-Fi ?", romaji: "kel eh luh moh duh pahs dew wee-fee", en: "What's the wifi password?" }
];

var WEEK7_VOCAB = [
  { fr: "Où est la station 〜 ?", romaji: "oo eh la sta-syohn", en: "Where is 〜 station?", notes: "Useful for the Paris Métro." },
  { fr: "Ce métro va à 〜 ?", romaji: "suh may-troh va ah", en: "Does this metro go to 〜?" },
  { fr: "Je peux recharger ici ?", romaji: "zhuh puh ruh-shar-zhay ee-see", en: "Can I top up here?", notes: "For a Navigo card." },
  { fr: "À droite", romaji: "ah drwaht", en: "Right" },
  { fr: "À gauche", romaji: "ah gohsh", en: "Left" },
  { fr: "Tout droit", romaji: "too drwah", en: "Straight ahead" }
];

var WEEK8_VOCAB = [
  { fr: "être", romaji: "etr", en: "to be", notes: "je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont" },
  { fr: "avoir", romaji: "av-wahr", en: "to have", notes: "j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont" },
  { fr: "J'aime 〜", romaji: "zhem", en: "I like 〜" },
  { fr: "Je voudrais 〜, s'il vous plaît", romaji: "zhuh voo-dreh ... seel voo pleh", en: "I would like 〜, please", notes: "Your all-purpose ordering phrase — more polite than \"je veux\"." },
  { fr: "j'ai été", romaji: "zhay ay-tay", en: "I was / I have been", notes: "passé composé of être" },
  { fr: "j'ai eu", romaji: "zhay ew", en: "I had / I have had", notes: "passé composé of avoir" }
];

function vocabToDeck(list) {
  return list.map(function (v) {
    return { main: v.fr, sub: v.romaji, hint: v.en, back: v.en, backSub: v.notes || "", speak: v.fr, lang: "fr-FR" };
  });
}

var REFERENCE_CARD = [
  { fr: "Bonjour, je suis végétarien(ne). Je ne mange ni viande, ni poisson, ni bouillon à base de viande ou de poisson.", romaji: "Bohn-zhoor, zhuh swee vay-zhay-ta-ryan(-ryen). Zhuh nuh mahnzh nee vyahnd, nee pwa-sohn, nee boo-yohn ah bahz duh vyahnd oo duh pwa-sohn.", en: "Hello, I'm vegetarian. I don't eat meat, fish, or stock made from meat or fish." },
  { fr: "Les œufs et les produits laitiers, ça va.", romaji: "Lay-zuh ay lay pro-dwee leh-tyay, sah va.", en: "Eggs and dairy are fine.", optional: true },
  { fr: "Merci beaucoup, c'était délicieux.", romaji: "Mair-see boh-koo, say-teh day-lee-syuh.", en: "Thank you very much, that was delicious." }
];
