var myIndex = 0;
var slides = document.getElementsByClassName("mySlides");

function carousel() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.opacity = 1;
  setTimeout(carousel, 3000);
}
carousel();
