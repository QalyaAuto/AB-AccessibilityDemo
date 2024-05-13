function swapLocations() {
  // Swapping the locations
  var fromInput = document.getElementById('from');
  var toInput = document.getElementById('to');
  var tempLocation = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = tempLocation;
}
