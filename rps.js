let gameStatus = true;
let round = 1;
let score = 0;
let playerMove;
let compMove;

//aligns move in order to have a straight line of ties, wins, or losses.
//refer to the 3x3 diagram of moves 
function moveAlign (move)
{
    switch(move)
    {
        case 0:
            return 2;
        break;
        case 1:
            return 0;
        break;
        case 2:
            return 1;
        break;
        default:
            alert("An error occured in the moveAlign function.");
            return "An error occured in the moveAlign function.";
    }
}

//translate your move from integer to string
//also makes the input of integers from 0 to 2 using modulus 
function moveTranslate(move)
{
    if (move > 2)
    {
        move = move%3;
    }

    switch(move)
    {
        /* 
            In order to make this function more efficient,
            we must find a way to reference variables outside of functions,
            as in replace the values of variables from inside the function.
        */
        case 0:
            return "rock";
        break;
        case 1:
            return "paper";
        break;
        case 2:
            return "scissors";
        break;
        default:
            alert("Invalid move integer in moveTranslate function.");
            return "invalid move integer.";
    }
}

//with 3x3 diagram of moves, they make a line we can compare with equality 
//with the use of moveAlign() we can change what will happen but with the same equality trait
function gameLogic (pM, cM)
{
    if(pM==cM)
    {
        return "tie";
    }else
    {
        moveAlign(pM)
        if(pM==cM)
        {
            return "loss";
        }else
        {
            moveAlign(pM)
            if(pM==cM)
            {
                return "win";
            }else
            {
                alert("There was an error in the gameLogic function.");
                return "errorLogic";
            }
        }
    }
}

//checks the update which is whenever the player won tied or lost.
//then updates the score and round
function scoreUpdate(update, round, score)
{
    switch(update)
    {
        case "tie":
            round++;
        break;
        case "loss":
            round++;
            score--;
        break;
        case "win":
            round++;
            score++;
        break;
        default:
            alert("Something wrong happened at scoreUpdate function.");
    }
}


//main function

/*
while(gameStatus)
{
*/
    //keep playing the game

    //instead of prompt, we must have a button which replaces the values of playerMove
    //with images as well, hopefully
    playerMove = + prompt("Enter a number.");
    document.getElementById("p1").textContent = "You chose: " + moveTranslate(playerMove) +"!";

    //random number between 0 and 2 inclusive
    compMove = Math.floor(Math.random()*3);
    document.getElementById("p2").textContent = "Enemy chose: " + moveTranslate(compMove) + "!";

/*
} 
no more while loop for now...
*/