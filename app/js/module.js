
let burgerMenu = document.querySelector('.burger-menu');
let navModal = document.querySelector('.nav-modal');
let modalClose = document.querySelector('.nav-modal__close');
let modalItem = document.getElementsByClassName('nav-modal__item');

burgerMenu.addEventListener('click', function(){
    navModal.classList.add('nav-modal__active');
})

for(let i = 0; i < modalItem.length; i++){

    let modalItemCurent = modalItem[i];

    modalItemCurent.addEventListener('click', function(){
        navModal.classList.remove('nav-modal__active');

    })
}
modalClose.addEventListener('click', function(){
    navModal.classList.remove('nav-modal__active');
})

//  ------------------------------  slide__composition

const composition = document.getElementsByClassName('slide__composition');
const compMenu = document.getElementsByClassName('composotion__menu');

for(let i = 0; i<composition.length; i++){
    let compositionCurent = composition[i];
    let compMenuCurent = compMenu[i];

    compositionCurent.onmouseenter = function(){
        compMenuCurent.classList.add('composotion__menu__active');
    }
    compositionCurent.onmouseleave  = function(){
        compMenuCurent.classList.remove('composotion__menu__active');
    }
}



//  ------------------------------  team

const teamItem = document.getElementsByClassName('team__item');
const teamItemTitle = document.getElementsByClassName('team__item-title');

for(var i = 0; i < teamItemTitle.length; i++){

    let teamItemCurent = teamItem[i];
    
    teamItemTitle[i].addEventListener('click', function(){
        
        if(!(teamItemCurent.classList.contains('team__item__active'))){

            for(var j = 0; j < menuItem.length; j++){
                teamItem[j].classList.remove('team__item__active');
            }
            teamItemCurent.classList.add('team__item__active');

        }else{
            teamItemCurent.classList.remove('team__item__active');
        }
    })   
}


//  ------------------------------  menu


const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.getElementsByClassName('menu__link');
const menuText = document.getElementsByClassName('menu__item-text');
const menuItemClose = document.getElementsByClassName('menu__item__close');

function calculWidth(){
    let windowWidth = $(window).width();
    let links = $('.menu__link');
    let linkWidth = links.width();
    let totalWidth = windowWidth - linkWidth * links.length;

    return totalWidth > 550 ? 550 : totalWidth;
} 
for(var i = 0; i < menuLink.length; i++){

    let menuItemCurent = menuItem[i];
    let menuTextCurent = menuText[i];
    
    menuLink[i].addEventListener('click', function(){
        
        if(!(menuItemCurent.classList.contains('menu__item__active'))){

            for(var j = 0; j < menuItem.length; j++){
                menuItem[j].classList.remove('menu__item__active');
                menuText[j].style.width = 0 + 'px';
            }
            menuItemCurent.classList.add('menu__item__active');
            menuTextCurent.style.width = calculWidth() + 'px';

        }else{
            menuItemCurent.classList.remove('menu__item__active');
            menuTextCurent.style.width = 0 + 'px';
        }
    })   

    menuItemClose[i].addEventListener('click', function(){
        menuItemCurent.classList.remove('menu__item__active');
        menuTextCurent.style.width = 0 + 'px';
    })
}


//  ------------------------------  slider

$('.slider__items').slick({
    infinite: true,
    autoplay: false

});
 