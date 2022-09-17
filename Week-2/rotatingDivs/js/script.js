const redbox = document.getElementById("redbox");
const yellowbox = document.getElementById("yellowbox");
const bluebox = document.getElementById("bluebox");
const greenbox = document.getElementById("greenbox");
const boxes = document.getElementById("boxes");

boxes.addEventListener("mouseover", () => {
  bluebox.classList.add("rotateClockwise");
  greenbox.classList.add("rotateAntiClockwise");
  redbox.classList.add("rotateAntiClockwise");
  yellowbox.classList.add("rotateClockwise");
});
boxes.addEventListener("mouseleave", () => {
  bluebox.classList.remove("rotateClockwise");
  greenbox.classList.remove("rotateAntiClockwise");
  redbox.classList.remove("rotateAntiClockwise");
  yellowbox.classList.remove("rotateClockwise");
});
