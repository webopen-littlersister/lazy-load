// 分析
// 1 获取每个图片到网页左上角的距离  图片.offsetTop
// 2 可视区域高度 = 浏览器窗口高度（755） + 滚动条距离（）
// 公式：1 < 2  就可以看到这个图片 （将src改一改）
// 语法：
// 1  图片.offsetTop
// 2  浏览器窗口高度   window.innerHeight ||  document.documentElement.clientHeight
// 2 滚动条距离        document.body.scrollTop || document.documentElement.scrollTop

// 1 给窗口绑定滚动事件
// 2 事件处理函数中
//    2.1 获取可视区高度：窗口高度 + 滚动高度
//    2.2 获取所有图片
//    2.3 遍历  判断  2.2 是否小于  2.1 
//    不小于   不管
//      小于   修改src地址 （留心：只要修改了src地址就会发送请求显示

let t = null
function lazyLoad() 
{
  if (t) clearTimeout(t)
  t = setTimeout(() => {
      console.log('lazyLoad')
  //    2.1 获取可视区高度：窗口高度 + 滚动高度
    let windowH = window.innerHeight || document.documentElement.clientHeight
    let scrollH = document.body.scrollTop || document.documentElement.scrollTop
    let showH = windowH + scrollH
  //    2.2 获取所有图片
    let imgs = document.querySelectorAll('img')
  //    2.3 遍历  判断  2.2 是否小于  2.1 
    for (let i=0; i<imgs.length; i++)
    {
  //    不小于   不管h
  //      小于   修改src地址 （留心：只要修改了src地址就会发送请求显示

        if (imgs[i].offsetTop < showH) {
          imgs[i].src = imgs[i].getAttribute('data-original')
        }
    }
  }, 100)
}

lazyLoad()
window.onscroll = lazyLoad