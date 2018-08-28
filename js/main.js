var mySlides = "";
showSlides(mySlides);

function slide(n) {
  showSlides(mySlides += n);
}

function next(n) {
  showSlides(mySlides = n);
}


function showSlides(n) {
  var slides = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {mySlides = 1}
  if (n < 1) {mySlides = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";

  }

  slides[mySlides-1].style.display = "block";
}

var automatic = 0;
move();

function move() {
    var i;
    var slide = document.getElementsByClassName("image");
    for (i = 0; i < slide.length; i++) {
       slide[i].style.display = "none";
    }
    automatic++;
    if (automatic >slide.length) {automatic = 1}
    slide[automatic-1].style.display = "block";
    setTimeout(move, 3000);
}
