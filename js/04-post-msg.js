var text = document.querySelector('textarea');
var btn = document.querySelector('button');
var info = document.querySelector('.info');

btn.onclick = function () {
    if (text.value.trim()) {
        var _div = document.createElement('div');
        var _p1 = document.createElement('p');
        _p1.innerHTML = text.value.trim();
        _div.appendChild(_p1);

        var date = new Date();
        var hour = date.getHours();
        var mins = date.getMinutes();
        var sec = date.getSeconds();
        hour = hour >= 0 && hour < 10 ? '0' + hour : hour;
        mins = mins >= 0 && mins < 10 ? '0' + mins : mins;
        sec = sec >= 0 && sec < 10 ? '0' + sec : sec;
        var time = hour + '时' + mins + '分' + sec + '秒';
        var _p2 = document.createElement('p');
        _p2.innerHTML = time;
        _div.appendChild(_p2);

        var _a = document.createElement('a');
        _a.setAttribute('href','#');
        _a.innerHTML = '删除';
        _a.onclick = function() {
            _a.parentElement.parentElement.parentElement.removeChild(_a.parentElement.parentElement)
        }
        var _p3 = document.createElement('p');
        _p3.appendChild(_a);
        _div.appendChild(_p3);

        info.insertBefore(_div,info.children[0]);
        text.value = '';
    } else {
        alert('请输入信息再发布')
    }
}