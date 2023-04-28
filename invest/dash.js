const navBar2 = document.querySelector('.navBar-Dash');
const nav2 = document.querySelector(".nav-dashboard");



navBar2.addEventListener('click', () => {
    nav2.classList.toggle('active');
  })

  window.addEventListener('click', (e) => {
    if(e.target != nav2 && e.target != navBar2) {
        nav2.classList.remove('active');
    }
  })