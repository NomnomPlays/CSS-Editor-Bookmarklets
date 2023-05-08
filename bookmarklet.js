var sheetLocation = "https://cdn.jsdelivr.net/gh/NomnomPlays/CSS-Editor-Bookmarklets/";

alert("hi");

if (window.location.href.startsWith('https://lyons204.instructure.com')) {
  var canvas = document.createElement('link');
  canvas.href = sheetLocation + 'canvas.css';
  canvas.rel = 'stylesheet';
  canvas.type = 'text/css';
  document.body.appendChild(canvas);
  
  alert(sheetLocation + 'canvas.css');
}
