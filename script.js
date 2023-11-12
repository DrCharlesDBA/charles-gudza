  // Get references to the link and the about-details div
  const aboutLink = document.getElementById("about-link");
  const aboutDetails = document.getElementById("about-details");

  // Add a click event listener to the "About" link
  aboutLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior (e.g., navigating to another page)
      
      if (aboutDetails.style.display === "none" || aboutDetails.style.display === "") {
          aboutDetails.style.display = "block"; // Show the "About" details
      } else {
          aboutDetails.style.display = "none"; // Hide the "About" details
      }
  });