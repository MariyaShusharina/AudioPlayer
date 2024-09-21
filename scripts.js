
const audio = document.querySelector("audio");
const playBtn = document.querySelector("play-btn");

const nextBtn = document.querySelector("next");
const prevBtn = document.querySelector("prev");

//let bgPic = document.body.style.src = "./assets/covers/cover_1.png";
//let cover = document.querySelector("cover");

let isPlay = false;

let playlist = [
	'Unheilig_-_Schenk_mir_ein_Wunder.mp3',
	'Unheilig_-_Das_meer.mp3',
	'Unheilig_-_Echo.mp3',
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

let song = playlist[0];
let performer = performers[0];
let songName = names[0];


function playMusic() {

	if (!isPlay) {
		audio.play();
		isPlay = true;
		playBtn.classList.add('pause');
	} else {
		audio.pause();
		isPlay = false;
		playBtn.classList.remove('pause');
	}
}

function nextSong() {

	document.querySelector("body::before").style.backgroundImage = "url('./assets/covers/cover_2.png')";
	document.querySelector("cover").src = "./assets/covers/cover_2.png";

	if (!isPlay) {
		//replace with next audio
		audio.play();
		isPlay = true;
		playBtn.classList.add('pause');
	} else {
		audio.pause();
		//replace with next audio
		audio.play();
	}
}

function prevSong() {}


playBtn.addEventListener('click', playMusic);

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
