let totalAmount = document.getElementById("totalAmount");
let modal = document.getElementById("my_modal_5");
let donationWrap = document.getElementById("donationWrap");
let totalCoin = 5500; // Initial balance


// Content data for multiple cards
let content = [
    {
        donationImg: "./assets/noakhali.png",
        title: "Donate for Flood at Noakhali, Bangladesh",
        pera: "The recent floods in Noakhali have caused significant damage to homes infrastructure. Your donation will help provide essential supplies and to those affected by this disaster. Every contribution, big or small, makes a difference. Please join us in supporting the relief efforts and making a positive impact on the lives of those in need."
    },
    {
        donationImg: "./assets/feni.png",
        title: "Donate for Flood Relief in Feni, Bangladesh",
        pera: "The recent floods in Feni have caused devastation in rural communities. Your donation will provide emergency relief and support recovery efforts in the region."
    },
    {
        donationImg: "./assets/quota-protest.png",
        title: "Aid for Injured in the Quota Movement",
        pera: "Support those affected by violence during the quota reform movement by donating to provide medical and psychological assistance."
    }
];

// Function to dynamically generate the donation cards
function contentFunc() {
    donationWrap.innerHTML = ""; 
    content.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("flex", "flex-1", "p-6", "border-gray-300", "border-2", "rounded-xl", "gap-5","flex-col","lg:flex-row");

        cardDiv.innerHTML = `
            <img class="w-[full] lg:w-[30%]"  src="${item.donationImg}">
            <div id="Scard-Cont" class="flex flex-col items-start justify-between gap-4 ">
                <div class="flex px-3 py-2 bg-slate-200 text-gray-500 text-xl font-bold rounded-lg gap-2">
                    <img  src="./assets/coin.png" alt="Coin">
                    <h5 class="addMoney">0 BDT</h5>
                </div>
                <h1 class="getH1 text-xl font-bold">${item.title}</h1>
                <p class="text-gray-500 text-lg">${item.pera}</p>
                <input type="text" class="px-7 py-3 border-gray-200 border-2 rounded-lg w-full inputAmount" placeholder="Write Donation Amount">
                <button class="btn bg-[#B4F461] active2 text-xl px-7 w-full donateBtn">Donate Now</button>
            </div>
        `;
        donationWrap.appendChild(cardDiv);
    });
    historyFucn()
    addEventListeners(); 
    
   
}


function addEventListeners() {
    const donateButtons = document.querySelectorAll(".donateBtn");
    const inputAmounts = document.querySelectorAll(".inputAmount");
    const addMoneyFields = document.querySelectorAll(".addMoney");

    donateButtons.forEach((btn, index) => {
        let cardDonation = 0; // Track donation 
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let inputValue = inputAmounts[index].value;

            
            
            // Number Ensure
            if (!isNaN(inputValue) && inputValue.trim() !== "") {
                let donationAmount = parseInt(inputValue);

                // Check user has enough balance
                if (totalCoin >= donationAmount) {
                    
                    totalCoin -= donationAmount;
                    totalAmount.textContent = totalCoin;

                    cardDonation += donationAmount;
                    addMoneyFields[index].textContent = cardDonation + " BDT";

                    // Show success modal
                    modal.showModal();

                    // Clear input
                    inputAmounts[index].value = "";
                   

                } else {
                    alert("You don't have enough balance.");
                    inputAmounts[index].value = "";
                }

            } else {
                alert("Invalid Input. Please enter a valid number.");
                inputAmounts[index].value = "";
            }
        });
    });
}

contentFunc(); 






function historyFucn() {
    const donateButtons = document.querySelectorAll(".donateBtn");
const historyWrap = document.getElementById("historyWrap");
const getH1 = document.querySelectorAll(".getH1");
const inputAmount=document.querySelectorAll(".inputAmount")


    donateButtons.forEach((btn,index)=>{
    
        let h1=getH1[index].textContent
        let date=new Date()
        btn.addEventListener("click",(e)=>{
            e.preventDefault();

            let inputValue = inputAmount[index].value; 
           
            if (!isNaN(inputValue)) {
               
   
                
                let div=document.createElement("div")
                div.classList.add("historyDiv")

                let h2=document.createElement("h2")
                let p=document.createElement("p")
                
                
                h2.innerHTML=`${inputValue} Taka Is ${h1}`
                p.textContent=date
               

                div.appendChild(h2)
                div.appendChild(p)

                historyWrap.appendChild(div)

                
            }
             
        })
    
    })




// myModalBtn.addEventListener("click",()=>{
    
//     donateButtons.forEach((btn, index) => {
    
      
//         btn.addEventListener("click", () => {
//             let h1 = getH1[index].textContent;
//             if (true) {
//                 let date = new Date();
    
          
                // let div = document.createElement("div");

                // let h2 = document.createElement("h2");
                // let p = document.createElement("p");
                  
                  
                // p.textContent = date;
                // h2.textContent = h1;
                // console.log(h1);
          
                // div.classList.add("historyDiv");
                // div.appendChild(h2);
                // div.appendChild(p);
                // div.innerHTML=`<h1>${h1}<h1>`
//                 historyWrap.innerHTML=`
//                     <div><h1>${h1}</h1></div>
//                 `
//             }
//         });
//       });
    
// })
}



