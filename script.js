let totalAmount=document.getElementById("totalAmount")
let donationPage=document.getElementById("donationPage")
let historyPage=document.getElementById("historyPage")
let addMoney=document.getElementById("addMoney")
let donateBtn=document.getElementById("donateBtn")

let modal=document.getElementById("my_modal_5")

let inputAmount=document.getElementById("inputAmount")

let totalCoin=5500;
let donation=0



function totalDonation() {
    donateBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        inputValue=inputAmount.value

       if(totalCoin<inputValue){
            alert("You don't have enough balance")
            inputAmount.value=""
        }
        else if (!isNaN(inputValue)&&inputValue !== "") {
            let numberConVert=parseInt(inputValue)
            totalCoin-=numberConVert
            totalAmount.textContent=totalCoin
            donation+=numberConVert

            addMoney.textContent=donation+" BDT"
            modal.showModal()

            addMoney.style.color='#5e5a5a'
            inputAmount.value=""
        }
        
        else{
            alert("Invalid Input")
            inputAmount.valuye=""
        }
    })
}

totalDonation()


