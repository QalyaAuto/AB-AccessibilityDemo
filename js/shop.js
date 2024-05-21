// Funzione per aggiungere un prodotto al carrello
function aggiungiProdotto(nome, prezzo) {
  var elencoProdotti = document.getElementById("products-list");
  var nuovoProdotto = document.createElement("li");
  var buttonr = document.createElement("button");
  nuovoProdotto.textContent = nome + " - " + prezzo + "€ ";
  buttonr.textContent = "rimuovi";

  elencoProdotti.appendChild(nuovoProdotto);
  nuovoProdotto.appendChild(buttonr);
  buttonr.addEventListener('click', rimuoviElementoPadre);

  function rimuoviElementoPadre(event) {
    event.target.parentNode.remove();
    var totaleElemento = document.getElementById("total");
    var totaleAttuale = parseFloat(totaleElemento.textContent);
    totaleElemento.textContent = (totaleAttuale - prezzo).toFixed(2);
  }

  //Aggiorna il totale
  var totaleElemento = document.getElementById("total");
  var totaleAttuale = parseFloat(totaleElemento.textContent);
  totaleElemento.textContent = (totaleAttuale + prezzo).toFixed(2);
}

// Event Listener Acquista
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#acquista').addEventListener('click', function () {
    showPopup("ACQUISTO ANDATO A BUON FINE!");
  });
});

function showPopup(msg) {
  document.getElementById('confirmationPopup').classList.remove('hidden');
  document.getElementById('purchaseMessage').innerHTML = "" + msg;

  // Disabilita tab per tutti gli elementi tranne il bottone di conferma
  disableTabForAllExcept(document.getElementById('confirmActionButton'));

  setTimeout(() => {
    document.getElementById('confirmActionButton').focus();
  }, 100);
}

function confirmAction() {
  document.getElementById('confirmationPopup').classList.add('hidden');
  enableTabForAll();

  // Altre azioni da eseguire dopo la conferma
}

function disableTabForAllExcept(element) {
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
  focusableElements.forEach(el => {
    if (el !== element) {
      el.setAttribute('tabindex', '-1');
    }
  });
}

function enableTabForAll() {
  const focusableElements = document.querySelectorAll('[tabindex="-1"]');
  focusableElements.forEach(el => {
    el.removeAttribute('tabindex');
  });
}

// Function to close the modal
function hideModal() {
  var modal = document.getElementById("confirmationPopup");
  modal.classList.add("hidden");
  enableTabForAll();
}

// When the user presses the ESC key, close the modal
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});

// Event Listener Acquista
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#acquista').addEventListener('click', function () {
      showPurchasingPopup("Sei sicuro di voler procedere all'acquisto?");
  });
});

// Show purchasing confirmation popup
function showPurchasingPopup(msg) {
  var modal = document.getElementById('PurchasingConfirmationPopup');
  document.getElementById('PurchasingConfirmationMessage').innerHTML = msg;
  modal.classList.remove('hidden');
  setTimeout(() => {
      document.getElementById('PurchasingButton').focus();
  }, 100);
  trapFocus(modal); // Trap focus inside the modal
}

// Final purchasing confirmation
function confirmPurchasing() {
  var modal = document.getElementById('confirmationPopup');
  document.getElementById('purchaseMessage').innerHTML = "ACQUISTO ANDATO A BUON FINE!";
  modal.classList.remove('hidden');
  closeBookingPopup();
  setTimeout(() => {
      document.getElementById('confirmActionButton').focus();
  }, 100);
}

// Close the purchasing confirmation popup
function closeBookingPopup() {
  var modal = document.getElementById('PurchasingConfirmationPopup');
  modal.classList.add('hidden');
}