// function toggleModal() {
//   var modal = document.getElementById("myModals");
//   modal.style.display =
//     modal.style.display === "none" || modal.style.display === ""
//       ? "block"
//       : "none";
// }
function toggleModal() {
  var modal = document.getElementById("myModals");
  var btnIcon = document.getElementById("btnIcon");

  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "block";
    btnIcon.src = "./public/image/close-modal.svg"; // Поменяйте на свой путь к SVG для закрытой иконки
  } else {
    modal.style.display = "none";
    btnIcon.src = "./public/image/open-modal.svg"; // Поменяйте на свой путь к SVG для открытой иконки
  }
}
