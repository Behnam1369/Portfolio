document.querySelector("i.fa").addEventListener("click", () => {
  const menu = document.querySelector("#mobile-menu");
  menu.style.display = "flex";
  const closeButton = document.createElement("li");
  const closeButtonSpan = document.createElement("span");
  closeButtonSpan.classList.add("close-button");
  closeButton.appendChild(closeButtonSpan);
  menu.insertBefore(closeButton, menu.firstChild);
  closeButton.addEventListener("click", () => {
    menu.style.display = "none";
    closeButton.remove();
  });
  const items = document.querySelectorAll("#mobile-menu li");
  const itemsArr = Array.from(items);
  for (let i = 0; i < itemsArr.length; i += 1) {
    itemsArr[i].addEventListener("click", () => {
      menu.style.display = "none";
      closeButton.remove();
    });
  }
});

const projects = [
  {
    img: "/images/work1.jpg",
    title: "My Gym Mate",
    client: "Athletico",
    role: "Full Stack Developer",
    year: "2018",
    tags: ["html", "css", "javaScript", "github", "ruby", "bootstrap"],
    liveLink: "https://behnam1369.github.io/Portfolio/index.html",
    sourceLink: "https://github.com/Behnam1369/Portfolio",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    img: "/images/work2.jpg",
    title: "My Gym Mate",
    client: "Athletico",
    role: "Full Stack Developer",
    year: "2018",
    tags: ["html", "css", "javaScript"],
    liveLink: "https://behnam1369.github.io/Portfolio/index.html",
    sourceLink: "https://github.com/Behnam1369/Portfolio",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: "/images/work3.jpg",
    title: "My Gym Mate",
    client: "Athletico",
    role: "Full Stack Developer",
    year: "2018",
    tags: ["html", "css", "javaScript", "bootstrap"],
    liveLink: "https://behnam1369.github.io/Portfolio/index.html",
    sourceLink: "https://github.com/Behnam1369/Portfolio",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    img: "/images/work4.jpg",
    title: "My Gym Mate",
    client: "Athletico",
    role: "Full Stack Developer",
    year: "2018",
    tags: ["html", "css", "javaScript", "github", "ruby"],
    liveLink: "https://behnam1369.github.io/Portfolio/index.html",
    sourceLink: "https://github.com/Behnam1369/Portfolio",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

function createWorks() {
  const works = document.querySelector("#works");
  projects.map((el, i) => {
    const work = document.createElement("div");
    work.classList.add("work");
    work.innerHTML = `<img src="${el.img}" alt="Work ${i}" />
        <div>
          <h3>${el.title}</h3>
          <span class="span1">${el.client}</span>
          <i class="devider"></i>
          <span class="span2">${el.role}</span>
          <i class="devider"></i>
          <span class="span2">${el.year}</span>
          <p>${el.paragraph}</p>
          <ul class="tags">
          ${el.tags.map((t) => `<li class="tag">${t}</li>`).join("")}    </ul>
          <div class="break"></div>
          <button>See Project</button>
        </div>
    `;
    works.appendChild(work);
    return null;
  });
}

function craetePopups() {
  const button = document.querySelectorAll(".work button");
  const buttonArr = Array.from(button);
  buttonArr.map((el, i) => {
    el.addEventListener("click", () => {
      const popupContainer = document.createElement("div");
      popupContainer.classList.add("popup-container");

      const popup = document.createElement("div");
      popup.classList.add("popup");

      popupContainer.appendChild(popup);

      const closeButton = document.createElement("span");
      closeButton.classList.add("close-button");
      closeButton.addEventListener("click", () => {
        popupContainer.remove();
        document.querySelector("html").style.overflow = "auto";
      });
      popup.appendChild(closeButton);

      const title = document.createElement("h2");
      title.innerHTML = projects[i].title;
      popup.appendChild(title);

      const client = document.createElement("span");
      client.innerHTML = projects[i].client;
      client.classList.add("span1");
      popup.appendChild(client);

      const devider1 = document.createElement("i");
      devider1.classList.add("devider");
      popup.appendChild(devider1);

      const role = document.createElement("span");
      role.innerHTML = projects[i].role;
      role.classList.add("span2");
      popup.appendChild(role);

      const devider2 = document.createElement("i");
      devider2.classList.add("devider");
      popup.appendChild(devider2);

      const year = document.createElement("span");
      year.innerHTML = projects[i].year;
      year.classList.add("span2");
      popup.appendChild(year);

      const img = document.createElement("img");
      img.setAttribute("src", projects[i].img);
      popup.appendChild(img);

      const paragraph = document.createElement("p");
      paragraph.innerHTML = projects[i].paragraph;
      popup.appendChild(paragraph);

      const tagsAndButtonsDiv = document.createElement("div");
      tagsAndButtonsDiv.classList.add("tags-buttons");

      const tags = document.createElement("ul");
      projects[i].tags.map((t) => {
        const tag = document.createElement("li");
        tag.classList.add("tag");
        tag.innerHTML = t;
        tags.appendChild(tag);
        return null;
      });
      tagsAndButtonsDiv.appendChild(tags);

      const seeLiveButton = document.createElement("a");
      seeLiveButton.setAttribute("href", projects[i].liveLink);
      seeLiveButton.classList.add("see-project-button");
      seeLiveButton.innerHTML = "<button> See Live </button>";
      tagsAndButtonsDiv.appendChild(seeLiveButton);

      const seeSourceButton = document.createElement("a");
      seeSourceButton.setAttribute("href", projects[i].sourceLink);
      seeSourceButton.classList.add("see-source-button");
      seeSourceButton.innerHTML = "<button> See Source </button>";
      tagsAndButtonsDiv.appendChild(seeSourceButton);

      popup.appendChild(tagsAndButtonsDiv);

      document.querySelector("html").style.overflow = "hidden";
      document.querySelector("body").appendChild(popupContainer);
    });
    return null;
  });
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    createWorks();
    craetePopups();
  },
  false
);
