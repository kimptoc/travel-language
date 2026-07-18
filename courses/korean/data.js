/* Data for the Korean Foundation course.
   Plain JS globals (not fetched JSON) so pages work over file:// too. */

var HANGUL_CONSONANTS = [
  { char: "ㄱ", romaji: "g/k", name: "giyeok", hint: "Traces the tongue arching up to touch the back of the mouth for g/k" },
  { char: "ㄴ", romaji: "n", name: "nieun", hint: "Traces the tongue tip touching behind the front teeth for n" },
  { char: "ㄷ", romaji: "d/t", name: "digeut", hint: "A tongue pressed flat behind the teeth, boxed in for d/t" },
  { char: "ㄹ", romaji: "r/l", name: "rieul", hint: "A zigzagging tongue flick, rolling for r/l" },
  { char: "ㅁ", romaji: "m", name: "mieum", hint: "A square mouth shape, lips closed and humming: m" },
  { char: "ㅂ", romaji: "b/p", name: "bieup", hint: "Lips opening from a closed mouth shape, popping for b/p" },
  { char: "ㅅ", romaji: "s", name: "siot", hint: "A pointed tooth shape, hissing air through for s" },
  { char: "ㅇ", romaji: "silent / ng", name: "ieung", hint: "A round open throat: silent alone, or a hum for ng" },
  { char: "ㅈ", romaji: "j", name: "jieut", hint: "A tooth shape (ㅅ) plus a flick on top for a soft j" },
  { char: "ㅊ", romaji: "ch", name: "chieut", hint: "A ㅈ with an extra stroke, puffing more air for ch" },
  { char: "ㅋ", romaji: "k", name: "kieuk", hint: "A ㄱ with an extra stroke, puffing air for a sharp k" },
  { char: "ㅌ", romaji: "t", name: "tieut", hint: "A ㄷ with an extra stroke, puffing air for a sharp t" },
  { char: "ㅍ", romaji: "p", name: "pieup", hint: "A ㅂ opened wider, lips popping hard for p" },
  { char: "ㅎ", romaji: "h", name: "hieut", hint: "A circle with a hat, breath rising up and out for h" }
];

var HANGUL_VOWELS = [
  { char: "ㅏ", romaji: "a", name: "a", hint: "A vertical line with a dot to the right, light shining out: a" },
  { char: "ㅑ", romaji: "ya", name: "ya", hint: "Like ㅏ but with two strokes, adding a y-glide: ya" },
  { char: "ㅓ", romaji: "eo", name: "eo", hint: "A vertical line with a dot to the left, facing inward: eo" },
  { char: "ㅕ", romaji: "yeo", name: "yeo", hint: "Like ㅓ with two strokes, adding a y-glide: yeo" },
  { char: "ㅗ", romaji: "o", name: "o", hint: "A horizontal line with a dot rising above it, like the sun: o" },
  { char: "ㅛ", romaji: "yo", name: "yo", hint: "Like ㅗ with two strokes rising, adding a y-glide: yo" },
  { char: "ㅜ", romaji: "u", name: "u", hint: "A horizontal line with a dot hanging below, like a drop: u" },
  { char: "ㅠ", romaji: "yu", name: "yu", hint: "Like ㅜ with two strokes hanging, adding a y-glide: yu" },
  { char: "ㅡ", romaji: "eu", name: "eu", hint: "A single flat horizontal line, like the flat earth: eu" },
  { char: "ㅣ", romaji: "i", name: "i", hint: "A single straight vertical line, like a standing person: i" }
];

var HANGUL_DOUBLE_CONSONANTS = [
  { char: "ㄲ", romaji: "kk", name: "ssang-giyeok" },
  { char: "ㄸ", romaji: "tt", name: "ssang-digeut" },
  { char: "ㅃ", romaji: "pp", name: "ssang-bieup" },
  { char: "ㅆ", romaji: "ss", name: "ssang-siot" },
  { char: "ㅉ", romaji: "jj", name: "ssang-jieut" }
];

// Basic consonant + ㅏ syllable blocks, showing how Hangul combines into blocks
var SYLLABLE_BLOCKS = [
  { char: "가", romaji: "ga" }, { char: "나", romaji: "na" }, { char: "다", romaji: "da" },
  { char: "라", romaji: "ra" }, { char: "마", romaji: "ma" }, { char: "바", romaji: "ba" },
  { char: "사", romaji: "sa" }, { char: "아", romaji: "a" }, { char: "자", romaji: "ja" },
  { char: "차", romaji: "cha" }, { char: "카", romaji: "ka" }, { char: "타", romaji: "ta" },
  { char: "파", romaji: "pa" }, { char: "하", romaji: "ha" }
];

