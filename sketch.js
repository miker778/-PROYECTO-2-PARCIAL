//Referencias:
//https://github.com/therewasaguy/p5-music-viz/blob/master/demos/01_hello_amplitude/sketch.js
//https://p5js.org/es/reference/#/p5/ellipse
//https://p5js.org/es/examples/sound-preload-soundfile.html
//https://editor.p5js.org/aferriss/sketches/rJf3luXdG
//
//Equipo:
// Milka Maria Monterrosa Gutierrez
// Fernando Gabriel Alvarado Ramirez
// Santiago Canizales Corzo
// Ian Kenneth Carrillo Piedracruz
// Miguel Ángel Ramírez Vázquez
// Emiliano Garibay Espinosa
//

let song;
var amplitude;
var mapMax = 0.4;

function preload() {
  song = loadSound('../assets/17. Spring.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song.loop(); // la canción está lista para ser reproducida durante setup() porque fue cargada durante preload()
  background(0);
  noStroke();
   amplitude = new p5.Amplitude();

}

function  draw(){
 background(0);

 var level = amplitude.getLevel();
  text('Amplitude: ' + level, 20, 20);
  text('mapMax: ' + mapMax, 20, 40);
  var ellipseHeight = map(level, 0, mapMax, height, 0);
  ellipse(width/2, ellipseHeight, 100, 100);


  var leve1 = amplitude.getLevel();
   text('Amplitude: ' + level, 20, 20);
   text('mapMax: ' + mapMax, 20, 40);
   var ellipseHeight1 = map(level, 0, mapMax, height, 0);
   ellipse(width/4, ellipseHeight, 100, 100);

   var level = amplitude.getLevel();
    text('Amplitude: ' + level, 20, 20);
    text('mapMax: ' + mapMax, 20, 40);
    var ellipseHeight2 = map(level, height, mapMax, height, 0);
    ellipse(3*width/4, ellipseHeight, 100, 100);







}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.pause(); // .play() continuará la reproducción desde la posición definida por .pause()
    background(random(255));
  } else {
    song.play();
    background(random(255));
  }
}
