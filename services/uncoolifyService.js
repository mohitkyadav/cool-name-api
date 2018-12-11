uncoolify = {}
uncoolifyDicts = {}

uncoolifyDicts.alphaNum = {
  '0': 'o',
  '1': 'l',
  '2': 'z',
  '3': 'e',
  '4': 'a',
  '5': 's',
  '6': 'g',
  '7': 't',
  '¡': 'i',
  '_': ' '
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
uncoolifyDicts.rounded = {
	'_' : ' ',
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
  }
  let uncoolName = name.allReplace(theme);
  return [uncoolName];
};

module.exports = uncoolify;
