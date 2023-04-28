function animationScroll(index) {
    windowHeight = window.innerHeight / 1.3;
    const scale = document.querySelectorAll('.scale');
    const animHor = document.querySelectorAll('.anim-hor');
    const animVar = document.querySelectorAll('.anim-var');

    for (i = 0; i < scale.length; i++) {
        const scaleTop = scale[i].getBoundingClientRect().top;
        console.log(scaleTop)
        if (scaleTop < windowHeight) {
            scale[i].classList.add('scale-anim');
            scale[i].classList.add('anim-scroll')
        }
    }


    for (i = 0; i < animVar.length; i++) {
        const animVarTop = animVar[i].getBoundingClientRect().top;
        if (animVarTop < windowHeight) {
            animVar[i].classList.add('anim-scroll')
            animVar[i].classList.add('anim-var-trans')
        }
    }
    

    for (i = 0; i < animHor.length; i++) {
        const animHorTop = animHor[i].getBoundingClientRect().top;
        if (animHorTop < windowHeight) {
            animHor[i].classList.add('anim-scroll')
            animHor[i].classList.add('anim-hor-trans')
        }
    }
}

animationScroll();

window.onscroll = animationScroll;
window.onload = () =>{
    document.querySelector('.img-scale .img-side').classList.add('scale1')
}