var sheetLocation = "https://rawcdn.githack.com/NomnomPlays/CSS-Editor-Bookmarklets/a62115ba7240a26baf2931db1817e3ede3ed729a/";

if (window.location.href.startsWith('https://lyons204.instructure.com')) {
  var canvas = document.createElement('link');
  canvas.href = sheetLocation + 'canvas.css';
  canvas.rel = 'stylesheet';
  canvas.type = 'text/css';
  document.body.appendChild(canvas);
  
  alert(sheetLocation + 'canvas.css');
}
