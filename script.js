


var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
         sidebar.classList.toggle("small-sidbar");
    container.classList.toggle("large_container");
}



document.querySelector('.show-comments-btn').addEventListener('click', function() {
    document.querySelector('.comments-section').classList.toggle('show-comments');
    this.textContent = (this.textContent === 'Show Comments') ? 'Hide Comments' : 'Show Comments';
});
