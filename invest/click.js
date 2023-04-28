const choiceBox = document.querySelectorAll('.paymentChoice-card');
const click  = document.querySelectorAll('.options');
let index = 0;


click.forEach((clik, i) => {
    clik.addEventListener('click', () => {
        choiceBox.forEach(items  => items.classList.remove('active'));
        choiceBox[i].classList.add('active');
        // loops()
    })
})