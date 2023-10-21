function positionElementRandomly(elementId) {
  const square = document.getElementById(elementId);

  const maxX = window.innerWidth - square.clientWidth;
  const maxY = window.innerHeight - square.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  square.style.left = `${randomX}px`;
  square.style.top = `${randomY}px`;
}

window.addEventListener("load", function () {
  positionElementRandomly("picture1");
  positionElementRandomly("picture2");
  positionElementRandomly("picture3");
  positionElementRandomly("picture4");
  positionElementRandomly("picture5");
  positionElementRandomly("picture6");
  positionElementRandomly("picture7");
  positionElementRandomly("picture8");
  positionElementRandomly("picture9");
});

function makeElementDraggable(elementId) {
  const element = document.getElementById(elementId);
  let isDragging = false;
  let offsetX, offsetY;

  element.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

window.addEventListener("load", function () {
  const elementIds = [
    "picture1",
    "picture2",
    "picture3",
    "picture4",
    "picture5",
    "picture6",
    "picture7",
    "picture8",
    "picture9",
  ];

  elementIds.forEach((id) => {
    makeElementDraggable(id);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const openingScreen = document.getElementById("opening-screen");
    openingScreen.style.opacity = 0;
    openingScreen.style.pointerEvents = "none";
  }, 100);
});
