function spinalCase(str = "") {
    let intermediateStr = str.replace(/([A-Z]| [a-z])/g, "-$1").toLowerCase().split("");
    if(intermediateStr[0] === "-") {
      intermediateStr.shift()
      }
    let finalStr = intermediateStr.filter(i => i !== " " && i !== "_")
    return finalStr.join("");
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("thisIsSpinalTap"));
  console.log(spinalCase("The_Andy_Griffith_Show"));
  console.log(spinalCase("Teletubbies say Eh-oh"));
  console.log(spinalCase("AllThe-small Things"));