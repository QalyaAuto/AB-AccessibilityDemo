document.getElementById('draggable').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        this.style.left = (this.offsetLeft + 10) + 'px';
    } else if (event.key === 'ArrowLeft') {
        this.style.left = (this.offsetLeft - 10) + 'px';
    } else if (event.key === 'ArrowUp') {
        this.style.top = (this.offsetTop - 10) + 'px';
    } else if (event.key === 'ArrowDown') {
        this.style.top = (this.offsetTop + 10) + 'px';
    }
});
