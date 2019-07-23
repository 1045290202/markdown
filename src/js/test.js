let worker = null;
(function () {
	if (Worker) {//浏览器支持多线程
		//创建web worker
		worker = new Worker("src/js/Markdown.min.js");//放在外面是防止创建过多的线程
	}
})();

let text = document.getElementById("text");
//默认值
text.value = `# 标题一
## 标题二
###### 标题六

+++
----------
******
___________________

![这是图片](src/img/cxk.jpg)

[这是链接](http://markdown.sjkcym.cn)

正常文本
**加粗**  *倾斜*  ~~删除~~  ==标记==  ^上标^  ~下标~
***加粗倾斜***  **==加粗标记==**  ^~~上标删除~~^  ***~~==全==部^混^~用~~~***

\`行内代码\`

\`\`\`
//代码块
let cxk = "鸡你太美";
console.log(cxk);
\`\`\`

>引用
>>引用可以嵌套

+ 无序列表
** 无序列表
--- 无序列表可以嵌套

1. 有序列表
1.1. 有序列表可以嵌套
2. 有序列表

|表头|表头|表头|
|--|--|--|
|单元格|单元格|单元格|
|单元格|单元格|单元格|
|单元格|单元格|单元格|
|单元格|单元格|单元格|

转义字符
\\\\
\\&
\\'
\\"
\\#
\\=
\\+
\\-
\\*
\\_
\\\`
\\|
\\.
\\~
\\^
\\!
\\{\\}
\\[\\]
\\(\\)
\\<\\>`;
onInput();
text.addEventListener("input",onInput);


function onInput() {//输入时调用

	//多线程调用
	markdown(text.value);

	//单线程调用
	/*
		let markdown = new Markdown({
			mdText: text.value,
		});
		let htmlText = markdown.markdown();
		let html = document.getElementById("html");
		html.innerHTML = htmlText;
	*/

	return false;
}

function markdown(mdText) {
	let html = document.getElementById("html");

	if (worker) {
		worker.onmessage = function (e) {//调用成功
			let data = e.data;
			html.innerHTML = data.htmlText;
		};
		worker.onerror = function (e) {//发生错误
			console.log(e.message);
		};
		worker.postMessage({//发送数据
			mdText,
		});
	} else {//浏览器不支持多线程
		let markdown = new Markdown({
			mdText,
		});
		html.innerHTML = markdown.markdown();
	}
}
