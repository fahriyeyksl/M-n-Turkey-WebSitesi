window.onload = function() {
    var carousel = document.querySelector(".cexamControls");
    var progressBar = carousel.querySelector(".bar-blue");
     var width_ = 0;
     var interval = setInterval(function(){
        if(width_>=100){
            clearInterval(interval);
        }
        else{
            width_+=0.5;
            progressBar.style.width=width_ + "%";
        }
     },15)
    carousel.addEventListener("slide.bs.carousel", function(e) {
        progressBar.style.width = '0%'; // slayt değişimine başlamadan hemen önce genişliği sıfırla
    });

    carousel.addEventListener("slid.bs.carousel", function(e) { // slayt değişimi bittikten sonra widthi doldur
        var width = 0;
        var interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 0.5;
                progressBar.style.width = width + '%';
            }
        }, 15); // 20 ms bir %5 dolacak
    });
};
var carouseltext = document.querySelectorAll(".carousel-item-text");
document.addEventListener('DOMContentLoaded', function () {
    // console.log("sayfa yenilendi");
    setTimeout(function(){
        if(document.querySelector("#slide-0 .carousel-item-text")){
            document.querySelector("#slide-0 .carousel-item-text").style.display="block";
            document.querySelector("#slide-0 .carousel-item-bottom-text").style.display="block";
        }
    },500);
    var carousel = document.querySelector('.cexamControls');
    
    carousel.addEventListener("slid.bs.carousel", function(event) {
       
        var activeIndex = event.to; 
        
      
        var activeItemId = `slide-${activeIndex}`;

      
        var activetext = document.querySelector(`#${activeItemId} .carousel-item-text`);
        var activeTextBottom = document.querySelector(`#${activeItemId} .carousel-item-bottom-text`);
        setTimeout(function () {
            if (activetext) {
                activetext.style.display = 'block';
                activeTextBottom.style.display="block";
            }
        }, 500);
    });
    carousel.addEventListener("slide.bs.carousel",function(e){
        var activeIndex_=e.to;
        var activeId= `slide-${activeIndex_}`;
        var activeText = document.querySelector(`#${activeId} .carousel-item-text`);
        var activeBottom = document.querySelector(`#${activeId} .carousel-item-bottom-text`);
        activeText.style.display="none";
        activeBottom.style.display = "none";
    })
});

let swiperCards = new Swiper('.swiper-content', {
   
    loop: true,
    spaceBetween:32,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        600:{
            slidesPerVieW:2,
        },
        968:{
            slidesPerVieW:3,
        },

    },
  });
  document.addEventListener('DOMContentLoaded', function () {
    let swiper__section = new Swiper('.swiper__section', {
      loop: false,
      
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        600: {
          slidesPerView: 1,
        },
        968: {
          slidesPerView: 3,
        },
      },
    }); 
  });
const car__prev = document.querySelector(".buton__section__prev");
const car__next = document.querySelector(".buton__section__next");
const i__car__prev= document.querySelector(".i__car__prev");
const i__car__next = document.querySelector(".i__car__next");
console.log(car__prev);
console.log(car__next);
sayac2 = 0;
function update__buton(y){
    if(y==1){
        car__prev.classList.add("buton__section__prev");
        i__car__prev.classList.remove("d-none");
        car__next.classList.remove("buton__section__next");
        i__car__next.style.display="none";
    }
    else if (y==0){
        car__prev.classList.remove("buton__section__prev");
        i__car__prev.classList.add("d-none") ;
        car__next.classList.add("buton__section__next");
        i__car__next.style.display="block";
    }
};
car__next.addEventListener("click",e=>{
  sayac2++;
  update__buton(sayac2)
  console.log(sayac2);
});
car__prev.addEventListener("click",e=>{
   sayac2--;
   update__buton(sayac2);
});




