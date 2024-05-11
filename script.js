document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var sticky = navbar ? navbar.offsetTop : 0; // Get the offset top of the navbar or default to 0 if navbar is not found

    window.onscroll = function() {
        // Add "sticky" to navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        if (navbar && window.scrollY >= sticky) {
            navbar.classList.add("sticky");
        } else if (navbar) {
            navbar.classList.remove("sticky");
        }
    };
});


