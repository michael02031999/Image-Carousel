let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", previousPic);
next.addEventListener("click", nextPic);

let multiple = 1;
let pxMoved = 0;
let total;
let totalPx;

function previousPic() {
  pxMoved = pxMoved + 510;
  console.log(pxMoved);

  if (pxMoved == 510) {
    pxMoved = -1530;
  }

  totalPx = "translateX(" + pxMoved + "px)";

  image1.style.transform = totalPx;
  image2.style.transform = totalPx;
  image3.style.transform = totalPx;
  image4.style.transform = totalPx;

  clearInterval(timer);
  timer = setInterval(nextPic, 2000);
}

function nextPic() {
  pxMoved = pxMoved - 510;
  console.log(pxMoved);

  if (pxMoved == -2040) {
    pxMoved = 0;
  }

  totalPx = "translateX(" + pxMoved + "px)";

  image1.style.transform = totalPx;
  image2.style.transform = totalPx;
  image3.style.transform = totalPx;
  image4.style.transform = totalPx;

  clearInterval(timer);
  timer = setInterval(nextPic, 2000);
}

let timer = setInterval(nextPic, 2000);
