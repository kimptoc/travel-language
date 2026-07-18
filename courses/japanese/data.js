/* Data for the Tokyo Foundation Japanese course.
   Plain JS globals (not fetched JSON) so pages work over file:// too. */

var HIRAGANA = [
  { char: "あ", romaji: "a", hint: "Looks like a mouth open wide shouting Ah!" },
  { char: "い", romaji: "i", hint: "Two strokes stand together like twins: Ii, Ii" },
  { char: "う", romaji: "u", hint: "A hook like a swan dipping its head under water: u" },
  { char: "え", romaji: "e", hint: "A curled stroke like an elbow bending back: eh?" },
  { char: "お", romaji: "o", hint: "A loop with a cane hook, like an old man saying oh!" },
  { char: "か", romaji: "ka", hint: "Looks like a sickle (kama) swinging: ka, ka" },
  { char: "き", romaji: "ki", hint: "Looks like a little tree with branches - 木 (ki) means tree" },
  { char: "く", romaji: "ku", hint: "A bent beak shape like a bird's ku-ku call" },
  { char: "け", romaji: "ke", hint: "A stick figure kicking a leg out: ke!" },
  { char: "こ", romaji: "ko", hint: "Two stacked commas like coins: ko, ko" },
  { char: "さ", romaji: "sa", hint: "A fishhook casting a line out to sea: sa" },
  { char: "し", romaji: "shi", hint: "One curved hook like a fishhook or candy cane: shi" },
  { char: "す", romaji: "su", hint: "A tight swirl like a rolled sushi roll: su" },
  { char: "せ", romaji: "se", hint: "A person mid-kick with a flourish: se!" },
  { char: "そ", romaji: "so", hint: "A zigzag like stitched thread: so, so" },
  { char: "た", romaji: "ta", hint: "Looks like a table with legs: ta-ble" },
  { char: "ち", romaji: "chi", hint: "A curled stroke like a number 5: chi" },
  { char: "つ", romaji: "tsu", hint: "A cresting wave, like a tsunami: tsu" },
  { char: "て", romaji: "te", hint: "A bent line like a reaching hand: te" },
  { char: "と", romaji: "to", hint: "A hook like a toe kicking a ball: to" },
  { char: "な", romaji: "na", hint: "A knot tied with a loose end: na" },
  { char: "に", romaji: "ni", hint: "Two bent strokes like a pair of knees: ni, knee" },
  { char: "ぬ", romaji: "nu", hint: "A swirled loop like tangled noodles: nu" },
  { char: "ね", romaji: "ne", hint: "A cat curling its tail into a loop: ne, neko" },
  { char: "の", romaji: "no", hint: "A single spiral loop, round and round: no" },
  { char: "は", romaji: "ha", hint: "A person laughing with mouth wide open: ha ha!" },
  { char: "ひ", romaji: "hi", hint: "A curved smiling eyebrow: hi!" },
  { char: "ふ", romaji: "fu", hint: "Two humps like Mount Fuji: fu, Fuji" },
  { char: "へ", romaji: "he", hint: "A simple peak like a mountain or roof: he" },
  { char: "ほ", romaji: "ho", hint: "Like は with an extra beam: ho ho ho, Santa" },
  { char: "ま", romaji: "ma", hint: "A curled loop like a pretzel: ma, mama" },
  { char: "み", romaji: "mi", hint: "A curling snake shape: mi, mi" },
  { char: "む", romaji: "mu", hint: "A cow's face with a curling horn: mu, moo" },
  { char: "め", romaji: "me", hint: "Looks like an eye winking: me" },
  { char: "も", romaji: "mo", hint: "A hook with a crossbar like a mop handle: mo" },
  { char: "や", romaji: "ya", hint: "A slingshot shape ready to fire: ya!" },
  { char: "ゆ", romaji: "yu", hint: "A looping hook, like the ♨ hot-spring symbol: yu" },
  { char: "よ", romaji: "yo", hint: "A fishing hook with a flourish, like a yo-yo string" },
  { char: "ら", romaji: "ra", hint: "A hook curling back like a rabbit's ear: ra" },
  { char: "り", romaji: "ri", hint: "Two strokes: Ri and Ri holding a curved item" },
  { char: "る", romaji: "ru", hint: "A looping curl like a ribbon: ru" },
  { char: "れ", romaji: "re", hint: "A leaning figure with a flowing line: re" },
  { char: "ろ", romaji: "ro", hint: "A rounded square loop like a road sign: ro" },
  { char: "わ", romaji: "wa", hint: "A person dancing with a round belly: wa" },
  { char: "を", romaji: "wo", hint: "A bowing figure with a curling hook: wo" },
  { char: "ん", romaji: "n", hint: "A simple hooked swirl, the shortest sound: n" },
  { char: "が", romaji: "ga", hint: "Same shape as か plus two dakuten marks buzzing k into g" },
  { char: "ぎ", romaji: "gi", hint: "Same tree shape as き, voiced by two dakuten marks: gi" },
  { char: "ぐ", romaji: "gu", hint: "Same beak shape as く, voiced by two dakuten marks: gu" },
  { char: "げ", romaji: "ge", hint: "Same kicking leg as け, voiced by two dakuten marks: ge" },
  { char: "ご", romaji: "go", hint: "Same stacked commas as こ, voiced by dakuten marks: go" },
  { char: "ざ", romaji: "za", hint: "Same fishhook as さ, dakuten marks buzz it into za" },
  { char: "じ", romaji: "ji", hint: "Same curved hook as し, dakuten marks buzz it into ji" },
  { char: "ず", romaji: "zu", hint: "Same swirl as す, dakuten marks buzz it into zu" },
  { char: "ぜ", romaji: "ze", hint: "Same kicking pose as せ, dakuten marks buzz it into ze" },
  { char: "ぞ", romaji: "zo", hint: "Same zigzag as そ, dakuten marks buzz it into zo" },
  { char: "だ", romaji: "da", hint: "Same table shape as た, dakuten marks buzz it into da" },
  { char: "ぢ", romaji: "ji", hint: "Same curl as ち, dakuten marks buzz it into ji (rare)" },
  { char: "づ", romaji: "zu", hint: "Same wave as つ, dakuten marks buzz it into zu (rare)" },
  { char: "で", romaji: "de", hint: "Same reaching hand as て, dakuten marks buzz it into de" },
  { char: "ど", romaji: "do", hint: "Same toe-kick as と, dakuten marks buzz it into do" },
  { char: "ば", romaji: "ba", hint: "Same laughing mouth as は, dakuten marks buzz it into ba" },
  { char: "び", romaji: "bi", hint: "Same smiling brow as ひ, dakuten marks buzz it into bi" },
  { char: "ぶ", romaji: "bu", hint: "Same Fuji humps as ふ, dakuten marks buzz it into bu" },
  { char: "べ", romaji: "be", hint: "Same mountain peak as へ, dakuten marks buzz it into be" },
  { char: "ぼ", romaji: "bo", hint: "Same signpost as ほ, dakuten marks buzz it into bo" },
  { char: "ぱ", romaji: "pa", hint: "Same laughing mouth as は, a small circle pops it into pa" },
  { char: "ぴ", romaji: "pi", hint: "Same smiling brow as ひ, a small circle pops it into pi" },
  { char: "ぷ", romaji: "pu", hint: "Same Fuji humps as ふ, a small circle pops it into pu" },
  { char: "ぺ", romaji: "pe", hint: "Same mountain peak as へ, a small circle pops it into pe" },
  { char: "ぽ", romaji: "po", hint: "Same signpost as ほ, a small circle pops it into po" }
];

