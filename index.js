let button = document.querySelector("#button")
let total = document.querySelector("#total")

function calculation() {
    let billAmount = document.querySelector("#bill-amount")
    let tipPercentage = document.querySelector("#tip-percentage")

    billAmount.addEventListener("keypress", ()=>{
         console.log(billAmount.value);
    
    })
    
    tipPercentage.addEventListener("keypress", ()=>{
        tipPercentage.value
        console.log(tipPercentage.value);
    })

    let percent = tipPercentage.value
    let amount = billAmount.value
    let answer = (percent / 100) * amount
    let secondAnswer = amount
    let solution = answer + "+" +  secondAnswer
    return eval(solution);
    
    
}


button.addEventListener("click", ()=>{
    total.textContent = "Total: " + "$" + calculation();
})







