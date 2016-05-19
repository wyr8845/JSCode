function move(x, y){ //请输入实现代码，平移请使用 translateX 实现
  var block = document.getElementById('block-le01-p10');
	var start = Date.now();
	var dur = 2000;
	requestAnimationFrame(function ff() {
		var p = (Date.now() - start) / dur;
		if (p < 1) {
			block.style.transform = 'translate(' + 100 * p * p + 'px)';
			requestAnimationFrame(ff);
		} else {
			block.style.transform = 'translate(100px)';
		}
	});
}