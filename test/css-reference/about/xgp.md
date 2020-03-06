### 实例：

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>before</title>
    <style>
        p::before {
            content: '声明：';
            background-color: bisque;
            color: red;
        }

        p::after {
            content: '~~知道了吗';
            background-color: cadetblue;
            color: red;
        }
    </style>

</head>

<body>
    <p>我是CodeJasmine</p>
    <p>我在安徽阜阳</p>
</body>

</html>
