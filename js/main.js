const users = [
  {
    name: "Bertie Yates",
    age: 29,
    image_url: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Hester Hogan",
    age: 32,
    image_url: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Larry Little",
    age: 34,
    image_url: "https://i.pravatar.cc/300?img=3",
  },
];

const extraUsers = [
  {
    name: "Thomas Robinson",
    age: 33,
    image_url: "https://i.pravatar.cc/300?img=4",
  },
  {
    name: "Mia Hernandez",
    age: 49,
    image_url: "https://i.pravatar.cc/300?img=5",
  },
];

const listEl = document.getElementById("birthday__list");
const viewBtn = document.getElementById("birthday__btn");

let userAdded = 0;

users.forEach((user) => {
  addListItem(user);
});

viewBtn.addEventListener("click", () => {
  addListItem(extraUsers[userAdded]);
  userAdded++;

  if (userAdded === extraUsers.length) {
    viewBtn.style.display = "none";
  }
});

function addListItem(user) {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("birthday__list-item");

  listItemEl.innerHTML = `
  <img
    src="${user.image_url}"
    class="birthday__list-img"
    alt="${user.name}"
  />
  <div class="birthday__list-info">
    <h2 class="birthday__list-info-title">${user.name}</h2>
    <p class="birthday__list-info-text">${user.age} years</p>
  </div>
  `;

  listEl.appendChild(listItemEl);
}
