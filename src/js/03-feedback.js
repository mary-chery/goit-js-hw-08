import throttle from 'lodash.throttle';

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

const savedValues = localStorage.getItem(STORAGE_KEY);
const savedDataObject = JSON.parse(savedValues);


const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messEl = document.querySelector('textarea');

populateText()

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateText() {
    if (savedValues) {
        emailEl.value = savedDataObject.email || '';
        messEl.value = savedDataObject.message || '';
    }
}