var KATAKANA = [
  { char: "ア", romaji: "a", hint: "An angular hook like a torn letter A: a" },
  { char: "イ", romaji: "i", hint: "Two short strokes like a stick figure's legs: i" },
  { char: "ウ", romaji: "u", hint: "A hood shape with a dot, like a little ghost: u" },
  { char: "エ", romaji: "e", hint: "Three horizontal bars like a capital E" },
  { char: "オ", romaji: "o", hint: "A cross with a swooping tail like scissors: o" },
  { char: "カ", romaji: "ka", hint: "An angular blade shape, like a knife cutting: ka" },
  { char: "キ", romaji: "ki", hint: "A crossed stroke like a key's teeth: ki" },
  { char: "ク", romaji: "ku", hint: "A sharp bent knee shape, like a numeral 7: ku" },
  { char: "ケ", romaji: "ke", hint: "A figure with a flag raised, like a kite: ke" },
  { char: "コ", romaji: "ko", hint: "A square bracket open on the right, like a box corner" },
  { char: "サ", romaji: "sa", hint: "A cross with a diagonal slash like scissors: sa" },
  { char: "シ", romaji: "shi", hint: "Three short strokes falling top to bottom like rain: shi" },
  { char: "ス", romaji: "su", hint: "A slash through a hook, like a ski slope: su" },
  { char: "セ", romaji: "se", hint: "A cross with a foot kicking sideways: se" },
  { char: "ソ", romaji: "so", hint: "Two short strokes falling like snow, similar to ン: so" },
  { char: "タ", romaji: "ta", hint: "A flag on a pole, planted like a table marker: ta" },
  { char: "チ", romaji: "chi", hint: "A cross with a hooked foot, like a golf club: chi" },
  { char: "ツ", romaji: "tsu", hint: "Three strokes sweeping left to right like a wave: tsu" },
  { char: "テ", romaji: "te", hint: "An antenna on a pole, like a TV aerial: te" },
  { char: "ト", romaji: "to", hint: "A simple hook like a toe kicking: to" },
  { char: "ナ", romaji: "na", hint: "A cross with a slanted stroke, like a plus sign: na" },
  { char: "ニ", romaji: "ni", hint: "Two flat strokes, identical to the kanji for 2 (二): ni" },
  { char: "ヌ", romaji: "nu", hint: "A forked stroke like a noodle fork twisting: nu" },
  { char: "ネ", romaji: "ne", hint: "A shrine-gate shape with a flourish, like a whisker: ne" },
  { char: "ノ", romaji: "no", hint: "A single diagonal slash, the simplest stroke: no" },
  { char: "ハ", romaji: "ha", hint: "Two splayed legs like a person mid-laugh: ha" },
  { char: "ヒ", romaji: "hi", hint: "An L-shaped hoe for digging, angular and sharp: hi" },
  { char: "フ", romaji: "fu", hint: "A single hook like a swan's bent neck: fu" },
  { char: "ヘ", romaji: "he", hint: "A simple peak, like a roof: he" },
  { char: "ホ", romaji: "ho", hint: "A signpost cross with two legs, like ほ but sharper: ho" },
  { char: "マ", romaji: "ma", hint: "A hook with a flourish like a fishing rod cast: ma" },
  { char: "ミ", romaji: "mi", hint: "Three short parallel strokes like ripples: mi" },
  { char: "ム", romaji: "mu", hint: "A triangular roof shape, like a cow's snout: mu" },
  { char: "メ", romaji: "me", hint: "A crossing X shape, like closed eyelashes: me" },
  { char: "モ", romaji: "mo", hint: "A cross with a hook, like a mole poking up: mo" },
  { char: "ヤ", romaji: "ya", hint: "An angular slingshot shape, sharper than hiragana: ya" },
  { char: "ユ", romaji: "yu", hint: "A hooked U shape with a crossbar: yu" },
  { char: "ヨ", romaji: "yo", hint: "Three horizontal bars stacked like shelves: yo" },
  { char: "ラ", romaji: "ra", hint: "A hook with a small flag, like a raised arm: ra" },
  { char: "リ", romaji: "ri", hint: "Two vertical strokes like two people standing: ri" },
  { char: "ル", romaji: "ru", hint: "Two curved strokes like a checkmark's tail: ru" },
  { char: "レ", romaji: "re", hint: "A single swooping checkmark stroke: re" },
  { char: "ロ", romaji: "ro", hint: "A plain square box, like a little room: ro" },
  { char: "ワ", romaji: "wa", hint: "A hook with a small flourish, angular cousin of わ: wa" },
  { char: "ヲ", romaji: "wo", hint: "A rare hooked stroke, used only for the particle wo" },
  { char: "ン", romaji: "n", hint: "Two short strokes curving upward like a nod: n" },
  { char: "ガ", romaji: "ga", hint: "Same blade shape as カ, dakuten marks buzz it into ga" },
  { char: "ギ", romaji: "gi", hint: "Same key teeth as キ, dakuten marks buzz it into gi" },
  { char: "グ", romaji: "gu", hint: "Same bent knee as ク, dakuten marks buzz it into gu" },
  { char: "ゲ", romaji: "ge", hint: "Same raised flag as ケ, dakuten marks buzz it into ge" },
  { char: "ゴ", romaji: "go", hint: "Same box corner as コ, dakuten marks buzz it into go" },
  { char: "ザ", romaji: "za", hint: "Same scissor cross as サ, dakuten marks buzz it into za" },
  { char: "ジ", romaji: "ji", hint: "Same falling strokes as シ, dakuten marks buzz it into ji" },
  { char: "ズ", romaji: "zu", hint: "Same ski-slope slash as ス, dakuten marks buzz it into zu" },
  { char: "ゼ", romaji: "ze", hint: "Same kicking cross as セ, dakuten marks buzz it into ze" },
  { char: "ゾ", romaji: "zo", hint: "Same falling snow as ソ, dakuten marks buzz it into zo" },
  { char: "ダ", romaji: "da", hint: "Same flag pole as タ, dakuten marks buzz it into da" },
  { char: "ヂ", romaji: "ji", hint: "Same hooked foot as チ, dakuten marks buzz it into ji (rare)" },
  { char: "ヅ", romaji: "zu", hint: "Same sweeping wave as ツ, dakuten marks buzz it into zu (rare)" },
  { char: "デ", romaji: "de", hint: "Same TV antenna as テ, dakuten marks buzz it into de" },
  { char: "ド", romaji: "do", hint: "Same toe-hook as ト, dakuten marks buzz it into do" },
  { char: "バ", romaji: "ba", hint: "Same splayed legs as ハ, dakuten marks buzz it into ba" },
  { char: "ビ", romaji: "bi", hint: "Same hoe shape as ヒ, dakuten marks buzz it into bi" },
  { char: "ブ", romaji: "bu", hint: "Same swan neck as フ, dakuten marks buzz it into bu" },
  { char: "ベ", romaji: "be", hint: "Same roof peak as ヘ, dakuten marks buzz it into be" },
  { char: "ボ", romaji: "bo", hint: "Same signpost as ホ, dakuten marks buzz it into bo" },
  { char: "パ", romaji: "pa", hint: "Same splayed legs as ハ, a small circle pops it into pa" },
  { char: "ピ", romaji: "pi", hint: "Same hoe shape as ヒ, a small circle pops it into pi" },
  { char: "プ", romaji: "pu", hint: "Same swan neck as フ, a small circle pops it into pu" },
  { char: "ペ", romaji: "pe", hint: "Same roof peak as ヘ, a small circle pops it into pe" },
  { char: "ポ", romaji: "po", hint: "Same signpost as ホ, a small circle pops it into po" }
];

