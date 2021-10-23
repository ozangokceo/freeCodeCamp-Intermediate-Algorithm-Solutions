function translatePigLatin(str = "") {
    let word = "way"
    let regex = /[^aeiou]/;
    let strArr = str.split("")
    let intermediateArr = [];
    for (let i = 0; i < strArr.length;) {
      if(regex.test(strArr[i])) {
        word = "ay"
        intermediateArr.push(strArr[i])
        strArr.shift();
      }
      if(!regex.test(strArr[i])) break;
    }
    return strArr.join("") +  intermediateArr.join("") + word;
  }
  
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"))
  console.log(translatePigLatin("glove"))
  console.log(translatePigLatin("algorithm"))
  console.log(translatePigLatin("eight"))
  console.log(translatePigLatin("schwartz") )
  console.log(translatePigLatin("rhythm"))