// Words demonstrating batchim (final consonants) closing out a syllable block
var BATCHIM_WORDS = [
  { kr: "한국", romaji: "hanguk", en: "Korea", notes: "batchim: ㄴ, ㄱ" },
  { kr: "밥", romaji: "bap", en: "rice / meal", notes: "batchim: ㅂ" },
  { kr: "문", romaji: "mun", en: "door", notes: "batchim: ㄴ" },
  { kr: "사람", romaji: "saram", en: "person", notes: "batchim: ㅁ" },
  { kr: "옷", romaji: "ot", en: "clothes", notes: "batchim: ㅅ" },
  { kr: "있어요", romaji: "isseoyo", en: "there is / have (polite)", notes: "batchim: ㅆ" }
];

function hangulToDeck(list) {
  return list.map(function (k) {
    return { main: k.char, sub: k.name || "", back: k.romaji, backSub: "", speak: k.char, lang: "ko-KR", hint: k.hint || "" };
  });
}

function syllablesToDeck(list) {
  return list.map(function (k) {
    return { main: k.char, sub: "", back: k.romaji, backSub: "", speak: k.char, lang: "ko-KR" };
  });
}

function vocabToDeck(list) {
  return list.map(function (v) {
    return { main: v.kr, sub: v.romaji, back: v.en, backSub: v.notes || "", speak: v.kr, lang: "ko-KR" };
  });
}

var WEEK3_VOCAB = [
  { kr: "안녕하세요", romaji: "annyeonghaseyo", en: "Hello (all-purpose, polite)" },
  { kr: "죄송합니다", romaji: "joesonghamnida", en: "Sorry (formal)" },
  { kr: "미안합니다", romaji: "mianhamnida", en: "Sorry (casual/general)" },
  { kr: "감사합니다", romaji: "gamsahamnida", en: "Thank you" },
  { kr: "고맙습니다", romaji: "gomapseumnida", en: "Thank you (alternative)" },
  { kr: "네", romaji: "ne", en: "Yes" },
  { kr: "아니요", romaji: "aniyo", en: "No" },
  { kr: "이해가 안 돼요", romaji: "ihaega an dwaeyo", en: "I don't understand" },
  { kr: "안녕하세요, 저는 〇〇입니다. 잘 부탁드립니다.", romaji: "annyeonghaseyo, jeoneun [name] imnida. jal butakdeurimnida.", en: "Hello, I'm [name]. Please treat me well.", notes: "Standard self-introduction — swap 〇〇 for your name." }
];

var WEEK4_VOCAB = [
  { kr: "일", romaji: "il", en: "1 (Sino-Korean)", notes: "Used for money, phone numbers, dates." },
  { kr: "이", romaji: "i", en: "2 (Sino-Korean)" },
  { kr: "삼", romaji: "sam", en: "3 (Sino-Korean)" },
  { kr: "사", romaji: "sa", en: "4 (Sino-Korean)" },
  { kr: "오", romaji: "o", en: "5 (Sino-Korean)" },
  { kr: "육", romaji: "yuk", en: "6 (Sino-Korean)" },
  { kr: "칠", romaji: "chil", en: "7 (Sino-Korean)" },
  { kr: "팔", romaji: "pal", en: "8 (Sino-Korean)" },
  { kr: "구", romaji: "gu", en: "9 (Sino-Korean)" },
  { kr: "십", romaji: "sip", en: "10 (Sino-Korean)" },
  { kr: "백", romaji: "baek", en: "100 (Sino-Korean)" },
  { kr: "천", romaji: "cheon", en: "1,000 (Sino-Korean)" },
  { kr: "만", romaji: "man", en: "10,000 (Sino-Korean)" },
  { kr: "하나", romaji: "hana", en: "1 (Native Korean)", notes: "Used for counting objects, age, hours." },
  { kr: "둘", romaji: "dul", en: "2 (Native Korean)" },
  { kr: "셋", romaji: "set", en: "3 (Native Korean)" },
  { kr: "넷", romaji: "net", en: "4 (Native Korean)" },
  { kr: "다섯", romaji: "daseot", en: "5 (Native Korean)" },
  { kr: "여섯", romaji: "yeoseot", en: "6 (Native Korean)" },
  { kr: "일곱", romaji: "ilgop", en: "7 (Native Korean)" },
  { kr: "여덟", romaji: "yeodeol", en: "8 (Native Korean)" },
  { kr: "아홉", romaji: "ahop", en: "9 (Native Korean)" },
  { kr: "열", romaji: "yeol", en: "10 (Native Korean)" },
  { kr: "얼마예요?", romaji: "eolmayeyo?", en: "How much is it?" },
  { kr: "카드 되나요?", romaji: "kadeu doenayo?", en: "Can I use a card?" }
];

