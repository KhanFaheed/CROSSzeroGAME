let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector('#new-btn');

let msgContainer=document.querySelector('.msg-container');

let msg=document.querySelector('#msg')


let turnO=true ;  //playerX, PlayerO


const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],  //rows
    [0,3,6],[1,4,7],[2,5,8],  //columns
    [0,4,8],[2,4,6]   //diagnonals
];

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText='';
    }
};



const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");


}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
           box.innerText='O';
           turnO=false;

        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        
    })
})

const showWinner=(winner)=>{
     msg.innerText=`Congratulations, Winner is ${winner}`;
     msgContainer.classList.remove('hide');
     disableBoxes();

};




const checkWinner=()=>{
    for(let pattern of winPatterns){
       
      let pos1Value=boxes[pattern[0]].innerText;
      let pos2Value=boxes[pattern[1]].innerText;
      let pos3Value=boxes[pattern[2]].innerText;

       if(pos1Value !=='' && pos2Value !=='' && pos3Value !==''){
        if(pos1Value === pos2Value && pos2Value === pos3Value){
            showWinner(pos1Value);
        }
       }
    
    }

};


newGameBtn.addEventListener('click',resetGame);

resetBtn.addEventListener('click',resetGame);





