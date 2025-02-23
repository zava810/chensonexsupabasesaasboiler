import {
	ing15, ing25, binaryv15,
// eng15, hex15, binaryh15,	
//	bangla115, gurmukhi115, oriya115, telugu115, 
//	guzrati115, kannada115, korean115, sinhala115, 
//	hindi115, malayalam115, tamil115, 

	bangla15, guzrati15, kannada15, malayalam15, sinhala15, telugu15, 
	gurmukhi15, hindi15, korean15, oriya15, tamil15, 

	bangla25, guzrati25, kannada25, malayalam25, sinhala25, telugu25, 
	gurmukhi25, hindi25, korean25, oriya25, tamil25, 

//	lbangla15, lhindi15, lmalayalam15, ltamil15, 
//	lgurmukhi15, lkannada15, loriya15, ltelugu15, 
//	lguzrati15, lkorean15, lsinhala15, 
//
//	ubangla15, uhindi15, umalayalam15, utamil15, 
//	ugurmukhi15, ukannada15, uoriya15, utelugu15, 
//	uguzrati15, ukorean15, usinhala15, 
//
//	lbangla25, lhindi25, lmalayalam25, ltamil25, 
//	lgurmukhi25, lkannada25, loriya25, ltelugu25, 
//	lguzrati25, lkorean25, lsinhala25, 
//
//	ubangla25, uhindi25, umalayalam25, utamil25, 
//	ugurmukhi25, ukannada25, uoriya25, utelugu25, 
//	uguzrati25, ukorean25, usinhala25, 
//
//	lbangla85, lhindi85, lmalayalam85, ltamil85, 
//	lgurmukhi85, lkannada85, loriya85, ltelugu85, 
//	lguzrati85, lkorean85, lsinhala85, 
//
//	ubangla85, uhindi85, umalayalam85, utamil85, 
//	ugurmukhi85, ukannada85, uoriya85, utelugu85, 
//	uguzrati85, ukorean85, usinhala85,
//
//	lbangla05, lhindi05, lmalayalam05, ltamil05, 
//	lgurmukhi05, lkannada05, loriya05, ltelugu05, 
//	lguzrati05, lkorean05, lsinhala05, 
//
//	ubangla05, uhindi05, umalayalam05, utamil05, 
//	ugurmukhi05, ukannada05, uoriya05, utelugu05, 
//	uguzrati05, ukorean05, usinhala05,
//
//	hexbangla15, hexguzrati15, hexkannada15, hexmalayalam15, hexsinhala15, hextelugu15,
//	hexgurmukhi15, hexhindi15, hexkorean15, hexoriya15, hextamil15,
//
//	hexlbangla05, hexlhindi05, hexlmalayalam05, hexltamil05,
//	hexlgurmukhi05, hexlkannada05, hexloriya05, hexltelugu05,
//	hexlguzrati05, hexlkorean05, hexlsinhala05,
//
//	hexubangla05, hexuhindi05, hexumalayalam05, hexutamil05,
//	hexugurmukhi05, hexukannada05, hexuoriya05, hexutelugu05,
//	hexuguzrati05, hexukorean05, hexusinhala05
} from "./localfonts";
/*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls [bghkmost]*[a-z]15.*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls [bghkmost]*[a-z]25.*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls l*[a-z]15.*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls u*[a-z]15.*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls l*[a-z]25.*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls u*[a-z]25.*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls [bghkmost]*[a-z]115.*
~/mg/vrcl/shenlu/components/lifonts/fonts $ls [beih]*[a-z]115.*
 */
export const v_to_f = (sval: string): string => {
    switch (sval) {
      case "ing15": return ing15.className;
      case "ing25": return ing25.className;
      case "binaryv15": return binaryv15.className;
//      case "eng15": return eng15.className;
//      case "eng25": return eng25.className;
//      case "hex15": return hex115.className;
//      case "binaryh15": return binaryh115.className;
      // hindi115, hindi15, hindi25, lhindi15, uhindi15, lhindi25, uhindi25, lhindi85, uhindi85
      case "hindi15": return hindi15.className;
      case "hindi25": return hindi25.className;
      // bangla115, bangla15, bangla25, lbangla15, ubangla15, lbangla25, ubangla25, lbangla85, ubangla85
      case "bangla15": return bangla15.className;
      case "bangla25": return bangla25.className;
      // korean115, korean15, korean25, lkorean15, ukorean15, lkorean25, ukorean25, lkorean85, ukorean85
      case "korean15": return korean15.className;
      case "korean25": return korean25.className;
      // sinhala115, sinhala15, sinhala25, lsinhala15, usinhala15, lsinhala25, usinhala25, lsinhala85, usinhala85
      case "sinhala15": return sinhala15.className;
      case "sinhala25": return sinhala25.className;
      // tamil115, tamil15, tamil25, ltamil15, utamil15, ltamil25, utamil25, ltamil85, utamil85
      case "tamil15": return tamil15.className;
      case "tamil25": return tamil25.className;
      // kannada115, kannada15, kannada25, lkannada15, ukannada15, lkannada25, ukannada25, lkannada85, ukannada85
      case "kannada15": return kannada15.className;
      case "kannada25": return kannada25.className;
      // malayalam115, malayalam15, malayalam25, lmalayalam15, umalayalam15, lmalayalam25, umalayalam25, lmalayalam85, umalayalam85
      case "malayalam15": return malayalam15.className;
      case "malayalam25": return malayalam25.className;
      // telugu115, telugu15, telugu25, ltelugu15, utelugu15, ltelugu25, utelugu25, ltelugu85, utelugu85
      case "telugu15": return telugu15.className;
      case "telugu25": return telugu25.className;
      // oriya115, oriya15, oriya25, loriya15, uoriya15, loriya25, uoriya25, loriya85, uoriya85
      case "oriya15": return oriya15.className;
      case "oriya25": return oriya25.className;
      // gurmukhi115, gurmukhi15, gurmukhi25, lgurmukhi15, ugurmukhi15, lgurmukhi25, ugurmukhi25, lgurmukhi85, ugurmukhi85
      case "gurmukhi15": return gurmukhi15.className;
      case "gurmukhi25": return gurmukhi25.className;
      // guzrati15, guzrati25, lguzrati15, uguzrati15, lguzrati25, uguzrati25, lguzrati85, uguzrati85
      case "guzrati15": return guzrati15.className;
      case "guzrati25": return guzrati25.className;
      default: return hindi15.className;
    }
};
