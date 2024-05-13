document.getElementById('submit').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    const reservedSeats = document.querySelector('#reservedSeats');

    let checkedSeats = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && !checkbox.disabled) {
            checkedSeats.push(checkbox.id)
            checkbox.setAttribute('aria-disabled', 'true');
            checkbox.disabled = true; // Disable the checkbox
            checkbox.parentElement.classList.add('reserved'); // Add 'not_available' to prevent further selection
        }
    });

    if(checkedSeats.length > 0 ){
        let msg = 'I posti '+checkedSeats.join(', ')+' sono stati prenotati'
        reservedSeats.innerHTML = "Avete prenotato i posti "+checkedSeats.join(', ')
        reservedSeats.style.display = "block"
        showPopup(msg);
    }
    
});

document.getElementById('cancel').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false; // Deselect all checkboxes
    });
});

function showPopup(msg) {
    document.getElementById('confirmationPopup').classList.remove('hidden');
    document.getElementById('reservedSeatsMessage').innerHTML = ""+msg
    setTimeout(() => {
        document.getElementById('confirmActionButton').focus();
    }, 100);
}

function closePopup() {
    document.getElementById('confirmationPopup').classList.add('hidden');
}

function confirmAction() {
    closePopup();
}
// Function to show the modal
function showModal() {
    var modal = document.getElementById("confirmationPopup");
    modal.classList.remove("hidden");
  }
  
  // Function to close the modal
  function hideModal() {
    var modal = document.getElementById("confirmationPopup");
    modal.classList.add("hidden");
  }
  
  // Function to handle confirm action
  function confirmAction() {
    var modal = document.getElementById("confirmationPopup");
    // Your code to handle confirm action here
    hideModal();
  }
  
  // When the user presses the ESC key, close the modal
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hideModal();
    }
  });
  