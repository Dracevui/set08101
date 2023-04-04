const moreBtn = document.getElementById("more-btn");
const moreMenu = document.getElementById("more-menu");

moreBtn.addEventListener("click", () => {
  if (moreMenu.style.right === "0px") {
    moreMenu.style.right = "-150px";
  } else {
    moreMenu.style.right = "0";
  }
});

moreMenu.addEventListener("mouseleave", () => {
  moreMenu.style.right = "-150px";
});
