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
let fft;

function preload() {
  song = loadSound('assets/17. Spring.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song.loop(); // la canción está lista para ser reproducida durante setup() porque fue cargada durante preload()
  background(0);
  noStroke();
  //para que no vuele oidos
    song.amp(0.2);
   amplitude = new p5.Amplitude();
   fft = new p5.FFT();
   fft.setInput(song);

}

function  draw(){
 background(0);
 let spectrum = fft.analyze();
  let bass, lowMid, mid, highMid, treble;

  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");
  let bins=[bass,lowMid,mid,highMid,treble]
  for (var i =0;i<5;i++){

      fill(i+1*(255/5)/255,(i+1)*(255/5),0);
      var ellipseHeight = map(bass[i], 0, 255, 0,-height/2)
      ellipse (width/3, ellipseHeight, 50, 50);

      fill(i+1*(255/5)/255,(i+1)*(255/5),0);
      var ellipseHeight1 = map(lowMid[i], 0, 255, 0,-height/2)
      ellipse (width/3, ellipseHeight1, 50, 50);

      fill(i+1*(255/5)/255,(i+1)*(255/5),0);
      var ellipseHeight2 = map(mid[i], 0, 255, 0,-height/2)
      ellipse (width/3, ellipseHeight2, 50, 50);

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
