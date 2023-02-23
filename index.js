
var pix = document.getElementsByClassName("pixel");

for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.ceil(Math.random()*5000)+"ms";
}

var colors = ['#ff0000', '#00ff00', '#0000ff','#ff00e1', '#f6ff00'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
$('.pixel').css('color', random_color);
