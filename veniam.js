var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.bezierCurveTo(20, 100, 150, 100, 150, 20);
ctx.stroke();
