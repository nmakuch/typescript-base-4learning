"use strict";
const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        console.log(`This is button-${i}`);
    });
}
