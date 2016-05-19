function move(){ //请输入实现代码，平移请使用 translateX 实现
  var block = document.getElementById('block-le01-p10');
	var start = Date.now();
	var dur = 2000;
	var count = 0;
	requestAnimationFrame(function ff() {
		var p = (Date.now() - start) / dur;
		if (p < 1) {
			block.style.transform = 'translate(' + 50 * Math.sin(2 * Math.PI * p) + 'px, ' + (50 + 50 * Math.cos(Math.PI +  2 * Math.PI * p)) + 'px)';
			requestAnimationFrame(ff);
		} else {
			start = Date.now();
			requestAnimationFrame(ff);
		}
	});
}