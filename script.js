let input = document.querySelector("#userInput");
let button = document.querySelector("#enter");
let ul = document.querySelector("ul");
//Arrow function
let inputValue = () => {
  return input.value.length;
};
//End of Arrow function

// StartCODE
button.addEventListener("click", addFunctionWithClick);

input.addEventListener("keypress", addFunctionWithkeypress);

let ulWithClassArray = Array.from(document.getElementsByClassName("line"));
ulWithClassArray.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});
//EndCODE

//Start of createElement: function that create the li elements, and append it to ul
function createElement() {
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
}
//End of createElement: function that create the li elements, and append it to ul
//Start of addFunctionWithClick: The if statement, stating if you click the enter
// button run this code.

function addFunctionWithClick() {
  if (inputValue() > 0) {
    createElement();
  }
}
//End of addFunctionWithClick: The if statement, stating if you click the enter
// button run this code.

//Start of addFunctionWithKeypress: , stating if you type in the input
//and hit the enter button on keyboard tthis code will run
function addFunctionWithkeypress(event) {
  if (inputValue() > 0 && event.keyCode === 13) {
    createElement();
  }
}

//End of addFunctionWithKeypress: , stating if you type in the input
//and hit the enter button on keyboard tthis code will run
