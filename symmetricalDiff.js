//returns differences between 2 arrays.
function diffArray(arr1, arr2) {
    const copyArr1 = [...arr1];
    const copyArr2 = [...arr2];
    let deleted = false;
    for (let i = 0; i < copyArr1.length; i++) {
      for (let j = 0; j < copyArr2.length; j++) {
        if (copyArr2[j] === copyArr1[i]) {
          copyArr2.splice(j, 1, 0);
          deleted = true;
        }
      }
      if (deleted) {
        copyArr1.splice(i, 1, 0);
        deleted = false;
      }
    }
    return copyArr1.concat(copyArr2).filter((el) => el !== 0);
  }
  
  //test
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(
    diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
  );
  console.log(
    diffArray(
      ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
  );
  console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
  