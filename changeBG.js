function changeBG() { //颜色请用 rgb(r,g,b) 设置
	var block = document.getElementById('block-le01-8-1');
	var start = Date.now();
	var dur = 3000;
	requestAnimationFrame(function ff() {
		var p = (Date.now() - start) / dur;
		if (p < 1) {
			var r = Math.round(255 * (1 - p));
			var g = Math.round(255 * p);
			var b = 0;
			block.style.backgroundColor = 'rgb(' + [r, g, b] + ')';
			requestAnimationFrame(ff);
		} else {
			block.style.backgroundColor = 'rgb(0,255,0)';
		}
	});
}