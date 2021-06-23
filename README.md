# lazy-load
图片懒加载
# 下载
```
npm i  webopen-littlesister-lazyload -S
```
#使用1
```
<!-- 使用格式 -->
<img class="lazy" alt="" width="640" height="480" 
	src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796411554,1257847298&fm=26&gp=0.jpg" 
	data-original="./imgs/1.jpg" 
/>
<hr />
<img class="lazy" alt="" width="640" height="480" 
	src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796411554,1257847298&fm=26&gp=0.jpg" 
	data-original="./imgs/2.jpg" 
/>
<hr />
<img class="lazy" alt="" width="640" height="480" 
	src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796411554,1257847298&fm=26&gp=0.jpg" 
	data-original="./imgs/3.jpg" 
/>
<hr />
<img class="lazy" alt="" width="640" height="480" 
	src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796411554,1257847298&fm=26&gp=0.jpg" 
	data-original="./imgs/4.jpg" 
/>
<hr />
<img class="lazy" alt="" width="640" height="480" 
	src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796411554,1257847298&fm=26&gp=0.jpg" 
	data-original="./imgs/5.jpg" 
/>
<hr />
<img class="lazy" alt="" width="640" height="480" 
	src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3253441216,1530207645&fm=26&gp=0.jpg" 
	data-original="./imgs/6.jpg" 
/>
<!-- 引入库 -->
<script src="https://unpkg.com/jquery@3.6.0/dist/jquery.js"></script>
<script src="./index.js"></script>
<script>
/* 调用插件*/
$(function() {
    $("img.lazy").lazyload();
});
</script>
```
#图片路径说明
```
src 内的地址是 统一加载的图片
data-original 引入的的图片是真实图片
```
#下载2  -g
```
npm i webopen-littlesister-lazyload -g
```
#使用2
```
qf666 --help          //获取帮助 --实现哪些功能
qf666 --data        //获取时间
qf666 --file       //新建文件
qf666 --file 文件名.后缀   //新建指定名文件
```
