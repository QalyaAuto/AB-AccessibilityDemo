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