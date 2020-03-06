## Data Type属性
 - 概念:用于存储页面或应用程序的私有定制数据。
 -- data-* 属性用于存储页面或应用程序的私有自定义数据。

data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。

存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服务器端数据库查询）。

data-* 属性包括两部分：

- 属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符
- 属性值可以是任意字符串
- 示例：
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