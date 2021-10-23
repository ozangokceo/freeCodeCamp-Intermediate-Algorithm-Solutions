function steamrollArray(arr) {
    let globalArr = []
    function steamrollArrayInner(arr) {
      for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {steamrollArrayInner(arr[i])};
        globalArr.push(arr[i]);
      }
      return globalArr.filter(el => !Array.isArray(el));
    }
    return steamrollArrayInner(arr)
  }
  
  console.log(steamrollArray([[["a"]], [["b"]]]));
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([1, [], [3, [[4]]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]));