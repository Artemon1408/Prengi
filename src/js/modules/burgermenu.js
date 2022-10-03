const burgerMenu = () => {
    const menu = document.body.querySelector('.promo__nav'),
          menuItem = document.body.querySelectorAll('.promo__nav-item'),
          hamburger = document.body.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__nav-active');
        if (hamburger.classList.contains('hamburger_active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__nav-active');
            if (menu.classList.contains('promo__nav-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        })
    })

     
}

export default burgerMenu;