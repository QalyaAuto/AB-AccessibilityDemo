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

//Event Listener Acquista
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#acquista').addEventListener('click', function () {
    showPopup("ACQUISTO ANDATO A BUON FINE!");
  });
});

function showPopup(msg) {
  document.getElementById('confirmationPopup').classList.remove('hidden');
  document.getElementById('purchaseMessage').innerHTML = "" + msg
  setTimeout(() => {
    document.getElementById('confirmActionButton').focus();
  }, 100);
}

function confirmAction() {
  document.getElementById('confirmationPopup').classList.add('hidden');
}
