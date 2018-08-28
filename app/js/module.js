
//  ------------------------------  pagepiling

$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eightPage','ninthPage'],
        menu: '#myMenu'
    });
});

//  ------------------------------  modal


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
    autoplay: false

});
 
//  ------------------------------  form

var myForm = document.querySelector('.form');
var sendButton = document.querySelector('.button__send');

var modalFormText = document.querySelector('.modal__form__text');

myForm.addEventListener('submit', function(event){
    event.preventDefault();
    let target = event.target;
    var formData = new FormData();
    
    formData.append('name', target.elements.name.value);
    formData.append('phone', target.elements.telephone.value);
    formData.append('comment', target.elements.coment.value);
    formData.append('to', 'armani0322@gmail.com');

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(formData);

    xhr.addEventListener('load', function(){
        
        modalFormText.textContent = xhr.response.message;
        $('#formModal').arcticmodal();

    })
})

//  ------------------------------  reviews

var reviewsButtons = document.querySelectorAll('.button__reviews');
var reviewsTitle = document.querySelectorAll('.textblock__title');
var reviewsText = document.querySelectorAll('.textblock__text');

var modalTitle = document.querySelector('.modal__review__title');
var modalText = document.querySelector('.modal__review__text');


for(let i = 0; i < reviewsButtons.length; i++){

    let buttonCurrent = reviewsButtons[i];
    let titleCurrent = reviewsTitle[i];
    let textCurrent = reviewsText[i];

    buttonCurrent.addEventListener('click', function(event){
        event.preventDefault();

        modalTitle.textContent = titleCurrent.textContent;
        modalText.textContent = textCurrent.textContent;

        
        $('#revievModal').arcticmodal();

        
    })
}


//  ------------------------------  map

ymaps.ready(init);
      
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [59.93863, 30.31413],
                zoom: 12
            }); 
            
            var myPlacemark = new ymaps.Placemark([59.970531, 30.311384], {}, {
                iconLayout: 'default#image',
                iconImageHref: './img/map/map-marker.svg',
                iconImageSize: [30, 42]
            });
             
            myMap.geoObjects.add(myPlacemark);

            var myPlacemark2 = new ymaps.Placemark([59.948862, 30.382144], {}, {
                iconLayout: 'default#image',
                iconImageHref: './img/map/map-marker.svg',
                iconImageSize: [30, 42]
            });
             
            myMap.geoObjects.add(myPlacemark2);

            var myPlacemark3 = new ymaps.Placemark([59.905637, 30.312023], {}, {
                iconLayout: 'default#image',
                iconImageHref: './img/map/map-marker.svg',
                iconImageSize: [30, 42]
            });
             
            myMap.geoObjects.add(myPlacemark3);

            var myPlacemark4 = new ymaps.Placemark([59.912545, 30.493221], {}, {
                iconLayout: 'default#image',
                iconImageHref: './img/map/map-marker.svg',
                iconImageSize: [30, 42]
            });
             
            myMap.geoObjects.add(myPlacemark4);
        }
 
            


//  ------------------------------  video

    // Video
    var video = document.getElementById("video");
    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");
  
  // play/pause button
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      video.play();
    //   playButton.innerHTML = "Pause";
    } else {
      video.pause();
    //   playButton.innerHTML = "Play";
    }
  });

  //  mute button
muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      video.muted = true;
      muteButton.innerHTML = "Unmute";
    } else {
      video.muted = false;
      muteButton.innerHTML = "Mute";
    }
  });

  //seek bar
seekBar.addEventListener("change", function() {
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
  });
video.addEventListener("timeupdate", function() {
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
  });

  // Pause video

seekBar.addEventListener("mousedown", function() {
    video.pause();
  });
  
  // Play video
  seekBar.addEventListener("mouseup", function() {
    video.play();
  });

  // volume bar
volumeBar.addEventListener("change", function() {
    video.volume = volumeBar.value;
  });