const inputs = document.querySelectorAll('.inp');
let warn = document.querySelector('.error');
const form = document.querySelector('.frm');
const btn = document.querySelector('.btn');
const check = document.querySelector('#check');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        let inV = input.value;
        if(input.value == '' || !check.checked) {
            warn.textContent = `Please Fill All Fields`;     
        }
        else {
            form.submit();
        }
        setTimeout(function() { warn.textContent = ''}, 2000);   

 
    })
    

})