// Common katakana loanwords you'll actually see on menus and hotel signage in Tokyo
var KATAKANA_WORDS = [
  { jp: "メニュー", romaji: "menyuu", en: "menu" },
  { jp: "ホテル", romaji: "hoteru", en: "hotel" },
  { jp: "ロビー", romaji: "robii", en: "lobby" },
  { jp: "レストラン", romaji: "resutoran", en: "restaurant" },
  { jp: "コーヒー", romaji: "koohii", en: "coffee" },
  { jp: "ビール", romaji: "biiru", en: "beer" },
  { jp: "ワイン", romaji: "wain", en: "wine" },
  { jp: "サラダ", romaji: "sarada", en: "salad" },
  { jp: "パン", romaji: "pan", en: "bread" },
  { jp: "タクシー", romaji: "takushii", en: "taxi" },
  { jp: "エレベーター", romaji: "erebeetaa", en: "elevator" },
  { jp: "トイレ", romaji: "toire", en: "toilet" },
  { jp: "パスポート", romaji: "pasupooto", en: "passport" },
  { jp: "カード", romaji: "kaado", en: "card" },
  { jp: "チェックイン", romaji: "chekku in", en: "check-in" }
];

function kanaToDeck(list) {
  return list.map(function (k) {
    return { main: k.char, sub: k.romaji, back: k.romaji, backSub: "", speak: k.char, lang: "ja-JP", hint: k.hint || "" };
  });
}

