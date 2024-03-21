$(document).ready(function () {
  $(".project-button").click(function () {
    $(this).fadeOut(200).fadeIn(200); // Animasi memudar dan muncul kembali
  });
});
var myModal = new bootstrap.Modal(document.getElementById('projectModal1'));
document.querySelector('#projects .project-button').addEventListener('click', function () {
  myModal.show();
});