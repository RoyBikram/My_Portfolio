const slider_buttons = document.querySelectorAll('.slider_button')
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.follower');
const social_icons = document.querySelectorAll('.social_icons img')
const nav_link = document.querySelectorAll('.nav_link')
const nav_list = document.querySelectorAll('.nav_list')
const nav_massage = document.querySelector('.nav_massage')
const scroll_container = document.querySelector('.scroll-container')
const aboutpage_button = document.querySelector('.aboutpage_button')
const hire_button = document.querySelectorAll('.hire_button')
const buttons = document.querySelectorAll('button')
document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    setTimeout(() => {
        follower.style.left = e.pageX + 'px';
        follower.style.top = e.pageY + 'px';
    }, 100);
})

const list_for_hover = [...social_icons, ...nav_link,scroll_container,aboutpage_button,...hire_button,nav_massage,...buttons,...slider_buttons] 

list_for_hover.forEach((each) => {
    each.addEventListener('mouseenter', e => {
        follower.classList.toggle('follower_enter')
    })
    each.addEventListener('mouseleave', e => {
        follower.classList.toggle('follower_enter')

    })
})

// Project page swiper
var swiper = new Swiper("#project_slider", {
    effect: "cards",
    grabCursor: true,
    mousewheel: true,
    
});

// Tech page swiper

var swiper = new Swiper("#Details_swiper", {
  mousewheel: true,
  autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

slider_buttons.forEach((each, index) => {
each.addEventListener('click', (params) => {
  swiper.slideTo(index,500)
})
})

swiper.on('slideChange', function () {
slider_buttons[swiper.previousIndex].classList.remove('slider_button_active')
slider_buttons[swiper.activeIndex].classList.add('slider_button_active')
})



// Header active link funtion

const sections = document.querySelectorAll('section')
const header = document.querySelector('header')

const nav_menu_options = {
  rootMargin: '-50% 0px'
}

const nav_menu_observer = new IntersectionObserver((first, second) => {
  first.forEach ((each) => {
    if (each.isIntersecting) {
      nav_list.forEach((element) => {
        element.querySelector(`.${each.target.className.slice(8, -8)}`).classList.add('active_link');
      })
    } else {
      nav_list.forEach((element) => {
        element.querySelector(`.${each.target.className.slice(8, -8)}`).classList.remove('active_link');
      })
    }
  })
},nav_menu_options)
sections.forEach(each => {
  nav_menu_observer.observe(each)
});




//  MOBILE NAVIGATION BUTTON

const navigation_button = document.querySelector('.mobile_navigation_button');
const mobile_navbar = document.querySelector('.mobile_navbar')


navigation_button.addEventListener('click', function(){
  navigation_button.classList.toggle('navigation_button_clicked');
  mobile_navbar.classList.toggle('active')
});
mobile_navbar.querySelectorAll('a').forEach(element => {
  element.addEventListener('click', function(){
    navigation_button.classList.toggle('navigation_button_clicked');
    mobile_navbar.classList.toggle('active')
  });
});