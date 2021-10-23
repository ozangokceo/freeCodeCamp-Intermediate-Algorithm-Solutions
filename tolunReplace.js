/*
  Objective: Write a function that takes two arguments
  Arg 1: template (String)
  Arg 2: data (Object)
  
  If the string has any field in double asterixes (**Something**), and if that matches to data, replace it with the data.
  
  Example:
  Template: "Hello **First name**. **Address** is your address?"
  Data:  { 'First name': 'John', Address: "1234 Street, Shire, Middle Earth" }
  
  const result = insertData(template, data)
  console.log(result)
  
  expected outcome: "Hello John. 1234 Street, Shire, Middle Earth is your address?"
*/

function insertData(template = "", object = {}) {
    let regex = /\*\*.*?\*\*/;
    let testRegex = template.match(regex);
    for (const key in object) {
      template = template.replace(regex, object[key]);
    }
    return template;
  }
  
  let template = "Hello **First name**. **Address** is your address?";
  let data = { 'First name': 'John', Address: "1234 Street, Shire, Middle Earth" };
  
  const result = insertData(template, data)
  console.log(result)