let swiper_h = new Swiper('.swiper-h', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
    
});
sayac = 0; 
const next = document.querySelector(".swiper__buton__next");
const prev = document.querySelector(".swiper__prev");
const sayfano = document.querySelector(".pagination__text");
const i__swp = document.querySelector(".swiper__i__next");
const i__swp__p =document.querySelector(".swiper__i__prev");
function update(indeks) {
    if(indeks==1){
        sayfano.innerHTML = `2&nbsp;&nbsp;-&nbsp;&nbsp;4&nbsp;`;
        prev.classList.add("swiper__buton__prev");
        next.classList.add("swiper__btn__2");
        i__swp.style.display="block";
        i__swp__p.classList.remove("d-none")
    }
    else if(indeks == 2 ){
        sayfano.innerHTML = `3&nbsp;&nbsp;-&nbsp;&nbsp;5&nbsp;`;
        next.classList.add("swiper__btn__2");
        i__swp.style.display="block";
        i__swp__p.style.display="block";
    }
    else if(indeks == 3 ){
        sayfano.innerHTML = `4&nbsp;&nbsp;-&nbsp;&nbsp;6&nbsp;`;
        next.classList.remove("swiper__btn__2");
        i__swp.style.display="none";
        i__swp__p.style.display="block";
    }
    else if(indeks == 0){
        sayfano.innerHTML = `1&nbsp;&nbsp;-&nbsp;&nbsp;3&nbsp;`;
        prev.classList.remove("swiper__buton__prev");
        next.classList.add("swiper__btn__2");
        i__swp__p.style.display="none";
        i__swp.style.display="block";
    }
    
    
}


swiper_h.on("slideChangeTransitionEnd",e=>{
    update(swiper_h.activeIndex);
});


var myswiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 30,
    slidesPerView: 3,
    on: {
      init: function () {
        // Change the initial pagination bullet color
        document.querySelectorAll('.swiper-pagination-bullet').forEach(function (bullet) {
          bullet.style.backgroundColor = 'black';
        });
      },
      slideChange: function () {
        // Change the pagination bullet color on slide change
        document.querySelectorAll('.swiper-pagination-bullet').forEach(function (bullet) {
          bullet.style.backgroundColor = 'black';
        });
      },
    },
  });

  let gh__swiper = new Swiper('.gh__swiper', {
    loop: true,
    grabCursor: false,
    speed: 500,
    // initialSlide: 0, // 0, 1, 2... hangi slide ile başlamak istiyorsanız
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        968: {
            slidesPerView: 2,
        },
    },
});


const gh__text=document.querySelector(".swp__text__active");
function ghUpdate(z){
    if (z==0){
        gh__text.innerHTML=`1&nbsp;&nbsp;-&nbsp;&nbsp;2&nbsp;`
    }
    else if(z==1){
        gh__text.innerHTML=`2&nbsp;&nbsp;-&nbsp;&nbsp;3&nbsp;`
    }
    else if (z==2){
        gh__text.innerHTML=`3&nbsp;&nbsp;-&nbsp;&nbsp;4&nbsp;`
    }
    else if (z==3){
        gh__text.innerHTML=`4&nbsp;&nbsp;-&nbsp;&nbsp;5&nbsp;`
    }
    else if (z==4){
        gh__text.innerHTML=`5&nbsp;&nbsp;-&nbsp;&nbsp;6&nbsp;`
    }
    else if (z==5){
        gh__text.innerHTML=`6&nbsp;&nbsp;-&nbsp;&nbsp;7&nbsp;`
    }
    else if (z==6){
        gh__text.innerHTML=`7&nbsp;&nbsp;-&nbsp;&nbsp;8&nbsp;`
    }
    else if (z==7){
        gh__text.innerHTML=`8&nbsp;&nbsp;-&nbsp;&nbsp;9&nbsp;`
    }
    else if (z==8){
        gh__text.innerHTML=`9&nbsp;&nbsp;-&nbsp;&nbsp;10&nbsp;`
    }
    else if (z==9){
        gh__text.innerHTML=`10&nbsp;&nbsp;-&nbsp;&nbsp;11&nbsp;`
    }
    else if (z==10){
        gh__text.innerHTML=`11&nbsp;&nbsp;-&nbsp;&nbsp;12&nbsp;`
    }
    else if (z==11){
        gh__text.innerHTML=`12&nbsp;&nbsp;-&nbsp;&nbsp;13&nbsp;`
    }
    else if (z==12){
        gh__text.innerHTML=`13&nbsp;&nbsp;-&nbsp;&nbsp;14&nbsp;`
    }
}

gh__swiper.on('slideChangeTransitionEnd', () => {
    // console.log(`Slide changed to index: ${gh__swiper.activeIndex}`);
    ghUpdate(gh__swiper.activeIndex)
});