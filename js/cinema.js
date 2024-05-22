// Event listener for the 'submit' button to reserve selected seats
document.getElementById('submit').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    const reservedSeats = document.querySelector('#reservedSeats');

    let checkedSeats = [];

    // Iterate through all checkboxes to find the selected ones
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && !checkbox.disabled) {
            checkedSeats.push(checkbox.id)
            checkbox.setAttribute('aria-disabled', 'true');
            checkbox.disabled = true; // Disable the checkbox
            checkbox.parentElement.classList.add('reserved'); // Add 'reserved' class to indicate reservation
        }
    });

    // If there are checked seats, show a confirmation message
    if (checkedSeats.length > 0) {
        let msg = 'I posti ' + checkedSeats.join(', ') + ' sono stati prenotati';
        reservedSeats.innerHTML = "Avete prenotato i posti " + checkedSeats.join(', ');
        reservedSeats.style.display = "block";
        showPopup(msg);
    }
});

// Event listener for the 'cancel' button to show a modal with the selected seats
document.getElementById('cancel').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    const cancelSeatsMessage = document.querySelector('#cancelMessage');

    let checkedSeats = Array.from(checkboxes)
                            .filter(checkbox => checkbox.checked && !checkbox.disabled)
                            .map(checkbox => checkbox.id);

    // If there are checked seats, show a cancellation confirmation message
    if (checkedSeats.length > 0) {
        let msg = 'I posti ' + checkedSeats.join(', ') + ' sono stati prenotati';
        cancelSeatsMessage.innerHTML = msg;
        showCancelPopup(msg);
    }
});

// Event listener for the 'cancelActionButton' to deselect all selected seats
document.getElementById('cancel').addEventListener('click', function(){
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && !checkbox.disabled) {
            checkbox.checked = false; // Deselect all checkboxes
        }
    });
    closeCancelPopup(); // Close the popup after cancel action
});

// Function to show the confirmation popup
function showPopup(msg) {
    const modal = document.getElementById('confirmationPopup');
    document.getElementById('reservedSeatsMessage').innerHTML = msg;
    modal.classList.remove('hidden');
    trapFocus(modal); // Trap focus inside the modal
}

// Function to show the cancel confirmation popup
function showCancelPopup(msg) {
    const modal = document.getElementById('cancelPopup');
    document.getElementById('cancelMessage').innerHTML = msg;
    modal.classList.remove('hidden');
    trapFocus(modal); // Trap focus inside the modal
}

// Function to close the confirmation popup
function closePopup() {
    const modal = document.getElementById('confirmationPopup');
    modal.classList.add('hidden');
}

// Function to close the cancel confirmation popup
function closeCancelPopup() {
    const modal = document.getElementById('cancelPopup');
    modal.classList.add('hidden');
}

// Function to confirm the action (currently just closes the popup)
function confirmAction() {
    closePopup();
}

// Function to trap focus inside a given modal
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
        closeCancelPopup();
    }
});
