// function aa(fn) {
// 	// body...
// 	var args = [].slice.call(arguments);
// 	return function(){
// 		var new
// 	}
// }
/* fu curry 加工的方法
 *	
 **/
function curry(fn, args) {
	// fn.length params's totle
	var length = fn.length;
	args = args || [];
	return function() {
		var _args = args.slice(0),
			arg, i;
		for (var i = arguments.length - 1; i >= 0; i--) {
			arg = arguments[i];
			_args.push(arg)
		}
		if (_args.length < length) {
			return curry.call(this, fn, _args);
		} else {
			return fn.apply(this, _args)
		}
	}
}

function add(a, b, c) {
	// body...
	return a + b + c;
}

const curryAdd = curry(add);
const curryAdd5 = curry(add)(5);

console.log(curry(5)(10)(15))
console.log(curry(5,10)(15))
console.log(curry(5)(10,15))
console.log(curry(5,10,15))