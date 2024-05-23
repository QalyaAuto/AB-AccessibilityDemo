// Funzione per mostrare il popup di conferma prenotazione
document.getElementById('submit').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    let checkedSeats = Array.from(checkboxes)
                            .filter(checkbox => checkbox.checked && !checkbox.disabled)
                            .map(checkbox => checkbox.id);

    if (checkedSeats.length > 0) {
        let msg = "Vuoi prenotare i posti " + checkedSeats.join(', ') + "?";
        showPopup(msg, 'confirmationPopup');
    }
});

// Funzione per mostrare il popup di annullamento prenotazione
document.getElementById('cancel').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    let checkedSeats = Array.from(checkboxes)
                            .filter(checkbox => checkbox.checked && !checkbox.disabled)
                            .map(checkbox => checkbox.id);

    if (checkedSeats.length > 0) {
        let msg = "Vuoi annullare la prenotazione dei posti " + checkedSeats.join(', ') + "?";
        showPopup(msg, 'cancelPopup');
    }
});

// Funzione per mostrare il popup specifico
function showPopup(msg, popupId) {
    const modal = document.getElementById(popupId);
    document.getElementById(popupId === 'confirmationPopup' ? 'reservedSeatsMessage' : 'cancelMessage').innerHTML = msg;
    modal.classList.remove('hidden');
    trapFocus(modal); // Trap focus inside the modal
}

// Funzione per confermare la prenotazione
function confirmAction() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    let checkedSeats = Array.from(checkboxes)
                            .filter(checkbox => checkbox.checked && !checkbox.disabled)
                            .map(checkbox => checkbox.id);
    
    checkedSeats.forEach(function(seat) {
        const checkbox = document.getElementById(seat);
        checkbox.setAttribute('aria-disabled', 'true');
        checkbox.disabled = true;
        checkbox.parentElement.classList.add('reserved');
    });
    
    const modal = document.getElementById('confirmationPopup');
    modal.classList.add('hidden');
    
    const reservedSeats = document.getElementById('reservedSeats');
    reservedSeats.innerHTML = "Avete prenotato i posti " + checkedSeats.join(', ');
    reservedSeats.style.display = "block";
}

function confirmCancelAction() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && !checkbox.disabled) {
            checkbox.checked = false;
        }
    });

    const modal = document.getElementById('cancelPopup');
    modal.classList.add('hidden');
}

// Funzione per chiudere il popup di conferma prenotazione
function closePopup() {
    const modal = document.getElementById('confirmationPopup');
    modal.classList.add('hidden');
}

// Funzione per chiudere il popup di annullamento prenotazione
function closeCancelPopup() {
    const modal = document.getElementById('cancelPopup');
    modal.classList.add('hidden');
}

// Funzione per trap focus all'interno di un modal
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

// Evento per chiudere i popup quando si preme il tasto ESC
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePopup();
        closeCancelPopup();
    }
});
