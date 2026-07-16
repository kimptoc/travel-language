/* Data for the Tokyo Foundation Japanese course.
   Plain JS globals (not fetched JSON) so pages work over file:// too. */

var HIRAGANA = [
  { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" }, { char: "え", romaji: "e" }, { char: "お", romaji: "o" },
  { char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" },
  { char: "さ", romaji: "sa" }, { char: "し", romaji: "shi" }, { char: "す", romaji: "su" }, { char: "せ", romaji: "se" }, { char: "そ", romaji: "so" },
  { char: "た", romaji: "ta" }, { char: "ち", romaji: "chi" }, { char: "つ", romaji: "tsu" }, { char: "て", romaji: "te" }, { char: "と", romaji: "to" },
  { char: "な", romaji: "na" }, { char: "に", romaji: "ni" }, { char: "ぬ", romaji: "nu" }, { char: "ね", romaji: "ne" }, { char: "の", romaji: "no" },
  { char: "は", romaji: "ha" }, { char: "ひ", romaji: "hi" }, { char: "ふ", romaji: "fu" }, { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" },
  { char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" }, { char: "む", romaji: "mu" }, { char: "め", romaji: "me" }, { char: "も", romaji: "mo" },
  { char: "や", romaji: "ya" }, { char: "ゆ", romaji: "yu" }, { char: "よ", romaji: "yo" },
  { char: "ら", romaji: "ra" }, { char: "り", romaji: "ri" }, { char: "る", romaji: "ru" }, { char: "れ", romaji: "re" }, { char: "ろ", romaji: "ro" },
  { char: "わ", romaji: "wa" }, { char: "を", romaji: "wo" }, { char: "ん", romaji: "n" },
  { char: "が", romaji: "ga" }, { char: "ぎ", romaji: "gi" }, { char: "ぐ", romaji: "gu" }, { char: "げ", romaji: "ge" }, { char: "ご", romaji: "go" },
  { char: "ざ", romaji: "za" }, { char: "じ", romaji: "ji" }, { char: "ず", romaji: "zu" }, { char: "ぜ", romaji: "ze" }, { char: "ぞ", romaji: "zo" },
  { char: "だ", romaji: "da" }, { char: "ぢ", romaji: "ji" }, { char: "づ", romaji: "zu" }, { char: "で", romaji: "de" }, { char: "ど", romaji: "do" },
  { char: "ば", romaji: "ba" }, { char: "び", romaji: "bi" }, { char: "ぶ", romaji: "bu" }, { char: "べ", romaji: "be" }, { char: "ぼ", romaji: "bo" },
  { char: "ぱ", romaji: "pa" }, { char: "ぴ", romaji: "pi" }, { char: "ぷ", romaji: "pu" }, { char: "ぺ", romaji: "pe" }, { char: "ぽ", romaji: "po" }
];

var KATAKANA = [
  { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }, { char: "ウ", romaji: "u" }, { char: "エ", romaji: "e" }, { char: "オ", romaji: "o" },
  { char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" }, { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" },
  { char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi" }, { char: "ス", romaji: "su" }, { char: "セ", romaji: "se" }, { char: "ソ", romaji: "so" },
  { char: "タ", romaji: "ta" }, { char: "チ", romaji: "chi" }, { char: "ツ", romaji: "tsu" }, { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" },
  { char: "ナ", romaji: "na" }, { char: "ニ", romaji: "ni" }, { char: "ヌ", romaji: "nu" }, { char: "ネ", romaji: "ne" }, { char: "ノ", romaji: "no" },
  { char: "ハ", romaji: "ha" }, { char: "ヒ", romaji: "hi" }, { char: "フ", romaji: "fu" }, { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" },
  { char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" }, { char: "ム", romaji: "mu" }, { char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" },
  { char: "ヤ", romaji: "ya" }, { char: "ユ", romaji: "yu" }, { char: "ヨ", romaji: "yo" },
  { char: "ラ", romaji: "ra" }, { char: "リ", romaji: "ri" }, { char: "ル", romaji: "ru" }, { char: "レ", romaji: "re" }, { char: "ロ", romaji: "ro" },
  { char: "ワ", romaji: "wa" }, { char: "ヲ", romaji: "wo" }, { char: "ン", romaji: "n" },
  { char: "ガ", romaji: "ga" }, { char: "ギ", romaji: "gi" }, { char: "グ", romaji: "gu" }, { char: "ゲ", romaji: "ge" }, { char: "ゴ", romaji: "go" },
  { char: "ザ", romaji: "za" }, { char: "ジ", romaji: "ji" }, { char: "ズ", romaji: "zu" }, { char: "ゼ", romaji: "ze" }, { char: "ゾ", romaji: "zo" },
  { char: "ダ", romaji: "da" }, { char: "ヂ", romaji: "ji" }, { char: "ヅ", romaji: "zu" }, { char: "デ", romaji: "de" }, { char: "ド", romaji: "do" },
  { char: "バ", romaji: "ba" }, { char: "ビ", romaji: "bi" }, { char: "ブ", romaji: "bu" }, { char: "ベ", romaji: "be" }, { char: "ボ", romaji: "bo" },
  { char: "パ", romaji: "pa" }, { char: "ピ", romaji: "pi" }, { char: "プ", romaji: "pu" }, { char: "ペ", romaji: "pe" }, { char: "ポ", romaji: "po" }
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
    return { main: k.char, sub: "", back: k.romaji, backSub: "", speak: k.char, lang: "ja-JP" };
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
