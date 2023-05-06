
var userInput;
function submitNum(submit){ // when clicking submit, range is stored and set to the next page
    userInput = document.getElementById(submit).value;
    localStorage.setItem("range",userInput);
}