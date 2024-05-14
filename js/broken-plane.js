function swapLocations() {
    var fromInput = document.getElementById('from');
    var toInput = document.getElementById('to');
    var tempLocation = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = tempLocation;
  }
  
  document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission regardless of validity
    var ticketList = document.getElementById("resultSearch");
    ticketList.classList.toggle("hidden");
  });
  
  document.querySelectorAll("#ticketList li").forEach(item => {
    item.addEventListener('click', function () {
      this.classList.toggle('expanded');
    });
  });
  
  function toggleDetails(button) {
    var detailsSection = button.parentNode.nextElementSibling;
    detailsSection.classList.toggle('hidden');
  }
  
  function showPopup() {
    document.getElementById('confirmationPopup').classList.remove('hidden');
  }
  
  function closePopup() {
    document.getElementById('confirmationPopup').classList.add('hidden');
  }
  