function wordsToDeck(list) {
  return list.map(function (w) {
    return { main: w.jp, sub: w.romaji, back: w.en, backSub: "", speak: w.jp, lang: "ja-JP" };
  });
}

function vocabToDeck(list) {
  return list.map(function (v) {
    return { main: v.jp, sub: v.romaji, back: v.en, backSub: v.notes || "", speak: v.jp, lang: "ja-JP" };
  });
}

var WEEK3_VOCAB = [
  { jp: "おはようございます", romaji: "ohayou gozaimasu", en: "Good morning (polite)" },
  { jp: "こんにちは", romaji: "konnichiwa", en: "Hello / good afternoon" },
  { jp: "こんばんは", romaji: "konbanwa", en: "Good evening" },
  { jp: "すみません", romaji: "sumimasen", en: "Excuse me / sorry", notes: "The single most useful word in Japan — use it to get attention, apologise, or say thanks for trouble." },
  { jp: "ありがとうございます", romaji: "arigatou gozaimasu", en: "Thank you" },
  { jp: "どういたしまして", romaji: "dou itashimashite", en: "You're welcome" },
  { jp: "はい", romaji: "hai", en: "Yes" },
  { jp: "いいえ", romaji: "iie", en: "No" },
  { jp: "わかりません", romaji: "wakarimasen", en: "I don't understand" },
  { jp: "はじめまして、〇〇です。よろしくお願いします。", romaji: "hajimemashite, [name] desu. yoroshiku onegaishimasu.", en: "Nice to meet you, I'm [name]. Please treat me kindly.", notes: "Standard self-introduction — swap 〇〇 for your name." }
];

