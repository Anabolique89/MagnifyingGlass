document.getElementById("container").onmousemove = function(e) {
  document.getElementById("glass").style.top = e.pageY * 1 + "px";
  document.getElementById("glass").style.left = e.pageX * 1 + "px";
};
