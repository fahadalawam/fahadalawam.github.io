///<reference path="./ref/p5.global-mode.d.ts" />
///<reference path="./ref/p5.d.ts" />

let mySound;
let isPlaying = false;

let last3 = [];

let times = [];
let prevs;
let times2 = [];
let timeLoop = [];
let amp;

function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('002.mp3');
}

function setup() {

    mySound.setVolume(0.1);

    const length = mySound.duration();
    const SMALL_COUNT = 50;
    const MIN_WAVE = 0.001;
    const MAX_WAVE = 0.4;

    // getAmp();
    print(`sample rate = ${mySound.sampleRate()}`);
    const rate = mySound.sampleRate();
    print(`duration = ${mySound.duration()}`);
    print(`frames = ${mySound.frames()}`);
    // print(mySound.getPeaks(length));

    let peaks = mySound.getPeaks(length);

    let smalls = 0;
    for (let i = 0; i < length; i++) {
        const c = i / rate;
        const a = peaks[i];

        // print({ c, a });
        // print(`smalls = ${smalls}`);
        if (a < MIN_WAVE && a > 0) smalls++;

        if (a > MAX_WAVE && smalls > SMALL_COUNT) {
            timeLoop.push({ c, a });
            smalls = 0;
        }

    }

    let newTimes = [];

    let diff;
    let lastAdded = 999;
    for (let i = 0; i < timeLoop.length; i++) {

        diff = abs(timeLoop[i].c - lastAdded);
        if (diff > 1) {
            newTimes.push(timeLoop[i]);
            lastAdded = timeLoop[i].c;
        }

    }

    print('timeLoop');
    print(timeLoop);

    print('newTimes');
    print(newTimes);


    createCanvas(400, 400);
    // mySound.play();
    amp = new p5.Amplitude();




    button = createButton('play/pause');
    button.position(width / 2, 100);
    button.mousePressed(pp);

    analize = createButton('analize');
    analize.position(width / 2, 150);
    analize.mousePressed(processAudio);

}

function pp() {
    if (isPlaying) {
        mySound.pause();
        isPlaying = false;
    } else {
        mySound.play();
        isPlaying = true;
    }
}

function draw() {
    background(220);
    frameRate(60);

    let c = mySound.currentTime();
    let a = amp.getLevel();

    if (mySound.isPlaying())
        print({ c, a });

    if (last3.length >= 3) last3.pop();
    last3.unshift(amp.getLevel());

    if (a < 0.0099 && c > 0) {
        times2.push({ c, a });
    }

}

function processAudio() {
    print(times2);

    let newTimes = [];

    for (let i = 0; i < times2.length - 1; i++) {

        let diff = abs(times2[i].c - times2[i + 1].c);

        if (diff > 1) newTimes.push(times2[i]);
    }


    print('newTimes');
    print(newTimes);
}

function keyPressed() {

    if (keyCode == UP_ARROW) {
        print(times2);

        let newTimes = [];

        for (let i = 0; i < times2.length - 1; i++) {

            let diff = abs(times2[i].c - times2[i + 1].c);

            if (diff > 1) newTimes.push(times2[i]);
        }
        1

        print('newTimes');
        print(newTimes);
    }
    if (keyCode == 32) {
        times.push(mySound.currentTime());
        print("crnt = " + mySound.currentTime());
        print(last3);

    }

    if (keyCode == DOWN_ARROW) {



        let ms = [];
        for (let i = 0; i < times.length; i++) {
            const t = times[i] * 1000;
            ms.push(floor(t));
        }

        print(times);
        print(ms);

        // saveStrings(ms, 'ms.txt');
    }

    print(times);
}