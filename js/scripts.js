$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const sideA = parseFloat($("input#sideOne").val())
    const sideB = parseFloat($("input#sideTwo").val())
    const sideC = parseFloat($("input#sideThree").val())
    let result;

    if (sideA+sideB > sideC && sideB+sideC > sideA && sideA+sideC > sideB) {
      if (sideA === sideB && sideB === sideC) {
        result = "Equilateral";
      } else if (sideA === sideB || sideB === sideC || sideA === sideC){
        result = "Isosceles";
      } else {
        result = "Scalene";
      }
    } else {
      result = "Non";
    }
    

    $(".result").text(result);
    $(".answer").show();

    event.preventDefault();
  });
});