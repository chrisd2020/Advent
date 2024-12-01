const doors = document.querySelectorAll('.door');
const modal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const closeButton = document.querySelector('.close-button');

// Hardcode date to 10th November
let date = new Date;

// For testing before December (+1 because Month is 0 indexed)
if (date.getMonth() +1 !== 12) {
  date = new Date('2024-11-10');
}

doors.forEach(door => {
  // Disable future doors
  if (date.getMonth() + 1 === 12) {
    if (date.getDate() >= Number(door.textContent)) {
      door.classList.remove('disabled');
    }
  }
  door.addEventListener('click', () => {
    if (!door.classList.contains('disabled')) {
      const videoUrl = door.dataset.video;
      videoIframe.src = videoUrl;
      modal.style.display = 'block';
    }
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