var WEEK4_VOCAB = [
  { jp: "一", romaji: "ichi", en: "1" },
  { jp: "二", romaji: "ni", en: "2" },
  { jp: "三", romaji: "san", en: "3" },
  { jp: "四", romaji: "yon / shi", en: "4" },
  { jp: "五", romaji: "go", en: "5" },
  { jp: "六", romaji: "roku", en: "6" },
  { jp: "七", romaji: "nana / shichi", en: "7" },
  { jp: "八", romaji: "hachi", en: "8" },
  { jp: "九", romaji: "kyuu", en: "9" },
  { jp: "十", romaji: "juu", en: "10" },
  { jp: "二十", romaji: "nijuu", en: "20" },
  { jp: "三十", romaji: "sanjuu", en: "30" },
  { jp: "百", romaji: "hyaku", en: "100" },
  { jp: "千", romaji: "sen", en: "1,000" },
  { jp: "一万", romaji: "ichiman", en: "10,000" },
  { jp: "一人", romaji: "hitori", en: "1 person", notes: "Irregular — used instead of 一名 in casual speech." },
  { jp: "二人", romaji: "futari", en: "2 people", notes: "Irregular — use this pair for 1–2 people." },
  { jp: "〜名", romaji: "~mei", en: "counter for people (formal, 3+)", notes: "e.g. 三名 (sanmei) = 3 people. Useful when giving a reservation headcount." },
  { jp: "何時ですか", romaji: "nanji desu ka", en: "What time is it?" },
  { jp: "〜時です", romaji: "~ji desu", en: "It's ~ o'clock" },
  { jp: "いくらですか", romaji: "ikura desu ka", en: "How much is it?" },
  { jp: "クレジットカードは使えますか", romaji: "kurejitto kaado wa tsukaemasu ka", en: "Can I use a credit card?" }
];

