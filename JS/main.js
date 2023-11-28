/* hamburger menu---------------------------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbar');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

/*image slider---------------------------------------------------------------------------------------------------------------------*/
$(function () {
    // Text-slider
    $(".master-div .arrow-right").on("click", function () 
       {
        if ($(".thumbnails .selected").is(":last-child")) {
          $(".thumbnails .selected").hide();
          $(".thumbnails p").eq(0).fadeIn(10).addClass("selected").siblings().removeClass("selected");
        } else {
          $(".thumbnails .selected").hide();
          $(".thumbnails .selected").next().fadeIn(10).addClass("selected").siblings().removeClass("selected");
        }
      });
  
    $(".master-div .arrow-left").on("click", function () 
      {
        if ($(".thumbnails .selected").is(":first-child")) {
          $(".thumbnails .selected").hide();
          $(".thumbnails p:last").fadeIn(10).addClass("selected").siblings().removeClass("selected");
        } else {
          $(".thumbnails .selected").hide();
          $(".thumbnails .selected").prev().fadeIn(10).addClass("selected").siblings().removeClass("selected");
  
      }
    });
    // Image Slider
      $(".master-div .arrow-right").on("click", function () 
       {
        if ($(".thumbnails-img .selected-img").is(":last-child")) {
          $(".thumbnails-img .selected-img").hide();
          $(".thumbnails-img img").eq(0).fadeIn(10).addClass("selected-img").siblings().removeClass("selected-img");
        } else {
          $(".thumbnails-img .selected-img").hide();
          $(".thumbnails-img .selected-img").next().fadeIn(10).addClass("selected-img").siblings().removeClass("selected-img");
        }
      });
  
    $(".master-div .arrow-left").on("click", function () 
      {
        if ($(".thumbnails-img .selected-img").is(":first-child")) {
           $(".thumbnails-img .selected-img").hide();
           $(".thumbnails-img img:last").fadeIn(10).addClass("selected-img").siblings().removeClass("selected-img");
        } else {
          $(".thumbnails-img .selected-img").hide();
          $(".thumbnails-img .selected-img").prev().fadeIn(10).addClass("selected-img").siblings().removeClass("selected-img");
        }
    });
});;
  
/*newsletter----------------------------------------------------------------------------------------------------*/
function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Display the thank you message
    document.getElementById('thank-you-message').style.display = 'block';

    // You may want to reset the form after submission
    document.getElementById('emailForm').reset();
}