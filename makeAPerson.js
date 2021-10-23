let Person = function(firstAndLast) {
    let fullName = firstAndLast;
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    this.getFullName = function() {
      return fullName;
    };
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
    this.setFullName = function(name) {
      fullName = name;
    };
    return firstAndLast;
  }; 
  
  //tests..
  var bob = new Person('Bob Ross');
  console.log("Object.keys(bob).length = ", Object.keys(bob).length);
  console.log("bob instanceof Person = ", bob instanceof Person);
  console.log("bob.firstName = ", bob.firstName);
  console.log("bob.lastName = ", bob.lastName);
  console.log("bob.getFirstName() = ", bob.getFirstName());
  console.log("bob.getLastName() = ", bob.getLastName());
  console.log("bob.getFullName() = ", bob.getFullName());
  console.log("setFirstName(\"Haskell\")")
  bob.setFirstName("Haskell")
  console.log("bob.getFullName() = ", bob.getFullName());
  console.log("setLastName(\"Curry\")")
  bob.setLastName("Curry")
  console.log("bob.getFullName() = ", bob.getFullName());
  console.log("setFullName(\"Haskell Curry\")")
  bob.setFullName("Haskell Curry")
  console.log("bob.getFullName() = ", bob.getFullName());
  console.log("bob.getFirstName() = ", bob.getFirstName());
  console.log("bob.getLastName() = ", bob.getLastName());