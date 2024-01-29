import { workshops_list } from "./js/workshops.js";
import { discussions_list } from "./js/discussions.js";
import { hackathons_list } from "./js/hackathons.js";

// Workshops Section Rendering
workshops_list.forEach((elem, index, arr) => {
  let div = document.createElement("div");
  div.classList.add("card", "workshop");
  div.setAttribute("data-aos", "fade-up");
  div.innerHTML = `
          <img src="${elem.img}" class="thumbnail" alt="${elem.alt}" />
          <div class="content">
          <h3 class="title">${elem.heading}</h3>
            <p class="detail">
              ${elem.content.slice(0, 150)}
            </p>
            <span class="more popup-open-btn-workshop-${
              index + 1
            }">Learn More..</span>
          </div>

          <div class="popup-workshop-${index + 1} popup">
          <div class="content">
            <div class="popup-close-btn-workshop-${
              index + 1
            } popup-close-btn">&times;</div>
            <h2 class="title">${elem.heading}</h2>
            <p>
            ${elem.content}
            </p>
          </div>
        </div>
        `;
  document.querySelector(".workshops").appendChild(div);
});

workshops_list.forEach((elem, i, arr) => {
  document
    .querySelector(`.popup-open-btn-workshop-${i + 1}`)
    .addEventListener("click", function () {
      document
        .querySelector(`.popup-workshop-${i + 1}`)
        .classList.add("active");
    });
  document
    .querySelector(`.popup-workshop-${i + 1} .popup-close-btn`)
    .addEventListener("click", function () {
      document
        .querySelector(`.popup-workshop-${i + 1}`)
        .classList.remove("active");
    });
});

// Discussion Section Rendering
discussions_list.forEach((elem, index, arr) => {
  let div = document.createElement("div");
  div.classList.add("card", "discussion");
  div.setAttribute("data-aos", "fade-up");
  div.innerHTML = `
          <img src="${elem.img}" class="thumbnail" alt="${elem.alt}" />
          <div class="content">
          <h3 class="title">${elem.heading}</h3>
            <p class="detail">
              ${elem.content.slice(0, 150)}
            </p>
            <span class="more popup-open-btn-discussion-${
              index + 1
            }">Learn More..</span>
          </div>

          <div class="popup-discussion-${index + 1} popup popup-dark">
          <div class="content">
            <div class="popup-close-btn-discussion-${
              index + 1
            } popup-close-btn">&times;</div>
            <h2 class="title">${elem.heading}</h2>
            <p>
            ${elem.content}
            </p>
          </div>
        </div>
        `;
  document.querySelector(".discussions").appendChild(div);
});

discussions_list.forEach((elem, i, arr) => {
  document
    .querySelector(`.popup-open-btn-discussion-${i + 1}`)
    .addEventListener("click", function () {
      document
        .querySelector(`.popup-discussion-${i + 1}`)
        .classList.add("active");
    });
  document
    .querySelector(`.popup-discussion-${i + 1} .popup-close-btn`)
    .addEventListener("click", function () {
      document
        .querySelector(`.popup-discussion-${i + 1}`)
        .classList.remove("active");
    });
});

// Hackathon Section Rendering
hackathons_list.forEach((elem, index, arr) => {
  let div = document.createElement("div");
  div.classList.add("card", "hackathon");
  div.setAttribute("data-aos", "fade-right");
  div.innerHTML = `
          <img src="${elem.img}" class="thumbnail" alt="${elem.alt}" />
          <div class="content">
          <h3 class="title">${elem.heading}</h3>
            <p class="detail">
              ${elem.content.slice(0, 150)}
            </p>
            <span class="more popup-open-btn-hackathon-${
              index + 1
            }">Learn More..</span>
          </div>

          <div class="popup-hackathon-${index + 1} popup">
          <div class="content">
            <div class="popup-close-btn-hackathon-${
              index + 1
            } popup-close-btn">&times;</div>
            <h2 class="title">${elem.heading}</h2>
            <p>
            ${elem.content}
            </p>
          </div>
        </div>
        `;
  document.querySelector(".hackathons").appendChild(div);
});

hackathons_list.forEach((elem, i, arr) => {
  document
    .querySelector(`.popup-open-btn-hackathon-${i + 1}`)
    .addEventListener("click", function () {
      document
        .querySelector(`.popup-hackathon-${i + 1}`)
        .classList.add("active");
    });
  document
    .querySelector(`.popup-hackathon-${i + 1} .popup-close-btn`)
    .addEventListener("click", function () {
      document
        .querySelector(`.popup-hackathon-${i + 1}`)
        .classList.remove("active");
    });
});

/* Pop Up Div */
document
  .querySelector(`.popup-open-btn-highlight-1`)
  .addEventListener("click", function () {
    document.querySelector(`.popup-highlight-1`).classList.add("active");
  });
document
  .querySelector(`.popup-highlight-1 .popup-close-btn`)
  .addEventListener("click", function () {
    document.querySelector(`.popup-highlight-1`).classList.remove("active");
  });

document
  .querySelector(`.popup-open-btn-highlight-2`)
  .addEventListener("click", function () {
    document.querySelector(`.popup-highlight-2`).classList.add("active");
  });
document
  .querySelector(`.popup-highlight-2 .popup-close-btn`)
  .addEventListener("click", function () {
    document.querySelector(`.popup-highlight-2`).classList.remove("active");
  });

/* Mobile Responsive Hamberger Icon */
window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".navbar");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100) {
      header.classList.add("scroll");
      document.querySelector(".qcg-logo").src = "./assets/QCG-logo-white.png";
    } else {
      header.classList.remove("scroll");
      document.querySelector(".qcg-logo").src = "./assets/qcg-logo.png";
    }
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
  });
};
