const modal = document.getElementById("myModal");
const btn = document.getElementById("open_form");
const span = document.getElementsByClassName("close")[0];
const overlay = document.querySelector(".overlay");

btn.onclick = function() {
    modal.classList.toggle('modal_open');
    overlay.classList.toggle('overlay_active');
}

span.onclick = function() {
    modal.classList.remove('modal_open');
    overlay.classList.remove('overlay_active');
}



document.getElementById('contact_form').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name === ''){
        nameError.textContent = 'Fill your name!'
        nameError.classList.remove('hidden');
        isValid = false;
    }

    const message = document.getElementById('message').value;
    const messageError = document.getElementById('messageError');
    if (message.length <5){
        messageError.textContent = 'The message must be at least 5 characters long!'
        nameError.classList.remove('hidden');
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+380\d{9}$/;
    const phoneError = document.getElementById('phoneError');
    if(!phonePattern.test(phone)){
phoneError.textContent = 'Phone number must start with +380 and contain 12 digits!'
    phoneError.classList.remove('hidden');
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const emailError = document.getElementById('emailError');
    if(!emailPattern.test(email)){
        emailError.textContent = 'Email must contain "@" and "."!'
        emailError.classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        console.log({
            name: name,
            message: message,
            phone: phone,
            email: email
        });
    }
});

function change (id, idError, condition){
    document.getElementById('id').addEventListener('change', function () {
        const idError = document.getElementById('idError');
        if (condition) {
            idError.classList.add('hidden');
        }
    });
}

change(name, nameError, this.value !== '')