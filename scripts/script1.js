const but = document.createElement("button");
but.innerHTML = "click me";
document.body.append(but);

function changeColor() {
  const header = document.body.querySelector("h1");

  header.style.color = "red";
}
but.addEventListener("click", changeColor);
