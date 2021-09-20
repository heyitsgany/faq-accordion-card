"use strict";

const faq = document.querySelector(".faq");
let opened;

faq.addEventListener("click", function (clicked) {
  // GUARD CLAUSE
  if (!clicked.target.classList.contains("faq__question")) {
    return;
  }

  // CHECK IF AN ANSWER IS ALREADY OPEN / CLOSE THE ANSWER
  if (opened && opened != clicked.target) {
    opened.classList.remove("open");
    opened.nextElementSibling.classList.remove("open");
  }

  clicked.target.classList.toggle("open");
  clicked.target.nextElementSibling.classList.toggle("open");
  opened = clicked.target; // STORE THE OPEN ANSWER TO CHECK ON FUTURE CLICKS
  return;
});
