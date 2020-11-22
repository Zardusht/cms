var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_back_btn = document.querySelector("#sign-back-btn");
var container = document.querySelector(".container");
sign_in_btn.addEventListener("click", () => {
    container.classList.add("sign-in-mode");
});
sign_back_btn.addEventListener("click", () => {
    container.classList.remove("sign-in-mode")
})