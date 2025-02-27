function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color; // Change to the selected color
}

function changeFontSize(size) {
    document.body.style.fontSize = size; // Change to the selected font size
}

function changeFont(font) {
    document.body.style.fontFamily = font; // Change to the selected font
}

// Ensure the customization menu is not affected
const customizationMenu = document.getElementById('customizationMenu');
customizationMenu.style.backgroundColor = 'white'; // Set a default background for the menu


// Event listeners for buttons
document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', () => changeBackgroundColor(button.dataset.color));
});

document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', () => changeFontSize(button.dataset.size));
});

document.querySelectorAll('.font-button').forEach(button => {
    button.addEventListener('click', () => changeFont(button.dataset.font));
});
