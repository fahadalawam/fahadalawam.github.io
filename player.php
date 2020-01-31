<!DOCTYPE html>
<html>

<?php  header("Access-Control-Allow-Origin: *"); ?>

<head>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

    <style>
        #btn_pp {
            position: fixed;
            top: 2%;
            left: 25%;
            width: 50%;
            height: 200px;
            font-size: 30px;
        }

        #btn_ayah {
            position: fixed;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 20%;
            font-size: 30px;
            /* right: 10px; */
        }

        #list {
            position: fixed;
            top: calc(2% + 210px);
            left: 15%;
            width: 70%;
            height: 450px;
        }

        .loader {
            position: fixed;
            top: 30%;
            left: calc(50% - 30px);
            border: 8px solid #f3f3f3;
            /* Light grey */
            border-top: 8px solid #3498db;
            /* Blue */
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    </style>

</head>

<body>

    <script src="getLevels.js"></script>

    <button disabled id="btn_pp">تشغيل / ايقاف</button>

    <div class="loader" id='loader'></div>
    <div id="list">

    </div>
    <button disabled id="btn_ayah">بداية آية</button>
</body>

</html>