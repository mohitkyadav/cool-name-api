uncoolify = {}
uncoolifyDicts = {}

uncoolifyDicts.alphaNum = {
  '0': 'o',
  '1': 'l',
  '2': 'z',
  '3': 'e',
  '4': 'a',
  '5': 's',
  '6': 'b',
  '7': 't',
  '9': 'g',
  '¡': 'i',
  '_': ' ',
  'ⓐ': 'a',
  'ⓑ': 'b',
  'ⓒ': 'c',
  'ⓓ': 'd',
  'ⓔ': 'e',
  'ⓕ': 'f',
  'ⓖ': 'g',
  'ⓗ': 'h',
  'ⓘ': 'i',
  'ⓙ': 'j',
  'ⓚ': 'k',
  'ⓛ': 'l',
  'ⓜ': 'm',
  'ⓝ': 'n',
  'ⓞ': 'o',
  'ⓟ': 'p',
  'ⓠ': 'q',
  'ⓡ': 'r',
  'ⓢ': 's',
  'ⓣ': 't',
  'ⓤ': 'u',
  'ⓥ': 'v',
  'ⓦ': 'w',
  'ⓧ': 'x',
  'ⓨ': 'y',
  'ⓩ': 'z'
};

uncoolifyDicts.xabovebelow = {
  'a͓̽': 'a',
  'b͓̽': 'b',
  'c͓̽': 'c',
  'd͓̽': 'd',
  'e͓̽': 'e',
  'f͓̽': 'f',
  'g͓̽': 'g',
  'h͓̽': 'h',
  'i͓̽': 'i',
  'j͓̽': 'j',
  'k͓̽': 'k',
  'l͓̽': 'l',
  'm͓̽': 'm',
  'n͓̽': 'n',
  'o͓̽': 'o',
  'p͓̽': 'p',
  'q͓̽': 'q',
  'r͓̽': 'r',
  's͓̽': 's',
  't͓̽': 't',
  'u͓̽': 'u',
  'v͓̽': 'v',
  'w͓̽': 'w',
  'x͓̽': 'x',
  'y͓̽': 'y',
  'z͓̽': 'z'
}

uncoolifyDicts.bracket = {
  '【': 'alphaBracket',
  '】': 'betaBacket'
};
uncoolifyDicts.square = {
	'_' : ' ',
  '🄰': 'a',
  '🄱': 'b',
  '🄲': 'c',
  '🄳': 'd',
  '🄴': 'e',
  '🄵': 'f',
  '🄶': 'g',
  '🄷': 'h',
  '🄸': 'i',
  '🄹': 'j',
  '🄺': 'k',
  '🄻': 'l',
  '🄼': 'm',
  '🄽': 'n',
  '🄾': 'o',
  '🄿': 'p',
  '🅀': 'q',
  '🅁': 'r',
  '🅂': 's',
  '🅃': 't',
  '🅄': 'u',
  '🅅': 'v',
  '🅆': 'w',
  '🅇': 'x',
  '🅈': 'y',
  '🅉': 'z'
};

uncoolifyDicts.symbolic = {
  '7': 't',
  '@': 'a',
  '(': 'c',
  '!': 'i',
  '|': 'l'
}

symbolicRegex = {
  '7': 't',
  '@': 'a',
  '\\(': 'c',
  '!': 'i',
  '\\|': 'l'
}

uncoolifyDicts.emoji = {
	'_' : ' ',
  '🅰': 'a',
  '🅱': 'b',
  '🌜': 'c',
  '🌛': 'd',
  '🎗': 'e',
  '🎏': 'f',
  '🌀': 'g',
  '♓': 'h',
  '🎐': 'i',
  '🎷': 'j',
  '🎋': 'k',
  '👢': 'l',
  '〽️': 'm',
  '🎵': 'n',
  '⚽': 'o',
  '🅿️': 'p',
  '🍳': 'q',
  '🌱': 'r',
  '💲': 's',
  '🌴': 't',
  '⛎': 'u',
  '✅': 'v',
  '🔱': 'w',
  '❎': 'x',
  '🍸': 'y',
  '💤': 'z'
};

uncoolifyDicts.upsidedown = {
  '6': '9',
  '9': '6',
  'Ɛ': '3',
  'ᔭ': '4',
  'Ɫ': '7',
  'ɐ': 'a',
  'q': 'b',
  'ɔ': 'c',
  'p': 'd',
  'ǝ': 'e',
  'ɟ': 'f',
  'ƃ': 'g',
  'ɥ': 'h',
  'ᴉ': 'i',
  'ɾ': 'j',
  'ʞ': 'k',
  'ʃ': 'l',
  'ɯ': 'm',
  'u': 'n',
  'd': 'p',
  'b': 'q',
  'ɹ': 'r',
  's': 's',
  'ʇ': 't',
  'n': 'u',
  'ʌ': 'v',
  'ʍ': 'w',
  'x': 'x',
  'ʎ': 'y',
  '¡': '!',
  '„': '"',
  '⅋': '&',
  ',': '\'',
  '˙': '\\.',
  '؛': ';',
  '¿': '\\?',
  '‾': '_',
  '⁀': '‿',
  '⁆': '⁅',
  '∵': '∴'
}

