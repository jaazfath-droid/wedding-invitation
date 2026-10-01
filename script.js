function openInvitation() {
  // 1. Hide the cover screen
  const cover = document.getElementById('cover');
  cover.classList.add('fade-out');

  // 2. Reveal the main scrolling content
  const mainContent = document.getElementById('main-content');
  mainContent.classList.remove('hidden');

  // 3. Play background song
  const music = document.getElementById('bg-music');
  if (music) {
    music.play().catch(err => console.log("Autoplay blocked by browser:", err));
  }
}

function toggleMusic() {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');

  if (music.paused) {
    music.play();
    btn.innerText = "🎵 Pause Song";
  } else {
    music.pause();
    btn.innerText = "🔇 Play Song";
  }
}
