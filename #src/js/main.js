document.querySelector(".switch__input").addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
});

const btn = document.createElement("button");
btn.setAttribute("style", "position: fixed; top: 50%");
btn.innerText = "change";
btn.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
});
document.body.append(btn);
