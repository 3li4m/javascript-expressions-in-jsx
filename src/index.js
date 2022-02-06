import React from "react";
import ReactDOM from "react-dom";

const fName = "Will";
const lName = "Kent";
const myNum = 1;

// to use js within the html we must wrap it within curly braces {}
// we can not use js statements eg
/* 
  if (name === "will"){
    return 5;
  }
  else {
    return 2;
  }
*/

// within es6 we can use string interpelation/inject strings into js
// eg {'${fName} ${lName}'}
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>My lucky number is {myNum}</p>
    <p>2 + 2 = {2 + 2}</p>
    <p>Random Generator {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
