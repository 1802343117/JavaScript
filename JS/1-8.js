// 创建一个每500毫秒调用一个 move() 函数的计时器
var t = setInterval(move, 500);

// 定义 move() 函数，改变框的位置
// 定义开始的位置
var pos = 0; // 获取box元素
var box = document.getElementById("box");
function move() {
  pos += 1;
  box.style.left = pos + "px"; //px = pixels
}
//提示: move() 函数在每次调用时将box元素的left属性增加1

//每10毫秒调用 move() 函数的定时器
var t1 = setInterval(move, 10);

/* 
但是这样我们的盒子会一直向右移动，要在盒子到达容器的末端时停止动画，我们向 move() 函数添加
一个简单的检查，并使用 clearInterval() 方法来停止定时器。
*/
//停止定时器的方法（函数）
function move1() {
  if (pos >= 540) {
    clearInterval(t1);
  } else {
    pos += 1;
    box.style.left = pos + "px";
  }
}
//当箱子的 left 属性到值600时，盒子到达容器的末端，容器宽度为600px，盒子宽为60px

//最终的脚本代码如下：
var pos = 0; // 盒子元素
var box = document.getElementById("box");
var t = setInterval(move, 10);
function move() {
  if (pos >= 540) {
    clearInterval(t);
  } else {
    pos += 1;
    box.style.left = pos + "px";
  }
}

/*--Document对象--*/
/*
document对象是文档的根节点，window.document属性就指向这个对象。
也就是说，只要浏览器开始载入HTML文档，这个对象就开始存在了，可以直接调用

JavaScript中有一个预定义的 document 对象，可用于访问DOM上的所有元素

文档对象是网页中所有对象的所有者（或根）
*/

//例如：
// document.body.innerHTML = "Some text";(将)
//由于 body 是 DOM 的元素，因此我们可以使用 document 对象访问它并更改 innerHTML 属性的内容

/*--选择元素--*/
//所有HTML元素都是对象，对象都有属性和方法

/*--document 对象具有三种方法最常用于选择HTML元素--*/
//通过 id 找元素
document.getElementById(id);
//通过 类 找元素
document.getElementsByClassName(name);
//通过 标签 找元素
document.getElementsByTagName(name);

//在下面的示例中，getElementById 方法用于选择 id="demo" 的元素并更改其内容：
var elem = document.getElementById("demo");
elem.innerHTML = "Hello World";
//getElementsByClassName() 方法通过类名查找所有元素，并将其作为数组返回
//例如：HTML页面包含三个元素与 class="demo"，以下代码将返回所有这些元素作为一个数组（代码位于：HTML/1-8.html）

/*--使用DOM--*/
/**
 * DOM中的每个元素都有一组属性和方法，它们提供有关它们在DOM中的关系的信息：
 * element.childNodes 返回一个元素的子节点的数组。
 * element.firstChild 返回元素的第一个子节点。
 * element.lastChild 返回元素的最后一个子节点。
 * element.hasChildNodes 如果元素有任何子节点，则返回 true，否则为 false 。
 * element.nextSibling 返回相同树级别的下一个节点。
 * element.previousSibling 返回在同一树级别的上一个节点。
 * element.parentNode 返回元素的父节点。
 */
//例如，我们可以选择元素的所有子节点并更改其内容：
var a = document.getElementById("demo1");
var arr2 = a.childNodes;
for (var x = 0; x < arr2.length; x++) {
  arr2[x].innerHTML = "新的文本";
}

/*--改变属性--*/
//选择要使用的元素后，可以更改其属性。
//例如可以更改图像的 src 属性：
var el = document.getElementById("my-img"); // 通过id="my-img"获取元素
el.src = "../img/2.jpeg";

//更改链接的href属性：
var el1 = document.getElementsByTagName("a");
el1[0].href = "https://www.google.cn";
el1[0].innerHTML = "google";
//提示: 可以使用JavaScript更改元素的所有属性

/*--改变样式--*/
//HTML元素的样式也可以使用JavaScript进行更改，可以使用元素的 style 对象来访问所有样式属性。
//例如:
var x = document.getElementById("demo");
x.style.color = "6600FF";
x.style.width = "100px";
//上面的代码改变了div元素的文本颜色和宽度
/**
 * 提示: 所有CSS属性都可以使用JavaScript进行设置和修改。
 * 请记住，不能在属性名称中使用破折号（ - ）：这些替换为驼峰写法，其中复合词以大写字母开头
 * 比如: background-color属性应该被写为 backgroundColor。
 */

/*--添加和移除元素--*/
/**
 * 使用以下方法创建新节点：
 * element.cloneNode() 克隆元素并返回结果节点。
 * document.createElement(element) 创建一个新的元素节点。
 * document.createTextNode(text) 创建一个新的文本节点。
 */
//例如:
var node = document.createTextNode("一些新的文本");
/**这将创建一个新的文本节点，但它将不会出现在文档中，直您使用以下方法之一将其附加到现有元素：
 * element.appendChild(newNode) 将一个新的子节点添加到元素作为最后一个子节点。
 * element.insertBefore(node1, node2) 在节点2之前插入node1作为子节点
 */
//例如:
//创建一个新的段落
var p = document.createElement("p");
var node = document.createTextNode("一些新的文本");
//添加文本到段落 p.appendChild(node);
var div = document.getElementById("demo3");
//将段落添加到div中
div.appendChild(p);

/*--移除元素--*/
//要删除HTML元素，必须选择元素的父项并使用 removeChild(node) 方法
//例如:
var parent = document.getElementById("demo4");
var child = document.getElementById("p1");
parent.removeChild(child);

//会从页面中删除 id ="p1" 的段落。
//提示: 实现相同结果的另一种方法是使用 parentNode 属性来获取要删除的元素的父项：
var child = document.getElementById("p1");
child.parentNode.removeChild(child);

/*--替换元素--*/
//要替换HTML元素，使用 element.replaceChild(newNode,oldNode) 方法
//例如:
var p = document.createElement("p");
var node = document.createTextNode("这是新的文本");
p.appendChild(node);
var parent = document.getElementById("demo5");
var child = document.getElementById("p1");
parent.replaceChild(p, child);
//提示: 上面的代码创建一个替换现有 p1 段落的新段落元素
