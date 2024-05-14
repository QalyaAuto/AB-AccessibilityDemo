function swapLocations() {
  // Swapping the locations
  var fromInput = document.getElementById('from');
  var toInput = document.getElementById('to');
  var tempLocation = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = tempLocation;
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
  // Check if the form is valid
  if (this.checkValidity()) {
    event.preventDefault();  // Prevent the form from submitting if it is valid

    // Toggle the visibility of the ticket list
    var ticketList = document.getElementById("resultSearch");
    ticketList.classList.toggle("hidden");
  }
  // If the form is not valid, let the browser handle the validation and show standard error messages
});

document.querySelectorAll("#ticketList li").forEach(item => {
  item.addEventListener('click', function() {
      this.classList.toggle('expanded');
  });
});

function toggleDetails(button) {
  var detailsSection = button.parentNode.nextElementSibling;
  detailsSection.classList.toggle('hidden');
}
