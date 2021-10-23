function uniteUnique(...arr) {
    let arrays = [...arr]
    let interArr = [];
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].forEach(element => {
        interArr.push(element);
      });
    }
  
    console.log(interArr)
    for (let i = 0; i < interArr.length; i++) {
      for (let j = 0; j < interArr.length; j++) {
        if( interArr[i] === interArr[j]) {
          if(i === j) continue;
          interArr.splice(j, 1, 0);
        }
      }
  
    }
    return interArr.filter(el => el !== 0);
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));