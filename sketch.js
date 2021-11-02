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

//variables
let song;
var amplitude;
var mapMax = 1;
var mapMax1 = -1;
let fft;

let backgroundcolor;

function preload() {
  song = loadSound('assets/17. Spring.mp3');
  // song = loadSound('assets/Bad Bunny  - BOOKER T (Letra_Lyric).mp3');
//  song = loadSound('assets/El Paso Del Gigante.mp3');
  //song = loadSound('assets/Fake Blood - I Think I Like It.mp3');
  //song = loadSound('assets/Hardwell - Spaceman (Original Mix).mp3');
  //song = loadSound('assets/Squid Game _ Do It To It (Zedd Edit).mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song.loop(); // la canción está lista para ser reproducida durante setup() porque fue cargada durante preload()
  background(0);
  	backgroundcolor = color( backgroundcolor = color(random(255),random(255),random(255)));
  noStroke();
  //para que no vuele oidos
    song.amp(0.3);
   amplitude = new p5.Amplitude();
   //fft analyzer con input la cancion que este sonando
   fft = new p5.FFT();
   fft.setInput(song);

}

function  draw(){
 background(0);
 let spectrum = fft.analyze();
  let bass, lowMid, mid, highMid, treble;
// aqui el FTT tiene prederminado estos valores para usarlos:
  bass = fft.getEnergy("bass");
  bass1 = fft.getEnergy("bass")*-1;
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");

    hz20 = fft.getEnergy(20);
    hz120 = fft.getEnergy(120);
    hz240 = fft.getEnergy(240);
    hz640 = fft.getEnergy(640);
    hz1000= fft.getEnergy(1000);
    hz1800 = fft.getEnergy(1800);
      hz2200 = fft.getEnergy(2200);
    hz3000 = fft.getEnergy(3000);

  console.log("Bass: "+bass+" lowMid: "+lowMid+" mid: "+mid+" highMid: "+highMid+" treble: "+treble);


//LowMID down

// Ellipsex = valor de posicion de la ellipse en x que es determinado por la amplitud de bass
//(como  ftt nos da valores de 255 solo se divide entre 255 para obtener valores de 1 a 0)
  var ellipsex = map(bass/255, 0, mapMax, height, 0);
  //ellipse width
  var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
    //ellipse height
  var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
  //aqui esta escrita la ellipse, su posicion y tamaño
  ellipse(1*width/8, ellipsex, 100, 100);
  ellipseMode (CENTER);
  //color random de la ellipse
  fill (random(255),random(255),random(255));

//Todos los demas se tratan de la misma manera, se pudo escribir un for para mas sencillo
//pero se nos hizo mas sencillo esto jiji

//BASS down
  var level = amplitude.getLevel();
   var ellipseHeight1 = map(lowMid/255, 0, mapMax, height, 0);
   ellipse(2*width/8, ellipseHeight1, 100, 100);
   ellipseMode (CENTER);
   fill (random(255),random(255),random(255));


//mid down
   var level = amplitude.getLevel();
    var ellipseHeight2 = map(mid/255, 0, mapMax, height, 0);
    ellipse(3*width/8, ellipseHeight2, 100, 100);
    ellipseMode (CENTER);
    fill (random(255),random(255),random(255));

//highMid down
    var level = amplitude.getLevel();
     var ellipseHeight3  = map(highMid/255, 0, mapMax, height, 0);
     ellipse(4*width/8 , ellipseHeight3, 100, 100);
     ellipseMode (CENTER);
     fill (random(255),random(255),random(255))
//treble down
     var level = amplitude.getLevel();
      var ellipseHeight4  = map(.03+treble/255, 0, mapMax, height, 0);
      ellipse(7.04*width/8 , ellipseHeight4, 100, 100);
      ellipseMode (CENTER);
      fill (random(255),random(255),random(255));

//level down
      var level = amplitude.getLevel();
       var ellipseHeight5  = map(level, 0, mapMax*1.1, height, 0);
       ellipse(7.7*width/8 , ellipseHeight5, 100, 100);
       ellipseMode (CENTER);
       fill (random(255),random(255),random(255));






       //20 hz
        var level = amplitude.getLevel();
           console.log(level)
         var ellipsex = map(hz20/255, 0, mapMax, height, 0);
         var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
         var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
         ellipse(1*width/16, ellipsex, 100, 100);
         ellipseMode (CENTER);
         fill (random(255),random(255),random(255));


         //120 hz
          var level = amplitude.getLevel();
             console.log(level)
           var ellipsex = map(hz120/255, 0, mapMax, height, 0);
           var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
           var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
           ellipse(3*width/16, ellipsex, 100, 100);
           ellipseMode (CENTER);
           fill (random(255),random(255),random(255));

           //240 hz
            var level = amplitude.getLevel();
               console.log(level)
             var ellipsex = map(hz240/255, 0, mapMax, height, 0);
             var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
             var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
             ellipse(5*width/16, ellipsex, 100, 100);
             ellipseMode (CENTER);
             fill (random(255),random(255),random(255));

             //640 hz
              var level = amplitude.getLevel();
                 console.log(level)
               var ellipsex = map(hz640/255, 0, mapMax, height, 0);
               var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
               var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
               ellipse(7*width/16, ellipsex, 100, 100);
               ellipseMode (CENTER);
               fill (random(255),random(255),random(255));

               //1000hz
                var level = amplitude.getLevel();
                   console.log(level)
                 var ellipsex = map(hz1000/255, 0, mapMax, height, 0);
                 var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
                 var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
                 ellipse(9*width/16, ellipsex, 100, 100);
                 ellipseMode (CENTER);
                 fill (random(255),random(255),random(255));



                 //1800 hz
                  var level = amplitude.getLevel();
                     console.log(level)
                   var ellipsex = map(hz1800/255, 0, mapMax, height, 0);
                   var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
                   var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
                   ellipse(11*width/16, ellipsex, 100, 100);
                   ellipseMode (CENTER);
                   fill (random(255),random(255),random(255));




                   //2200 hz
                    var level = amplitude.getLevel();
                       console.log(level)
                     var ellipsex = map(hz2200/255, 0, mapMax, height, 0);
                     var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
                     var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
                     ellipse(12*width/16, ellipsex, 100, 100);
                     ellipseMode (CENTER);
                     fill (random(255),random(255),random(255));



                   //3000 hz
                    var level = amplitude.getLevel();
                       console.log(level)
                     var ellipsex = map(hz3000/255, 0, mapMax, height, 0);
                     var ellipseWidth = map(lowMid/255, 0, mapMax, height, 0);
                     var ellipseHeight = map(lowMid/255, 0, mapMax, height, 0);
                     ellipse(13*width/16, ellipsex, 100, 100);
                     ellipseMode (CENTER);
                     fill (random(255),random(255),random(255));





    }




function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.pause(); // .play() continuará la reproducción desde la posición definida por .pause()
    background(backgroundcolor);
  } else {
    song.play();
    background(backgroundcolor);
  }
}
