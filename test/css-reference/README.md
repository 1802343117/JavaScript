# CSS Reference

CSS属性参考大全

## 1.Pseudo-class 伪类
- ::before
<<<<<<< HEAD
  - 概念
  - 示例
=======

  - 概念

>>>>>>> a3080e25edd6afd769d4028c1159640b74ae039d
  - 概念：  ::before创建一个伪类元素，其将成为匹配选中的元素的第一个子元素。常通过content属性来为一个元素添加修饰性的内容。此元素默认为行内元素
  - 示例：

 //在p之前添加内容
   p::before {
       content:"台词：-";
       background-color:yellow;
       color:red;
       font-weight:bold;
  }

 HTML内容:<span class="ribbon">Notice where the orange box is.</span>
  CSS 内容：
  .ribbon {
   background-color: #5BC8F7;
}

.ribbon::before {
   content:          "Look at this orange box.";
   background-color: #FFBA10;
   border-color:     black;
   border-style:     dotted;
}

结果：Look at this orange box.Notice where the orange box is.
<<<<<<< HEAD
```

```html
p::before {
        content: '声明：';
        background-color: bisque;
        color: red;
      }
```
=======



>>>>>>> a3080e25edd6afd769d4028c1159640b74ae039d

- :nth-child()
  - 概念
  - 示例

  
  - 下面的示例选择表中的偶数行，并对它们应用背景色以创建斑马效果。
  

    tr ：nth-child（even） {
         background-color：#eee ;
    }


- :hover
  - 概念
  - 示例
## 2.Property
- animation
  -  概念
  - 示例

- box-shadow
   -  概念
   -  示例：box-shadow: 10px 5px 5px black;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);box-shadow: inset 5em 1em gold;box-shadow: 3px 3px red, -1em 0 0.4em olive;


     ​	
     div
     {
     width:300px;
     height:100px;
     background-color:#ff9900;
     -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
     box-shadow: 10px 10px 5px #888888;
     }


     

## 3.Function
- calc()
   - 用于动态计算长度值。

     ​     ● 需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；

     ​     ● 任何长度值都可以使用calc()函数进行计算；

     ​     ● calc()函数支持 "+", "-", "*", "/" 运算；

     ​     ● calc()函数使用标准的数学运算优先级规则；

     <!DOCTYPE html>
     <html>
     <head>
     <meta charset="utf-8"> 
     <style>
     #div1 {
         position: absolute;
         left: 50px;
         width: calc(100% - 100px);
         border: 1px solid black;
         background-color: yellow;
         padding: 5px;
         text-align: center;
     }
     </style>
     </head>

     <body>
     <p>创建一个横跨屏幕的div，div 两边有 50px 的间隙：</p>
     <div id="div1">一些文本...</div>
     </body>
     </html>
     ```
- rotate()
<<<<<<< HEAD

   -  概念
   - 示例

- rotate()
   - 概念：CSS的**rotate()**函数定义了一种将元素围绕一个定点（由[`transform-origin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。旋转180°也被称为点反射



   - 概念

=======
   -  概念
   - 示例
- rotate()
   - 概念：CSS的**rotate()**函数定义了一种将元素围绕一个定点（由[`transform-origin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。旋转180°也被称为点反射

- rotate()
   - 概念：CSS的**rotate()**函数定义了一种将元素围绕一个定点（由[`transform-origin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。旋转180°也被称为点反射

   - 概念
>>>>>>> 719ac0309278fe817322567653283bd3690ab499

   - 示例

   


     //zyj
     transform: rotate(45deg);
     transform: rotate(-60deg);
     transform: rotate(1.5rad);
     transform: rotate(1turn);
<<<<<<< HEAD
     ```
=======


>>>>>>> a3080e25edd6afd769d4028c1159640b74ae039d

## 4.Data Type 
- 概念：用于存储页面或应用程序的私有定制数据。
 -- data-* 属性用于存储页面或应用程序的私有自定义数据。

data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。

存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服务器端数据库查询）。

data-* 属性包括两部分：

- 属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符
- 属性值可以是任意字符串
-示例：
 ```
<script>
function showDetails(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert(animal.innerHTML + "是一种" + animalType + "。");
}2
</script>
 <ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="鸟类">喜鹊</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="鱼类">金枪鱼</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="蜘蛛">蝇虎</li>  
</ul>
```
## 5.Concept
- Combinators
- Counters
- Custom Properties
- Flexbox
## 6.@rule
