function openInvitation() {
  // Hide cover screen
  const cover = document.getElementById('cover');
  cover.classList.add('fade-out');

  // Reveal main scrolling content
  const mainContent = document.getElementById('main-content');
  mainContent.classList.remove('hidden');
}
