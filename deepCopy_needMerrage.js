// 之前写过一个深拷贝，找不到地方了，需及时合并
function copy(obj) {
  var copy = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copy(obj1); // obj2 looks like obj1 now
