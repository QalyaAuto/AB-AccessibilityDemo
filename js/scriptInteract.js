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

/**
 * Script for draggable element
 */
document.addEventListener('DOMContentLoaded', function() {
    const draggable = document.getElementById('draggable');
    let isDragging = false;
    let dragOffsetX, dragOffsetY;

    draggable.addEventListener('keydown', function(event) {
        var left = parseInt(this.style.left || 0);
        var top = parseInt(this.style.top || 0);

        switch (event.key) {
            case 'ArrowRight':
                this.style.left = (left + 10) + 'px';
                break;
            case 'ArrowLeft':
                this.style.left = (left - 10) + 'px';
                break;
            case 'ArrowUp':
                this.style.top = (top - 10) + 'px';
                break;
            case 'ArrowDown':
                this.style.top = (top + 10) + 'px';
                break;
        }
    });

    draggable.addEventListener('mousedown', function(event) {
        isDragging = true;
        dragOffsetX = event.clientX - this.getBoundingClientRect().left;
        dragOffsetY = event.clientY - this.getBoundingClientRect().top;
        this.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            draggable.style.left = (event.clientX - dragOffsetX) + 'px';
            draggable.style.top = (event.clientY - dragOffsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function(event) {
        if (isDragging) {
            draggable.style.cursor = 'grab';
            isDragging = false;
        }
    });
});
