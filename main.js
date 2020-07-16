const input = document.querySelector(".input");
const addItemBtn = document.querySelector("#addItemBtn");
const list = document.querySelector("ul");

// Add a stuff with a click btn or the Enter key
addItemBtn.addEventListener("click", () => {
  newElement();
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") newElement();
});

// Add a "checked" symbol when clicking on a list item
list.addEventListener("click", (event) => {
  const tgt = event.target;
  if (tgt.tagName === "LI") tgt.classList.toggle("checked");
});

//Remove the stuff clicking a trash bin icon
let deco = document.querySelector(".deco");
deco.addEventListener("click", function (event) {
  const tgt = event.target;
  if (tgt.classList.contains("fa-trash")) tgt.closest("li").remove();
});

function newElement() {
  //add stuffs
  let li = document.createElement("li");
  li.textContent = input.value;
  if (input.value === "") alert("You must write something");
  else list.appendChild(li);
  input.value = "";
  input.focus();

  //add a trash bin icon
  let removeBtn = document.createElement("i");
  removeBtn.setAttribute("class", "fa fa-trash");
  li.appendChild(removeBtn);

  li.scrollIntoView({ block: "center" });
}
