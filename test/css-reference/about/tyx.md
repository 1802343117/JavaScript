使用Labmda表达式需要[函数式编程接口](https://www.runoob.com/java/java8-functional-interfaces.html)（具体支持Lambda表达式的接口），比如在Runnable接口上我们可以看到@FunctionalInterface注解（标记着这个接口只有一个抽象方法），（在事件监听中还有一个adapter就不行）