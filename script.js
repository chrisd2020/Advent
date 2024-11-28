const doors = document.querySelectorAll('.door');
const modal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const closeButton = document.querySelector('.close-button');

doors.forEach(door => {
  door.addEventListener('click', () => {
    const videoUrl = door.dataset.video;
    videoIframe.src = videoUrl;
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  videoIframe.src = ''; // Stop video playback
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    videoIframe.src = ''; // Stop video playback
  }
}