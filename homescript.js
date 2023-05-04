
var userInput;
function submitNum(submit){
    userInput = document.getElementById(submit).value;
    console.log(userInput);
    localStorage.setItem("range",userInput);
}