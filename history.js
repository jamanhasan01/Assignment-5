const donateButtons = document.querySelectorAll(".donateBtn");
let historyWrap=document.getElementById("historyWrap")
let myModalBtn = document.querySelector(".myModalBtn");
let isTrue = false; 

function historyFunc() {
    donateButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const getH1 = document.querySelectorAll(".getH1");
            let h1 = getH1[index].textContent; 
            let date = new Date();
            
            if (true) {
                if (!isTrue) {
                    myModalBtn.addEventListener("click", () => {
                        let div = document.createElement("div");
                        let h2 = document.createElement("h2");
                        let p=document.createElement("p")

                        p.textContent=date

                        h2.textContent=h1;



                        div.classList.add("historyDiv");
                        div.appendChild(h2);
                        div.appendChild(p)
                        historyWrap.appendChild(div);
                    });
                    isTrue = true; 
                }
            }
        });
    });
}

historyFunc();
