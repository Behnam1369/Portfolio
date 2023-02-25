document.querySelector('i.fa-bars').addEventListener('click', () => {
  const menu = document.querySelector('#mobile-menu');
  menu.style.display = 'flex';
  const closeButton = document.createElement('li');
  const closeButtonSpan = document.createElement('span');
  closeButtonSpan.classList.add('close-button');
  closeButton.appendChild(closeButtonSpan);
  menu.insertBefore(closeButton, menu.firstChild);
  closeButton.addEventListener('click', () => {
    menu.style.display = 'none';
    closeButton.remove();
  });
  const items = document.querySelectorAll('#mobile-menu li');
  const itemsArr = Array.from(items);
  for (let i = 0; i < itemsArr.length; i += 1) {
    itemsArr[i].addEventListener('click', () => {
      menu.style.display = 'none';
      closeButton.remove();
    });
  }
});

const projects = [
  {
    media: [{ type: 'image', src: 'images/work1.jpg' },{ type: 'image', src: 'images/work2.jpg' }],
    title: 'Tour Hunter',
    client: 'Microverse',
    role: 'Full Stack Developer',
    year: '2022',
    tags: ['Ruby on Rials', 'React', 'Redux', 'Tailwind CSS', 'Postgres'],
    liveLink: 'https://tourhunterapp.herokuapp.com/tours',
    sourceLink: 'https://github.com/leopiresgoss/tour-hunter',
    paragraph:
      'TourHunter is a project made by a group of 5 developers to give users options of tours around the world to reserve and the admins to add and delete said tours. General users can create an account to be able to reserve a tour and only admins will be able to create and delete tours.',
  },
  {
    media: [{ type: 'image', src: 'images/work2.jpg' }],
    title: 'Blog App',
    client: 'Microverse',
    role: 'Full Stack Developer',
    year: '2022',
    tags: ['Ruby on Rails', 'Postgres', 'Rspec'],
    liveLink: 'https://rails-blog1000.herokuapp.com/',
    sourceLink: 'https://github.com/Behnam1369/rails-blog',
    paragraph:
      'A simple blogging platform created using Ruby on Rails that alows users to create a profile, add Posts, like posts from other bloggers and add comment to posts. In this project I have used Devise gem for authentication, CanCanCan gem for authorization and Rspec/Capybara for integration tests. ',
  },
  {
    media: [{ type: 'image', src: 'images/work3.jpg' }],
    title: 'Budget App',
    client: 'Microverse',
    role: 'Full Stack Developer',
    year: '2022',
    tags: ['Ruby on Rails', 'Postgres', 'Rspec'],
    liveLink: 'https://myexpenditures.herokuapp.com/',
    sourceLink: 'https://github.com/Behnam1369/budget-app',
    paragraph:
      'Budget app is a mobile application that helps users to keep track of their expenditures. It allows users to add expenditure categories and add expenditures to any category. Finally they can see the total spent amount for each category. ',
  },
  {
    media: [{ type: 'image', src: 'images/work5.jpg' }],
    title: 'To-do List',
    client: 'Microverse',
    role: 'Full Stack Developer',
    year: '2022',
    tags: ['html', 'css', 'javaScript', 'webpack'],
    liveLink: 'https://behnam1369.github.io/to-do-list/',
    sourceLink: 'https://github.com/Behnam1369/to-do-list',
    paragraph:
      'This project is focused on using webpack for creating an optimized deploy. In this project you can add a task, edit a task, mark a task as completed, remove a task or remove all completed tasks. After any interaction all tasks will be automatically saved into the local storage and They will be recalled after reopnening the page.   ',
  },
  {
    media: [{ type: 'image', src: 'images/work0.jpg' }],
    title: 'Contract Management System',
    client: 'PECO',
    role: 'Full Stack Developer',
    year: '20218-Now',
    tags: ['ASP.Net', 'javascript', 'JQuery', 'SQL Server'],
    liveLink: 'http://zlatan.pe-co.ir/',
    sourceLink: 'Private',
    paragraph: `A contract management system for PECO. It allows the client to keep track of the contracts, invoices and the payments. It also contains a flexible workflow manager to design the process of reviewing invoices. And finally, users can get a variety range of reports based on contract, client, cost centers, currency, etc. <br />
       When designing the workflow, Every review step can contain an stansard deadline to review the invoice. And the system will automatically send an email to the client when the deadline is reached. </br>
       The client of this project is PECO (Pezhvak Energy Company) which is a well known and reputable drilling company.`,
  },
];

