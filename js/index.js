var nav = document.querySelector('.nav-box');
var _ul = document.querySelectorAll('.nav-ul');
var _li = document.querySelectorAll('.line-box');
var line = document.querySelectorAll('.line');

// 导航栏添加移入移出效果
nav.onmouseover = function () {
    var max = 0;
    for (let i = 0; i < _ul.length; i++) {
        if (_ul[i].children.length > max) {
            max = _ul[i].children.length;
        }
    }
    nav.style.height = max * 30 + 50 + 'px';
    nav.style.backgroundColor = '#aaa';
}
nav.onmouseout = function () {
    nav.style.height = 50 + 'px';
    nav.style.backgroundColor = '#ccc';
}

for (let i = 0; i < _li.length; i++) {
    _li[i].onmouseover = function(){
        line[i].style.width = '100%'
    }
    _li[i].onmouseout = function(){
        line[i].style.width = '0%'
    }
}