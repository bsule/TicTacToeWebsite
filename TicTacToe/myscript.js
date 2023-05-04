
var userInput=localStorage.getItem("range");
var color;
var start;
var clickedId;
var board = [['','',''],['','',''],['','','']];

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



// random computer square
function computerStart(){
    return Math.floor(Math.random()*9)+1;
}

if(startValue==1){
    var computerSquare = computerStart();
    if(computerSquare==1){
        $("#one").find('button').css("background-color", "black");
        board[0][0]=1;
    }
    else if(computerSquare==2){
        $("#two").find('button').css("background-color", "black");
        board[0][1]=1;
    }
    else if(computerSquare==3){
        $("#three").find('button').css("background-color", "black");
        board[0][2]=1;
    }
    else if(computerSquare==4){
        $("#four").find('button').css("background-color", "black");
        board[1][0]=1;
    }
    else if(computerSquare==5){
        $("#five").find('button').css("background-color", "black");
        board[1][1]=1;
    }
    else if(computerSquare==6){
        $("#six").find('button').css("background-color", "black");
        board[1][2]=1;
    }
    else if(computerSquare==7){
        $("#seven").find('button').css("background-color", "black");
        board[2][0]=1;
    }
    else if(computerSquare==8){
        $("#eight").find('button').css("background-color", "black");
        board[2][1]=1;
    }
    else if(computerSquare==9){
        $("#nine").find('button').css("background-color", "black");
        board[2][2]=1;
    }
}

function reply(id){
    clickedId=id; // sets clicked id to the id of whatever button was clicked
}

function userTurn(){
    $("td").click(function(){
        if(clickedId=="one" && board[0][0]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="two" && board[0][1]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="three" && board[0][2]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="four" && board[1][0]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="five" && board[1][1]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="six" && board[1][2]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="seven" && board[2][0]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="eight" && board[2][1]==''){
            $(this).find('button').css("background-color",color);
        }
        else if(clickedId=="two" && board[2][2]==''){
            $(this).find('button').css("background-color",color);
        }
    })
    
}

userTurn();

