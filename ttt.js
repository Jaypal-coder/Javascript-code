let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#rst");
let newgm = document.querySelector("#newbtn");
let win = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO= true;
const patternwin=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgm =()=>{
    turnO = true;
    enabledboxes();
    win.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box is Clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disabledboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    } 
}
const enabledboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
}

const showwinner= (winner)=>{
    msg.innerText = `Congratulations Winner is ${winner}`;
    win.classList.remove("hide");
    disabledboxes();
};
const checkwinner = () => {
    for(let pattern of patternwin){
           let pos1Val = boxes[pattern[0]].innerText;
           let pos2Val = boxes[pattern[1]].innerText;
           let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showwinner(pos1Val);
            }
        }
            
         
    }
};
newbtn.addEventListener("click",resetgm);
rst.addEventListener("click",resetgm);