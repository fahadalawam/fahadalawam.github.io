///<reference path="./ref/p5.global-mode.d.ts" />
///<reference path="./ref/p5.d.ts" />



let last30 = [];
let times = [];
let sound;

function pp() {
    if (sound.isPlaying()) {
        sound.pause();
        print('PAUSE!!');
    } else {
        sound.play();
        print('PLAY!!');
    }
}

function remove(i, b1, b2) {
    times.splice(i, 1);
    b1.remove();
    b2.remove();


}

function showResult() {
    print('times');
    print(times);

    for (let i = 0; i < times.length; i++) {
        const t = times[i];

        button1 = createButton(i);
        button1.position(width / 2, 200 + 50 * i);
        button1.mousePressed(() => seekto(i));

        button2 = createButton('X');
        button2.position(width / 2 + 50, 200 + 50 * i);
        button2.mousePressed(() => remove(i, button1, button2));
    }
}


function seekto(i) {

    setTimeout(function () {
        Object.assign(sound, { _playing: true });
        sound.playMode('restart');
    }, 100);
    sound.stop();
    sound.playMode('sustain');

    sound.jump(times[i]);
}

function preload() {

    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    console.log(url);
    const s = urlParams.get('s');
    console.log(s);


    soundFormats('mp3', 'ogg');
    // const location = "mp3s\\12\\";
    // const location = `https://www.mp3quran.net/includes/downloadmp3.php?media=https://server13.mp3quran.net/${r}/`;
    const fileName = `${s}.mp3`;
    print(url + fileName);

    // sound = loadSound(url + fileName);
    sound = loadSound('http://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee/001.mp3');
}



function setup() {
    print(sound);


    times.push(0);

    // createCanvas(600, 400);
    // background('#000');
    amp = new p5.Amplitude();

    let loader = document.getElementById('loader');
    document.body.removeChild(loader);

    let btn_pp = document.getElementById('btn_pp');
    btn_pp.disabled = false;
    btn_pp.addEventListener('click', () => pp());

    let btn_ayah = document.getElementById('btn_ayah');
    btn_ayah.disabled = false;
    btn_ayah.addEventListener('click', () => selectTime());

}

function whileLoading(total) {
    print('loaded: ' + total);
}

function soundReady() {
    print('sound is ready')
}

function draw() {
    //play sound
    //add currnet time to array
    //add last 100 time to last100 array
    // print(`c= ${mySound.currentTime()}`);
    // print(last30[59]);
    if (sound.isPlaying()) {

        a = amp.getLevel();
        c = sound.currentTime();
        last30.push({ c, a });

        if (last30.length > 30) last30.shift();
    }

}

function selectTime() {
    temp = [];

    print(`c = ${sound.currentTime()}`);
    // print(last30);

    for (let i = last30.length; i > 0; i--) {
        // print(last30[i]);
        temp.push(last30[i - 1]);
    }
    print(temp);
    let lowest = { c: 0, a: 999 };
    for (let i = 0; i < temp.length; i++) {
        const e = temp[i];
        if (lowest.a > e.a) lowest = e;
    }
    print(`lowest = ${lowest.c} - ${lowest.a}`)
    times.push(lowest.c);

    showResult();
}


function keyPressed() {

    if (keyCode == UP_ARROW) {
        temp = [];

        print(`c = ${sound.currentTime()}`);
        // print(last30);

        for (let i = last30.length; i > 0; i--) {
            // print(last30[i]);
            temp.push(last30[i - 1]);
        }
        print(temp);
        let lowest = { c: 0, a: 999 };
        for (let i = 0; i < temp.length; i++) {
            const e = temp[i];
            if (lowest.a > e.a) lowest = e;
        }
        print(`lowest = ${lowest.c} - ${lowest.a}`)
        times.push(lowest.c);
    }

    if (keyCode == DOWN_ARROW) {
        // times.push(mySound.currentTime());
        print('times');
        print(times);
    }

}