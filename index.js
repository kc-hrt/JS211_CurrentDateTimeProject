// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 


// Write a JavaScript program to convert a number to a string.
const numString = (num) => {
  return num.toString();
}

console.log(numString(7) + "   type: " + typeof(numString(7)));
console.log(" ");



// Write a JavaScript program to convert a string to the number.
const stringNum = (string) => {
  return parseInt(string);
}

console.log(stringNum("77") + "  type: " + typeof(stringNum("77")));
console.log(" ");


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const varType = (variable) => {
    return typeof(variable);
  }

  console.log(varType(true));
  console.log(varType(null));
  console.log(varType());
  console.log(varType(777));
  console.log(varType("cat"/4));
  console.log(varType("dog"));
  console.log(" ");
  
// Write a JavaScript program that adds 2 numbers together.
const addingTwo = (add0, add1) => {
  return add0 + add1;
}

console.log(addingTwo(7,3));
console.log(" ");

// Write a JavaScript program that runs only when 2 things are true.
const twoTruths = (var1, var2) => {
  if (var1 == 7 && var2 == 7) {
    return true;
  }
}
console.log(twoTruths(7,7));
console.log(twoTruths(7,3));
console.log(" ");


// Write a JavaScript program that runs when 1 of 2 things are true.
const andALie = (var1, var2) => {
  if (var1 == 7 || var2 == 7) {
    return true;
  }
}
console.log(andALie(7,7));
console.log(andALie(7,3));
console.log(andALie(3,3));
console.log(" ");


// Write a JavaScript program that runs when both things are not true.  
const nothingMatters = (var1, var2) => {
  if (var1 == 7 && var2 == 7) {
    // return true;
  } else {
      return "false=true";
    }
}
console.log(nothingMatters(7,7));
console.log(nothingMatters(7,3));
console.log(" ");



// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
