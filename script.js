let num1 = Math.ceil(Math.random() * 6);
let num2 = Math.ceil(Math.random() * 6);

let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

let result = document.querySelector("h1")

function setDiceImage(diceElement, num) {
  diceElement.setAttribute("src", `./images/dice${num}.png`);
}

setDiceImage(dice1, num1);
setDiceImage(dice2, num2);

if(num1>num2){
    result.innerHTML="Player one wins!";
}
else if(num1<num2){
    result.innerHTML="Player two wins!";
}
else{
    result.innerHTML="Draw!";
}