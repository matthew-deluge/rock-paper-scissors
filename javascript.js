function computerRPS() { //returns rock/paper/scissors randomly
    let randNum = Math.floor(Math.random()*(4-1)+1);
    if (randNum == 1) {
        return "rock";
    }
    else if (randNum == 2) {
        return "paper";
    }
    else if (randNum==3) {
        return "scissors";
    }
    comsole.log(computerRPS());
    }
    function humanRPS() { //old logic for entering rock paper scissors from alert box
        let readyToPlay = false
        let playerChoice = ""
        while (!readyToPlay) {
            playerChoice = prompt("Choose either rock, paper, or scissors");
            if (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
                readyToPlay = false;
            }
            else {
                readyToPlay = true;
            }
        if (readyToPlay) {
           return playerChoice.toLowerCase();
        }
        }
    }
    //Compare the results (win=true/false) and put them into a Boolean
    function playRound(humanChoice, computerChoice) { //takes two RPS's and returns win based on results. Tie alerts "it's a tie" then reprompts until its not a tie
        let win = ""
        while (humanChoice == computerChoice) {
            //humanChoice=humanRPS();
            return "draw";
        }
        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                win = "win";
            }
            else if (computerChoice == "scissors") {
                win = "lose";
            }
        }
        else if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                win = "win";
            }
            else if (computerChoice == "paper") {
                win = "lose";
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                win = "win";
            }
            else if (computerChoice == "rock") {
                win = "lose";
            }
        
    }
    return win;
    }
    function responseButton(buttonClicked) {
        userInput = buttonClicked.target.id;
        console.log(userInput);
        matchResults = playRound(userInput, computerRPS());
        if (matchResults == "win") {
            score += 1;
        }
        else if (matchResults == "draw") {
            ties +=1;
            }
        else if (matchResults == "lose") {
            compScore +=1;
        }
    console.log(score);
    scoreDiv.textContent = `Score = ${score} to ${compScore} (${ties} draws).`;
    if (score >= 5) {
        alert(`You win with a score of ${score} to ${compScore}!! Good for you!`)
        score = 0;
        ties = 0;
        compScore = 0;
        scoreDiv.textContent = "Score = 0 to 0";
    }
    if (compScore >=5) {
        alert(`You lose! Good Day Sir!`)
        score = 0;
        compScore = 0;
        ties = 0;
        scoreDiv.textContent = "Score = 0 to 0";
    }
}
    scoreDiv = document.querySelector("#score");
    let userInput = "";
    let score = 0;
    let compScore = 0;
    let ties = 0;
    rockButton = document.querySelector("#rock");
    paperButton = document.querySelector("#paper");
    scissorsButton = document.querySelector("#scissors");
//get results of button press into "userInput" variable
    rockButton.addEventListener('click', function(e) {
        responseButton(e)
    })
    paperButton.addEventListener('click', function(e) {
        responseButton(e)
    })
    scissorsButton.addEventListener('click', function(e) {
        responseButton(e)
    })

    //Based on those results, add (or not) to a win counter)
    /*let score = 0
    for (let i = 0;i<=4;i++){
        result = playRound(userInput, computerRPS());
        if (result){
            console.log("You won! You have won " + score + " out of " + (i +1) + " games.");
            score++;
        }
        else {
            console.log("You lost! You have won " + score + " out of " + (i+1) + " games.");
        }
    }
    console.log("The final score was "+ score +" to " + (5-score) + ".");

    //after each game, display if player wins or not
    //When five games is up, display the results of the win counter */