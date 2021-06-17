const menuToggler = () => {
    const hamburger = document.querySelector('#hamburger-menu-icon');
    const navMenu = document.querySelector('.navbar__menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('navbar__menu--active');
    })
}

menuToggler();