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
  positionElementRandomly("randomSquare");
  positionElementRandomly("randomSquare2");
  positionElementRandomly("randomSquare3");
  positionElementRandomly("randomSquare4");
  positionElementRandomly("picture1");
  positionElementRandomly("picture2");
  positionElementRandomly("picture3");
});

function makeElementDraggable(elementId) {
  const element = document.getElementById(elementId);
  let isDragging = false;
  let offsetX, offsetY;

  element.addEventListener("mousedown", (e) => {
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
    "randomSquare",
    "randomSquare2",
    "randomSquare3",
    "randomSquare4",
    "picture1",
    "picture2",
    "picture3",
  ];

  elementIds.forEach((id) => {
    makeElementDraggable(id);
  });
});
