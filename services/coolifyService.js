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

coolifyDicts.xabovebelow = {
  'a':'a͓̽',
  'b':'b͓̽',
  'c':'c͓̽',
  'd':'d͓̽',
  'e':'e͓̽',
  'f':'f͓̽',
  'g':'g͓̽',
  'h':'h͓̽',
  'i':'i͓̽',
  'j':'j͓̽',
  'k':'k͓̽',
  'l':'l͓̽',
  'm':'m͓̽',
  'n':'n͓̽',
  'o':'o͓̽',
  'p':'p͓̽',
  'q':'q͓̽',
  'r':'r͓̽',
  's':'s͓̽',
  't':'t͓̽',
  'u':'u͓̽',
  'v':'v͓̽',
  'w':'w͓̽',
  'x':'x͓̽',
  'y':'y͓̽',
  'z':'z͓̽',
}

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
coolifyDicts.emoji = {
	' ' : '_',
	'a' : '🅰',
	'b' : '🅱',
	'c' : '🌜',
	'd' : '🌛',
	'e' : '🎗',
	'f' : '🎏',
	'g' : '🌀',
	'h' : '♓',
	'i' : '🎐',
	'j' : '🎷',
	'k' : '🎋',
	'l' : '👢',
	'm' : '〽️',
	'n' : '🎵',
	'o' : '⚽',
	'p' : '🅿️',
	'q' : '🍳',
	'r' : '🌱',
	's' : '💲',
	't' : '🌴',
	'u' : '⛎',
	'v' : '✅',
	'w' : '🔱',
	'x' : '❎',
	'y' : '🍸',
	'z' : '💤'
};

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
		let cool_name_emoji = name.allReplace(coolifyDicts.emoji);
		let cool_name_round_alphanum = cool_name_rounded.slice(0, 1) + cool_name_alphanum.slice(1, name.length - 1)
			+ cool_name_rounded.slice(name.length - 1, name.length);
		let cool_name_symbolic = name.allReplace(coolifyDicts.symbolic);
		let cool_name_mirrored = '‮' + name;
		let cool_name_xabovebelow = name.allReplace(coolifyDicts.xabovebelow);
		return [cool_name_alphanum, cool_name_rounded, cool_name_square, cool_name_round_alphanum, cool_name_symbolic, cool_name_mirrored, cool_name_emoji, cool_name_xabovebelow];
	} else {
		return false;
	}
};

module.exports = coolify;
