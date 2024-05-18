let addButton = document.querySelector(".addButton");
let task = document.querySelector("input");
let ul = document.querySelector("ul");
addButton.addEventListener("click", () => {
  if (task.value.length === 0) {
    alert("چیزی ننوشته اید");
  } else {
    let li = document.createElement("li");
    let taskText = document.createTextNode(task.value);
    ul.appendChild(li);
    li.innerHTML += `<span class="trash"><i class="fa-solid fa-trash-can"></i></span>
                      <span class="done"><i class="fa-regular fa-square"></i></span>
                      <span class="edition"><i class="fa-solid fa-pen"></i></span>`;
    li.appendChild(taskText);
    task.value = "";
  }
});
ul.addEventListener("click", (event) => {
  if (event.target.className === "fa-solid fa-trash-can") {
    event.target.parentElement.parentElement.style.display = "none";
  } else if (event.target.className === "fa-regular fa-square") {
    event.target.parentElement.firstElementChild.classList.toggle("fa-square");
    event.target.parentElement.firstElementChild.classList.toggle(
      "fa-square-check"
    );
    event.target.parentElement.parentElement.classList.toggle("taskSituation");
    event.target.parentElement.previousElementSibling.classList.toggle(
      "trashSituation"
    );
  } else if (event.target.className === "fa-regular fa-square-check") {
    event.target.parentElement.firstElementChild.classList.toggle("fa-square");
    event.target.parentElement.firstElementChild.classList.toggle(
      "fa-square-check"
    );
    event.target.parentElement.parentElement.classList.toggle("taskSituation");
    event.target.parentElement.previousElementSibling.classList.toggle(
      "trashSituation"
    );
  }
});
