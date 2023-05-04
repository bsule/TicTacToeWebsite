
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
    
   
   

    if(checkWin()){
        console.log("WON")
    }
}

function checkWin(){
    var compWinHor=false;
    var userWinHor=false;

    var compWinVert=false;
    var userWinVert=false;

    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            // Horizontal wins
            if(board[i][j]==''){
                compWinHor=false; // computer is 1 on board array
                userWinHor=false; // user is 0 on board array
            }

            else if(j==0){
                if(board[i][j]=='0'){
                    userWinHor=true;
                }
                else{
                    compWinHor=true;
                }
            }

            else if((j==1||j==2) && (compWinHor==false && userWinHor==false) || (board[i][j]=='0' && userWinHor==false) || (board[i][j]=='1' && compWinHor==false)){
                compWinHor=false;
                userWinHor=false;
            }
            
            else if(j==2){
                if(board[i][j]=='1' && compWinHor==true){
                    return true;
                }
                else if(board[i][j]=='0' && userWinHor==true){
                    return true;
                }
            }

            // Vertical wins
            if(board[j][i]==''){
                compWinVert=false;
                userWinVert=false;
            }

            else if(j==0){
                if(board[j][i]=='0'){
                    userWinVert=true;
                }
                else{
                    compWinVert=true;
                }
            }

            else if((j==1||j==2) && (compWinVert==false && userWinVert==false) || (board[j][i]=='0' && userWinVert==false) || (board[j][i]=='1' && compWinVert==false)){
                compWinVert=false;
                userWinVert=false;
            }

            else if(j==2){
                if(board[j][i]=='0' && userWinVert==true){
                    return true;
                }
                else if(board[j][i]=='1' && compWinVert==true){
                    return true;
                }
            }
        }
    }
    // Diagonal wins
    if(board[0][0]=='0' && board[1][1]=='0' && board[2][2]=='0'){
        return true;
    }
    else if(board[0][0]=='1' && board[1][1]=='1' && board[2][2]=='1'){
        return true;
    }
    else if(board[0][2]=='0' && board[1][1]=='0' && board[2][0]=='0'){
        return true;
    }
    else if(board[0][2]=='1' && board[1][1]=='1' && board[2][0]=='1'){
        return true;
    }
    
}

userTurn();

