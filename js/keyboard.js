document.addEventListener('DOMContentLoaded', function() {
    const resizable = document.querySelector('.resizable');
    let keysPressed = {};

    resizable.addEventListener('keydown', function(event) {
        keysPressed[event.key] = true;

        if (keysPressed['ArrowUp']) {
            resizable.style.height = (parseInt(resizable.style.height) - 10) + 'px';
        }
        if (keysPressed['ArrowDown']) {
            resizable.style.height = (parseInt(resizable.style.height) + 10) + 'px';
        }
        if (keysPressed['ArrowLeft']) {
            resizable.style.width = (parseInt(resizable.style.width) - 10) + 'px';
        }
        if (keysPressed['ArrowRight']) {
            resizable.style.width = (parseInt(resizable.style.width) + 10) + 'px';
        }
    });

    resizable.addEventListener('keyup', function(event) {
        delete keysPressed[event.key];
    });

    // Set initial focusable and tabindex if necessary
    resizable.setAttribute('tabindex', '0'); // Makes the div focusable
});

