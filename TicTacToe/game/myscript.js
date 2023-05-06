
var userInput=localStorage.getItem("range");

var board = [['','',''],['','',''],['','','']];

var color;
var start;
var clickedId;

var gameover=checkWin();
var newGameBtn = document.querySelector('#newGame');

// find the number that the user chose and set it to their color
if(userInput!=1 && userInput!=2 && userInput!=3){
    userInput=1;
}

if(userInput==1){
    color='red';
    document.getElementById("topText").innerHTML="You are Red, the Computer is Black";
}
else if(userInput==2){
    color='blue';
    document.getElementById("topText").innerHTML="You are Blue, the Computer is Black";
}
else{
    color='white';
    document.getElementById("topText").innerHTML="You are White, the Computer is Black";
}

// fadeout function for You Start or Computer Starts text
window.onload = function(){ 
    window.setTimeout(fadeout,4000);
}

function fadeout(){
    document.getElementById('start').style.opacity = '0';
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
function computerRandom(){
    return Math.floor(Math.random()*9)+1;
}

// if computer has first move
if(startValue==1){
    computerRandomMove();
}

function reply(id){
    clickedId=id; // sets clicked id to the id of whatever button was clicked
}

// when the user clicks, see if the game is already ended or if the spot is already taken and then allow placement
function userTurn(){
    var stopWinVariable=false;
    $("td").click(function(){
        if(clickedId=="one" && board[0][0]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[0][0]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
        else if(clickedId=="two" && board[0][1]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[0][1]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
        else if(clickedId=="three" && board[0][2]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[0][2]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
        else if(clickedId=="four" && board[1][0]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[1][0]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
        else if(clickedId=="five" && board[1][1]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[1][1]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
        else if(clickedId=="six" && board[1][2]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[1][2]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
        else if(clickedId=="seven" && board[2][0]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[2][0]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
        else if(clickedId=="eight" && board[2][1]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[2][1]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
            
        }
        else if(clickedId=="nine" && board[2][2]=='' && stopAtWin()==false){
            $(this).find('button').css("background-color",color);
            board[2][2]='0';
            stopWinVariable = stopAtWin();
            if(!stopWinVariable){
                computerMove();
            }
        }
    })

    
}

// computer first checks if it has a chance to win, then checks if it has a chance to block. if spot is still not chosen, the computer will choose a random square
function computerMove(){
    var completedMove=false;
   // computer win
    for(var i = 0; i<3;i++){
        if(board[i][0]=='1' && board[i][1]=='1' && board[i][2]!='0' && !completedMove){
            board[i][2]='1';
            if(i==0){
                $('#three').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#six').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#nine').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[i][0]=='1' && board[i][2]=='1' && board[i][1]!='0' && !completedMove){
            board[i][1]='1';
            if(i==0){
                $('#two').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#five').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#eight').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[i][1]=='1' && board[i][2]=='1' && board[i][0]!='0' && !completedMove){
            board[i][0]='1';
            if(i==0){
                $('#one').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#four').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#seven').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[0][i]=='1' && board[1][i]=='1' && board[2][i]!='0' && !completedMove){
            board[2][i]='1';
            if(i==0){
                $('#seven').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#eight').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#nine').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[0][i]=='1' && board[2][i]=='1' && board[1][i]!='0' && !completedMove){
            board[1][i]='1';
            if(i==0){
                $('#four').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#five').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#six').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[1][i]=='1' && board[2][i]=='1' && board[0][i]!='0' && !completedMove){
            board[0][i]='1';
            if(i==0){
                $('#one').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#two').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#three').find('button').css('background-color','black');
                completedMove=true;
            } 
        } 
    }
    // Diagonal Win
    if(board[0][0]=='1' && board[1][1]=='1' && board[2][2]!='0' && !completedMove){
        $('#nine').find('button').css('background-color','black');
        board[2][2]='1';
        completedMove=true;
    }
    else if(board[0][0]=='1' && board[2][2]=='1' && board[1][1]!='0' && !completedMove){
        $('#five').find('button').css('background-color','black');
        board[1][1]='1';
        completedMove=true;
    }
    else if(board[2][2]=='1' && board[1][1]=='1' && board[0][0]!='0' && !completedMove){
        $('#one').find('button').css('background-color','black');
        board[0][0]='1';
        completedMove=true;
    }
    else if(board[0][2]=='1' && board[1][1]=='1' && board[2][0]!='0' && !completedMove){
        $('#seven').find('button').css('background-color','black');
        board[2][0]='1';
        completedMove=true;
    }
    else if(board[0][2]=='1' && board[2][0]=='1' && board[1][1]!='0' && !completedMove){
        $('#five').find('button').css('background-color','black');
        board[1][1]='1';
        completedMove=true;
    }
    else if(board[2][0]=='1' && board[1][1]=='1' && board[0][2]!='0' && !completedMove){
        $('#three').find('button').css('background-color','black');
        board[0][2]='1';
        completedMove=true;
    }

    if(!completedMove){
    // computer block
    for(var i=0; i<3;i++){
        if(board[i][0]=='0' && board[i][1]=='0' && board[i][2]!='1' && !completedMove){
            board[i][2]='1';
            if(i==0){
                $('#three').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#six').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#nine').find('button').css('background-color','black');
                completedMove=true;
            }
        }
        else if(board[i][0]=='0' && board[i][2]=='0' && board[i][1]!='1' && !completedMove){
            board[i][1]='1';
            if(i==0){
                $('#two').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#five').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#eight').find('button').css('background-color','black');
                completedMove=true;
            }
        }
        else if(board[i][1]=='0' && board[i][2]=='0' && board[i][0]!='1' && !completedMove){
            board[i][0]='1';
            if(i==0){
                $('#one').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#four').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#seven').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[0][i]=='0' && board[1][i]=='0' && board[2][i]!='1' && !completedMove){
            board[2][i]='1';
            if(i==0){
                $('#seven').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#eight').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#nine').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[0][i]=='0' && board[2][i]=='0' && board[1][i]!='1' && !completedMove){
            board[1][i]='1';
            if(i==0){
                $('#four').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#five').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#six').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
        else if(board[1][i]=='0' && board[2][i]=='0' && board[0][i]!='1' && !completedMove){
            board[0][i]='1';
            if(i==0){
                $('#one').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==1){
                $('#two').find('button').css('background-color','black');
                completedMove=true;
            }
            else if(i==2){
                $('#three').find('button').css('background-color','black');
                completedMove=true;
            } 
        }
    }
    if(board[0][0]=='0' && board[1][1]=='0' && board[2][2]!='1' && !completedMove){
        $('#nine').find('button').css('background-color','black');
        board[2][2]='1';
        completedMove=true;
    }
    else if(board[0][0]=='0' && board[2][2]=='0' && board[1][1]!='1' && !completedMove){
        $('#five').find('button').css('background-color','black');
        board[1][1]='1';
        completedMove=true;
    }
    else if(board[2][2]=='0' && board[1][1]=='0' && board[0][0]!='1' && !completedMove){
        $('#one').find('button').css('background-color','black');
        board[0][0]='1';
        completedMove=true;
    }
    else if(board[0][2]=='0' && board[1][1]=='0' && board[2][0]!='1' && !completedMove){
        $('#seven').find('button').css('background-color','black');
        board[2][0]='1';
        completedMove=true;
    }
    else if(board[0][2]=='0' && board[2][0]=='0' && board[1][1]!='1' && !completedMove){
        $('#five').find('button').css('background-color','black');
        board[1][1]='1';
        completedMove=true;
    }
    else if(board[2][0]=='0' && board[1][1]=='0' && board[0][2]!='1' && !completedMove){
        $('#three').find('button').css('background-color','black');
        board[0][2]='1';
        completedMove=true;
    }
    }

    if(!completedMove){
        computerRandomMove();
        completedMove=true;
    }


    stopAtWin();
}

// checks if there is no more squares
function noMoreSquares(){
    for(var i = 0; i<3;i++){
        for(var j = 0; j<3;j++){
            if(board[i][j]==''){
                return false;
            }
        }
    }
    return true;
}


// sees if someone won or if its a draw and ends the game if true
function stopAtWin(){
    if(checkWin()==1){
        document.getElementById("gameisover").innerHTML="Computer Won";
        newGameBtn.style.display='block';
        return true;
    }
    else if(checkWin()==0){
        document.getElementById("gameisover").innerHTML="User Won";
        newGameBtn.style.display='block';
        return true;
    }
    else if(noMoreSquares()){
        document.getElementById("gameisover").innerHTML="Draw";
        newGameBtn.style.display='block';
        return true;
    }
    return false;
}

// checks if someone won
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
                    return 1;
                }
                else if(board[i][j]=='0' && userWinHor==true){
                    return 0;
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
                    return 0;
                }
                else if(board[j][i]=='1' && compWinVert==true){
                    return 1;
                }
            }
        }
    }
    // Diagonal wins
    if(board[0][0]=='0' && board[1][1]=='0' && board[2][2]=='0'){
        return 0;
    }
    else if(board[0][0]=='1' && board[1][1]=='1' && board[2][2]=='1'){
        return 1;
    }
    else if(board[0][2]=='0' && board[1][1]=='0' && board[2][0]=='0'){
        return 0;
    }
    else if(board[0][2]=='1' && board[1][1]=='1' && board[2][0]=='1'){
        return 1;
    }
    return 2;
    
}

function computerRandomMove(){
    var computerSquare = computerRandom();
    if(noMoreSquares()){
        return;
    }
    var completed=false;
    if(computerSquare==1 && board[0][0]==''){
        $("#one").find('button').css("background-color", "black");
        board[0][0]=1;
        completed=true;
    }
    else if(computerSquare==2 && board[0][1]==''){
        $("#two").find('button').css("background-color", "black");
        board[0][1]=1;
        completed=true;
    }
    else if(computerSquare==3 && board[0][2]==''){
        $("#three").find('button').css("background-color", "black");
        board[0][2]=1;
        completed=true;
    }
    else if(computerSquare==4 && board[1][0]==''){
        $("#four").find('button').css("background-color", "black");
        board[1][0]=1;
        completed=true;
    }
    else if(computerSquare==5 && board[1][1]==''){
        $("#five").find('button').css("background-color", "black");
        board[1][1]=1;
        completed=true;
    }
    else if(computerSquare==6 && board[1][2]==''){
        $("#six").find('button').css("background-color", "black");
        board[1][2]=1;
        completed=true;
    }
    else if(computerSquare==7 && board[2][0]==''){
        $("#seven").find('button').css("background-color", "black");
        board[2][0]=1;
        completed=true;
    }
    else if(computerSquare==8 && board[2][1]==''){
        $("#eight").find('button').css("background-color", "black");
        board[2][1]=1;
        completed=true;
    }
    else if(computerSquare==9 && board[2][2]==''){
        $("#nine").find('button').css("background-color", "black");
        board[2][2]=1;
        completed=true;
    }
    if(completed==false){
        computerRandomMove();
    }
}

userTurn();

