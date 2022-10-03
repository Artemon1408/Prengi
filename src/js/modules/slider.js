
const sliders = (slides, prev, next) => {
   let slideIndex = 1;
   
       
    const items = document.querySelectorAll(slides);

    

    
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
            
        }

        if (n < 1) {
            slideIndex = items.length;
            
        }

        items.forEach(item => {
            item.classList.add("animate__animated");
            item.style.display = "none";
            

            item.addEventListener('touchstart', handleTouchStart);
            item.addEventListener('touchmove', handleTouchMove);
        });

        items[slideIndex - 1].style.display = 'flex';
        
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    
    let firstPos = null;

    function handleTouchStart(e) {
        e.preventDefault();
        
        const firstTouch = e.touches[0];
        firstPos = firstTouch.clientX;
    }

    function handleTouchMove (e) {
        e.preventDefault();
        
        if (!firstPos) {
            return false;
        }

        let lastPos = e.touches[0].clientX;
        let xDiff = lastPos - firstPos;

        if (xDiff > 0) {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('animate__slideInRight');
            items[slideIndex - 1].classList.add('animate__slideInLeft');
            
        
            
                
            
            
        }

        if (xDiff < 0) {
            
            plusSlides(1);
            items[slideIndex - 1].classList.remove('animate__slideInLeft');
            items[slideIndex - 1].classList.add('animate__slideInRight');

            
                        
        }

        firstPos = null;

    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('animate__slideInRight');
            items[slideIndex - 1].classList.add('animate__slideInLeft');

            
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('animate__slideInLeft');
            items[slideIndex - 1].classList.add('animate__slideInRight');

            
        });

    } catch(e){}
}

export default sliders;