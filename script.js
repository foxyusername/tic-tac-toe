let main = document.getElementsByClassName('main')[0]; 
let divs=document.getElementsByTagName('div');
let btn=document.getElementById('btn');
let btn_main_div=document.getElementById('btn_main_div'); 
let game_div=document.getElementById('game_div');
let who_won=document.getElementById('who_won');
let score_section=document.getElementsByClassName('score_section')[0];

let winningCondition=[
    [0,1,2],[3,4,5],[6,7,8],  //vercical
    [0,3,6],[1,4,7],[2,5,8],  //horizontal
    [0,4,8],[2,4,6]    //diagonal
]

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2=['x','o','x','o','x','o','x','o','x'];
let variable=false;
let scoreX=0;
let scoreY=0;
let innerText='';
array.forEach((result, index) => {
  let div = document.createElement("div");
  main.appendChild(div);


div.addEventListener("click",()=>{
    if(div.innerText==='' && variable===false){
        div.innerText=array2[0];
        array2.shift();
    }

    if(div.innerText==='x'){
        div.style.color="rgb(242, 76, 76)";
    }else if(div.innerText==='o'){
     div.style.color='rgb(54, 238, 63)';
    }

    if(array2.length===0){
        console.log('array ended');
        btn_main_div.style.display='flex';
        main.style.display="none";
        game_div.style.justifyContent="flex-start";
        score_section.style.marginTop="100px";
        who_won.innerText='🎉 Ended tie 🎉 ';

    }

    let xScore=document.getElementById('xScore');
   let oScore=document.getElementById('oScore');
    
   innerText=div.innerText;

   checkWinner(div.innerText);

   if(variable===true){
    console.log('win');
    if(innerText==='x'){
        scoreX+=1;
        xScore.innerHTML='<i class="fa-regular fa-x"></i>: '+scoreX;
        who_won.innerHTML='🎉 <i class="fa-regular fa-x"></i> has won the game 🎉 ';
    }else if(innerText==='o'){
        scoreY+=1;
       oScore.innerHTML="<i class='fa-regular fa-o' id='x'></i>: "+scoreY;
       who_won.innerHTML='🎉 <i class="fa-regular fa-o" id="o"></i> has won the game 🎉 ';

    }
    btn_main_div.style.display='flex';
    main.style.display="none";
    game_div.style.justifyContent="flex-start";
    score_section.style.marginTop="120px";
  }else{
    console.log('not win');
  }
})
});
function checkWinner(player){

for(let condition of winningCondition){
   let [a,b,c]=condition;
     
    if(divs[a].innerText===player && divs[b].innerText===player && divs[c].innerText===player){
        variable=true;
        return true;
    }
}
}

btn.addEventListener('click',()=>{
    variable=false;
   
    btn_main_div.style.display='none';
    game_div.style.justifyContent="center";
    score_section.style.marginTop="0px";

   array2=['x','o','x','o','x','o','x','o','x'];
   for(let i=0;i < divs.length;i++){
   divs[i].innerText='';
  }
   main.style.display="grid"
})