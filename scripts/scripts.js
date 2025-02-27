function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function changeFontSize(size) {
    document.body.style.fontSize = size;
}

function changeFont(font) {
    document.body.style.fontFamily = font;
}

document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', () => changeBackgroundColor(button.dataset.color));
});

document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', () => changeFontSize(button.dataset.size));
});

document.querySelectorAll('.font-button').forEach(button => {
    button.addEventListener('click', () => changeFont(button.dataset.font));
});
