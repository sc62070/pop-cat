const popCat = document.querySelector("img");
const score = document.querySelector("span");
const resetBtn = document.querySelector("button");

var audio = new Audio("audio/pop.mp3")

let popCount = 0;

function rotateCat() {
  let randomNum = Math.round(Math.random());
  Boolean(randomNum) === true ? popCat.classList.add("rotate") : popCat.classList.remove("rotate");
}


function saveScore(popCount) {
  localStorage.setItem("count", popCount);
}

function loadScore() {
  popCount = localStorage.getItem("count");
  localStorage.getItem("count") === null ? score.innerText = 'Press P and record your score!' : score.innerText = `Your POP Count : ${localStorage.getItem("count")}`;
}

function keyDown(event) {
  if (event.code === "KeyP") {
    popCat.src = "images/pop.png";
    audio.play();
    rotateCat();
  }
}

function keyUp(event) {
  if (event.code === "KeyP") {
    popCat.src = "images/normal.png";
    popCount++;
    score.innerText = `Your POP Count : ${popCount}`;
    saveScore(popCount);
  }
}

function touchStart() {
  popCat.src = "images/pop.png";
  audio.play();
  rotateCat();
}

function touchEnd() {
  popCat.src = "images/normal.png";
  popCount++;
  score.innerText = `Your POP Count : ${popCount}`;
  saveScore(popCount);
}


function init() {
  popCat.addEventListener('touchstart', touchStart);
  popCat.addEventListener('touchend', touchEnd);
  window.onkeydown = (e) => keyDown(e);
  window.onkeyup = (e) => keyUp(e);
  resetBtn.addEventListener('click', () => {
    localStorage.removeItem('count');
    popCount = 0;
    score.innerText = 'Press P and record your score!'
  })
  loadScore();
}

init();
