function renderTodoAPP() {
  document.body.innerHTML = `
        <input type="text" />
        <button type="button" class="add-button">추가</button>
        <ul>
        </ul>`;

  const button = document.querySelector(".add-button");
  button.addEventListener("click", function () {
    const input = document.querySelector("input");
    const li = document.createElement("li");
    console.log(li);

    const p = document.createElement("p");
    const button = document.createElement("button");

    p.textContent = input.value;
    button.textContent = "완료";
    button.classList.add("delete-button");

    li.appendChild(p);
    li.appendChild(button);

    const ul = document.querySelector("ul");
    ul.appendChild(li);

    p.addEventListener("click", function () {
      p.classList.toggle("done");
    });
    button.addEventListener("click", function (event) {
      ul.removeChild(event.target.parentNode);
    });
  });
}

describe("TodoAPP", function () {
  it("renders input, button", function () {
    renderTodoAPP();
    const input = document.querySelector("input");
    expect(input).toBeDefined();
    const button = document.querySelector(".add-button");
    expect(button).toBeDefined();
  });
  it('adds todo when click "추가" button', function () {
    renderTodoAPP();

    const button = document.querySelector(".add-button");
    button.click();

    const li = document.querySelector("li");
    expect(li).toBeDefined();

    const p = document.querySelector("p");
    expect(p).toBeDefined();
  });

  it('adds todo when click "완료" button', function () {
    renderTodoAPP();
    const addButton = document.querySelector(".add-button");
    addButton.click();

    const deleteButton = document.querySelector(".delete-button");
    deleteButton.click();
    const li = document.querySelector("li");
    expect(li).toBeNull();
  });
});
