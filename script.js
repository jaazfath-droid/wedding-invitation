document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicToggle");
  let isPlaying = false;

  musicBtn.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      musicBtn.textContent = "🔇";
    } else {
      audio.play();
      musicBtn.textContent = "🎵";
    }
    isPlaying = !isPlaying;
  });
});