uncoolifyDicts.wavy = {
  'ᗩ': 'a',
  'ᕊ': 'b',
  'ᑕ': 'c',
  'ᖙ': 'd',
  'ᗴ': 'e',
  'ℱ': 'f',
  'ᘐ': 'g',
  'ᖺ': 'h',
  'ᓮ': 'i',
  'ᒎ': 'j',
  'Ḱ': 'k',
  'ᒪ': 'l',
  'ᙢ': 'm',
  'ﬡ': 'n',
  'ᗢ': 'o',
  'ᕈ': 'p',
  'ᕋ': 'q',
  'ᖇ': 'r',
  'ᔕ': 's',
  '☂': 't',
  'ᘮ': 'u',
  'ᐯ': 'v',
  'ᗯ': 'w',
  'ჯ': 'x',
  '૪': 'y',
  'ᔓ': 'z'
};

uncoolifyDicts.curr = {
  '₳': 'a',
  '฿': 'b',
  '₵': 'c',
  'Đ': 'd',
  'Ɇ': 'e',
  '₣': 'f',
  '₲': 'g',
  'Ⱨ': 'h',
  'ł': 'i',
  'J': 'j',
  '₭': 'k',
  'Ⱡ': 'l',
  '₥': 'm',
  '₦': 'n',
  'Ø': 'o',
  '₱': 'p',
  'Q': 'q',
  'Ɽ': 'r',
  '₴': 's',
  '₮': 't',
  'Ʉ': 'u',
  'V': 'v',
  '₩': 'w',
  'Ӿ': 'x',
  'Ɏ': 'y',
  'Ⱬ': 'z'
};

uncoolifyDicts.doublestruck = {
  '𝕒':'a',
  '𝕓':'b',
  '𝕔':'c',
  '𝕕':'d',
  '𝕖':'e',
  '𝕗':'f',
  '𝕘':'g',
  '𝕙':'h',
  '𝕚':'i',
  '𝕛':'j',
  '𝕜':'k',
  '𝕝':'l',
  '𝕞':'m',
  '𝕟':'n',
  '𝕠':'o',
  '𝕡':'p',
  '𝕢':'q',
  '𝕣':'r',
  '𝕤':'s',
  '𝕥':'t',
  '𝕦':'u',
  '𝕧':'v',
  '𝕨':'w',
  '𝕩':'x',
  '𝕪':'y',
  '𝕫':'z',
}

uncoolifyDicts.fairy = {
  'Ꮧ': 'a',
  'Ᏸ': 'b',
  'ፈ': 'c',
  'Ꮄ': 'd',
  'Ꮛ': 'e',
  'Ꭶ': 'f',
  'Ꮆ': 'g',
  'Ꮒ': 'h',
  'Ꭵ': 'i',
  'Ꮰ': 'j',
  'Ꮶ': 'k',
  'Ꮭ': 'l',
  'Ꮇ': 'm',
  'Ꮑ': 'n',
  'Ꭷ': 'o',
  'Ꭾ': 'p',
  'Ꭴ': 'q',
  'Ꮢ': 'r',
  'Ꮥ': 's',
  'Ꮦ': 't',
  'Ꮼ': 'u',
  'Ꮙ': 'v',
  'Ꮗ': 'w',
  'ጀ': 'x',
  'Ꭹ': 'y',
  'ፚ': 'z'
};

uncoolifyDicts.dot = {
  'å': 'a',
  'β': 'b',
  'ç': 'c',
  'ď': 'd',
  '£': 'e',
  'ƒ': 'f',
  'ğ': 'g',
  'ȟ': 'h',
  'ȋ': 'i',
  'j': 'j',
  'ķ': 'k',
  'Ƚ': 'l',
  'ɱ': 'm',
  'ñ': 'n',
  '¤': 'o',
  'ק': 'p',
  'ǭ': 'q',
  'ȑ': 'r',
  '§': 's',
  'ț': 't',
  'ɥ': 'u',
  '√': 'v',
  'Ψ': 'w',
  '×': 'x',
  'ÿ': 'y',
  'ž': 'z'
};

