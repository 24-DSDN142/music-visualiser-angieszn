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

  background(0)
  angleMode(RADIANS)

  add_to_history(vocal_history, vocal);

  add_to_history(bass_history, bass);

  add_to_history(drum_history, drum);

  add_to_history(other_history, other);


  // push(); //VOCAL
  // strokeWeight(6);
  // stroke(224, 224, 224);
  // translate(400, 400); //placement
  // for (let i = 0; i <= 10; i++) {

  //   historyVocal = vocal_history[vocal_history.length - i]
  //   r = map(historyVocal, 10, 100, 10, 20)
  //   let angle = map(i, 0, 10, 0, PI * 2)
  //   let x = r * cos(angle);
  //   let y = r * sin(angle);
  //   point(x, y);

  // }
  // angle += 0.05; //random(-0.1, 0.1);
  // r -= random(-2, 2);

  // pop(); // resets origin back to (0, 0)


  // push(); //OTHER
  // strokeWeight(10);
  // stroke(192, 192, 192);
  // translate(400, 400);
  // for (let i = 0; i <= 15; i++) {

  //   historyOther = other_history[other_history.length - i]
  //   r = map(historyOther, 20, 100, 25, 50)
  //   let angle = map(i, 0, 15, 0, PI * 2)
  //   let x = r * cos(angle);
  //   let y = r * sin(angle);
  //   point(x, y);

  // }
  // angle += 0.05; 
  // r -= random(-2, 2);

  // pop(); 

  push(); //BASS
  strokeWeight(5);
  stroke(160, 160, 160);
  translate(400, 400);
  for (let i = 0; i <= 20; i++) {

    historyBass = bass_history[bass_history.length - i]
    r = map(historyBass, 0, 75, 60, 75)
    let angle = map(i, 0, 20, 0, PI * 2)
    let x = r * cos(angle);
    let y = r * sin(angle);
    // point(x, y);
    rect(x, y, 2, 4);
    // line(x, y)

  }
  angle += 0.05; 
  r -= random(-2, 2);

  pop(); 

}