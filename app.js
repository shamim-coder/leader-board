// to get css variable value========================
const style = getComputedStyle(document.documentElement);
//==================================================
const players = document.getElementsByClassName("player");

for (const player of players) {
    player.style.backgroundColor = style.getPropertyValue("--timer-color"); // get variable
    player.style.padding = "20px";
    player.style.borderRadius = "10px";
}

// to set/change css variable value ===================================
// document.documentElement.style.setProperty("--primary-color", "#000");
// ====================================================================

// add item handler
let count = 1;
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.classList = "item";
    li.innerText = "item " + count++;
    ul.appendChild(li);
    console.log(count);
});

function increment() {
    const countNumber = document.getElementById("count-input");
    countNumber.value = parseInt(countNumber.value) + 1;

    if (countNumber.value >= 5) {
        const countBtn = document.getElementById("count-btn");
        countBtn.setAttribute("disabled", true);
    }
}

// theme color change function dark / light

document.getElementById("theme-color").addEventListener("change", (e) => {
    if (e.target.value == "Light") {
        document.documentElement.style.setProperty("--bg-color", "#F3F1FF");
        document.documentElement.style.setProperty(
            "--primary-color",
            "#562EFF"
        );
        document.documentElement.style.setProperty("--gray-text", "#9F9F9F");
        document.documentElement.style.setProperty("--white-text", "#FFFFFF");
        document.documentElement.style.setProperty("--white-bg", "#FFFFFF");
        document.documentElement.style.setProperty("--black-text", "#000000");
        document.documentElement.style.setProperty("--review-color", "#FFC014");
        document.documentElement.style.setProperty("--timer-color", "#FF4A60");
    } else if (e.target.value == "Dark") {
        document.documentElement.style.setProperty("--bg-color", "#15141a");
        document.documentElement.style.setProperty(
            "--primary-color",
            "#FEE730"
        );
        document.documentElement.style.setProperty("--gray-text", "#9F9F9F");
        document.documentElement.style.setProperty("--white-text", "#000000");
        document.documentElement.style.setProperty("--white-bg", "#23222b");
        document.documentElement.style.setProperty("--black-text", "#ffffff");
        document.documentElement.style.setProperty("--review-color", "#FFC014");
        document.documentElement.style.setProperty("--timer-color", "#FF4A60");
    }
});

//      --bg-color: #F3F1FF;
//     --primary-color: #562EFF;
//     --gray-text: #9F9F9F;
//     --white-text: #FFFFFF;
//     --white-bg: #FFFFFF;
//     --black-text: #000000;
//     --review-color: #FFC014;
//     --timer-color: #FF4A60;
