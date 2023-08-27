//burger-------------------------------
const burger = document.getElementById('burger');
const headerTop = document.getElementById('header_top');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headerTop.classList.toggle('active');
})

//slider-------------------------------
const swiper = new Swiper('.speakers_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    575: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    991: {
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper_button_prev',
    prevEl: '.swiper_button_next',
  },
});

//send form-----------------------
const form = document.querySelector('.feedback_form');


form.addEventListener('submit', (e)=>{
	e.preventDefault();

  let formData = new FormData(form);

  console.log(formData);

  for (let [key, value] of formData) {
    console.log(`${key} - ${value}`)
  }

  form.reset();

})

//
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};