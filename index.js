
const incrimentn = document.querySelector("#incriment");
const decrimentn = document.querySelector("#decriment");
const resetn = document.querySelector("#reset");
const counterValue = document.querySelector("p span");
 
let count = 0;

function decriment() {
    count--
        counterValue.textContent = count;

}
function incriment() {
    count++;
    counterValue.textContent = count;
}
 
function reset() {
    count = 0
    counterValue.textContent = count;
}
incrimentn.addEventListener("click", incriment);
resetn.addEventListener("click", reset);
decrimentn.addEventListener("click", decriment);


