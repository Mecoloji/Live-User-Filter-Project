const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItem = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=50");

  const { results } = await res.json();

  // console.log(data);
  // * Clear Result
  result.innerHTML = "";

  results.forEach((user) => {
    // console.log(user);
    const li = document.createElement("li");

    listItem.push(li);

    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  // console.log(searchTerm);
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
