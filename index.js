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

    if (billAmount.value <= 100) {
        tipPercentage.style.display = "none"
        let lessValue = billAmount.value + "+"+ "10"
        let result = eval(lessValue)
        return ( result + " You can only get N10 as a tip, please buy items worth more than N100")
    } else {
        let percent = tipPercentage.value
        let amount = billAmount.value
        let answer = (percent / 100) * amount
        let secondAnswer = amount
        let solution = answer + "+" +  secondAnswer
        return eval(solution);
    }

    
    
    
}


button.addEventListener("click", ()=>{
    total.textContent = "Total: " + "N" + calculation();
})







