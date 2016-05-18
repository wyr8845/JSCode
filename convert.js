function convert(from, to) {
	//排序后判断是否一致
	if (from.split('').sort().join('') != to.split('').sort().join('')) {
		return [];
	}
	var res = [];

	function proceed(stack, pos, prefix, ops) {
		//找到一个解
		if (prefix == to) {
			res.push(ops);
			return;
		}
		//不能pop
		if (to.indexOf(prefix) != 0) {
			return;
		}
		if (pos < from.length) {
			//先尝试push进堆栈
			proceed(stack + from[pos], pos + 1, prefix, ops + 'i');
		}
		if (stack.length) {
			//再尝试pop出来
			proceed(stack.slice(0, -1), pos, prefix + stack.slice(-1), ops + 'o');
		}
	}
	proceed('', 0, '', '');
	return res;
}