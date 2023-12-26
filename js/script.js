// Function to change text content while scrolling
window.addEventListener('scroll', function() {
    var element = document.getElementById('scrolling-text');
    var position = window.scrollY;
  
    // Check if the user has scrolled to a certain point
    if (position > 100) { // Change 100 to your desired scroll position
      element.innerText = "AI BACKED POWERED EMOTIONAL WITH WELL-BEING";
    } else {
      element.innerText = "A COMMUNITY AI BACKED POWERED EMOTIONAL WITH";
    }
  });
  