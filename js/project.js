// john hipkons all chidren hospital form validation javascript

let form = document.querySelector("#formValidation") 

form.addEventListener('submit', function (e) { 

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let fullname = document.querySelector('#fullname').value;
    let address = document.querySelector('#address').value;
    let permanentaddress = document.querySelector('#paddress').value;
    let city = document.querySelector('#city').value;
    let inputzip = document.querySelector('#inputzip').value;

    let selectValues = document.querySelector('#inputState').value;
    let checkbox = document.querySelector('#checkbox');
    
    let isChecked = checkbox.checked 

    if (email === "" || password === "" || fullname === "" || address === "" ||
        permanentaddress === "" || city === "" || inputzip === "" || selectValues === "Choose" || !isChecked) { 
        alert('Please checked your are forgetting some fields');
    }

    else { 
      // after the submission of form is goto the index/home page
        location.replace('index.html') 
    }

})
// form validation javascript is end


// BEST OF LUCK