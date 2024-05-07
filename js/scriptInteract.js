/**
 * Script for Modal Object
 */
document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('myModal').ariaHidden = false;
});
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('myModal').ariaHidden = true;
});