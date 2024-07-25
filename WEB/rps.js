let gameStatus = true;
let round = 1;
let playerMove = 0;
let compMove = 0;

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

function moveTranslate(move)
{
    if (move > 2)
    {
        move = move%3;
    }

    switch(move)
    {
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

let a = + prompt("Enter a number.");
document.getElementById("p1").textContent = "You chose: " + moveTranslate(a) +"!";
