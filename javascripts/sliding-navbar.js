const moreBtn = document.getElementById("more-btn");
const moreMenu = document.getElementById("more-menu");

moreBtn.addEventListener("click", () => {
  moreMenu.classList.toggle("show");
  if (moreMenu.classList.contains("show")) {
    moreBtn.style.right = "150px";
  } else {
    moreBtn.style.right = "0";
  }
});

moreMenu.addEventListener("mouseleave", () => {
  moreMenu.classList.remove("show");
  moreBtn.style.right = "0";
});
