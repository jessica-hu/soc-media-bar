function diagonalMove() {
  var elem = document.getElementById("diagonalboxAnimation");
    var width = window.getComputedStyle(elem).getPropertyValue('width');
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } 
     else if (pos < 100){
      pos+=10; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
      else {
          pos++;
          elem.style.top = pos + 'px'; 
          elem.style.left = pos + 'px'; 
    }
  }
}

$("#button").click(function() {
  $('.transform').toggleClass('transform-active');
});