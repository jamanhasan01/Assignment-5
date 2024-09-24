let donationPage = document.getElementById("donationPage");
let historyPage = document.getElementById("historyPage");

function navigation() {
    donationPage.addEventListener("click", () => {
        donationWrap.classList.add("show");
        donationWrap.classList.remove("hide");

        historyWrap.classList.add("hide");
        historyWrap.classList.remove("show");
    });

    historyPage.addEventListener("click", () => {
        historyWrap.classList.add("show");
        historyWrap.classList.remove("hide");

        donationWrap.classList.add("hide");
        donationWrap.classList.remove("show");
    });
}

navigation();
