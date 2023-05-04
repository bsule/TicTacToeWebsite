
var userInput=localStorage.getItem("range");

$("td").click(function(){
    $(this).find('button').css('background-color','red');
    console.log(userInput);
})