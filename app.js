let ai = [];
let user = [];
let level = 0;

start();
function events() {
  $(".btn").click(function () {
    let btnID = $(this).attr("id");
    user.push("#" + btnID);

    if (ai.length == user.length) {
      comparison();
    }
    cases("#" + btnID);
  });
}
function comparison() {
  let aiString = ai.toString();
  let userString = user.toString();
  if (aiString == userString) {
    aiPush();
    $("h1").text("Level " + level);
    user = [];
    level++;
  } else {
    $("h1").text("Game Over, Press any key to Restart");
    gameOver();
    level = 0;
    start();
  }
}
function aiPush() {
  let id = rand();
  ai.push(id);
  setTimeout(() => {
    cases(id);
  }, 500);
}
function rand() {
  let colors = ["#green", "#red", "#yellow", "#blue"];
  let out = colors[Math.floor(Math.random() * 4)];

  return out;
}
function cases(btnID) {
  let audio;
  if (level == 0) {
    btnID = "game-over";
    gameOver();
  }
  switch (btnID) {
    case "#green":
      animate(btnID);
      audio = new Audio("/simon/sounds/green.mp3");
      audio.play();
      break;
    case "#red":
      animate(btnID);
      audio = new Audio("/simon/sounds/red.mp3");
      audio.play();
      break;
    case "#yellow":
      animate(btnID);
      audio = new Audio("/simon/sounds/yellow.mp3");
      audio.play();
      break;
    case "#blue":
      animate(btnID);
      audio = new Audio("/simon/sounds/blue.mp3");
      audio.play();
      break;
    case "game-over":
      audio = new Audio("/simon/sounds/wrong.mp3");
      audio.play();
      break;
    default:
      console.log("Invalid Button" + btnID);
  }
}
function animate(id) {
  $(id).addClass("pressed");
  setTimeout(() => {
    $(id).removeClass("pressed");
  }, 100);
}
function start() {
  level = 1;
  window.addEventListener(
    "keypress",
    function () {
      aiPush();
      $("h1").text("Level " + level);
      events();
    },
    { once: true }
  );
}
function gameOver() {
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 100);
  user = [];
  ai = [];
}
