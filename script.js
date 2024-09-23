let isPlaying = false;
const audioElement = document.getElementById('birthdayMusic');
const giftButton = document.getElementById('giftButton');

// Function to toggle play/pause of the music
function toggleMusic() {
    if (isPlaying) {
        audioElement.pause();
        giftButton.src = 'kado.png'; // Set to gift image when paused
    } else {
        audioElement.play();
        giftButton.src = 'kado.png'; // Set to different image when playing
    }
    isPlaying = !isPlaying;
}
