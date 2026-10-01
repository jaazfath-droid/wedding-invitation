document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const coverPage = document.getElementById("coverPage");
  const mainContent = document.getElementById("mainContent");
  const audio = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicToggle");
  let isPlaying = false;

  // Handle Opening Invitation and Unlocking Audio
  openBtn.addEventListener("click", function () {
    // Reveal main invitation content
    mainContent.classList.remove("hidden");

    // Fade out cover page smoothly
    coverPage.style.opacity = "0";
    setTimeout(() => {
      coverPage.style.display = "none";
    }, 800);

    // Play music now that user has interacted with page
    audio.play().then(() => {
      isPlaying = true;
      musicBtn.textContent = "🎵";
    }).catch((error) => {
      console.log("Audio playback prevented:", error);
    });
  });

  // Manual Music Toggle Button
  musicBtn.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      musicBtn.textContent = "🔇";
      isPlaying = false;
    } else {
      audio.play().then(() => {
        musicBtn.textContent = "🎵";
        isPlaying = true;
      });
    }
  });
});
