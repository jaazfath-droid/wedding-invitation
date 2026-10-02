document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const coverPage = document.getElementById("coverPage");
  const mainContent = document.getElementById("mainContent");
  const audio = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");
  let isPlaying = false;

  // Set Wedding Date for Countdown
  const weddingDate = new Date("December 12, 2026 18:00:00").getTime();

  // Open Invitation Event
  openBtn.addEventListener("click", function () {
    mainContent.classList.remove("hidden");

    coverPage.style.opacity = "0";
    setTimeout(() => {
      coverPage.style.display = "none";
    }, 800);

    if (audio) {
      audio.play().then(() => {
        isPlaying = true;
        if (musicIcon) musicIcon.textContent = "🎵";
      }).catch((error) => {
        console.log("Autoplay restriction prevented audio: ", error);
      });
    }
  });

  // Music Toggle Control
  if (musicBtn && audio) {
    musicBtn.addEventListener("click", function () {
      if (isPlaying) {
        audio.pause();
        musicIcon.textContent = "🔇";
        isPlaying = false;
      } else {
        audio.play().then(() => {
          musicIcon.textContent = "🎵";
          isPlaying = true;
        });
      }
    });
  }

  // Countdown Timer Script
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "<h3>The Special Day Has Arrived!</h3>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
