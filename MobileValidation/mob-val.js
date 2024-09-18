const phoneForm = document.getElementById('phoneForm')
const submitBox = document.querySelector('.submited-box')
let userMobile = ''
phoneForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^(0)([0-9]){10}$/;
    let msgSpan = document.querySelector('.msg')

    if (!phonePattern.test(phoneInput.value)) {
        submitBox.style.display = 'block'
        submitBox.style.backgroundColor = '#c13232'
        msgSpan.textContent = 'شماره وارد شده اشتباه است!'
    } else {
        userMobile = '0098' + phoneInput.value.slice(1)
        submitBox.style.display = 'block'
        submitBox.style.backgroundColor = '#019137'
        msgSpan.textContent = ''
        msgSpan.innerHTML = `شما با شماره موبایل ${userMobile} ثبت نام می شوید.`
    }
});