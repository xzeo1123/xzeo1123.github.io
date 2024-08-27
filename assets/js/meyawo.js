// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$(document).ready(function(){
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const projectUrl = this.getAttribute('href');

            alert("Details Project page is working on so have a view at my github instead while we are working on!");

            window.open(projectUrl, '_blank');
        });
    });
});