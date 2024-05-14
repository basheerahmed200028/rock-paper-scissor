let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".image");
const msg1=document.querySelector("#msg1");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score")


const gameplay=(playwim,user_choice,comp_choice)=>{
    if(playwim){
        msg1.innerText=`you won. your ${user_choice} beats ${comp_choice}`;
        user.innerText=++user_score;
        msg1.style.backgroundColor="green";
    }else{
        msg1.innerText=`you loss...${comp_choice} beats your ${user_choice}`
        comp.innerText=++comp_score;
        msg1.style.backgroundColor="red";

    }

}

const game=(user_choice,comp_choice)=>{
    if(user_choice===comp_choice){
       msg1.innerText="game is draw,play again..";
       msg1.style.backgroundColor="blue";

    }else{
        let playwim=true;
        if (user_choice==="rock"){
            playwim=comp_choice==="papper"?false:true;
        }else if(user_choice==="papper"){
            playwim=comp_choice==="scissor"?false:true;
        }else{
            playwim=comp_choice==="rock"?false:true;
        }
        gameplay(playwim,user_choice,comp_choice);
    }
}


const play=(user_choice)=>{
    options=["rock","papper","scissor"];
    let idx=Math.floor(Math.random()*3);
    const comp_choice=options[idx];
    console.log("choice is clicked",comp_choice);
    return comp_choice;
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        const user_choice=choice.getAttribute("id");
        console.log("choice is clicked",user_choice);
        const comp_choice=play(user_choice);
        game(user_choice,comp_choice);
    })
})