let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNav = document.querySelector('#logoNav');
let logo2 = document.querySelector('#logo2')
let navbarCollapse = document.querySelector('.navbar-collapse');
let check = false;


window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;
    
    if(scrolled > 0){
        
        navbar.classList.remove('var(--pink)');
        navbar.classList.add('bg-primary-subtle');
        navbarCollapse.classList.remove('var(--pink)');
        navbarCollapse.classList.add('bg-primary-subtle');
        navbar.style.height='70px';
        links.forEach(  (link)=>{
            link.style.color = ('var(--pink)');
        });
        logoNav.src = 'http://127.0.0.1:5500/Media/logo--pink.png';
        logo2.src = 'http://127.0.0.1:5500/Media/logo2--pink.png';
        
    } else{
        
        navbar.classList.remove('bg-primary-subtle');
        navbar.classList.add('var(--pink)');
        navbarCollapse.classList.remove('bg-primary-subtle');
        navbarCollapse.classList.add('var(--pink)');
        navbar.style.height='140px';
        links.forEach(  (link)=>{
            link.style.color = ('var(--neon-pink')
        });
        logoNav.src = 'http://127.0.0.1:5500/Media/logo--purple.png';
        logo2.src = 'http://127.0.0.1:5500/Media/logo2--purple.png';
        
    }
    
});

logo2.addEventListener('click',() =>{
    if (check == false) {
        logo2.style.transform = `rotate(90deg)`
        check = true;
    }else{
        logo2.style.transform = `rotate(0deg)`
        check = false;
    }
})

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let confirm = true;

function createInterval(n, element, time) {
    let counter = 0;
    
    let interval = setInterval(()=>{
        if(counter < n){
            counter++
            element.innerHTML = counter;
        }else{
            console.log('stop');
            clearInterval(interval);
        }
    }, time);
    
    setTimeout(()=>{
        confirm = true;
    }, 5000);
}

let ovbserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        if(entry.isIntersecting && confirm){
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 1000);
            createInterval(999, thirdNumber, 50);
            confirm = false;
        }
    })
});

ovbserver.observe(firstNumber);
ovbserver.observe(secondNumber);
ovbserver.observe(thirdNumber);





// Swiper
let reviews = [
    {user: 'Martina B.', description: 'Ottimo mascara, appena ricomprato per la terza volta!', rank: 5},
    {user: 'Caterina L.', description: 'Mi trovo benissimo con il lip-gloss, lascia le labbra morbide anche dopo parecchie ore', rank: 4 },
    {user: 'Emma L.', description: 'Le palette sono tutte bellissime e hanno un altissima gamma di colori', rank: 5 },
    {user: 'Kevin D.', description: 'Il mascara rende le ciglia super voluminose! Unica pecca, dopo 5/6h si indurisce un pò troppo per come sono abituato', rank: 4},
];

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((review) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide'); 

    // Calcola quante stelle vuote aggiungere in base al punteggio
    let filledStars = '<i class="fa-solid fa-star"></i>'.repeat(review.rank);
    let emptyStars = '<i class="fa-regular fa-star"></i>'.repeat(5 - review.rank); 

    div.innerHTML = `
      <div class="card-review position-relative">
            <div class="d-flex justify-content-center py-5 star">
                ${filledStars}${emptyStars}
            </div>
            <p class="lead text-center text-light">${review.description}</p>
                <div class="position-absolute bottom-2 end-2">
                    <h4 class="lead text-danger-emphasis">${review.user}</h4>
                </div>
        </div>
    `;

    swiperWrapper.appendChild(div);
});


const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    speed: 1000
});