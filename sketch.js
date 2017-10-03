var bird;
var mic, fft, h;
var sliderTop;
var sliderBottom;
var clapping = false;

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    sliderTop = createSlider(0,1,0.3,0.01)
    sliderBottom = createSlider(0,1,0.1,0.01)
    //fft = new p5.FFT(0.6, 1024); //////////
    //fft.setInput(mic); //////////
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT(0.6, 1024);
    fft.setInput(mic);
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function draw() {
    beginShape();
    //for(i = 0; i<spectrum.length; i++) {
    //h = (i, map(spectrum[i], 0, 255, height, 0) );

    //ellipse(posisi bola horizontally, , , )
    //ellipse(width/2, -maxSpectrum/40*height + height-25, 50, 50);

    bird.update();
    bird.show();

    //update();

    //break;
    //}
    endShape();
//     background(0);
//
//     var vol = mic.getLevel();
//
//     bird.update();
//     bird.show();
//
//     var thresholdTop = sliderTop.value();
//     var thresholdBottom = sliderBottom.value();
//
//     if (vol > thresholdTop && !clapping) {
//         bird.up();
//         clapping = true;
//     };
//
//     if (vol < thresholdBottom) {
//         clapping = false;
//     }
//
//     fill(0, 255, 0);
//     noStroke();
//     var y = map(vol, 0, 1, height, 0);
//     rect(width - 50, y, 50, height - y);
//
// // limit line
//     var ty = map(thresholdTop, 0, 1, height, 0);
//     stroke(255, 0, 0);
//     strokeWeight(4);
//     line(width - 50, ty, width, ty);
//
//     var by = map(thresholdBottom, 0, 1, height, 0);
//     stroke(0, 0, 255);
//     strokeWeight(4);
//     line(width - 50, by, width, by);

}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}