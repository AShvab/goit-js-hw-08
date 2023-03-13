import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),   
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDataInput, 500));
populateFormData();


function onFormSubmit(evt) {
    evt.preventDefault();
    if (!formData.email || !formData.message){
       return alert('Всі поля мають бути заповнені!');
        
    } else {
        console.log(formData);
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData.email = '';
        formData.message = '';
    }
};

function onFormDataInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateFormData() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (savedMessage) {
        formData = savedMessage;
    
        for (const key in formData) {
            refs.form.elements[key].value = formData[key];
        }
    }
};