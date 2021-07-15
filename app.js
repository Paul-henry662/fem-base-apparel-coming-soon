/**
 * Frontend Mentor base apparel coming soon challenge -> app.js
 * Main script file.
 */

const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const errorIcon = document.querySelector(".main__form__error-icon");

errorIcon.addEventListener("animationend", ()=>{
    errorIcon.classList.remove("main__form__error-icon--animated");
})

function validateForm(){
    const form = document.querySelector(".main__form");
    const emailInput = document.querySelector(".main__form__input").value;

    if(emailRegex.test(emailInput)){
        return true;
    }
    else{
        form.classList.add("main__form--error");
        errorIcon.classList.add("main__form__error-icon--animated");
        return false;
    }
}