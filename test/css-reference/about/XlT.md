<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

​    <title>animation-timing-function 属性</title>

    <style>

​        .div {

​            width: 100px;

​            height: 100px;

​            background: rgb(43, 255, 0);

​            position: relative;

​            animation: mymove 5s infinite;

​            -webkit-animation: mymove 15s infinite;

​            */\*Safari and Chrome\*/*

​        }

​        .div1 {

​            width: 100px;

​            height: 100px;

​            background: rgb(255, 0, 0);

​            position: relative;

​            animation: mymove 5s infinite;

​            -webkit-animation: mymove 1s infinite;

​            */\*Safari and Chrome\*/*

​        }

​        .div2 {

​            width: 100px;

​            height: 100px;

​            background: rgb(255, 251, 0);

​            position: relative;

​            animation: mymove 5s infinite;

​            -webkit-animation: mymove 5s infinite;

​            */\*Safari and Chrome\*/*

​        }

​        @keyframes mymove {

​            from {

​                left: 0px;

​            }

​            to {

​                left: 200px;

​            }

​        }

​        @-webkit-keyframes mymove

​        */\*Safari and Chrome\*/*

​            {

​            from {

​                left: 0px;

​            }

​            to {

​                left: 100%;

​            }

​        }

​    </style>

</head>

<body>

    <div class="div"></div>

    <div class="div1"></div>

    <div class="div2"></div>

</body>

</html>