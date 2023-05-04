
var userInput=localStorage.getItem("range");
var color;
var start;

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

function whoStarts(){
    start = Math.floor(Math.random()*2);
    return start;
}

var startValue=whoStarts();
if(startValue==0){
    document.getElementById("start").innerHTML="You Start!";
}
else{
    document.getElementById("start").innerHTML="Computer Starts";
}

var board = [['','',''],['','',''],['','','']];

// random computer square
function computerStart(){
    return Math.floor(Math.random()*9)+1;
}

if(startValue==1){
    var computerSquare = computerStart();
    if(computerSquare==1){
        $("#one").find('button').css("background-color", "black");
    }
    else if(computerSquare==2){
        $("#two").find('button').css("background-color", "black");
    }
    else if(computerSquare==3){
        $("#three").find('button').css("background-color", "black");
    }
    else if(computerSquare==4){
        $("#four").find('button').css("background-color", "black");
    }
    else if(computerSquare==5){
        $("#five").find('button').css("background-color", "black");
    }
    else if(computerSquare==6){
        $("#six").find('button').css("background-color", "black");
    }
    else if(computerSquare==7){
        $("#seven").find('button').css("background-color", "black");
    }
    else if(computerSquare==8){
        $("#eight").find('button').css("background-color", "black");
    }
    else if(computerSquare==9){
        $("#nine").find('button').css("background-color", "black");
    }
}

$("td").click(function(){
    $(this).find('button').css('background-color',color);
    console.log(userInput);
})