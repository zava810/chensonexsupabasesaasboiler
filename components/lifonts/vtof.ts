import {
	ing15b, binaryw15b, // ing15mb,
	bangla15b, guzrati15b, kannada15b, malayalam15b, sinhala15b, telugu15b, 
	gurmukhi15b, hindi15b, korean15b, oriya15b, tamil15b,
} from "./localfonts";

export const v_to_f = (sval: string): string => {
    switch (sval) {
      case "ing15b": return ing15b.className;
      //case "ing15m": return ing15m.className;
      //case "iing15b": return iing15b.className;
      //case "ihindi15b": return ihindi15b.className;
      //case "ing4": return ing4.className;
      //case "ing25": return ing25.className;
      case "binaryw15b": return binaryw15b.className;
      case "hindi15b": return hindi15b.className;
      //case "hindi25": return hindi25.className;
      case "bangla15b": return bangla15b.className;
      case "korean15b": return korean15b.className;
      case "sinhala15b": return sinhala15b.className;
      case "tamil15b": return tamil15b.className;
      case "kannada15b": return kannada15b.className;
      case "malayalam15b": return malayalam15b.className;
      case "telugu15b": return telugu15b.className;
      case "oriya15b": return oriya15b.className;
      case "gurmukhi15b": return gurmukhi15b.className;
      case "guzrati15b": return guzrati15b.className;
      default: return hindi15b.className;
    }
};
