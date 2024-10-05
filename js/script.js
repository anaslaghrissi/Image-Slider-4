let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".box").appendChild(items[0]);
});

prevBtn.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".box").prepend(items[items.length - 1]);
});
