$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const sideA = parseFloat($("input#sideOne").val())
    const sideB = parseFloat($("input#sideTwo").val())
    const sideC = parseFloat($("input#sideThree").val())
    let result;

    if (sideA === sideB && sideB === sideC) {
      result = "Equilateral";
    } else if (sideA === sideB || sideB === sideC || sideA === sideC){
      result = "Isosceles";
    }

    $(".result").text(result);
    $(".answer").show();

    event.preventDefault();
  });
});