let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

//Generate computer choice
const genComChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    //rock , paper, scissors

    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

//Function for game draw
const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#3685b5";
    
};

const ShowWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    
    const compChoice = genComChoice();
   

    if(userChoice === compChoice){
       //draw game 
       drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
           userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        ShowWinner(userWin, userChoice, compChoice);
    }



};

choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});