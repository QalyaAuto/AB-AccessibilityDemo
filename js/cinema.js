document.getElementById('submit').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && !checkbox.disabled) {
            checkbox.disabled = true; // Disable the checkbox
            checkbox.parentElement.classList.add('selected'); // Add 'selected' for green color
            checkbox.parentElement.classList.add('not_available'); // Add 'not_available' to prevent further selection
        }
    });
    alert("I posti scelti sono stati prenotati");
});

document.getElementById('cancel').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false; // Deselect all checkboxes
        checkbox.parentElement.classList.remove('selected', 'not_available'); // Remove 'selected' and 'not_available' classes
        checkbox.disabled = false; // Re-enable the checkbox for future selection
    });
});
