
const audio = document.querySelector(".audio");
const playBtn = document.querySelector(".play-btn");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let isPlay = false;

let playlist = [
	'./assets/songs/Unheilig_-_Schenk_mir_ein_Wunder.mp3',
	'./assets/songs/Unheilig_-_Das_meer.mp3',
	'./assets/songs/Unheilig_-_Echo.mp3',
];

let performers = [
	'Unheilig',
	'Unheilig',
	'Unheilig',
];

let names = [
	'Schenk mir ein Wunder',
	'Das meer',
	'Echo',
];

let covers = [
	'./assets/covers/wunder.png',
	'./assets/covers/das_meer.png',
	'./assets/covers/echo.png',
];

let song = playlist[0];
let performer = performers[0];
let songName = names[0];
let cover = covers[0];

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

	document.querySelector("body::before").style.backgroundImage = "url('" + covers[numSong] + "')";
	document.querySelector(".cover").src = covers[numSong];

	if (isPlay === false) {
		audio.src = playlist[numSong];
		audio.play();
		isPlay = true;
		playBtn.classList.add("pause");
	} else {
		audio.pause();
		audio.src = playlist[numSong];
		audio.currentTime = 0;
		audio.play();
	}
}

function prevSong() {

	if (numSong > 0) { numSong = numSong - 1;
	} else { numSong = playlist.length - 1; }

	document.querySelector("body::before").style.backgroundImage = "url('" + covers[numSong] + "')";
	document.querySelector(".cover").src = covers[numSong];

	if (isPlay === false) {
		audio.src = playlist[numSong];
		audio.play();
		isPlay = true;
		playBtn.classList.add("pause");
	} else {
		audio.pause();
		audio.src = playlist[numSong];
		audio.currentTime = 0;
		audio.play();
	}
}

/*

window.onload = function() {

	playBtn.addEventListener("click", playMusic);

	nextBtn.addEventListener("click", nextSong);
	prevBtn.addEventListener("click", prevSong);
}

*/
