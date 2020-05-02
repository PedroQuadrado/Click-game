count = 0;
function teste() {
  const imoji = document.getElementById("imoji");
  const score = document.getElementById("score");
  x = Math.floor(Math.random() * (window.innerWidth-35))+15;
  y = Math.floor(Math.random() * (window.innerHeight-35))+15;

  randomImoji = Math.floor(Math.random() * 14);
  switch (randomImoji) {
    case 0:
        randomImoji = "&#128512;"
      break;
    case 1:
        randomImoji = "&#128513;"
      break;
    case 2:
        randomImoji = "&#128514;"
      break;
    case 3:
        randomImoji = "&#128515;"
      break;
    case 4:
        randomImoji = "&#128516;"
      break;
    case 5:
        randomImoji = "&#128517;"
      break;
    case 6:
        randomImoji = "&#128518;"
      break;
    case 7:
        randomImoji = "&#128519;"
      break;
    case 8:
        randomImoji = "&#128520;"
      break;
    case 9:
        randomImoji = "&#128521;"
      break;
    case 10:
        randomImoji = "&#128522;"
      break;
    case 11:
        randomImoji = "&#128525;"
      break;
    case 12:
        randomImoji = "&#128526;"
      break;
    case 13:
        randomImoji = "&#128536;"
      break;
    default:
        randomImoji = "&#128540;"
      break;
  }

  imoji.innerHTML = randomImoji;
  imoji.style.left = x + "px";
  imoji.style.top = y + "px";

  count++;

  if (count == 1) {
    time = Date.now();
  }
  if (count == 10) {
    timeDuration = (Date.now() - time) / 1000;
    score.innerText = timeDuration + "s";
    imoji.style.pointerEvents = "none";
    imoji.style.display = "none";
    imoji.style.top = "35%";
    imoji.style.left = "50%";
    time = 0;
    count = 0;
    setTimeout(() => {
      imoji.style.pointerEvents = "initial";
      imoji.style.display = "initial";
    }, 1500);
  }
}
