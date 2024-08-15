const navItem = document.querySelectorAll(".toggle-page-navbar");
const mobileNveToggleBtn = document.querySelectorAll(
  ".mobile-toggle-page-navbar"
);
const logoImg = document.querySelector(".logo-img");
const hoverForImgDiv = document.querySelectorAll(".recipe-item");
const hoverImg = document.querySelectorAll(".hover-img");

// ! image hover and transform selected
const leftTop = document.querySelectorAll(".left-top");
const topUP = document.querySelectorAll(".top");
const rightTop = document.querySelectorAll(".right-top");
const leftMiddle = document.querySelectorAll(".left-middle");
const middle = document.querySelectorAll(".middle");
const rightMiddle = document.querySelectorAll(".right-middle");
const bottomDown = document.querySelectorAll(".bottom");
const rightBottom = document.querySelectorAll(".right-bottom");
const leftBottom = document.querySelectorAll(".left-bottom");
const leftBottomLast = document.querySelector(".left-bottom-last");
const bottomLast = document.querySelector(".bottom-last");
const rightBottomLast = document.querySelector(".right-bottom-last");
//! till here

const page = document.querySelectorAll(".page");
const closeOpenBtn = document.querySelector(".close-open-btn");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNavbar = document.querySelector(".mobile-navbar");
const currYear = document.querySelectorAll(".currYear");

const backgroundColors = {
  home: "#fff",
  food: "#5ea3ec",
  retail: "#f64444",
  community: "#ffb400",
};

//Setting Current year

currYear.forEach((currYear) => {
  const year = new Date().getFullYear();
  currYear.textContent = year;
});

// Toggling navigation button and nav page
function toggleMobileNav() {
  openBtn.classList.toggle("show");
  closeBtn.classList.toggle("show");
  mobileNavbar.classList.toggle("hide");
}

closeOpenBtn.addEventListener("click", function () {
  toggleMobileNav();
});

// Toggle navigation form 60px width to 100% width

navItem.forEach((item) => {
  item.addEventListener("click", function () {
    navItem.forEach((bar) => {
      bar.classList.remove("open");
    });
    item.classList.toggle("open");

    // changing display block to none or none to block
    const dataNavbar = item.dataset.nav;
    page.forEach((page) => {
      page.style.display = "none";
    });

    document.querySelector(`[data-view=${dataNavbar}]`).style.display = "block";
    document.querySelector(
      `[data-view=${dataNavbar}]`
    ).style.backgroundColor = `${backgroundColors[`${dataNavbar}`]}`;
    window.scroll(0, 0);
    // positioning logo image
    !item.classList.contains("home")
      ? (logoImg.style.transform = "matrix(0.833333, 0, 0, 0.833333, 0, 0)")
      : (logoImg.style.transform = "matrix(1, 0, 0, 1, 55, 0)");
  });
});

// anding background color and switching page with mobile navbar
mobileNveToggleBtn.forEach((mobileNav) => {
  mobileNav.addEventListener("click", function () {
    const dataNavbar = mobileNav.dataset.nav;
    page.forEach((page) => {
      page.style.display = "none";
    });

    document.querySelector(`[data-view=${dataNavbar}]`).style.display = "block";
    console.log(dataNavbar);

    console.log(backgroundColors[dataNavbar]);
    document.querySelector(
      `[data-view=${dataNavbar}]`
    ).style.backgroundColor = `${backgroundColors[`${dataNavbar}`]}`;
    window.scroll(0, 0);
    toggleMobileNav();
  });
});
// On Hover show image

// Utility functions for random positioning
function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function transformImage(element, targetElement, xRange, yRange) {
  if (!targetElement.children[2].contains(element)) return;
  const [minX, maxX] = xRange;
  const [minY, maxY] = yRange;

  element.style.transform = `translate(${getRandomPosition(
    minX,
    maxX
  )}px, ${getRandomPosition(minY, maxY)}px)`;
}

const isPhone = window.matchMedia("(max-width: 800px)").matches;
// console.log(isPhone);

if (isPhone) {
  function transformImage(element, targetElement, xRange, yRange) {
    if (!targetElement.children[2].contains(element)) return;
  }
}

function applyTransforms(imgDiv, transforms) {
  transforms.forEach(([elements, xRange, yRange]) => {
    elements.forEach((element) =>
      transformImage(element, imgDiv, xRange, yRange)
    );
  });
}

