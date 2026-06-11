const music = document.getElementById("music");
const playPauseBtn = document.getElementById("playPauseBtn");
const progress = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("currentTime");
const totalDurationDisplay = document.getElementById("totalDuration");
const songName = document.getElementById("songName");
const cover = document.getElementById("cover");
const volume = document.getElementById("volume");
const modeBtn = document.getElementById("modeBtn");
const searchBox = document.getElementById("searchBox");
const favBtn = document.getElementById("favBtn");
const favoritesList = document.getElementById("favoritesList");
let playMode = "sequence";

const songs = [
    {
        name: "Mask Off",
        file: "SONGS/mask off.mp3",
        cover: "SONGS/mask off cover.jpg"
    },
    {
        name: "Starboy",
        file: "SONGS/starboy.mp3",
        cover: "SONGS/starboy cover.jpg"
    },
    {
        name: "Industry Baby",
        file: "SONGS/Industry Baby.mp3",
        cover: "SONGS/Industry Baby.jpg"
    }
];

let currentSong = 0;
let favorites =
    JSON.parse(localStorage.getItem("favorites"))
    || [];
function updateActiveSong() {
    const items = document.querySelectorAll(".song-item");

    items.forEach(item => {
        item.classList.remove("active");
    });

    items[currentSong].classList.add("active");
}
function updateHeart() {

    const song = songs[currentSong];

    const exists = favorites.find(
        fav => fav.name === song.name
    );

    if (exists) {
        favBtn.textContent = "❤️";
    } else {
        favBtn.textContent = "🤍";
    }

}
function loadSong(index) {
    currentSong = index;
    music.src = songs[index].file;
    songName.textContent = songs[index].name;
    cover.src = songs[index].cover;

    updateActiveSong();
    updateHeart();
}
function updateFavorites() {

    if (favorites.length === 0) {
        favoritesList.innerHTML = "No favorite songs yet";
        return;
    }

    favoritesList.innerHTML = "";

    favorites.forEach(song => {

        const div = document.createElement("div");

        div.textContent = "🎵 " + song.name;
        div.onclick = () => {

    const index = songs.findIndex(
        s => s.name === song.name
    );

    loadSong(index);
    playSong();

};

        favoritesList.appendChild(div);

    });

}

function playSong() {
    music.play();
    playPauseBtn.textContent = "⏸";
    cover.style.animationPlayState = "running";
}
function togglePlay(){ 
    if (music.paused) {
        music.play();
        playPauseBtn.textContent = "⏸";
        cover.style.animationPlayState = "running";
    } else {
        music.pause();
        playPauseBtn.textContent = "▶";
        cover.style.animationPlayState = "paused";
    }
}
function changeMode() {

    if (playMode === "sequence") {
        playMode = "shuffle";
        modeBtn.textContent = "🔀";
    }

    else if (playMode === "shuffle") {
        playMode = "repeat";
        modeBtn.textContent = "🔂";
    }

    else {
        playMode = "sequence";
        modeBtn.textContent = "🔁";
    }

}

function nextSong() {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    playSong();
}

function previousSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    playSong();
}

music.addEventListener("timeupdate", () => {
    progress.value = (music.currentTime / music.duration) * 100;

    currentTimeDisplay.textContent = formatTime(music.currentTime);
    totalDurationDisplay.textContent = formatTime(music.duration);
});

progress.addEventListener("input", () => {
    music.currentTime = (progress.value / 100) * music.duration;
});

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    if (secs < 10) {
        secs = "0" + secs;
    }

    return mins + ":" + secs;
}

loadSong(currentSong);
music.addEventListener("ended", () => {

    cover.style.animationPlayState = "paused";

    if (playMode === "repeat") {
        music.currentTime = 0;
        playSong();
    }

    else if (playMode === "shuffle") {

        currentSong = Math.floor(
            Math.random() * songs.length
        );

        loadSong(currentSong);
        playSong();
    }

    else {
        nextSong();
    }

});
volume.addEventListener("input", () => {
    music.volume = volume.value / 100;
});
updateActiveSong();
updateFavorites();
updateHeart();
searchBox.addEventListener("keyup", () => {

    const searchText = searchBox.value.toLowerCase();

    const songsList = document.querySelectorAll(".song-item");

    songsList.forEach(song => {

        if (song.textContent.toLowerCase().includes(searchText)) {
            song.style.display = "block";
        } else {
            song.style.display = "none";
        }

    });

});
document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {
        event.preventDefault();
        togglePlay();
    }

    if (event.code === "ArrowRight") {
        nextSong();
    }

    if (event.code === "ArrowLeft") {
        previousSong();
    }

});
favBtn.addEventListener("click", () => {

    const song = songs[currentSong];

    const exists = favorites.find(
        fav => fav.name === song.name
    );

    if (exists) {

        favorites = favorites.filter(
            fav => fav.name !== song.name
        );

        favBtn.textContent = "🤍";
    }

    else {

        favorites.push(song);

        favBtn.textContent = "❤️";
    }

    updateFavorites();
    localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
);

});
