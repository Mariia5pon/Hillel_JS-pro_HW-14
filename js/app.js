const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function changeSlider() {
    slides.forEach((slide,index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    if (currentIndex ===0) {
        prevBtn.classList.add('hidden');
    }else{
        prevBtn.classList.remove('hidden');
    }

    if (currentIndex ===slides.length -1) {
        nextBtn.classList.add('hidden');
    }else{
        nextBtn.classList.remove('hidden');
    }
}

prevBtn.addEventListener('click', () => {
    if(currentIndex >0 ) {
        currentIndex--;
        changeSlider();
    }
})

nextBtn.addEventListener('click',()=>{
    if (currentIndex<slides.length-1){
        currentIndex++;
        changeSlider();
    }
});

dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        currentIndex = index;
        changeSlider();
    });
});

changeSlider();

