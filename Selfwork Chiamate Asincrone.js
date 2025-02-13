let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNav = document.querySelector('#logoNav');
console.dir(logoNav);


window.addEventListener('scroll', ()=>{
    console.log(window.s);
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navbar.classList.remove('var(--pink)');
        navbar.classList.add('bg-primary-subtle');
        navbar.style.height='70px';
        links.forEach(  (link)=>{
            link.style.color = ('var(--pink)');
        });
        logoNav.src = 'http://127.0.0.1:5500/Media/logo--pink.png';
    } else{
        navbar.classList.remove('bg-primary-subtle');
        navbar.classList.add('var(--pink)');
        navbar.style.height='140px';
        links.forEach(  (link)=>{
            link.style.color = ('var(--neon-pink')
        });
        logoNav.src = 'http://127.0.0.1:5500/Media/logo--purple.png';
    }

});
