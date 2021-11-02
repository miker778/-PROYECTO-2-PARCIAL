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
var mapMax = 1;
let fft;

function preload() {
  //song = loadSound('assets/17. Spring.mp3');
  song = loadSound('assets/Bad Bunny  - BOOKER T (Letra_Lyric).mp3');
//  song = loadSound('assets/El Paso Del Gigante.mp3');
  //song = loadSound('assets/Fake Blood - I Think I Like It.mp3');
  //song = loadSound('assets/Hardwell - Spaceman (Original Mix).mp3');
  //song = loadSound('assets/Squid Game _ Do It To It (Zedd Edit).mp3');
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

  console.log("Bass: "+bass+" lowMid: "+lowMid+" mid: "+mid+" highMid: "+highMid+" treble: "+treble);



 var level = amplitude.getLevel();

  var ellipsex = map(lowMid/255, 0, mapMax, height, 0);

  var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
  var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);

  ellipse(width/3, ellipsex, 50, 50);

  ellipseMode (CENTER);
  fill (random(255),random(255),random(255));



  var level = amplitude.getLevel();
   var ellipseHeight1 = map(bass/255, 0, mapMax, height, 0);
   ellipse(width/5, ellipseHeight1, 50, 50);
   ellipseMode (CENTER);
   fill (random(255),random(255),random(255));



   var level = amplitude.getLevel();
    var ellipseHeight2 = map(mid/255, 0, mapMax, height, 0);
    ellipse(3*width/6, ellipseHeight2, 50, 50);
    ellipseMode (CENTER);
    fill (random(255),random(255),random(255));


    var level = amplitude.getLevel();
     var ellipseHeight3  = map(highMid/255, 0, mapMax, height, 0);
     ellipse(2*width/3 , ellipseHeight3, 50, 50);
     ellipseMode (CENTER);
     fill (random(255),random(255),random(255))

     var level = amplitude.getLevel();
      var ellipseHeight4  = map(treble/255, 0, mapMax, height, 0);
      ellipse(2.4*width/3 , ellipseHeight4, 50, 50);
      ellipseMode (CENTER);
      fill (random(255),random(255),random(255));


      var level = amplitude.getLevel();
       var ellipseHeight5  = map(level, 0, mapMax, height, 0);
       ellipse(2.6*width/3 , ellipseHeight5, 50, 50);
       ellipseMode (CENTER);
       fill (random(255),random(255),random(255));





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
