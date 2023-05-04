
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
// if computer has first move
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
            board[0][0]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="two" && board[0][1]==''){
            $(this).find('button').css("background-color",color);
            board[0][1]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="three" && board[0][2]==''){
            $(this).find('button').css("background-color",color);
            board[0][2]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="four" && board[1][0]==''){
            $(this).find('button').css("background-color",color);
            board[1][0]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="five" && board[1][1]==''){
            $(this).find('button').css("background-color",color);
            board[1][1]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="six" && board[1][2]==''){
            $(this).find('button').css("background-color",color);
            board[1][2]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="seven" && board[2][0]==''){
            $(this).find('button').css("background-color",color);
            board[2][0]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="eight" && board[2][1]==''){
            $(this).find('button').css("background-color",color);
            board[2][1]='0';
            checkWin();
            computerMove();
        }
        else if(clickedId=="nine" && board[2][2]==''){
            $(this).find('button').css("background-color",color);
            board[2][2]='0';
            checkWin();
            computerMove();
        }
    })
    
}

function computerMove(){
    
   
    $("#five").find('button').css("background-color", "black");
    console.log("hello")

    checkWin();
}

function checkWin(){
    var computerWinning = false;
    var userWinning = false;
    var won=2;
    for(var i=0;i<3;i++){ // horizontal win
        for(var j=0;j<3;j++){
            if(j==0 && board[i][j]=='0'){
                userWinning=true;
            }
            else if(j==0 && board[i][j]=='1'){
                computerWinning = true;
            }
            else if((j==1 || j==2) && board[i][j]=='0'){
                if(userWinning==true && j==1){
                    continue;
                }
                else if(userWinning==true && j==2){
                    won=0;
                    console.log("won");
                }
                else if(userwinning==false){
                    userWinning=false;
                    computerWinning = false;
                    break;
                }
            }
            else if((j==1 || j==2) && board[i][j]=='1'){
                if(computerWinning==true && j==1){
                    continue;
                }
                else if(computerWinning==true && j==2){
                    won=1;
                }
                else if(computerWinning==false){
                    userWinning=false;
                    computerWinning = false;
                    break;
                }
            }
            else{
                userWinning=false;
                computerWinning = false;
                break;
            }
        }
    }

    for(var i=0;i<3;i++){ // vertical win
        for(var j=0;j<3;j++){
            if(j==0 && board[j][i]=='0'){
                userWinning=true;
            }
            else if(j==0 && board[j][i]=='1'){
                computerWinning = true;
            }
            else if((j==1 || j==2) && board[j][i]=='0'){
                if(userWinning==true && j==1){
                    continue;
                }
                else if(userWinning==true && j==2){
                    won=0;
                    console.log("won");
                }
                else if(userwinning==false){
                    userWinning=false;
                    computerWinning = false;
                    break;
                }
            }
            else if((j==1 || j==2) && board[j][i]=='1'){
                if(computerWinning==true && j==1){
                    continue;
                }
                else if(computerWinning==true && j==2){
                    won=1;
                }
                else if(computerWinning==false){
                    userWinning=false;
                    computerWinning = false;
                    break;
                }
            }
            else{
                userWinning=false;
                computerWinning = false;
                break;
            }
        }
    }

    return won;
}

userTurn();

