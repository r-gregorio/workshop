function readMore() {
  var dots1 = document.getElementById("dots_1");
  var moreText1 = document.getElementById("more_1");
  var btnReadMore1 = document.getElementById("btnReadMore1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnReadMore1.innerHTML = "もっと読む"; 
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnReadMore2.innerHTML = "もっと読む"; 
    moreText1.style.display = "inline";
  }

}

function readMore2() {
  var dots2 = document.getElementById("dots_2");
  var moreText2 = document.getElementById("more_2");
  var btnReadMore2 = document.getElementById("btnReadMore2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnReadMore2.innerHTML = "もっと読む"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnReadMore2.innerHTML = "もっと読む"; 
    moreText2.style.display = "inline";
  }
}


function readMore3() {
  var dots3 = document.getElementById("dots_3");
  var moreText3 = document.getElementById("more_3");
  var btnReadMore2 = document.getElementById("btnReadMore3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnReadMore2.innerHTML = "もっと読む"; 
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnReadMore2.innerHTML = "もっと読む"; 
    moreText3.style.display = "inline";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}