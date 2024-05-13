function swapLocations() {
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var temp = from.value;
    from.value = to.value;
    to.value = temp;
}
