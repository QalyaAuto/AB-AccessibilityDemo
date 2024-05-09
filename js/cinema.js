document.getElementById('submit').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    const reservedSeats = document.querySelector('#reservedSeats');

    let checkedSeats = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && !checkbox.disabled) {
            checkedSeats.push(checkbox.id)
            checkbox.disabled = true; // Disable the checkbox
            checkbox.parentElement.classList.add('reserved'); // Add 'not_available' to prevent further selection
        }
    });

    if(checkedSeats.length > 0 ){
        let msg = 'I posti '+checkedSeats.join(', ')+' sono stati prenotati'
        reservedSeats.innerHTML = "Avete prenotato i posti "+checkedSeats.join(', ')
        reservedSeats.style.display = "block"
        alert(msg);
    }
    
});

document.getElementById('cancel').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false; // Deselect all checkboxes
    });
});
