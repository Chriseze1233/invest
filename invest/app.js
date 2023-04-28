// Variables Listing
const faqConts = document.querySelectorAll('.fawWrap');
const navBar = document.querySelector('.navBar');
const nav = document.querySelector('.nav');

// FAQ
faqConts.forEach((faqCont) => {
   let faqBtn = faqCont.querySelector('.questBtn');
   let faqContent = faqCont.querySelector('.ans');
   let faqCH = faqContent.getBoundingClientRect().height;
   const faqContented = faqCont.querySelector('.ans p').getBoundingClientRect().height;
   faqBtn.addEventListener('click', () => {
     faqCont.classList.toggle('active');
     if(faqCH == 0) {
      faqContent.style.height = `${faqContented}px`;
      faqCH = `${faqContented}px`;
     }
     else {
      faqContent.style.height = 0;
      faqCH = 0;
     }
   })
})
// Nav Bars
navBar.addEventListener('click', () => {
  nav.classList.toggle('active');
})
window.addEventListener('click', (e) => {
  if(e.target != navBar && e.target != nav) {
      nav.classList.remove('active');
  }
})
