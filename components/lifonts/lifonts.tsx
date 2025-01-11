import localFont from "next/font/local";

export const eng115_font = localFont({ src: "./fonts/eng115.woff2", display: "swap", });
export const ing115_font = localFont({ src: "./fonts/ing115.woff2", display: "swap", });
export const hingl115_font = localFont({ src: "./fonts/hingl115.woff2", display: "swap", });
export const hingu115_font = localFont({ src: "./fonts/hingu115.woff2", display: "swap", });
export const seg115_font = localFont({ src: "./fonts/seg115.woff2", display: "swap", });
export const hin115_font = localFont({ src: "./fonts/hin115.woff2", display: "swap", });
export const bangla115_font = localFont({ src: "./fonts/bangla115.woff2", display: "swap", });
export const telugu115_font = localFont({ src: "./fonts/telugu115.woff2", display: "swap", });
export const mlyalm115_font = localFont({ src: "./fonts/mlyalm115.woff2", display: "swap", });
export const tmil115_font = localFont({ src: "./fonts/tmil115.woff2", display: "swap", });
export const korean115_font = localFont({ src: "./fonts/korean115.woff2", display: "swap", });

export const kannada115_font = localFont({ src: "./fonts/kannada115.woff2", display: "swap", });
export const guzrati115_font = localFont({ src: "./fonts/guzrati115.woff2", display: "swap", });
export const gurmukhi115_font = localFont({ src: "./fonts/gurmukhi115.woff2", display: "swap", });
export const odia115_font = localFont({ src: "./fonts/odia115.woff2", display: "swap", });
export const sinhala115_font = localFont({ src: "./fonts/sinhala115.woff2", display: "swap", });
export const hex115_font = localFont({ src: "./fonts/hex115.woff2", display: "swap", });
export const binaryvertical115_font = localFont({ src: "./fonts/binaryvertical115.woff2", display: "swap", });
export const binaryhoriontal115_font = localFont({ src: "./fonts/binaryhoriontal115.woff2", display: "swap", });
export const hscii115_font = localFont({ src: "./fonts/hscii115.woff2", display: "swap", });

const FontPicker: React.FC = () => {
  const handlevaluechange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    document.body.className = "";
    const v_to_f = (sval: string): string => {
      switch (sval) {
        case "0": return hingu115_font.className;
        case "1": return hin115_font.className;
        case "2": return hingl115_font.className;
        case "3": return ing115_font.className;
        case "4": return sinhala115_font.className;
        case "5": return korean115_font.className;
        case "6": return tmil115_font.className;
        case "7": return kannada115_font.className;
        case "8": return mlyalm115_font.className;
        case "9": return telugu115_font.className;
        case "L": return odia115_font.className;
        case "J": return bangla115_font.className;
        case "B": return gurmukhi115_font.className;
        case "W": return hex115_font.className;
        case "E": return guzrati115_font.className;
        case "F": return eng115_font.className;
        case "10": return hscii115_font.className;
        case "11": return seg115_font.className;
        case "12": return binaryvertical115_font.className;
        default: return seg115_font.className;
      }
    };
    const sf = v_to_f(e.target.value);
    document.body.classList.add(sf);
    document.body.classList.add("antialiased");
  };
  return (
    <select
      onChange={handlevaluechange}
      className="select text-zinc-50 italic font-bold bg-black mx-4 w-1/4"
    >
      <option value="0">0_HiNgu115_font</option>
      <option value="1">1_Hin115_font</option>
      <option value="2">2_HiNgl115_font</option>
      <option value="3">3_iNg31:a-z+ADHTN</option>
      <option value="4">4_sinHalA115_font</option>
      <option value="5">4_korean115_font</option>
      <option value="6">6_Tamil115_font</option>
      <option value="7">7_kannadA115_font</option>
      <option value="8">8_malayAlam115_font</option>
      <option value="9">9_Telugu115_font</option>
      <option value="L">L_odiA115_font</option>
      <option value="J">J_bANglA115_font</option>
      <option value="B">B_gurmukhi115_font</option>
      <option value="W">W_hex(89LJBWEF 10=vnti=4*4)</option>
      <option value="E">E_guzrATi115_font</option>
      <option value="F">F_Eng52:a-zA-Z</option>
      <option value="10">10_Hscii115_font</option>
      <option value="11">11_7seglcd</option>
      <option value="12">12_binary(89LJBWEF 10=vnti=8+8)</option>
    </select>
  );
};
export default FontPicker;

