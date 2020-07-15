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

function newElement() {
  //add stuffs
  let li = document.createElement("li");
  li.textContent = input.value;
  input.value = "";
  list.appendChild(li);

  //add a trash bin icon
  let removeBtn = document.createElement("i");
  removeBtn.setAttribute("class", "fa fa-trash");
  li.appendChild(removeBtn);
}

//Remove the stuff clicking a trash bin icon
document.querySelector(".deco").addEventListener("click", function (e) {
  const tgt = e.target;
  if (tgt.classList.contains("fa-trash")) tgt.closest("li").remove();
});

// document.addEventListener("click", function (e) {
//   if (hasClass(e.target, "fa-trash")) {
//     let li = document.querySelector("li");
//     list.removeChild(li);
//   }
// });
// function hasClass(elem, className) {
//   return elem.className.split(" ").indexOf(className) > -1;
// }
