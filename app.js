// Get the video element
const video = document.getElementById('customVideoPlayer');

// Add event listeners for gestures
video.addEventListener('dblclick', function(event) {
    const { clientX, clientY } = event;

    // Get the dimensions of the video player
    const { left, top, width, height } = video.getBoundingClientRect();

    // Calculate the position of the click relative to the video player
    const relativeX = clientX - left;
    const relativeY = clientY - top;

    // Calculate the center of the video player
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate the distance from the center to the click position
    const distanceX = relativeX - centerX;
    const distanceY = relativeY - centerY;

    // Determine the direction based on the distance from the center
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
        // Horizontal swipe
        if (distanceX > 0) {
            // Move 10 seconds forward
            video.currentTime += 10;
        } else {
            // Move 10 seconds backward
            video.currentTime -= 10;
        }
    } else {
        // Vertical swipe
        if (distanceY > 0) {
            // Show comments section
            document.querySelector('.comments-section').classList.add('show-comments');
        } else {
            // Pause video
            video.pause();
        }
    }
});

// Add event listener for single tap on top right corner
window.addEventListener('click', function(event) {
    const { clientX, clientY } = event;

    // Check if the click is in the top right corner
    if (clientX > window.innerWidth - 50 && clientY < 50) {
        // Show current location and temperature (popup message)
        // Replace this with your actual implementation
        alert('Current location: XYZ\nTemperature: 25°C');
    }
});

// Add event listener for holding the right side of the video
let speedInterval;
video.addEventListener('mousedown', function(event) {
    const { clientX } = event;

    // Check if the click is on the right side of the video
    if (clientX > video.getBoundingClientRect().left + video.offsetWidth / 2) {
        // Increase playback speed to 2X
        video.playbackRate = 2;
        // Start a timer to check for continuous holding
        speedInterval = setInterval(function() {
            video.playbackRate = 2;
        }, 100);
    }
});

// Add event listener for releasing the mouse button
video.addEventListener('mouseup', function() {
    // Clear the interval when the mouse button is released
    clearInterval(speedInterval);
    // Reset playback speed to normal
    video.playbackRate = 1;
});

// Add event listener for holding the left side of the video
video.addEventListener('contextmenu', function(event) {
    const { clientX } = event;

    // Check if the click is on the left side of the video
    if (clientX < video.getBoundingClientRect().left + video.offsetWidth / 2) {
        // Decrease playback speed to 0.5X
        video.playbackRate = 0.5;
        // Start a timer to check for continuous holding
        speedInterval = setInterval(function() {
            video.playbackRate = 0.5;
        }, 100);
    }
});

// Prevent context menu from appearing when holding the left side of the video
video.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
