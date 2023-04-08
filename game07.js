var canvas, g;
var groundPosX, groundPosY, groundImage;
var batPosX, batPosY, batImage, batR;
var speed, acceleration;
var ballPosX, ballPosY, ballImage, ballSpeed, ballR;
var score;

onload = function () {
  // 描画コンテキストの取得
  canvas = document.getElementById("gamecanvas");
  g = canvas.getContext("2d");
  // 初期化
  init();
  // 入力処理の指定
  document.onkeydown = keydown;
  
  // ボタンイベントのリスナーを追加
  document.getElementById("start-button").addEventListener("click", function(){
    startGame();
  });

  document.getElementById("stop-button").addEventListener("click", function(){
    stopGame();
  });

  document.getElementById("resume-button").addEventListener("click", function(){
    resumeGame();
  })
  
  // ゲームループの設定 60FPS
  setInterval("gameloop()", 16);
};

function init() {
  // グラウンド描画
  groundPosX = 240;
  groundPosY = 240;
  groundImage = new Image();
  groundImage.src = "./yakyuban.png";
 
  //バット初期化
  batPosX = 280;
  batPosY = 400;
  batR = 16;
  batImage = new Image();
  batImage.src = "./bat.png";
  speed = 0;
  acceleration = 0;

 //ボール初期化
  ballPosX = 240;
  ballPosY = 0;
  ballR = 16;
  ballImage = new Image();
  ballImage.src = "./ball.png";
  ballSpeed = -10;

 //ボールカウント初期化
  score = 0;

}

function keydown(e) {   //バッティング
  speed = -20;
  acceleration = 1.5;  
}

function gameloop() {
  update();
  draw();
}

function update() {
  speed = speed + acceleration;

 // バットの状態更新
  speed = speed + acceleration;
  batPosX = batPosX + speed;
  if(batPosX > 280) {
    batPosX = 280;
    speed = 0;
    acceleration = 0;
  }

 // ボールの状態更新 
  ballPosY -= ballSpeed;
  if (ballPosY > 480) {
    ballPosY = 0;
    score += 1;
  }

 //当たり判定
  var diffX = batPosX - ballPosX;
  var diffY = batPosY - ballPosY;
  var distance = Math.sqrt(diffX * diffX + diffY * diffY);
  if (distance < batR + ballR) {
   ballSpeed = +10;
   setTimeout("hantei()", 1000);
   setTimeout("init()", 7000);
   }  
}

function draw() {
  //背景描画
  g.drawImage(
    groundImage,
    groundPosX - groundImage.width / 2,
    groundPosY - groundImage.height / 2
  );

  //バット描画；
  g.drawImage(
    batImage,
    batPosX - batImage.width / 2,
    batPosY - batImage.height / 2
  );

  //ボール描画
  g.drawImage(
    ballImage,
    ballPosX - ballImage.width / 2,
    ballPosY - ballImage.height / 2
  );

  // ボールカウント描画
  g.fillStyle = "rgb(255,255,255)";
  g.font = "16pt Arial";
  var scoreLabel = "ストライク : " + score;
  if (score >= 3) {
    ballSpeed = 0;
    setTimeout("init()", 5000);
    g.fillStyle = "rgb(255,255,255)";
    g.font = "25pt Arial";
     var scoreLabel ="ストライクバッターアウト";
     var scoreLabelWidth = g.measureText(scoreLabel).Width;
    g.fillText(scoreLabel, 240 - scoreLabelWidth / 2, 240); 
    }
  var scoreLabelWidth = g.measureText(scoreLabel).width;
  g.fillText(scoreLabel, 460 - scoreLabelWidth, 40);
  }

  //判定
  function hantei() {
	let hantei = ["アウト","ホームラン","アウト","トリプルプレー","アウト","スリーベースヒット","アウト","ダブルプレー","アウト","ツーベースヒット","アウト","アウト","ヒット","アウト"];
	let r = Math.floor( Math.random() * hantei.length) ;//判定ぶんの数字を作ります
	document.getElementById("kekka1").innerHTML = hantei[r];//結果をid="kekka1"に表示します
	
}

  //スコアボード
  function onClick(){
        //1つ目の入力ボックスの値を取得する
        var value1 = document.getElementById("num1").value;
        //2つ目の入力ボックスの値を取得する
        var value2 = document.getElementById("num2").value;
        //3つ目の入力ボックスの値を取得する
        var value3 = document.getElementById("num3").value;
        //4つ目の入力ボックスの値を取得する
        var value4 = document.getElementById("num4").value;
        //5つ目の入力ボックスの値を取得する
        var value5 = document.getElementById("num5").value;
        //6つ目の入力ボックスの値を取得する
        var value6 = document.getElementById("num6").value;
        //7つ目の入力ボックスの値を取得する
        var value7 = document.getElementById("num7").value;
        //8つ目の入力ボックスの値を取得する
        var value8 = document.getElementById("num8").value;
        //9つ目の入力ボックスの値を取得する
        var value9 = document.getElementById("num9").value;

        //足算する
        var result1 = parseInt(value1) + parseInt(value2) + parseInt(value3)
                      + parseInt(value4) + parseInt(value5) + parseInt(value6)
                      + parseInt(value7) + parseInt(value8) + parseInt(value9);

        //値を設定する
        document.querySelector('.result1').innerHTML = result1 ;

        //10つ目の入力ボックスの値を取得する
        var value10 = document.getElementById("num10").value;
        //11つ目の入力ボックスの値を取得する
        var value11 = document.getElementById("num11").value;
        //12つ目の入力ボックスの値を取得する
        var value12 = document.getElementById("num12").value;
        //13つ目の入力ボックスの値を取得する
        var value13 = document.getElementById("num13").value;
        //14つ目の入力ボックスの値を取得する
        var value14 = document.getElementById("num14").value;
        //15つ目の入力ボックスの値を取得する
        var value15 = document.getElementById("num15").value;
        //16つ目の入力ボックスの値を取得する
        var value16 = document.getElementById("num16").value;
        //17つ目の入力ボックスの値を取得する
        var value17 = document.getElementById("num17").value;
        //18つ目の入力ボックスの値を取得する
        var value18 = document.getElementById("num18").value;
        //足算する
        var result2 = parseInt(value10) + parseInt(value11) + parseInt(value12)
                      + parseInt(value13) + parseInt(value14) + parseInt(value15)
                      + parseInt(value16) + parseInt(value17) + parseInt(value18);
                      
        //値を設定する
        document.querySelector('.result2').innerHTML = result2 ;
    }

  //ゲームスタート、ストップ、再開、ゲームセット
    
  var intervalId;

  function startGame() {
      if (!intervalId) {
      intervalId = setInterval("gameloop()", 16);
      }
  }

  function stopGame() {
      clearInterval(intervalId);
      intervalId = null;
  }

  function resumeGame() {
      if (!intervalId) {
      intervalId = setInterval("gameloop()", 16);
      }
  }

  function overGame() {
      clearInterval(intervalId);
      intervalId = null;
      document.getElementById("kekka2").innerHTML = "試合終了～";//結果をid="kekka2"に表示します
  }

