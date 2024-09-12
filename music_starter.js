class RainDrop {
  constructor() {
    this.x = random(width);
    this.y = random(-100, -10);  // Start off-screen
    this.z = random(0, 15);      // Different z-depth for perspective
    this.len = map(this.z, 0, 15, 7, 15); // Length based on z-depth
    this.yspeed = map(this.z, 0, 20, 1, 20); // Speed based on depth
  }

  fall() {
    this.y += this.yspeed;  // Correct y movement direction
    let grav = map(this.z, 0, 20, 0, 0.2);  // Apply gravity based on depth
    this.yspeed += grav;  // Increase speed over time (gravity effect)

    if (this.y > height) {
      this.y = random(-100, -10);  // Reset raindrop position
      this.yspeed = map(this.z, 0, 20, 4, 10);  // Reset speed
    }
  }

  show() {
    let thick = map(this.z, 0, 20, 2, 5);  // Thickness based on depth
    strokeWeight(thick);
    stroke(57, 92, 108);  // Color of raindrops
    line(this.x, this.y, this.x, this.y + this.len);  // Draw raindrop as a line
  }
}

let drops = [];  // Array to hold all raindrops

function drawRain() {
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();  // Update position of raindrop
    drops[i].show();  // Draw raindrop
  }
}

let firstRun = true; // used for initializing

let angle = 0;
let r = 150;
let vocal_history = [];
let bass_history = [];
let drum_history = [];
let other_history = [];

function add_to_history(history, d) {
  history.push(d);
  if (history.length >= (width - 1) / 4) {
    history.shift();
  }
}


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  if (firstRun) { //initialize for raindrops
    for (let i = 0; i < 500; i++) {  // increase/decrease of raindrops
      drops.push(new RainDrop());
    }
    firstRun = false; // set to false so it doesn't run again.
  }  

  background(18, 7, 5);  // clears background
  drawRain();  // Draws rain after background

  angleMode(RADIANS)

  add_to_history(vocal_history, vocal);

  add_to_history(bass_history, bass);

  add_to_history(drum_history, drum);

  add_to_history(other_history, other);


  push(); //VOCAL
  strokeWeight(5);
  stroke(99, 4, 7);
  translate(400, 400); //placement
  for (let i = 0; i <= 10; i++) {

    historyVocal = vocal_history[vocal_history.length - i]
    r = map(historyVocal, 0, 100, 0, 12)
    let angle = map(i, 0, 10, 0, PI * 2)
    let x = r * cos(angle);
    let y = r * sin(angle);
    line(x, y, x*((historyVocal/100)+1),y*((historyVocal/100)+1) )

  }
  angle += 0.05; //random(-0.1, 0.1);
  r -= random(-2, 2);

  pop(); // resets origin back to (0, 0)


  push(); //OTHER
  strokeWeight(5);
  stroke(209, 206, 209); 
  translate(400, 400);
  for (let i = 0; i <= 30; i++) {

    historyDrum = drum_history[drum_history.length - i]
    r = map(historyDrum, 0, 100, 30, 32)
    let angle = map(i, 0, 30, 0, PI * 2)
    let x = r * cos(angle);
    let y = r * sin(angle);
    line(x, y, x*((historyDrum/100)+1),y*((historyDrum/100)+1) )

  }
  angle += 0.05; 
  r -= random(-2, 2);

  pop(); 

  push(); //BASS
  strokeWeight(5);
  stroke(146, 5, 16);
  translate(400, 400);
  for (let i = 0; i <= 70; i++) {
    
    historyBass = bass_history[bass_history.length - i]
    r = map(historyBass, 0, 100, 160, 160)
    let angle = map(i, 0, 70, 0, PI * 2)
    let x = r * cos(angle);
    let y = r * sin(angle);
    // point(x, y);
    // rect(x, y, 2, 4);
    line(x, y, x*((historyBass/100)+1),y*((historyBass/100)+1) )

  }
  angle += 0.05; 
  r -= random(-2, 2);

  pop(); 

 
  push();
  strokeWeight(5);
  stroke(215, 212, 213);
  translate(400, 400);
  for (let i = 0; i <= 100; i++) {

    historyOther = other_history[other_history.length - i]
    r = map(historyOther, 0, 100, 75, 75)
    let angle = map(i, 0, 100, 0, PI * 2)
    let x = r * cos(angle);
    let y = r * sin(angle);
    // point(x, y);
    // rect(x, y, 2, 4);
    line(x, y, x*((historyOther/100)+1),y*((historyOther/100)+1) )
    

  }
  angle += 0.05; 
  r -= random(-2, 2);

}