function createWorks() {
  const works = document.querySelector('#works');
  projects.map((el) => {
    const work = document.createElement('div');
    work.classList.add('work');
    work.innerHTML = `
        <div>
  ${el.media.map((med, i) => {
    if (med.type === 'image') {
      return `<img src='${med.src}' alt='${el.title}' class='${i === 0 ? 'visible' : ''}' />`;
    }
    return '';
  }).join('')}
        </div>
        <div>
          <h3>${el.title}</h3>
          <span class='span1'>${el.client}</span>
          <i class='devider'></i>
          <span class='span2'>${el.role}</span>
          <i class='devider'></i>
          <span class='span2'>${el.year}</span>
          <p>${el.paragraph}</p>
          <ul class='tags'>
          ${el.tags.map((t) => `<li class='tag'>${t}</li>`).join('')}    </ul>
          <div class='break'></div>
          <button class="btnProject">See Project</button>
        </div>
    `;
    works.appendChild(work);

    //Next Button
    const btnNext = document.createElement('button');
    btnNext.classList.add('next');
    btnNext.innerHTML = '<i class="fas fa-chevron-right"></i>';
    btnNext.addEventListener('click', () => {
      const img = work.querySelector('img.visible');
      if (img.nextElementSibling.tagName === 'IMG') {
        img.classList.remove('visible');
        img.nextElementSibling.classList.add('visible');
      } else {
        img.classList.remove('visible');
        img.parentElement.children[1].classList.add('visible');
      }
    });
    work.children[0].appendChild(btnNext);

    // Previous Button
    const btnPrev = document.createElement('button');
    btnPrev.classList.add('prev');
    btnPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';
    btnPrev.addEventListener('click', () => {
      const img = work.querySelector('img.visible');
      if (img.previousElementSibling.tagName === 'IMG') {
        img.classList.remove('visible');
        img.previousElementSibling.classList.add('visible');
      } else {
        img.classList.remove('visible');
        img.parentElement.children[img.parentElement.children.length - 2].classList.add('visible');
      }
    });
    work.children[0].prepend(btnPrev);

    return null;
  });
}

function craetePopups() {
  const button = document.querySelectorAll('.work button.btnProject');
  const buttonArr = Array.from(button);
  buttonArr.map((el, i) => {
    el.addEventListener('click', () => {
      const popupContainer = document.createElement('div');
      popupContainer.classList.add('popup-container');
      popupContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-container')) {
          popupContainer.remove();
          document.querySelector('html').style.overflow = 'auto';
        }
      });

      const popup = document.createElement('div');
      popup.classList.add('popup');

      popupContainer.appendChild(popup);

      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', () => {
        popupContainer.remove();
        document.querySelector('html').style.overflow = 'auto';
      });
      popup.appendChild(closeButton);

      const title = document.createElement('h2');
      title.innerHTML = projects[i].title;
      popup.appendChild(title);

      const client = document.createElement('span');
      client.innerHTML = projects[i].client;
      client.classList.add('span1');
      popup.appendChild(client);

      const devider1 = document.createElement('i');
      devider1.classList.add('devider');
      popup.appendChild(devider1);

      const role = document.createElement('span');
      role.innerHTML = projects[i].role;
      role.classList.add('span2');
      popup.appendChild(role);

      const devider2 = document.createElement('i');
      devider2.classList.add('devider');
      popup.appendChild(devider2);

      const year = document.createElement('span');
      year.innerHTML = projects[i].year;
      year.classList.add('span2');
      popup.appendChild(year);

      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      popup.appendChild(img);

      const paragraph = document.createElement('p');
      paragraph.innerHTML = projects[i].paragraph;
      popup.appendChild(paragraph);

      const tagsAndButtonsDiv = document.createElement('div');
      tagsAndButtonsDiv.classList.add('tags-buttons');

      const tags = document.createElement('ul');
      projects[i].tags.map((t) => {
        const tag = document.createElement('li');
        tag.classList.add('tag');
        tag.innerHTML = t;
        tags.appendChild(tag);
        return null;
      });
      tagsAndButtonsDiv.appendChild(tags);

      const seeLiveButton = document.createElement('a');
      seeLiveButton.setAttribute('href', projects[i].liveLink);
      seeLiveButton.setAttribute('target', '_blank');
      seeLiveButton.classList.add('see-project-button');
      seeLiveButton.innerHTML = '<button> See Live </button>';
      tagsAndButtonsDiv.appendChild(seeLiveButton);

      if (projects[i].sourceLink === 'Private') {
        const seeSourceButton = document.createElement('span');
        seeSourceButton.classList.add('see-source-button');
        seeSourceButton.innerHTML = '<button disabled> Source is private </button>';
        tagsAndButtonsDiv.appendChild(seeSourceButton);
      } else {
        const seeSourceButton = document.createElement('a');
        seeSourceButton.setAttribute('href', projects[i].sourceLink);
        seeSourceButton.setAttribute('target', '_blank');
        seeSourceButton.classList.add('see-source-button');
        seeSourceButton.innerHTML = '<button> See Source </button>';
        tagsAndButtonsDiv.appendChild(seeSourceButton);
      }

      popup.appendChild(tagsAndButtonsDiv);

      document.querySelector('html').style.overflow = 'hidden';
      document.querySelector('body').appendChild(popupContainer);
    });
    return null;
  });
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    createWorks();
    craetePopups();
  },
  false,
);

