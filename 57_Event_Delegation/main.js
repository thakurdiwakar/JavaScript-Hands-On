// Attach a single event listener to the parent element (ul)
document.getElementById("myList").addEventListener("click", function (event) {
  // Check if the clicked element is an li element
  if (event.target.tagName === "LI") {
    // Perform the desired action
    console.log("You clicked on: " + event.target.textContent);
  }
});
