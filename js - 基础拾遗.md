## js 词法作用域
```
	var scope = "global scope";
	function checkScope() {
	    var scope = "local scope";
	    function fn() {
	        return scope;
	    }
	    return fn();
	}
	checkScope();
	
	var scope = "global scope";
	function checkScope() {
	    var scope = "local scope";
	    function fn() {
	        return scope;
	    }
	    return fn;
	}
	checkScope()();
```
## 词法作用域/动态作用域

