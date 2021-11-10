const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector("p span");
 
let count = 0;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("incriment")) count++
        else if (classList.contains("decriment")) count--
        else count = 0;
        if (count > 0) counterValue.style.color = "green";
        else counterValue.style.color = "red";
        counterValue.textContent = count;

        
    })
})
