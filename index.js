document.querySelector("i.fa").addEventListener("click", () => {
  const menu = document.querySelector("#mobile-menu");
  menu.style.display = "flex";
  const closeButton = document.createElement("li");
  const closeButtonSpan = document.createElement("span");
  closeButtonSpan.classList.add("closeMenu");
  closeButton.appendChild(closeButtonSpan);
  menu.insertBefore(closeButton, menu.firstChild);
  closeButton.addEventListener("click", () => {
    menu.style.display = "none";
    closeButton.remove();
  });
  const items = document.querySelectorAll("#mobile-menu li");
  const itemsArr = Array.from(items);
  itemsArr.map(function (el) {
    return el.addEventListener("click", () => {
      menu.style.display = "none";
      closeButton.remove();
    });
  });
});
