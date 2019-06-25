~~~js
function serverExcel(condition) {
    // var url = "/ocr/stat/web/exportExclServiceStat?_=" + Math.random(); //需要修改的url
    var url = "/ocr/stat/web/exportExclServiceStat"; //需要修改的url
    openPostWindow(url, JSON.stringify(condition));
}

function openPostWindow(url, cache) {
    var tempForm = document.createElement("form");
    tempForm.id = "tempForm1";
    var hideInput1 = document.createElement("input");
    hideInput1.type = "hidden";
    hideInput1.name = "vo"; //后台要接受这个参数来取值
    hideInput1.value = cache; //后台实际取到的值
    tempForm.appendChild(hideInput1);
    var fileName = "服务统计.xls";
    var xhr = createXmlHttpRequest();
    xhr.open("post", url, true);
    xhr.responseType = "blob";
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var blob = new Blob([xhr.response], {
                type: 'application/x-xls;charset=utf-8'
            });
            if (window.navigator.userAgent.indexOf('Trident') != -1) { //判断是否为IE内核
                window.navigator.msSaveOrOpenBlob(blob, fileName)
            } else {
                var eleLink = document.createElement('a');
                eleLink.download = fileName;
                eleLink.style.display = 'none';
                eleLink.href = URL.createObjectURL(blob);
                document.body.appendChild(eleLink);
                eleLink.click();
                document.body.removeChild(eleLink);
            }
        }
    }
    xhr.send(cache);
    //document.body.removeChild(tempForm);
}

function createXmlHttpRequest() {
    if (window.ActiveXObject) { //如果是IE浏览器
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) { //非IE浏览器
        return new XMLHttpRequest();
    }
}
~~~