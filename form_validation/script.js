const errorMesgTelephone = document.getElementById('telephone_error');
const telephone = document.getElementById('telephone');
const telephoneInput = telephone.value;

const submitButton = document.getElementById('submit_button');

submitButton.addEventListener('click',validNumber)


function validNumber(){
    if(NaN(telephoneInput)){
        errorMesgTelephone.innerHTML = `A valid telephone number(11 digits and 333-333-3334)`;
    }
    else{
        errorMesgTelephone.innerText = " "
    }
}