var WEEK5_VOCAB = [
  { kr: "저는 채식주의자예요", romaji: "jeoneun chaesikjuuijayeyo", en: "I am vegetarian" },
  { kr: "고기랑 생선 안 먹어요", romaji: "gogirang saengseon an meogeoyo", en: "I don't eat meat or fish" },
  { kr: "〜 들어있어요?", romaji: "~ deureoisseoyo?", en: "Does this contain ~?", notes: "Use with 고기 (gogi, meat), 생선 (saengseon, fish), 젓갈/액젓 (jeotgal/aekjeot, fermented fish sauce)." },
  { kr: "예약했어요, 〇〇입니다", romaji: "yeyakhaesseoyo, [name] imnida", en: "I have a reservation, under [name]" },
  { kr: "추천 메뉴가 뭐예요?", romaji: "chucheon menyuga mwoyeyo?", en: "What do you recommend?" },
  { kr: "잘 먹었습니다", romaji: "jal meogeotseumnida", en: "Said after finishing a meal (thanks for the food)" },
  { kr: "이거 액젓 들어있어요?", romaji: "igeo aekjeot deureoisseoyo?", en: "Does this have fish sauce in it?", notes: "Many banchan and kimchi use fish sauce even when the main dish looks vegetarian — the Korean equivalent of Japan's dashi trap." }
];

var WEEK6_VOCAB = [
  { kr: "체크인", romaji: "chekeuin", en: "Check-in" },
  { kr: "체크아웃", romaji: "chekeuaut", en: "Check-out" },
  { kr: "방 열쇠를 잃어버렸어요", romaji: "bang yeolsoereul ireobeoryeosseoyo", en: "I lost my room key" },
  { kr: "짐을 맡길 수 있어요?", romaji: "jimeul matgil su isseoyo?", en: "Can I leave my luggage?" },
  { kr: "택시 좀 불러 주시겠어요?", romaji: "taeksi jom bulleo jusigesseoyo?", en: "Could you call a taxi?" },
  { kr: "와이파이 비밀번호가 뭐예요?", romaji: "waipai bimilbeonhoga mwoyeyo?", en: "What's the wifi password?" }
];

var WEEK7_VOCAB = [
  { kr: "〜역이 어디예요?", romaji: "~yeogi eodiyeyo?", en: "Where is ~ station?" },
  { kr: "이 지하철이 〜에 가요?", romaji: "i jihacheori ~e gayo?", en: "Does this subway go to ~?" },
  { kr: "충전할 수 있어요?", romaji: "chungjeonhal su isseoyo?", en: "Can I top up? (T-money card)" },
  { kr: "오른쪽", romaji: "oreunjjok", en: "Right" },
  { kr: "왼쪽", romaji: "oenjjok", en: "Left" },
  { kr: "직진", romaji: "jikjin", en: "Straight ahead" }
];

var WEEK8_VOCAB = [
  { kr: "〜이에요 / 예요", romaji: "~ieyo / yeyo", en: "is / am / are ~", notes: "이에요 after a consonant, 예요 after a vowel." },
  { kr: "〜을/를 좋아해요", romaji: "~eul/reul joahaeyo", en: "I like ~", notes: "을 after a consonant, 를 after a vowel." },
  { kr: "〜 주세요", romaji: "~ juseyo", en: "Please give me ~", notes: "Your all-purpose ordering phrase." },
  { kr: "〜였어요 / 이었어요", romaji: "~yeosseoyo / ieosseoyo", en: "was ~ (simple past)" }
];

// Example won prices for reading-aloud practice (Week 4)
var WON_EXAMPLES = [
  { krw: "₩1,000", kr: "천원", romaji: "cheon won" },
  { krw: "₩5,000", kr: "오천원", romaji: "ocheon won" },
  { krw: "₩10,000", kr: "만원", romaji: "man won" },
  { krw: "₩15,000", kr: "만오천원", romaji: "man ocheon won" },
  { krw: "₩30,000", kr: "삼만원", romaji: "samman won" },
  { krw: "₩50,000", kr: "오만원", romaji: "oman won" },
  { krw: "₩100,000", kr: "십만원", romaji: "simman won" }
];

var REFERENCE_CARD = [
  { kr: "저는 채식주의자예요. 고기, 생선, 액젓도 못 먹어요.", romaji: "Jeoneun chaesikjuuijayeyo. Gogi, saengseon, aekjeotdo mot meogeoyo.", en: "I'm vegetarian. I can't eat meat, fish, or fish sauce either." },
  { kr: "계란이랑 유제품은 괜찮아요.", romaji: "Gyerallang yujepumeun gwaenchanayo.", en: "Eggs and dairy are fine.", optional: true },
  { kr: "감사합니다, 정말 맛있었어요.", romaji: "Gamsahamnida, jeongmal masisseosseoyo.", en: "Thank you, that was delicious." }
];
