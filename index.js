const navbar = document.querySelector('.navbar ');

const toggle_btn = document.querySelector('.hamburg');

const ul = document.querySelector('.ul');

const header = document.querySelector('#header')


toggle_btn.addEventListener('click',function(){
    // navbar.classList.toggle('show_links')
    
    const navHeight = navbar.getBoundingClientRect().height;
    const linksHeight = ul.getBoundingClientRect().height;
    
    if(navHeight === 0){
        navbar.style.height=`${linksHeight}px`;
        navbar.style.transitionDuration = '1s';
    }else{
        navbar.style.height = 0;
    }
});
window.addEventListener('scroll',function(){
    const linksHeight = ul.getBoundingClientRect().height;
    
    const fixedBtn = document.querySelector('.fixed');
    const scrollHeight = window.pageYOffset;

    
    if(scrollHeight > linksHeight){
        header.classList.add('fixedNav')
    }else{
        header.classList.remove('fixedNav')
    }

    if(scrollHeight > 500){
        fixedBtn.classList.add('showBtn');
    }else{
        fixedBtn.classList.remove('showBtn')
    }
});
 
const scrollLinks = document.querySelectorAll('.scrollLinks');

scrollLinks.forEach(function(scrollLink){
    scrollLink.addEventListener('click',function(e){
        e.preventDefault();
        const linksHeight = document.querySelector('header').getBoundingClientRect().height;
        const links_height = ul.getBoundingClientRect().height;
        const fixedNav = document.querySelector('.fixedNav');
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - linksHeight;
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = navbar.classList.contains('fixedNav');
        if(linksHeight > 104){
            position=position+navHeight
        }
        window.scrollTo({
            left:0,
            top:position
        });
        navbar.style.height = 0;
        
    })
})