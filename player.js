let last30 = [];
let times = [];
let audio;
let startLoop = -1,
  endLoop = -1;

function initPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("url");
  console.log(url);
  const s = urlParams.get("s");
  console.log(s);
  const fileName = `${s}.mp3`;
  console.log(url + fileName);

  audio = document.getElementById("player");
  // audio.src = url + fileName;
  audio.src = "./078.mp3";
  audio.autoplay = true;

  times.push(0);

  audio.addEventListener("canplay", () => {
    let loader = document.getElementById("loader");
    if (loader) document.body.removeChild(loader);
  });

  let btn_ayah = document.getElementById("btn_ayah");
  btn_ayah.addEventListener("click", () => selectTime());

  audio.crossOrigin = "anonymous";
  audio.autoplay = true;
  audio.controls = true;
  context = new (window.AudioContext || window.webkitAudioContext)();
  analyser = context.createAnalyser();

  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  frequency_array = new Uint8Array(analyser.frequencyBinCount);

  animationLooper();
}

function animationLooper() {
  analyser.getByteFrequencyData(frequency_array);

  if (!audio.paused) {
    let a = frequency_array[240];
    let c = audio.currentTime;
    // console.log({ c, a });
    c = audio.currentTime;
    last30.push({ c, a });

    if (last30.length > 30) last30.shift();

    if (startLoop >= 0 && endLoop > 0) {
      if (audio.currentTime >= endLoop) audio.currentTime = startLoop;
    }
  }

  window.requestAnimationFrame(animationLooper);
}

function remove(i, b1, b2) {
  times.splice(i, 1);
  b1.remove();
  b2.remove();
}

function showResult() {
  console.log("times");
  console.log(times);

  for (let i = 0; i < times.length; i++) {
    const t = times[i];

    let b1 = document.createElement("button");
    b1.innerHTML = i;
    b1.id = i;
    // b1.addEventListener('click', () => {
    //     audio.currentTime = times[i];
    // });
    document.getElementById("list").appendChild(b1);
  }
}

function seekto(i) {
  setTimeout(function() {
    Object.assign(audio, { _playing: true });
    audio.playMode("restart");
  }, 100);
  audio.stop();
  audio.playMode("sustain");

  audio.jump(times[i]);
}

// function preload() {
//     // soundFormats('mp3', 'ogg');
//     // const location = "mp3s\\12\\";
//     // const location = `https://www.mp3quran.net/includes/downloadmp3.php?media=https://server13.mp3quran.net/${r}/`;

//     // console.log(url + fileName);

//     // sound = loadSound(url + fileName);
//     // sound = loadSound('http://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee/001.mp3');
// }

function setup() {
  console.log(audio);

  times.push(0);

  // createCanvas(600, 400);
  // background('#000');
  amp = new p5.Amplitude();
}

function whileLoading(total) {
  console.log("loaded: " + total);
}

function soundReady() {
  console.log("sound is ready");
}

// function draw() {
//     //play sound
//     //add currnet time to array
//     //add last 100 time to last100 array
//     // console.log(`c= ${mySound.currentTime()}`);
//     // console.log(last30[59]);
//     if (audio.isPlaying()) {

//         a = amp.getLevel();
//         c = audio.currentTime();
//         last30.push({ c, a });

//         if (last30.length > 30) last30.shift();
//     }

// }

function selectTime() {
  temp = [];

  // console.log(`last30 = ${last30}`);
  console.log(`c = ${audio.currentTime}`);
  // console.log(last30);

  for (let i = last30.length; i > 0; i--) {
    // console.log(last30[i]);
    temp.push(last30[i - 1]);
  }
  console.log(temp);
  let lowest = { c: 0, a: 999 };
  for (let i = 0; i < temp.length; i++) {
    const e = temp[i];
    if (lowest.a > e.a) lowest = e;
  }
  console.log(`lowest = ${lowest.c} - ${lowest.a}`);
  times.push(lowest.c);

  //remove all buttons. (delete div)
  document.getElementById("list").remove();

  // new list div.
  let list = document.createElement("div");
  list.id = "list";
  document.getElementById("list-container").appendChild(list);
  // document.body.appendChild(list);

  //sort times array
  times.sort((a, b) => a - b);

  console.log("times");
  console.log(times);

  // add buttons to the list
  for (let i = 0; i < times.length; i++) {
    // const t = times[i];

    let text = i == 0 ? "بداية السورة" : i;

    const markup = `
        <button id="x${i}" class="list_btn delete_btn">x</button>
        &nbsp;&nbsp;
        <button id="t${i}" class="list_btn time_btn">${text}</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button id="rw${i}" class="list_btn rw_btn">&lt;</button>
        <button id="ff${i}" class="list_btn ff_btn">&gt;</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button id="loop${i}" class="list_btn loop_btn">loop</button>
        `;

    let item = document.createElement("div");
    item.id = `item${i}`;
    item.className = "item";
    item.innerHTML = markup;

    list.appendChild(item);

    let time_btn = document.getElementById(`t${i}`);

    time_btn.addEventListener("click", () => {
      audio.currentTime = times[i];
      audio.play();
    });

    let x_btn = document.getElementById(`x${i}`);

    x_btn.addEventListener("click", () => {
      //   console.log(`removing ${times[i]}`);
      //   times.splice(i, 1);
      //   x_btn.parentNode.remove();
      //todo: reset list
    });

    const offset = 0.2;

    let rw_btn = document.getElementById(`rw${i}`);

    rw_btn.addEventListener("click", () => {
      times[i] = times[i] - offset;
      console.log(`rw ${times[i]}`);
      console.log(times);
      audio.currentTime = times[i];
    });

    let ff_btn = document.getElementById(`ff${i}`);

    ff_btn.addEventListener("click", () => {
      times[i] = times[i] + offset;
      console.log(`rw ${times[i]}`);
      console.log(times);
      audio.currentTime = times[i];
    });

    let loop_btn = document.getElementById(`loop${i}`);

    loop_btn.addEventListener("click", () => {
      if (startLoop == times[i]) {
        console.log("stop loop");
        startLoop = -1;
        endLoop = -1;
      } else {
        console.log("start loop");
        startLoop = times[i];
        endLoop = times[i + 1] ? times[i + 1] : audio.duration;
        console.log(`startloop = ${startLoop}`);
        console.log(`endloop = ${endLoop}`);
      }
    });
  }
}
