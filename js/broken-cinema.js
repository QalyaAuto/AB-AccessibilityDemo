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

    if (checkedSeats.length > 0) {
        let msg = 'I posti ' + checkedSeats.join(', ') + ' sono stati prenotati';
        reservedSeats.innerHTML = "Avete prenotato i posti " + checkedSeats.join(', ');
        reservedSeats.style.display = "block";
        showPopup(msg);
    }
});

function showPopup(msg) {
    document.getElementById('confirmationPopup').classList.remove('hidden');
    document.getElementById('reservedSeatsMessage').innerHTML = "" + msg;

    // Disabilita tab per tutti gli elementi tranne il bottone di conferma
    disableTabForAllExcept(document.getElementById('confirmActionButton'));

    setTimeout(() => {
        document.getElementById('confirmActionButton').focus();
    }, 100);
}

function closePopup() {
    document.getElementById('confirmationPopup').classList.add('hidden');
    enableTabForAll();
}

function confirmAction() {
    closePopup();
}

// Function to disable tab navigation for all elements except the specified one
function disableTabForAllExcept(element) {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach(el => {
        if (el !== element) {
            el.setAttribute('tabindex', '-1');
        }
    });
}

// Function to enable tab navigation for all elements
function enableTabForAll() {
    const focusableElements = document.querySelectorAll('[tabindex="-1"]');
    focusableElements.forEach(el => {
        el.removeAttribute('tabindex');
    });
}

