# js - interviewQuestion
> deepCopy...
: function 也属于在堆中存储
~~~
function deepCopy(obj){
	var currentObj = obj;
	var type = typeof currentObj;
	let o,c;

	if(type == 'Array'){
		o = [];
	}else if(type == 'Object'){
		o = {};
	}else if(type == 'function'){
		o = new Function;
		return o;
	}else{
		return obj;
	}

	for(var key in currentObj){
		c = currentObj[key]
		o[key] = deepCopy(c)
	}
}
~~~
> 修复上面函数 [重置变量o]
~~~
function deepCopyCreate(obj){
	var t = typeof obj;
	var o;
	if(t == 'Array'){
		o = deepCopyRoad([],obj);
	}else if(type == 'Object'){
		o = deepCopyRoad({},obj);
	}else if(type == 'function'){
		o = new Function;
		return o;
	}else{
		return obj;
	}
}
function deepCopyRoad(o,obj){
	//var o;
	for(var key in obj){
		o[key] = deepCopyCreate(obj[key]);
	}
	return o;
}
function deepCopy(obj){
	deepCopyCreate(onj);
}
~~~
> 简化
> 考虑到数组可以直接循环赋值、非对象
~~~
function deepCopy(o,n){
	n = n || {}
	for(var key in o){
		if(typeof o[key] === 'Object'){
			n[key] = {};
			deepCopy(o[key],n[key]);		
		}else if(typeof o[key] === 'Array'){
			n[key] = [];
			deepCopy(o[key],n[key]);	
		}else if(typeof o[key] === 'Function'){
			n[key] = new Function
		}else{
			n[key] = o[key]
		}
	}
	return n
}
if(typeof obj == 'Object' || typeof obj == 'Array'){
	deepCopy(obj)
}
~~~