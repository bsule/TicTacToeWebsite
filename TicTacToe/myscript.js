
var userInput=localStorage.getItem("range");
var color;

if(userInput!=1 && userInput!=2 && userInput!=3){
    userInput=1;
}

if(userInput==1){
    color='red';
    document.getElementById("topText").innerHTML="You are Red, the Computer is Black";
}
else if(userInput==2){
    color='purple';
    document.getElementById("topText").innerHTML="You are Purple, the Computer is Black";
}
else{
    color='white';
    document.getElementById("topText").innerHTML="You are White, the Computer is Black";
}

var board = [['','',''],['','',''],['','','']];

$("td").click(function(){
    $(this).find('button').css('background-color',color);
    console.log(userInput);
})