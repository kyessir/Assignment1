/* hamburger menu---------------------------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    
  // Get references to the hamburger icon and the navbar links container
  const navbarToggle = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar');

  // Add a click event listener to the hamburger icon
  hamburger.addEventListener('click', function () {
      // Toggle the 'active' class on the navbar links container
      navbar.classList.toggle('active');
  });
});

/*image slider---------------------------------------------------------------------------------------------------------------------*/
$(function () {
    // Text-slider

    // Handling click events for the right arrow in both text and image sliders
    $(".master-div .arrow-right").on("click", function () 
       {// Check if the selected element is the last child
        if ($(".thumbnails .selected").is(":last-child")) {
          $(".thumbnails .selected").hide();
          $(".thumbnails p").eq(0).fadeIn(10).addClass("selected").siblings().removeClass("selected");
        } else {
          $(".thumbnails .selected").hide();
          $(".thumbnails .selected").next().fadeIn(10).addClass("selected").siblings().removeClass("selected");
        }
      });
      
    // Handling click events for the left arrow in both text and image sliders
    $(".master-div .arrow-left").on("click", function () 
      {// Check if the selected element is the last child
        if ($(".thumbnails .selected").is(":first-child")) {
          $(".thumbnails .selected").hide();
          $(".thumbnails p:last").fadeIn(10).addClass("selected").siblings().removeClass("selected");
        } else {
          $(".thumbnails .selected").hide();
          $(".thumbnails .selected").prev().fadeIn(10).addClass("selected").siblings().removeClass("selected");
  
      }
    });
    // Image Slider
    
    // Handling click events for the right arrow in both text and image sliders
    $(".master-div .arrow-right").on("click", function () 
       {// Check if the selected element is the last child
        if ($(".thumbnails-img .selected-img").is(":last-child")) {
          $(".thumbnails-img .selected-img").hide();
          $(".thumbnails-img img").eq(0).fadeIn(10).addClass("selected-img").siblings().removeClass("selected-img");
        } else {
          $(".thumbnails-img .selected-img").hide();
          $(".thumbnails-img .selected-img").next().fadeIn(10).addClass("selected-img").siblings().removeClass("selected-img");
        }
      });
    
    // Handling click events for the left arrow in both text and image sliders
    $(".master-div .arrow-left").on("click", function () 
      {// Check if the selected element is the last child
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