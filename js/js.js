window.onscroll = () => {
  if (window.scrollY > 80) {
    document.querySelector(".nav2").classList.add("active");
    console.log("scrolll");
  } else {
    document.querySelector(".nav2").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".nav2").classList.add("active");
    console.log("scrolll");
  } else {
    document.querySelector(".nav2").classList.remove("active");
  }
};

//   open login popup
const loginwind = document.querySelector(".popup-login");
function openLogin() {
  loginwind.style.display = "block";
}
function closeLogin() {
  loginwind.style.display = "none";
}

//   open register popup
const regWind = document.querySelector(".popup-register");
function openReg() {
  regWind.style.display = "block";
}
function closeReg() {
  regWind.style.display = "none";
}

// slider

var slides = document.querySelectorAll(".swiper-slide");
const btn = document.getElementById("nextButton");
let curIndx = 0;
let itemperSlide = 3;
const totalslides = slides.length;
showSlides();
function showSlides() {
  const startIndex = curIndx;
  const endIndex = startIndex + itemperSlide;
  for (let i = 0; i < totalSlides; i++) {
    if (i >= startIndex && i < endIndex) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
}
btn.addEventListener("click", nextSlide);
function nextSlide() {
  if (curIndx < totalSlides - 1) {
    curIndx++;
  } else {
    curIndx = 0;
  }
  showSlides();
}


// review slider
// let slidesRev = document.querySelectorAll(".card-review");
// let curIndexRev = 0;
// let totalReviews = slidesRev.length;
// let revPerslide = 3;

// showReviews();

// function showReviews() {
//   for (let i = 0; i < totalReviews; i++) {
//     if (i >= curIndexRev && i < curIndexRev + revPerslide) {
//       slidesRev[i].style.display = "block";
//     } else {
//       slidesRev[i].style.display = "none";
//     }
//   }
// }

// function onotherRev() {
//   if (curIndexRev < totalReviews - revPerslide) {
//     curIndexRev++;
//   } else {
//     curIndexRev = 0;
//   }
//   showReviews();
// }
