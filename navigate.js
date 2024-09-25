let donationPage = document.getElementById("donationPage");
let historyPage = document.getElementById("historyPage");

function navigation() {
    donationPage.addEventListener("click", () => {
        donationWrap.classList.add("show");
        donationWrap.classList.remove("hide");

        donationPage.classList.add("active2")
        historyPage.classList.remove("active2")

        historyWrap.classList.add("hide");
        historyWrap.classList.remove("show");
    });

    historyPage.addEventListener("click", () => {
        historyWrap.classList.add("show");
        historyWrap.classList.remove("hide");

        historyPage.classList.add("active2")
        donationPage.classList.remove("active2")

        donationWrap.classList.add("hide");
        donationWrap.classList.remove("show");
    });
}

navigation();
