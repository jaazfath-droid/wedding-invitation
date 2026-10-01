ddocument.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicToggle");
  let isPlaying = false;

  musicBtn.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      musicBtn.textContent = "🔇";
      isPlaying = false;
    } else {
      // Force play and handle browser restrictions
      audio.play().then(() => {
        musicBtn.textContent = "🎵";
        isPlaying = true;
      }).catch((error) => {
        console.log("Playback failed:", error);
        alert("Audio playback failed. Please check if your device is on Silent/Mute mode or verify the music.mp3 file exists.");
      });
    }
  });
});
