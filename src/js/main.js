import pageUp from './modules/pageup';
import burgerMenu from './modules/burgermenu';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    pageUp();
    burgerMenu();
    modal();
    forms();
    slider('.slider', '.prev', '.next');
    
});