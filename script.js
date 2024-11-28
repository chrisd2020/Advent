const doors = document.querySelectorAll('.door');
const modal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const closeButton = document.querySelector('.close-button');
const date = new Date;

doors.forEach(door => {
  // Disable future doors
  if (date.getMonth() + 1 === 11) {
    if (date.getDate() + '' >= door.textContent) {
      door.classList.remove('disabled');
    }
  }
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