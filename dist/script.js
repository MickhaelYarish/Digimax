//Carousel
var slideIndex = 1;
showSlides();
var interval = setInterval(showSlides,5000);

function currentSlide(n) {
  slideIndex = n;
  clearInterval(interval);
  showSlides();
}

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex < 1) {
    slideIndex = slides.length
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++;

}

//Navbar
var tglBtn = $('#toggle-button');
function toggleNavBar() {
  if ($('nav').hasClass("collapse-in")) {
    $('nav').addClass('collapse');
    $('nav').removeClass('collapse-in');
    tglBtn.css('transform', 'rotate(180deg)');
  } else {
    $('nav').addClass('collapse-in');
    $('nav').removeClass('collapse');
    tglBtn.css('transform', 'rotate(0deg)');
  }
}
tglBtn.on('click', toggleNavBar);

//Video player
$('#play-video').click(function() {
  if ($('.video').children(".video-content").get(0).paused) {
    $('.video').css('background', 'black');
    $('.video-content').css('display', 'block');
    $('.video').children(".video-content").get(0).play();
    $('.video').children(".playpause").fadeOut();
    $('#play-video').attr('src', 'images/pause.png');
  } else {
    $('.video').css('background-image', "url('images/video-cover.png')");
    $('.video').css('background-size', "cover");
    $('.video-content').css('display', 'none');
    $('#play-video').attr('src', 'images/play-icon.png');
    $('.video').children(".video-content").get(0).pause();
    $('.video').children(".playpause").fadeIn();
  }
});

//Form display
$('#close-form').on('click',function(){
        $('.form-container').addClass('hide-visibility');
          $('.form-container').removeClass('show-visibility');
})

$('#subscribe-btn').on('click',function(){
  $('.form-container').addClass('show-visibility');
    $('.form-container').removeClass('hide-visibility');
});
//Download
$(".download-button").click(function() {
    window.location = 'file.doc';
});