const form = document.getElementsByTagName('form')[0];
const emailBox = document.getElementById('email');
const nameBox = document.getElementById('name');
const messageBox = document.getElementById('message');
const error = document.getElementsByClassName('error-message')[0];
const submitButton = document.querySelector('.submit-button');

function showError(text) {
  // if (!error.style.opacity) {
  emailBox.addEventListener('input', () => {
    if (
      emailBox.validity.valid
      && emailBox.value.toLowerCase() === emailBox.value
    ) {
      emailBox.style.boxShadow = '';
      error.style.opacity = 0;
    } else {
      error.style.opacity = 1;
      emailBox.style.boxShadow = 'red 0 3px 0 0, red 0 0 0 3px';
    }
  });
  error.style.opacity = 1;
  emailBox.style.boxShadow = 'red 0 3px 0 0, red 0 0 0 3px';
  // }

  const outInterval = setInterval(() => {
    error.style.opacity -= 0.02;
    if (error.style.opacity <= 0) {
      clearInterval(outInterval);
      error.innerHTML = text;
      const inInterval = setInterval(() => {
        error.style.opacity = Number(error.style.opacity) + 0.02;
        if (error.style.opacity >= 1) {
          clearInterval(inInterval);
        }
      }, 200 / 50);
    }
  }, 200 / 50);
}

submitButton.addEventListener('click', () => {
  if (emailBox.value.toLowerCase() !== emailBox.value) {
    showError('All email letters should be in lower case.');
  } else if (emailBox.validity.valueMissing) {
    showError('Please enter your email address.');
  } else if (emailBox.validity.typeMismatch) {
    showError('Please enter a valid email address.');
  } else {
    form.submit();
  }
});

let userInfo = { name: '', email: '', message: '' };
if (localStorage.userInfo !== undefined) {
  userInfo = JSON.parse(localStorage.userInfo);
  nameBox.value = userInfo.name ? userInfo.name : '';
  emailBox.value = userInfo.email ? userInfo.email : '';
  messageBox.value = userInfo.message ? userInfo.message : '';
}

nameBox.addEventListener('input', () => {
  userInfo.name = nameBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

emailBox.addEventListener('input', () => {
  userInfo.email = emailBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

messageBox.addEventListener('input', () => {
  userInfo.message = messageBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

const chevrons = document.querySelectorAll('.chevron');
Array.from(chevrons).forEach((chevron) => {
  chevron.addEventListener('click', () => {
    chevron.classList.toggle('fa-chevron-down');
    chevron.classList.toggle('fa-chevron-right');
    chevron.nextElementSibling.classList.toggle('hidden');
  });
});

document.querySelector('.get-resume').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'https://github.com/Behnam1369/Portfolio/raw/main/Behnam%20Aghaali-Resume.pdf';
});
