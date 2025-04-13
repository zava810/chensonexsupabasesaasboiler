import {
	ing115b, binaryw115b,
	bangla115b, guzrati115b, kannada115b, malayalam115b, sinhala115b, telugu115b, 
	gurmukhi115b, hindi115b, korean115b, oriya115b, tamil115b,
} from "./localfonts";

export const w2f = (sval: string): string => {
    switch (sval) {
      case "binaryw115b": return binaryw115b.className;
      case "ing115b": return ing115b.className;
      case "hindi115b": return hindi115b.className;
      case "bangla115b": return bangla115b.className;
      case "korean115b": return korean115b.className;
      case "sinhala115b": return sinhala115b.className;
      case "tamil115b": return tamil115b.className;
      case "kannada115b": return kannada115b.className;
      case "malayalam115b": return malayalam115b.className;
      case "telugu115b": return telugu115b.className;
      case "oriya115b": return oriya115b.className;
      case "gurmukhi115b": return gurmukhi115b.className;
      case "guzrati115b": return guzrati115b.className;
      default: return hindi115b.className;
    }
};