// Hover event listeners
hoverForImgDiv.forEach((imgDiv, idx) => {
  imgDiv.addEventListener("mouseenter", () => {
    imgDiv.children[2].style.zIndex = -100;

    const transforms = [
      [leftTop, [-120, 650], [-120, 150]],
      [topUP, [-300, 300], [-120, 150]],
      [rightTop, [-650, 120], [-100, 150]],
      [leftMiddle, [-120, 600], [-250, -45]],
      [middle, [-500, 500], [-400, -80]],
      [rightMiddle, [-500, 80], [-20, -255]],
      [leftBottom, [-80, 500], [-400, -185]],
      [bottomDown, [-400, 400], [-400, -305]],
      [rightBottom, [-500, 80], [-400, -185]],
      [[leftBottomLast], [-80, 500], [-400, -225]],
      [[bottomLast], [-400, 400], [-400, -305]],
      [[rightBottomLast], [-500, 80], [-400, -185]],
    ];

    applyTransforms(imgDiv, transforms);

    imgDiv.children[2].style.opacity = 1;
    hoverImg[idx].style.transform = `scale(1,1)`;
  });

  imgDiv.addEventListener("mouseleave", () => {
    imgDiv.children[2].style.opacity = 0;
    hoverImg[idx].style.transform = `scale(0.8,0.8)`;
  });
});

/*
function randomX(minX, maxX) {
  return Math.floor(Math.random() * (maxX - minX + 1) + minX);
}

function randomY(minY, maxY) {
  return Math.floor(Math.random() * (maxY - minY + 1) + minY);
}
function transformImg(varName, thisEle, minX, maxX, minY, maxY) {
  if (!thisEle.children[2].contains(varName)) return;
  return (varName.style.transform = `translate(${randomX(
    minX,
    maxX
  )}px, ${randomY(minY, maxY)}px)`);
}

const mq = window.matchMedia("(max-width: 800px)");

const isPhone = mq.matches;
console.log(isPhone);
if (isPhone) {
  function transformImg(varName, thisEle, minX, maxX, minY, maxY) {
    if (!thisEle.children[2].contains(varName)) return;
  }
}

function giveOne(items) {
  items.forEach((item) => {
    return item;
  });
}

hoverForImgDiv.forEach((imgDiv, idx) => {
  imgDiv.addEventListener("mouseenter", function (e) {
    // imgDiv.children[2].style.transform = `translate(${e.clientX - 600}px, -${
    //   e.clientY / 5
    // }px)`;
    imgDiv.children[2].style.zIndex = -100;
    // imgDiv.children[1].style.zIndex = 10;
    leftTop.forEach((leftTop) => {
      transformImg(leftTop, imgDiv, -120, 650, -120, 150);
    });
    topUP.forEach((topUP) => {
      transformImg(topUP, imgDiv, -300, 300, -120, 150);
    });
    rightTop.forEach((rightTop) => {
      transformImg(rightTop, imgDiv, -650, 120, -100, 150);
    });
    leftMiddle.forEach((leftMiddle) => {
      transformImg(leftMiddle, imgDiv, -120, 600, -250, -45);
    });
    middle.forEach((middle) => {
      transformImg(middle, imgDiv, -500, 500, -400, -80);
    });
    rightMiddle.forEach((rightMiddle) => {
      transformImg(rightMiddle, imgDiv, -500, 80, -20, -255);
    });
    leftBottom.forEach((leftBottom) => {
      transformImg(leftBottom, imgDiv, -80, 500, -400, -185);
    });
    bottomDown.forEach((bottomDown) => {
      transformImg(bottomDown, imgDiv, -400, 400, -400, -305);
    });
    rightBottom.forEach((rightBottom) => {
      transformImg(rightBottom, imgDiv, -500, 80, -400, -185);
    });
    transformImg(leftBottomLast, imgDiv, -80, 500, -400, -225);
    transformImg(bottomLast, imgDiv, -400, 400, -400, -305);
    transformImg(rightBottomLast, imgDiv, -500, 80, -400, -185);

    imgDiv.children[2].style.opacity = 1;
    hoverImg[idx].style.transform = `scale(1,1)`;
  });

  imgDiv.addEventListener("mouseleave", function (e) {
    imgDiv.children[2].style.opacity = 0;
    hoverImg[idx].style.transform = `scale(0.8,0.8)`;
    // imgDiv.children[2].style.transform = `translate(${-e.clientX}px, 300px)`;
  });
});
*/
