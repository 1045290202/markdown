# Markdown解释器

#### 目录
1. [前言](#user-content-前言)
2. [安装](#user-content-安装)
3. [语法](#user-content-语法)

+ ### 前言

+ ### 前言

	抽空用JavaScript写了一个Markdown解释器，和标准的Markdown语法有点点不一样。可以用来制作个人博客写文章的功能。

	预览功能页面：[点这里](http://markdown.sjkcym.cn) （ikun不要打我）

+ ### 安装

	1. 开发环境
		
		下载或引用[Markdown.css](https://github.com/1045290202/markdown/blob/master/src/css/markdown.css)（建议下载，也可以自定义样式）和[Markdown.js](https://github.com/1045290202/markdown/blob/master/src/js/Markdown.js)
		
		```html
		<link rel="stylesheet" href="https://github.com/1045290202/markdown/blob/master/src/css/markdown.css">
		<script src="https://github.com/1045290202/markdown/blob/master/src/js/Markdown.js"></script>
		```
		
	2. 生产环境
	
		下载或引用[Markdown.min.css](https://github.com/1045290202/markdown/blob/master/src/css/markdown.min.css)（建议下载，也可以自定义样式）和[Markdown.min.js](https://github.com/1045290202/markdown/blob/master/src/js/Markdown.min.js)
		
		```html
		<link rel="stylesheet" href="https://github.com/1045290202/markdown/blob/master/src/css/markdown.min.css">
		<script src="https://github.com/1045290202/markdown/blob/master/src/js/Markdown.min.js"></script>
		```
		
		*\*\.min\.\*文件已经被压缩，容量较小，适合用于生产环境中*
		
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