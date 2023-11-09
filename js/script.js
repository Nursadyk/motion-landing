let bars = document.querySelector(".header__icons-img");
let bottom = document.querySelector(".menu");
bars.onclick = () => {
  bottom.classList.toggle("active");
};
window.onscroll = () => {
  bottom.classList.remove("active");
};
$(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

let frontend_check = document.getElementById("frontend-check");
let backend_check = document.getElementById("backend-check");
let ux_check = document.getElementById("ux-check");
let database_check = document.getElementById("database-check");

frontend_check.onclick = () => {
  let backend = document.querySelectorAll(".backend");
  let ux = document.querySelectorAll(".ux");
  let database = document.querySelectorAll(".database");
  let frontend = document.querySelectorAll(".frontend");
  for (let i = 0; i < backend.length; i++) {
    backend[i].style.display = "none";
  }
  for (let i = 0; i < ux.length; i++) {
    ux[i].style.display = "none";
  }
  for (let i = 0; i < database.length; i++) {
    database[i].style.display = "none";
  }
  for (let i = 0; i < frontend.length; i++) {
    frontend[i].style.display = "block";
  }
};
backend_check.onclick = () => {
  let frontend = document.querySelectorAll(".frontend");
  let ux = document.querySelectorAll(".ux");
  let database = document.querySelectorAll(".database");
  let backend = document.querySelectorAll(".backend");

  for (let i = 0; i < backend.length; i++) {
    backend[i].style.display = "block";
  }
  for (let i = 0; i < frontend.length; i++) {
    frontend[i].style.display = "none";
  }
  for (let i = 0; i < ux.length; i++) {
    ux[i].style.display = "none";
  }
  for (let i = 0; i < database.length; i++) {
    database[i].style.display = "none";
  }
};
ux_check.onclick = () => {
  let frontend = document.querySelectorAll(".frontend");
  let ux = document.querySelectorAll(".ux");
  let database = document.querySelectorAll(".database");
  let backend = document.querySelectorAll(".backend");

  for (let i = 0; i < backend.length; i++) {
    backend[i].style.display = "none";
  }
  for (let i = 0; i < frontend.length; i++) {
    frontend[i].style.display = "none";
  }
  for (let i = 0; i < ux.length; i++) {
    ux[i].style.display = "block";
  }
  for (let i = 0; i < database.length; i++) {
    database[i].style.display = "none";
  }
};
database_check.onclick = () => {
  let frontend = document.querySelectorAll(".frontend");
  let ux = document.querySelectorAll(".ux");
  let database = document.querySelectorAll(".database");
  let backend = document.querySelectorAll(".backend");

  for (let i = 0; i < backend.length; i++) {
    backend[i].style.display = "none ";
  }
  for (let i = 0; i < frontend.length; i++) {
    frontend[i].style.display = "none";
  }
  for (let i = 0; i < ux.length; i++) {
    ux[i].style.display = "none";
  }
  for (let i = 0; i < database.length; i++) {
    database[i].style.display = "block";
  }
};
