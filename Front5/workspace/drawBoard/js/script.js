$(function () {  
  $(document).on("mousemove", e => {  
    $(".posX").text(e.pageX);
    $(".posY").text(e.pageY);

    $(".offX").text(e.pageX);
    $(".offY").text(e.pageY - 105);
  });

  let drawable = document.getElementById("paper").getContext("2d");

  let preX = 0, preY = 105;
  let mouseDown;

  $("#paper").on("mousedown", e => {
    drawable.beginPath();

    preX = e.pageX; preY = (e.pageY - 105);
    drawable.moveTo(preX,preY);

    mouseDown = true;
  });

  $("#paper").on("mousemove", e => {
    if(mouseDown) {
      drawable.lineTo(e.pageX, (e.pageY - 105));
      drawable.stroke();

      preX = e.pageX; preY = (e.pageY - 105);
    }
  });

  $("#paper").on("mouseup", e => {
    mouseDown = false;
  });
})