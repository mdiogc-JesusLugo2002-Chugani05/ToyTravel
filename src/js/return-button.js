const button = document.getElementById("return-button");

button.addEventListener("click", onClickButton)

function onClickButton() {
    document.documentElement.scrollTop = 0;
}