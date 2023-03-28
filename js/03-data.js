var data = [
    {
        id: '序号',
        name: '姓名',
        maintchlog: '主要技术',
        tchlog: '辅助技术',
        look: '操作'
    },
    {
        id: '01',
        name: '心动时刻',
        maintchlog: 'Css3',
        tchlog: 'HTML + Css',
        look: '查看'
    },
    {
        id: '02',
        name: '轮播图',
        maintchlog: 'Css3',
        tchlog: 'HTML + Css',
        look: '查看'
    },
    {
        id: '03',
        name: '发布评论',
        maintchlog: 'js',
        tchlog: 'HTML + CSS',
        look: '查看'
    }
]

var data1 = ['../html/01-hot-heart.html', 'https://blusman.github.io/my-demo/html/02-run-images.html', 'https://blusman.github.io/my-demo/html/04-post-msg.html']
var btn = document.querySelector('button');
var text = document.querySelector('input');
var main = document.querySelector('.main');


function auto(data, target) {
    target.innerHTML = ''
    for (var i = 0; i < data.length; i++) {
        var _tr = document.createElement('tr');
        _tr.align = 'center';
        for (var k in data[i]) {
            var _td = document.createElement('td');
            if (data[i][k] == '查看') {
                var _a = document.createElement('a');
                _a.innerHTML = data[i][k];
                _a.setAttribute('href', '#');
                _a.setAttribute('target', '_blank');
                _td.appendChild(_a)
            } else {
                _td.innerHTML = data[i][k];
            }
            _tr.appendChild(_td);
        }
        target.appendChild(_tr)
    }
}
auto(data, main);
main.style.height = main.children.length * 30 + 'px';

// 展示信息

// 动态修改 a 标签路径
var _as = document.querySelectorAll('a');
for (var i = 0; i < _as.length; i++) {
    _as[i].setAttribute('href', data1[i])
}

var _tds = document.querySelectorAll('td');

btn.onclick = function () {
    if (text.value) {
        for (let i = 0; i < _tds.length; i++) {
            if (_tds[i].innerHTML.includes(text.value)) {
                let trs = _tds[i].parentElement;
                main.innerHTML = '';
                main.appendChild(trs)
            }
        }
    } else {
        alert('请输入查询信息');
        auto(data, main)
    }
    main.style.height = main.children.length * 30 + 'px';
}