uncoolifyDicts.unicodemix = {
	'ą':'a',
	'β':'b',
	'¢':'c',
	'δ':'d',
	'Σ':'e',
	'ϝ':'f',
	'§':'g',
	'ℌ':'h',
	'ℹ':'i',
	'ℐ':'j',
	'κ':'k',
	'↳':'l',
	'ϻ':'m',
	'ͷ':'n',
	'Φ':'o',
	'¶':'p',
	'ℚ':'q',
	'ϒ':'r',
	'ᔓ':'s',
	'ͳ':'t',
	'℧':'u',
	'∨':'v',
	'ω':'w',
	'ϰ':'x',
	'¥':'y',
	'ℨ':'z',
}

uncoolifyDicts.newemoji= {
	'🥨':'a',
	'🅱':'b',
	'↪️':'c',
	'↩️':'d',
	'📚':'e',
	'🏳️':'f',
	'📿':'g',
	'🍽':'h',
	'🔩':'i',
	'🃏':'j',
	'🔀':'k',
	'🛴':'l',
	'Ⓜ️':'m',
	'♑️':'n',
	'🌍':'o',
	'🅿️':'p',
	'🍭':'q',
	'➰':'r',
	'💰':'s',
	'☂️':'t',
	'🤘🏼':'u',
	'🖖':'v',
	'🐍':'w',
	'⚔️':'x',
	'✌️':'y',
	'😴':'z',
}

uncoolifyDicts.mathematicalfraktur = {
  '𝔄':'a',
  '𝔅':'b',
  'ℭ':'c',
  '𝔇':'d',
  '𝔈':'e',
  '𝔉':'f',
  '𝔊':'g',
  'ℌ':'h',
  'ℑ':'i',
  '𝔍':'j',
  '𝔎':'k',
  '𝔏':'l',
  '𝔐':'m',
  '𝔑':'n',
  '𝔒':'o',
  '𝔓':'p',
  '𝔔':'q',
  'ℜ':'r',
  '𝔖':'s',
  '𝔗':'t',
  '𝔘':'u',
  '𝔙':'v',
  '𝔚':'w',
  '𝔛':'x',
  '𝔜':'y',
  'ℨ':'z',
}

uncoolifyDicts.mirrored = {
  'a': 'a',
  'b': 'b',
  'c': 'c',
  'd': 'd',
  'e': 'e',
  'f': 'f',
  'g': 'g',
  'h': 'h',
  'i': 'i',
  'j': 'j',
  'k': 'k',
  'l': 'l',
  'm': 'm',
  'n': 'n',
  'o': 'o',
  'p': 'p',
  'q': 'q',
  'r': 'r',
  's': 's',
  't': 't',
  'u': 'u',
  'v': 'v',
  'w': 'w',
  'x': 'x',
  'y': 'y',
  'z': 'z',
  ' ': ' '
};

uncoolify.findMatchingTheme = function(name) {
  let maxMatches = 0;
  let themeMatch = null;
  for (let [theme, pairs] of Object.entries(uncoolifyDicts)) {
    let tempMatches = 0;
    for (let letter in pairs) {
      if (name.indexOf(letter) > -1) {
        if (letter != '_') {
          tempMatches += 1;
        }
      }
    }
    if (tempMatches > maxMatches) {
      maxMatches = tempMatches;
      themeMatch = pairs;
      if (name.length == tempMatches) {
        return themeMatch;
      }
    }
  }
  return themeMatch;
};


uncoolify.alphaNumericName = function(name) {
  if (typeof(name) != 'string') {
    return false;
  }
  /* mirrored */
  if (name == '‮' + name) {
    return '‮' + name;
  }
  let theme = uncoolify.findMatchingTheme(name);
  if (theme == null) {
    return ['Are you sure this is a cool name?'];
  } else if (theme == uncoolifyDicts.symbolic) {
    theme = symbolicRegex;
  } else if (theme == uncoolifyDicts.mirrored) {    
	return [name.split("").reverse().join("")];
  }
  let uncoolName = name.allReplace(theme);
  // For uncoolify upside down
   if (theme == uncoolifyDicts.upsidedown){
 	for(let i = 0; i<name.length; i++){
 		var n = name.charCodeAt(i);
 		var m = uncoolName.charCodeAt(i);
 		if (n == m){ 
 			if(name[i] == "q") {
 				uncoolName = uncoolName.replaceAt(i, "b");
 			}
 			else if(name[i] == "u") {
 				uncoolName = uncoolName.replaceAt(i, "n");
 			}
 			else if(name[i] == "p") {
 				uncoolName = uncoolName.replaceAt(i, "d");
 			}
 		}
	}
  }
  return [uncoolName];
};

module.exports = uncoolify;
