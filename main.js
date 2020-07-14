const input = document.querySelector(".input");
const addItemBtn = document.querySelector("#addItemBtn");

// Add a stuff with a click btn or the Enter key
addItemBtn.addEventListener("click", () => {
  newElement();
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") newElement();
});

function newElement() {
  let list = document.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = input.value;
  input.value = "";
  let appendedItem = list.appendChild(li);
  console.log("success");
}
