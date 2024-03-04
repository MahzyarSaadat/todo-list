const inputEl = document.getElementById("input-item");
const addBtn = document.querySelector(".add-btn");

let lists = [];

const renderList = () => {
  const listContainer = document.querySelector(".list-container");
  listContainer.innerHTML = "";

  lists.forEach((item) => {
    const liContainer = document.createElement("li");
    liContainer.setAttribute("id", item.id);
    liContainer.classList.add("list", item.selected ? "selceted" : "not");

    const listName = document.createElement("p");
    listName.innerText = item.name;
    listName.addEventListener("click", () => markSelected(item.id));

    const iconBtn = document.createElement("img");
    iconBtn.setAttribute("src", "/icons/close-square-svgrepo-com.svg");
    iconBtn.addEventListener("click", () => deletList(item.id));

    liContainer.appendChild(listName);
    liContainer.appendChild(iconBtn);
    listContainer.appendChild(liContainer);
  });
};

const addList = () => {
  const inputVal = inputEl.value;
  let list;

  if (inputVal.trim() !== "") {
    list = {
      id: Date.now(),
      name: inputVal,
      selected: false,
    };
  }

  inputEl.value = "";
  lists.push(list);
  renderList();

  console.log(lists);
};

addBtn.addEventListener("click", (e) => {
  addList();
});

const deletList = (id) => {
  lists = lists.filter((list) => list.id !== id);
  renderList();
};

const markSelected = (id) => {
  lists = lists.map((list) => {
    if (list.id === id) {
      list.selected = !list.selected;
    }

    return list;
  });
  updateList(id);
};

const updateList = (id) => {
  const listElement = document.getElementById(id);
  if (listElement) {
    const task = lists.find((item) => item.id === id);
    if (task.selected) {
      listElement.classList.add("selected");
    } else {
      listElement.classList.add("selected");
    }
  }
};

renderList();
