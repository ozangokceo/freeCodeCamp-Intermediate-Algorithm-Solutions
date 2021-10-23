function convertHTML(str) {
    f1:for(let i = 0; i < str.length; i++) {
      switch(str[i]) {
        case "&":
          str = str.replace(/&/g, "&amp;")
        case "<":
          str = str.replace(/</g, "&lt;")
        case ">":
          str = str.replace(/>/g, "&gt;")
        case "\"":
          str = str.replace(/\"/g, "&quot;")
        case "\'":
          str = str.replace(/\'/g, "&apos;")
        break f1;
      }
    }
    return str;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML("<>"));
  console.log(convertHTML("abc"));