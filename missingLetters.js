function fearNotLetter(str) {
    let dictionary = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < dictionary.length; i++) {  
      if(dictionary[i] !== str[0]) continue
      if(dictionary[i] === str[0]) {
        for (let j = 0; j < str.length; j++, i++) {
          if(str[j] === dictionary[i]) continue;
          if(str[j] !== dictionary[i]) return dictionary[i]
        }
      }
    }
    return undefined;
  }

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));