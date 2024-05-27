


var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
         sidebar.classList.toggle("small-sidbar");
    container.classList.toggle("large_container");
}

let totalPoints = 0;


document.querySelectorAll('.video-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
              totalPoints += 5; // Increment totalPoints by 5 when a video thumbnail is clicked
        updatePointsDisplay(totalPoints); // Update points display
     window.open(link.href, '_blank'); // Open the video link in a new tab
    });
});

// Function to update points display
function updatePointsDisplay(points) {
    document.getElementById('totalPoints').textContent = points;
}

document.querySelector('.show-comments-btn').addEventListener('click', function() {
    document.querySelector('.comments-section').classList.toggle('show-comments');
    this.textContent = (this.textContent === 'Show Comments') ? 'Hide Comments' : 'Show Comments';
});
