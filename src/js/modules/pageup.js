

const pageUp = () => {
    const chevron = document.body.querySelector('.pageup');
          

    window.addEventListener('scroll', (e) => {
       e.preventDefault();
       let scroll_position = window.scrollY;

       if (scroll_position > 1600) {
        chevron.style.display = "block";
        
       } else {
        chevron.style.display = "none";
       }

    });

    chevron.addEventListener('click', (e) => {
        e.preventDefault();
        


        document.body.scrollIntoView(
            {behavior: 'smooth'}
            
        )
    });
}

export default pageUp;