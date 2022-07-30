# Markdown解释器


#### 目录
1. [前言](#user-content-前言)
2. [安装](#user-content-安装)
3. [调用](#user-content-调用)
4. [语法](#user-content-语法)

+ ### 前言

	抽空用JavaScript写了一个Markdown解释器，和标准的Markdown语法有点点不一样。可以用来制作个人博客写文章的功能。

	预览功能页面：[http://markdown.sjkcym.cn](http://markdown.sjkcym.cn)

+ ### 安装

	1. 开发环境
		
		下载或引用[Markdown.css](https://github.com/1045290202/markdown/blob/master/src/css/markdown.css)和[Markdown.js](https://github.com/1045290202/markdown/blob/master/src/js/Markdown.js)
		
		```html
		<link rel="stylesheet" href="https://github.com/1045290202/markdown/blob/master/src/css/markdown.css">
		<script src="https://github.com/1045290202/markdown/blob/master/src/js/Markdown.js"></script>
		```
		
	2. 生产环境
	
		下载或引用[Markdown.min.css](https://github.com/1045290202/markdown/blob/master/src/css/markdown.min.css)和[Markdown.min.js](https://github.com/1045290202/markdown/blob/master/src/js/Markdown.min.js)
		
		```html
		<link rel="stylesheet" href="https://github.com/1045290202/markdown/blob/master/src/css/markdown.min.css">
		<script src="https://github.com/1045290202/markdown/blob/master/src/js/Markdown.min.js"></script>
		```
		
		*\*\.min\.\*文件已经被压缩，容量较小，适合用于生产环境中*
	
+ ### 调用

	1. 通过创建`Markdown`对象调用（单线程）
	
		```javascript
		let markdown = new Markdown({//创建Markdown对象并传递一个对象，对象中暂时仅支持一个参数mdText
			mdText: value,
		});
		let htmlText = markdown.markdown();//解析markdown并返回html代码，可以直接将其输出到网页中
		```
		
	2. 利用Web Worker多线程调用
	
		```javascript
		let worker = new Worker("Markdown.min.js");//创建Worker对象
		worker.onmessage = function (e) {//调用成功
			let data = e.data;
			let htmlText = data.htmlText;//拿到html代码
		};
		worker.onerror = function (e) {//发生错误
			console.log(e.message);
		};
		worker.postMessage({//发送数据
			mdText: value,
		});
		```
		
	*建议使用第二种方式调用，提高性能并减少页面卡死的情况*

+ ### 语法
	
	1. 标题
	
		```markdown
		# h1标题
		## h2标题
		### h3标题
		#### h4标题
		##### h5标题
		###### h6标题
		```

	2. 分割线
	
		```markdown
		+++
		----------
		******
		___________________
		```
	
	3. 图片
	
		```markdown
		![图片名称](url)
		```
	
	4. 链接
	
		```markdown
		[链接名称](url)
		```
		
	5. 字体风格
	
		```markdown
		**加粗**
		*倾斜*
		~~删除~~
		==标记==
		^上标^
		~下标~
		```

	6. 代码与代码块
	
		```markdown
		`行内代码`

		(```)//使用时需要去掉括号
		代码块
		(```)
		```
		
	7. 引用
	
		```markdown
		>引用
		>引用
		>>可以嵌套
		```
	
	8. 无序列表
	
		```markdown
		+ 无序列表
		* 无序列表
		--- 可以嵌套
		```
	
	9. 有序列表
	
		```markdown
		1. 有序列表
		1.1. 可以嵌套
		2. 有序列表
		```
	
		*使用时序号将会从小到大填写，无法自定义*
	
	10. 表格
	
		```markdown
		|表头|表头|表头|
		|--|--|--|
		|单元格|单元格|单元格|
		|单元格|单元格|单元格|
		|单元格|单元格|单元格|
		|单元格|单元格|单元格|
		```
		
		*表格横向格数依赖第二行\|\-\-\|的个数*
		
	11. 转义字符
	
		```markdown
		\\
		\&
		\'
		\"
		\#
		\=
		\+
		\-
		\*
		\_
		\`
		\|
		\.
		\~
		\^
		\!
		\{\}
		\[\]
		\(\)
		\<\>
		```
		
+ ### 自定义CSS样式
	
	什么？你觉得我给的样式不好看，那你来写
	
	自定义css样式：
	在css文件中调用`.md-<html标签名称>`
	
	例如：
	
	```css
	.md-code {/*如果是行内代码，需要加上后缀-inline*/
		display: block;
		margin: 1rem 0;
		padding: 1rem;
		color: #f5f5f5;
		border-radius: 5px;
		background-color: #424242;
	}
	
	.md-hr {
		border: none;
		border-top: .09rem dashed #bdbdbd;
		border-bottom: none;
		margin: .5rem 0;
	}
	```
	
	*建议最外层id为html的标签类名设置为`md-view`*
