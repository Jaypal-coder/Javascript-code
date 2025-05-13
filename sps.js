let usscore = 0;
let cmscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");
const drawgame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Draw..Play Again!!";
    msg.style.backgroundColor = "Black";
};

const compchoice= ()=>{
    const options = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() *3);
    return options[random];
};
const showwinner=(userwin,userchoice,cmpchoice)=>{
    if(userwin){
        usscore++;
        userscorep.innerText= usscore;


        console.log("You Win");
        msg.innerText = `You Win!! Your ${userchoice} beats ${cmpchoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        cmscore++;
        compscorep.innerText=cmscore;
        console.log("You Lose");
        msg.innerText = `You Lose !! ${cmpchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playgame = (userchoice)=>{
    console.log("user-choice=",userchoice);
    //gen comp choice
    const cmpchoice = compchoice();
    console.log("comp-choice=",cmpchoice);

    if(userchoice === cmpchoice){
        //draw game
        drawgame();
    }
        else{
            let userwin = true;
            if(userchoice==="rock"){
                userwin = cmpchoice==="paper"?false:true;
            }
            else if(userchoice==="paper"){
                userwin = cmpchoice==="scissors"?false:true;
            }
            else{
                userwin = cmpchoice==="rock"?false:true;
            }
            showwinner(userwin,userchoice,cmpchoice);
        }
    };
 


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})