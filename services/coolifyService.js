coolify = {};
coolifyDicts = {};

coolifyDicts.alphaNum = {
  'a' : '4',
  'b' : '6',
  'e' : '3',
  'g' : '6',
  'i' : '1',
  'l' : '1',
  'o' : '0',
  's' : '5',
  't' : '7',
  'z' : '2',
  ' ' : '_'
};
coolifyDicts.bracket = {
  'alphaBracket' : '【',
  'betaBacket' : '】',
};
coolifyDicts.square = {
  ' ' : '_',
  'a' : '🄰',
  'b' : '🄱',
  'c' : '🄲',
  'd' : '🄳',
  'e' : '🄴',
  'f' : '🄵',
  'g' : '🄶',
  'h' : '🄷',
  'i' : '🄸',
  'j' : '🄹',
  'k' : '🄺',
  'l' : '🄻',
  'm' : '🄼',
  'n' : '🄽',
  'o' : '🄾',
  'p' : '🄿',
  'q' : '🅀',
  'r' : '🅁',
  's' : '🅂',
  't' : '🅃',
  'u' : '🅄',
  'v' : '🅅',
  'w' : '🅆',
  'x' : '🅇',
  'y' : '🅈',
  'z' : '🅉'
};
coolifyDicts.rounded = {
  ' ' : '_',
  'a' : 'ⓐ',
  'b' : 'ⓑ',
  'c' : 'ⓒ',
  'd' : 'ⓓ',
  'e' : 'ⓔ',
  'f' : 'ⓕ',
  'g' : 'ⓖ',
  'h' : 'ⓗ',
  'i' : 'ⓘ',
  'j' : 'ⓙ',
  'k' : 'ⓚ',
  'l' : 'ⓛ',
  'm' : 'ⓜ',
  'n' : 'ⓝ',
  'o' : 'ⓞ',
  'p' : 'ⓟ',
  'q' : 'ⓠ',
  'r' : 'ⓡ',
  's' : 'ⓢ',
  't' : 'ⓣ',
  'u' : 'ⓤ',
  'v' : 'ⓥ',
  'w' : 'ⓦ',
  'x' : 'ⓧ',
  'y' : 'ⓨ',
  'z' : 'ⓩ'
};

coolifyDicts.symbolic = {
  'a': '@',
  'c': '(',
  'i': '!',
  'l': '|',
  't': '7'
}

String.prototype.allReplace = function(obj) {
  var retStr = this;
  for (var x in obj) {
      retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
};

coolify.alphaNumericName = function(name) {
  if(typeof(name) == 'string') {
		name = name.toLocaleLowerCase();
		let cool_name_alphanum = name.allReplace(coolifyDicts.alphaNum);
    let cool_name_rounded = name.allReplace(coolifyDicts.rounded);
		let cool_name_square = name.allReplace(coolifyDicts.square);
		let cool_name_round_alphanum = cool_name_rounded.slice(0, 1) + cool_name_alphanum.slice(1, name.length - 1)
												+ cool_name_rounded.slice(name.length - 1, name.length);
   		let cool_name_symbolic = name.allReplace(coolifyDicts.symbolic);
		let cool_name_mirrored = '‮' + name;
     return [cool_name_alphanum, cool_name_rounded, cool_name_square, cool_name_round_alphanum, cool_name_symbolic, cool_name_mirrored];
  } else {
    return false;
  }
};

module.exports = coolify;
