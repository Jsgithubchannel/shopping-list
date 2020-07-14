const input = document.querySelector(".input");
const addItemBtn = document.querySelector("#addItemBtn");
const list = document.querySelector("ul");
//const trashBinIcon = document.querySelector(".fa-trash");

// Add a stuff with a click btn or the Enter key
addItemBtn.addEventListener("click", () => {
  newElement();
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") newElement();
});

//Remove the stuff clicking a trash bin icon
// trashBinIcon.addEventListener("click", () => {
//   removeElement();
// });

function newElement() {
  //add stuffs
  let li = document.createElement("li");
  li.textContent = input.value;
  input.value = "";
  list.appendChild(li);

  //add a trash bin icon

  //   let btn = document.createElement("button");
  //   btn.setAttribute("class", "fa fa-trash");

  //let btn = document.createElement("button");
  //li.innerHTML('<i class="fa fa-trash" aria-hidden="true"></i>');
}

// function removeElement() {
//   let li = document.querySelector("li");
//   list.removeChild(li);
// }

//해결해야할 것: trash bin이 li의 글자 왼쪽에 나옴
