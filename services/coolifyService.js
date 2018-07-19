coolify = {};
coolifyDicts = {};

coolifyDicts.alphaNum = {
  'b' : '6',
  'e' : '3',
  'l' : '1',
  'o' : '0',
  's' : '5',
  'z' : '2',
  ' ' : '_'
};
coolifyDicts.bracket = {
  'alphaBracket' : '【',
  'betaBacket' : '】',
};
coolifyDicts.rounded = {
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
    let cool_name = name.allReplace(coolifyDicts.alphaNum);
    return cool_name;
  } else {
    return false;
  }
};

module.exports = coolify;