var WEEK5_VOCAB = [
  { jp: "ベジタリアンです", romaji: "bejitarian desu", en: "I am vegetarian" },
  { jp: "肉と魚は食べません", romaji: "niku to sakana wa tabemasen", en: "I don't eat meat or fish" },
  { jp: "〜は入っていますか", romaji: "~ wa haitte imasu ka", en: "Does this contain ~?", notes: "Use with 肉 (niku, meat), 魚 (sakana, fish), 出汁 (dashi, often fish-based!)." },
  { jp: "予約をしています、〇〇です", romaji: "yoyaku wo shiteimasu, [name] desu", en: "I have a reservation, under the name [name]" },
  { jp: "おすすめは何ですか", romaji: "osusume wa nan desu ka", en: "What do you recommend?" },
  { jp: "ごちそうさまでした", romaji: "gochisousama deshita", en: "Said after finishing a meal (thanks for the food)" },
  { jp: "出汁は魚ですか", romaji: "dashi wa sakana desu ka", en: "Is the dashi made from fish?", notes: "Dashi is the hidden trap in Japanese vegetarian dining — worth having this ready even where your dietary notes are on file." }
];

var WEEK6_VOCAB = [
  { jp: "チェックイン", romaji: "chekku in", en: "Check-in" },
  { jp: "チェックアウト", romaji: "chekku auto", en: "Check-out" },
  { jp: "部屋の鍵をなくしました", romaji: "heya no kagi wo nakushimashita", en: "I lost my room key" },
  { jp: "荷物を預けられますか", romaji: "nimotsu wo azukeraremasu ka", en: "Can I leave my luggage?" },
  { jp: "タクシーを呼んでもらえますか", romaji: "takushii wo yonde moraemasu ka", en: "Could you call a taxi?" },
  { jp: "Wi-Fiのパスワードは何ですか", romaji: "Wi-Fi no pasuwaado wa nan desu ka", en: "What's the wifi password?" }
];

var WEEK7_VOCAB = [
  { jp: "〜駅はどこですか", romaji: "~eki wa doko desu ka", en: "Where is ~ station?" },
  { jp: "この電車は〜に行きますか", romaji: "kono densha wa ~ ni ikimasu ka", en: "Does this train go to ~?" },
  { jp: "チャージできますか", romaji: "chaaji dekimasu ka", en: "Can I top up? (Suica/IC card)" },
  { jp: "右", romaji: "migi", en: "Right" },
  { jp: "左", romaji: "hidari", en: "Left" },
  { jp: "まっすぐ", romaji: "massugu", en: "Straight ahead" }
];

var WEEK8_VOCAB = [
  { jp: "〜です", romaji: "~ desu", en: "is / am / are ~" },
  { jp: "〜ではありません", romaji: "~ dewa arimasen", en: "is not ~" },
  { jp: "〜が好きです", romaji: "~ ga suki desu", en: "I like ~", notes: "Useful for small talk with restaurant/hotel staff." },
  { jp: "〜をお願いします", romaji: "~ wo onegaishimasu", en: "~, please", notes: "Extremely versatile ordering phrase — point at a menu item and say this." },
  { jp: "〜でした", romaji: "~ deshita", en: "was ~ (simple past)" }
];

// Example yen prices for reading-aloud practice (Week 4)
var YEN_EXAMPLES = [
  { jpy: "¥500", jp: "五百円", romaji: "gohyaku en" },
  { jpy: "¥750", jp: "七百五十円", romaji: "nanahyaku gojuu en" },
  { jpy: "¥1,000", jp: "千円", romaji: "sen en" },
  { jpy: "¥1,500", jp: "千五百円", romaji: "sen gohyaku en" },
  { jpy: "¥2,000", jp: "二千円", romaji: "nisen en" },
  { jpy: "¥3,800", jp: "三千八百円", romaji: "sanzen happyaku en" },
  { jpy: "¥10,000", jp: "一万円", romaji: "ichiman en" },
  { jpy: "¥25,000", jp: "二万五千円", romaji: "niman gosen en" }
];

var REFERENCE_CARD = [
  { jp: "ベジタリアンです。肉と魚、出汁も食べられません。", romaji: "Bejitarian desu. Niku to sakana, dashi mo taberaremasen.", en: "I'm vegetarian. I can't eat meat, fish, or dashi either." },
  { jp: "卵と乳製品は大丈夫です。", romaji: "Tamago to nyuuseihin wa daijoubu desu.", en: "Eggs and dairy are fine.", optional: true },
  { jp: "ありがとうございます、とても美味しかったです。", romaji: "Arigatou gozaimasu, totemo oishikatta desu.", en: "Thank you, that was delicious." }
];
