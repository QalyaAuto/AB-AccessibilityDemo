document.getElementById('draggable').addEventListener('keydown', function(event) {
    var left = parseInt(window.getComputedStyle(this).left, 10);
    var top = parseInt(window.getComputedStyle(this).top, 10);

    switch(event.key) {
        case 'ArrowRight':
            this.style.left = (isNaN(left) ? 0 : left) + 10 + 'px';
            break;
        case 'ArrowLeft':
            this.style.left = (isNaN(left) ? 0 : left) - 10 + 'px';
            break;
        case 'ArrowUp':
            this.style.top = (isNaN(top) ? 0 : top) - 10 + 'px';
            break;
        case 'ArrowDown':
            this.style.top = (isNaN(top) ? 0 : top) + 10 + 'px';
            break;
    }
});
