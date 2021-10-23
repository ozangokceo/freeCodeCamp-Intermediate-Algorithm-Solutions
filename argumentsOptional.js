function addTogether(num1, num2) {
    if(num1 && num2) {
      if(typeof(num1) !== "number" || typeof(num2) !== "number") { return undefined }
      return num1 + num2
    }
    if(!num2) {
      if(typeof(num1) !== "number") { return undefined }
      return function(num2) {
        if(typeof(num2) !== "number") { return undefined }
        return num1 + num2
      }
    }
  }
  
  //tests..
  console.log(addTogether(2,3));
  console.log(addTogether(23, 30));
  console.log(addTogether(5)(7));
  console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
  console.log(addTogether(2, "3"));
  console.log(addTogether(2)([3]));