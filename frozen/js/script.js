function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnReadMore = document.getElementById("btnReadMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnReadMore.innerHTML = "もっと読む"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}