/*
 * https://learnkorean.in/learn-korean-script-hangeul-for-indian-learners/ (good hindi korean video)
 * youtube.com/shorts/OaN-v8F6oy0
 * https://www.busuu.com/en/korean/pronunciation
 * ㅌㄸㅍㅂㅅㅑㄹlㅁㄴfԃ=tdpbsyrlmnfD
 * five double consonants: ㄲ, ㄸ, ㅃ, ㅆ and ㅉ
 * t	ㅌ
 * d	ㄸ
 * p	ㅍ
 * bpf	ㅂ
 * s/t	ㅅ
 * y	ㅑ
// r/l	ㄹ
// m	ㅁ	good
// n	ㄴ	good
// bpf	ㅂ

//ㄷ	d/t
//ㄱ	g/k
//ㅋ	k
//

//ㅇ	ng
//ㅈ	j/ch
//ㅊ	ch(/t)



//ㅎ	h

// ㅌ다ㅍ바ㅅy라lㅁㄴfԃ  
as per https://www.busuu.com/en/korean/pronunciation
Consonant	Pronunciation		Consonant	Pronunciation
ㄱ			[g] or [k]				ㅇ			[-]
ㄴ				[n]					ㅈ		[j] or [ch]
ㄷ			[d] or [t]				ㅊ			[ch]
ㄹ			[r] or [l]				ㅋ			[k]
ㅁ				[m]					ㅌ			[t]
ㅂ			[b]or[p]				ㅍ			[p]
ㅅ				[s]					ㅎ			[h]

////////georgian
////// https://www.mondly.com/blog/hangul-korean-alphabet-pronunciation/ ////////
////////////////////////
// 19 conso ㄱ, ㄲ, ㄴ, ㄷ, ㄸ, ㄹ, ㅁ, ㅂ, ㅃ, ㅅ, ㅆ, ㅇ, ㅈ, ㅉ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ
ㅌ	티읕	tieut
ㄸ	디귿	digeut ㄸ ㄷ	쌍디귿	ssangdigeut
// The Hangul syllable for the sound "d" as in "dog" is ㄸ, which is pronounced 쌍디귿 (ssang digeut). ㄸ is a strong "d" sound, similar to "dog" or "day".
ㅍ	피읖	pieup
ㅂ	비읍	bieup ㅃ	쌍비읍	ssangbieup
ㅅ	시옷	siot ㅆ	쌍시옷	ssangsiot ㅉ	쌍지읒	ssangjieut
ㅑ	ya ㅒ	yae ㅕ	yeo ㅖ	ye ㅛ	yo ㅠ	yu
ㄹ	리을	rieul
l	을
// if ㄹ is used at the beginning of a word or as a final consonant, then ㄹ is pronounced as an 'L' sound
ㅁ	미음	mieum
ㄴ	니은	nieun
f
ㄲ	쌍기역	ssangiyeok ,
ㄱ	기역	giyeok
ㅊ	치읓	chieut
ㅋ	키읔	kieuk
/////////giscus font style
.markdown .g-emoji {
  //font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}
.markdown .footnotes .data-footnote-backref .g-emoji {
  //font-family: monospace;
}
const list = document.getElementsByClassName("markdown");
for (var i = 0; i < list.length; ++i) {
  list[i].style.fontFamily = "ing115_font";
}
*/
