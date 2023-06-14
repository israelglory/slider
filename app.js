// Get references to the testimonies and navigation buttons
const testimonies = document.querySelectorAll('.section article');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Function to show the current testimony
function showTestimony(index) {
  testimonies.forEach((testimony, i) => {
    testimony.style.transform = `translateX(${100 * (i - index)}%)`;
    testimony.style.opacity = i === index ? '1' : '0';
  });
}

// Function to slide to the previous testimony
function slidePrev() {
    if(currentIndex ===  0){
        currentIndex = testimonies.length - 1;
    }else{
        currentIndex--;
    }
  showTestimony(currentIndex);
}

// Function to slide to the next testimony
function slideNext() {
    if(currentIndex ===  testimonies.length - 1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
  
  showTestimony(currentIndex);
}

// button Click for previous and next buttons
prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

// Function to automatically slide testimonies every 4 seconds
function autoSlide() {
  slideNext();
}

// Start the auto-slide interval
setInterval(autoSlide, 7000);