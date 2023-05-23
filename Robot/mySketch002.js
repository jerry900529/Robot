var colors = ('d62828-41C863-E8EDBF-141412-F4F5F4').split("-").map(a => "#" + a);
let angle = 0;
let radius = 10;
let dotCount = 7;
let dots = [];
let spacing = 30;
let scaleSize = 0.6;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i = 0; i < dotCount; i++) {
    dots.push(createVector(0, 0));
  }
}

function draw() {
    // 背景色
    background("#DAB256");
    for (let i = 0; i < width; i += 260 + spacing) {
      for (let j = 0; j < height; j += 200 + spacing) {
        push();
        translate(i + x, j);
        scale(scaleSize);
        drawRobot();
        pop();
      }
    }
    x = sin(frameCount / 30) * 50; // 计算机器人的水平位置

  }
  
  
  function drawRobot() {
  rectMode(CENTER);
  dots = [];
  // 不要有边框
  noStroke();
    
  // 机器人头
  push();
  rotate(sin(angle) * 10); // 旋转机器人头
  fill(colors[1]);
  rect(0, 0, 400, 300, 40);
  pop();

  // 左眼
  push();
  rotate(sin(angle) * 10);  
  fill(colors[0]);
  ellipse(-120, 0, 100, 100);
  pop();

  // 左上眼
  push();
  rotate(sin(angle) * 10); 
  fill(colors[2]);
  ellipse(-135, -10, 60, 60);
  pop();

  // 右眼
  push();
  rotate(sin(angle) * 10); 
  fill(colors[0]);
  ellipse(100, 0, 100, 100);
  pop();

  // 左上眼
  push();
  rotate(sin(angle) * 10); 
  fill(colors[2]);
  ellipse(85, -10, 60, 60);
  pop();
  // 左耳
  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(-230, 10, 60, 150);
  pop();
  // 右耳
  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(230, 10, 60, 150);
  pop();
  // 双眉
  push();
  rotate(sin(angle) * 10); 
  fill(colors[4]);
  rect(0, -75, 400, 50, 20);
  pop();
  // 中眉
  push();
  rotate(sin(angle) * 10); 
  fill(colors[4]);
  rect(0, -30, 50, 130, 20);
  pop();
  // 中眉点
  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  ellipse(0, 10, 20, 20);
  pop();

  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  ellipse(0, -30, 20, 20);
  pop();


  // 中间七点波浪
  for (let i = 0; i < dotCount; i++) {
    let x = i * 40 - (dotCount - 1) * 20;
    let y = sin(angle + i * 360 / dotCount) * radius;
    dots.push(createVector(x, y - 70));
    fill(colors[3]);
    ellipse(dots[i].x, dots[i].y, 20, 20);
  }
  angle += 0.5; //減緩波浪速度

  // 嘴巴
  push();
  rotate(sin(angle) * 10); 
  fill(colors[4]);
  rect(0, 90, 300, 70, 20);
  pop();

  // 左嘴巴洞
  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(-20, 90, 20, 50, 20);
  pop();

  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(-70, 90, 20, 50, 20);
  pop();

  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(-120, 90, 20, 50, 20);
  pop();


  // 右嘴巴洞
  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(20, 90, 20, 50, 20);
  pop();

  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(70, 90, 20, 50, 20);
  pop();

  push();
  rotate(sin(angle) * 10); 
  fill(colors[3]);
  rect(120, 90, 20, 50, 20);
  pop();
  
}