document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const coverPage = document.getElementById("coverPage");
  const mainContent = document.getElementById("mainContent");
  const audio = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicToggle");
  let isPlaying = false;

  openBtn.addEventListener("click", function () {
    // Reveal main page
    mainContent.classList.remove("hidden");

    // Fade out cover page smoothly
    coverPage.style.opacity = "0";
    setTimeout(() => {
      coverPage.style.display = "none";
    }, 800);

    // Play music now that user has interacted with the document
    if (audio) {
      audio.play().then(() => {
        isPlaying = true;
        if (musicBtn) musicBtn.textContent = "🎵";
      }).catch((error) => {
        console.log("Autoplay restriction prevented audio: ", error);
      });
    }
  });

  if (musicBtn && audio) {
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
  }
});
