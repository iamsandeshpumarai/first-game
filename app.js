let gamesql = [];
let usersql = [];

let start = false;
let level = 0;
let btns = ['red','green','yellow','blue']

let heading2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
if (start == false){
    console.log("game is started");
    start == true;
    levelup();

}

})

function gameFlash(btn){
btn.classList.add('flash');
setTimeout(()=>{
    btn.classList.remove('flash')
},250)
}

function userFlash(btn){
btn.classList.add('user-flash');
setTimeout(()=>{
    btn.classList.remove('user-flash')
},250)
}



function levelup(){
    usersql = [];
level++;
heading2.innerHTML = ` Level ${level}`

let rndmindx = Math.floor(Math.random()*4)
let rndmchoose = btns[rndmindx];
let rndmbtn = document.querySelector(`.${rndmchoose}`)
// console.log(rndmchoose)
// console.log(rndmindx)
// console.log(rndmbtn)
gamesql.push(rndmchoose);
console.log(gamesql);

gameFlash(rndmbtn);
}

function check(idx){
    // console.log("your current level is " + level)

    if(gamesql[idx]===usersql[idx]){
        if(gamesql.length==usersql.length){
            setTimeout(levelup,1000)
        }
        console.log("the seq matched")
        
    }  
    else{
        console.log("it doesnt matche")
        heading2.innerHTML = `game over! your score was <b>${level}</b>
        <br>press any key to start the game highest score was ${highestScore}`
   document.querySelector('body').style.background = 'red';
   setTimeout(()=>{
    document.querySelector('body').style.background = 'white';
   },150)
        reset();
    }

 
}


function reset(){
    gamesql =[];
    usersql = [];
start == false;
level = 0;
}


function btnpress(){
  let btn = this;
  userFlash(btn);
let userColor = this.getAttribute('id');
console.log(userColor);
usersql.push(userColor);

check(usersql.length-1);
}
let allBtns = document.querySelectorAll('.btn')


for( btn of allBtns)
{
    btn.addEventListener("click",btnpress)
}



