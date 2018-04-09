## quest
## IE8 不支持 querySelector() 和 querySelectorAll()

> 添加标签
> ```<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">```

## quest
## IE8 >> :visited 和 :link 样式只能在颜色上不同。有些样式未应用于 :visited。

> 1.问题原因：css文件中出现不能被IE兼容的标签元素
> 2.出现位置: 一般出现于css文件中，出现了相关action标签有问题或者出现了不兼容的标签。
> 3.解决方法：修改link，hover，active，visited等标签。

## quest
## IE8 >> jQuery('selector').html()
> html() [要求分析](http://www.jb51.net/article/53313.htm)
-----------
[jQuery 兼容性](https://segmentfault.com/q/1010000006265699?_ea=1077010)

-----------
> [html() 在IE8 中有长度限制](https://cloud.tencent.com/developer/ask/85610)
** 方案 **
### [1](https://blog.csdn.net/aarontong00/article/details/55004390)
```
<meta http-equiv="X-UA-Compatible"content="IE=9; IE=8; IE=7; IE=EDGE">
```
### 2
> 更换为innerHTML
```
document.getElementById('sId').innerHTML = text;
```
### [3](http://www.frontopen.com/2552.html)
> [添加支持](<meta http-equiv=“X-UA-Compatible” content=“IE=8″>)
> 这篇文章很棒！！！

## quest
## IE8 >> innerHTML
> innerHTML 不支持 [table、tbody、tr](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML)
> innerHTML table、tbody、tr 为 read-only
** 方案 **
### 1
> 使用 html() + append() 代替 innerHTML
### 2
> 

## quest
## IE8 >> jquery append()
> 网上说要[首尾相应](https://www.cnblogs.com/leiyunkang/p/4208996.html)
> 还有一个很**重要** 的要求
> append() 添加的内容不能有特殊字符 比如 ‘/n’,--‘&#13’;