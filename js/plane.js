// Swap departure and arrival locations
function swapLocations() {
  var fromInput = document.getElementById('from');
  var toInput = document.getElementById('to');
  var tempLocation = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = tempLocation;
}

// Event listener for the booking form submission
document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var currentDate = new Date();
  var departureDate = new Date(document.getElementById('departureDate').value);
  var returnDate = new Date(document.getElementById('returnDate').value);

  // Date validation
  if (departureDate < currentDate) {
      alert("La data di partenza non può essere precedente a quella odierna.");
      return;
  }

  if (returnDate < currentDate) {
      alert("La data di ritorno non può essere precedente a quella odierna.");
      return;
  }

  if (returnDate < departureDate) {
      alert("La data di ritorno non può essere precedente a quella di partenza.");
      return;
  }

  if (this.checkValidity()) {
      var ticketList = document.getElementById("resultSearch");
      ticketList.classList.toggle("hidden");
  }
});

// Toggle ticket details
function toggleDetails(button) {
  var detailsSection = button.parentNode.nextElementSibling;
  detailsSection.classList.toggle('hidden');
}

// Show booking confirmation popup
function showBookingPopup(departure, arrival) {
  var modal = document.getElementById('bookingConfirmationPopup');
  document.getElementById('bookingConfirmationMessage').innerHTML = `Stai prenotando il volo ${departure} > ${arrival}`;
  modal.classList.remove('hidden');
  setTimeout(() => {
      document.getElementById('confirmBookingButton').focus();
  }, 100);
  trapFocus(modal); // Trap focus inside the modal
}


// Final booking confirmation
function confirmBooking(departure, arrival) {
  var modal = document.getElementById('confirmationPopup');
  document.getElementById('payButtonMessage').innerHTML = "Hai Prenotato il tuo biglietto aereo";
  modal.classList.remove('hidden');
  closeBookingPopup();
  setTimeout(() => {
      document.getElementById('confirmActionButton').focus();
  }, 100);
}


// Close the booking confirmation popup
function closeBookingPopup() {
  var modal = document.getElementById('bookingConfirmationPopup');
  modal.classList.add('hidden');
}

// Close the final confirmation popup
function closePopup() {
  var modal = document.getElementById('confirmationPopup');
  modal.classList.add('hidden');
}

// Trap focus inside the modal
function trapFocus(modal) {
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  document.addEventListener('keydown', function(e) {
      let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

      if (!isTabPressed) {
          return;
      }

      if (e.shiftKey) { // if shift key pressed for shift + tab combination
          if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
          }
      } else { // if tab key is pressed
          if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
          }
      }
  });

  firstFocusableElement.focus();
}

// Event listener to close the modal when the ESC key is pressed
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
      closePopup();
      closeBookingPopup();
  }
});
