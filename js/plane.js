

function swapLocations() {
  var fromInput = document.getElementById('from');
  var toInput = document.getElementById('to');
  var tempLocation = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = tempLocation;
}

document.getElementById('bookingForm').addEventListener('submit', function (event) {
  // Impedisce il comportamento predefinito del modulo
  event.preventDefault();

  // Ottieni la data attuale
  var currentDate = new Date();
  
  // Ottieni le date di partenza e ritorno dal DOM
  var departureDate = new Date(document.getElementById('departureDate').value);
  var returnDate = new Date(document.getElementById('returnDate').value);

  // Confronta la data di partenza con la data attuale
  if (departureDate < currentDate) {
      // Mostra un messaggio di errore
      alert("La data di partenza non può essere precedente a quella odierna.");
      return; // Interrompe l'esecuzione della funzione
  }

  if (returnDate < currentDate) {
    // Mostra un messaggio di errore
    alert("La data di ritorno non può essere precedente a quella odierna.");
    return; // Interrompe l'esecuzione della funzione
}

if (returnDate < departureDate) {
  // Mostra un messaggio di errore
  alert("La data di ritorno non può essere precedente a quella di partenza.");
  return; // Interrompe l'esecuzione della funzione
}


  // Puoi aggiungere ulteriori controlli qui, ad esempio per la data di ritorno

  // Se tutti i controlli passano, esegui il codice successivo
  if (this.checkValidity()) {
      var ticketList = document.getElementById("resultSearch");
      ticketList.classList.toggle("hidden");
  }
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
  setTimeout(() => {
      document.getElementById('confirmActionButton').focus();
  }, 100);
}

function closePopup() {
  document.getElementById('confirmationPopup').classList.add('hidden');
}

document.getElementById('departureOnlyFlights').addEventListener('change', function () {
  var returnDateInput = document.getElementById('returnDate');
  if (this.checked) {
      returnDateInput.disabled = true;
      returnDateInput.value = '';
  } else {
      returnDateInput.disabled = false;
  }
});
