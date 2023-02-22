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
// formEl.addEventListener('input', onInput);

// function storageFormData(e) {
//     formData[e.target.name] = e.target.value.trim();
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

function onFormSubmit(event) {
    event.preventDefault();

    if (emailEl.value === "" || messEl.value === "") {
        alert(`Please fill in all the fields!`);
    } 

    const savedDatas = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedDatas);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};

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