
const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const perf = document.querySelector(".perf");
const songName = document.querySelector(".song-name");

const currTimeDiv = document.querySelector(".current-time");
const maxTimeDiv = document.querySelector(".max-time");
const progressBar = document.querySelector(".song-length");

const scroll = document.querySelector("html").scrollHeight;
// console.log(scroll);

function bgImageHeight() { document.querySelector(".bg-image").style.height = scroll + 'px'; }
bgImageHeight();

let songTime = Math.round(audio.currentTime);
let songMaxTime = Math.round(audio.duration);

let songTimeMinut = 0;
let songTimeSecond = 0;

let songMaxTimeMinut = 0;
let songMaxTimeSecond = 0;

progressBar.value = Math.round((songTime / songMaxTime) * 100);

function timeConverter() {

	songTimeMinut = Math.floor(songTime / 60);
	songTimeSecond = songTime % 60;
	if (songTimeSecond < 10) { songTimeSecond = '0' + `${songTimeSecond}`; }
}

function maxTimeConverter() {

	songMaxTimeMinut = Math.floor(songMaxTime / 60);
	songMaxTimeSecond = songMaxTime % 60;
	if (songMaxTimeSecond < 10) { songMaxTimeSecond = '0' + `${songMaxTimeSecond}`; }
}

// Initial text for time divs
currTimeDiv.textContent = songTimeMinut + ':' + songTimeSecond;
maxTimeDiv.textContent = songMaxTimeMinut + ':' + songMaxTimeSecond;

let isPlay = false;

let playlist = [
	'./assets/songs/Unheilig_-_Schenk_mir_ein_Wunder.mp3',
	'./assets/songs/Unheilig_-_Das_meer.mp3',
	'./assets/songs/Unheilig_-_Echo.mp3',
	'./assets/songs/dipus_-_Letter_to_Twilight_Sparkle.mp3',
];

let performers = [
	'Unheilig',
	'Unheilig',
	'Unheilig',
	'dipus',
];

let names = [
	'Schenk mir ein Wunder',
	'Das meer',
	'Echo',
	'Letter to Twilight Sparkle',
];

let covers = [
	'./assets/covers/wunder.png',
	'./assets/covers/das_meer.png',
	'./assets/covers/echo.png',
	'./assets/covers/letter.png',
];

let bgColors = [
	'#FFFFFF',
	'#000000',
	'#FFFFFF',
	'#000000',
];


let numSong = 0;


function playMusic() {

	if (isPlay === false) {
		audio.play();
		isPlay = true;
		playBtn.classList.add("pause");
	} else {
		audio.pause();
		isPlay = false;
		playBtn.classList.remove("pause");
	}
}

function nextSong() {

	if (numSong < (playlist.length - 1)) { numSong = numSong + 1;
	} else { numSong = 0; }

	document.querySelector(".bg-image").src = covers[numSong];
	document.querySelector(".cover").src = covers[numSong];

	document.querySelector("body").style.backgroundColor = bgColors[numSong];

	perf.textContent = performers[numSong];
	songName.textContent = names[numSong];

	progressBar.value = 0;

	if (isPlay === false) {
		audio.src = playlist[numSong];
		isPlay = true;
		playBtn.classList.add("pause");
		audio.currentTime = 0;
		audio.play();
	} else {
		audio.pause();
		audio.src = playlist[numSong];
		audio.currentTime = 0;
		audio.play();
	}

	songTime = Math.round(audio.currentTime);
	songMaxTime = Math.round(audio.duration);

	timeConverter();
	maxTimeConverter();

	currTimeDiv.textContent = songTimeMinut + ':' + songTimeSecond;
	maxTimeDiv.textContent = songMaxTimeMinut + ':' + songMaxTimeSecond;
}

function prevSong() {

	if (numSong > 0) { numSong = numSong - 1;
	} else { numSong = playlist.length - 1; }

	document.querySelector(".bg-image").src = covers[numSong];
	document.querySelector(".cover").src = covers[numSong];

	document.querySelector("body").style.backgroundColor = bgColors[numSong];

	perf.textContent = performers[numSong];
	songName.textContent = names[numSong];

	progressBar.value = 0;

	if (isPlay === false) {
		audio.src = playlist[numSong];
		isPlay = true;
		playBtn.classList.add("pause");
		audio.currentTime = 0;
		audio.play();
	} else {
		audio.pause();
		audio.src = playlist[numSong];
		audio.currentTime = 0;
		audio.play();
	}

	songTime = Math.round(audio.currentTime);
	songMaxTime = Math.round(audio.duration);

	timeConverter();
	maxTimeConverter();

	currTimeDiv.textContent = songTimeMinut + ':' + songTimeSecond;
	maxTimeDiv.textContent = songMaxTimeMinut + ':' + songMaxTimeSecond;
}

function songTimeChange(value) {

	songMaxTime = Math.round(audio.duration);

	audio.currentTime = Math.round((songMaxTime / 100) * value);

	songTime = audio.currentTime;

	timeConverter();

	currTimeDiv.textContent = songTimeMinut + ':' + songTimeSecond;
}

function timeUpdate() {

	songTime = Math.round(audio.currentTime);
	timeConverter();
	currTimeDiv.textContent = songTimeMinut + ':' + songTimeSecond;

	songMaxTime = Math.round(audio.duration);
	maxTimeConverter();
	maxTimeDiv.textContent = songMaxTimeMinut + ':' + songMaxTimeSecond;

	progressBar.value = Math.round((songTime / songMaxTime) * 100);
}


window.onload = function() {

	songMaxTime = Math.round(audio.duration);

	maxTimeConverter();

	maxTimeDiv.textContent = songMaxTimeMinut + ':' + songMaxTimeSecond;

	progressBar.value = Math.round((songTime / songMaxTime) * 100);
}


