const slider_buttons = document.querySelectorAll('.slider_button')
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.follower');
const social_container = document.querySelector('.social_icons')
const social_icons = document.querySelectorAll('.social_icons img')
const nav_link = document.querySelectorAll('.nav_link')
const nav_list = document.querySelectorAll('.nav_list')
const nav_massage = document.querySelector('.nav_massage')
const scroll_container = document.querySelector('.scroll-container')
const aboutpage_button = document.querySelector('.aboutpage_button')
const hire_button = document.querySelectorAll('.hire_button')
const all_links = document.querySelectorAll('a')
const scroll_down = document.querySelector('.scroll-down')
const about_title = document.querySelector('#about_title')
const about_title_separator = document.querySelector('#about_title_separator')
const about_sec_bg_text = document.querySelector('.about_section .background_text text')
const service_heading = document.querySelector('.service_section .leftSide .heading')
const process_subtitle_underline = document.querySelector('.process_section .subtitle .underline')
const tech_heading = document.querySelector('.tech_section .heading')
const portfolio_separator = document.querySelector('.portfolio_section .separator')
const contacts_maincontent = document.querySelector('.contacts_section .grid_container .main_content')
const process_bar = document.querySelector('.process_container .middle_line')
const sections = document.querySelectorAll('section')
const header = document.querySelector('header')
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

if (vw <= 425) {
  // For Mobile
  
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
  
  
  
  
  // Mobile Animation On Scroll

  const about_title_container = document.querySelector('#about_title')
  const about_background = document.querySelector('#about_background')
  const service_heading = document.querySelector('#service_heading')
  const tech_heading = document.querySelector('#tech_heading')
  const portfolio_separator = document.querySelector('#portfolio_separator')
  const contact_heading = document.querySelector('#contact_heading')
  const mobile_ani_obj = [
    social_container,
    about_title,
    about_background,
    service_heading,
    tech_heading,
    portfolio_separator,
    contact_heading
  ]
  const scroll_ani_options = {
    rootMargin: '-75% 0px -20% 0px'
  }
  
  const scroll_ani_observer = new IntersectionObserver((first, observer) => {
    first.forEach ((each) => {
      if (each.isIntersecting) {

        switch (each.target.id) {
          case 'social_icons':
            social_icons.forEach((each,index) => {
            each.style.animationDelay = `${(index + 1) * 100}ms`
            each.classList.add('fade_left')
            })
            scroll_down.classList.add('fade_up')
            break;
          case 'about_title':
            about_title_separator.classList.add('barfillupHorizontal')
            observer.unobserve(each.target)

            break;
          case 'about_background':
            about_sec_bg_text.classList.add('strock')
            observer.unobserve(each.target)

            
            break;
          case 'service_heading':
            service_heading.classList.add('barfillupVertical')
            observer.unobserve(each.target)

            break;
          case 'tech_heading':
            tech_heading.classList.add('barfillupVertical')
            observer.unobserve(each.target)

            break;
          case 'portfolio_separator':
            portfolio_separator.classList.add('barfillupHorizontal')
            observer.unobserve(each.target)

            break;
          case 'contact_heading':
            contacts_maincontent.classList.add('barfillupVertical')
            observer.unobserve(each.target)

            break;
          default:
            break;
        }
        
        
      } 
    })
  },scroll_ani_options)
  mobile_ani_obj.forEach(each => {
    scroll_ani_observer.observe(each)
  });


} else {

  // For Desktop
  document.addEventListener('mousemove', e => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
      setTimeout(() => {
          follower.style.left = e.pageX + 'px';
          follower.style.top = e.pageY + 'px';
      }, 100);
  })
  
  const list_for_hover = [...social_icons ,...all_links,scroll_container,...slider_buttons] 
  
  list_for_hover.forEach((each) => {
      each.addEventListener('mouseenter', e => {
          follower.classList.toggle('follower_enter')
      })
      each.addEventListener('mouseleave', e => {
          follower.classList.toggle('follower_enter')
  
      })
  })



  

// animation for each section
const home_ani = () => {
  social_icons.forEach((each,index) => {
    each.style.animationDelay = `${(index + 1) * 100}ms`
    each.classList.add('fade_left')
  })
  scroll_down.classList.add('fade_up')
}
const about_ani = () => {
  about_title_separator.classList.add('barfillupHorizontal')
  

  about_sec_bg_text.classList.add('strock')

}
const service_ani = () => {
  service_heading.classList.add('barfillupVertical')
  
}
const process_ani = () => {
  process_subtitle_underline.classList.add('barfillupHorizontal')
  process_bar.classList.add('processbarani')
}
const tech_ani = () => {
  tech_heading.classList.add('barfillupVertical')

}
const portfolio_ani = () => {
  portfolio_separator.classList.add('barfillupHorizontal')
}
const contacts_ani = () => {
  contacts_maincontent.classList.add('barfillupVertical')
  }
  


  

const scroll_ani_options = {
  rootMargin: '-1% 0px -99% 0px'
}

const scroll_ani_observer = new IntersectionObserver((first, observer) => {
  first.forEach ((each) => {
    if (each.isIntersecting) {

      switch (each.target.classList[1]) {
        case 'home_section':
          home_ani()
          observer.unobserve(each.target)
          break;
        case 'about_section':
          about_ani()
          observer.unobserve(each.target)
          break;
        case 'service_section':
          service_ani()
          observer.unobserve(each.target)
          break;
        case 'process_section':
          process_ani()
          observer.unobserve(each.target)
          break;
        case 'tech_section':
          tech_ani()
          observer.unobserve(each.target)
          break;
        case 'portfolio_section':
          portfolio_ani()
          observer.unobserve(each.target)
          break;
        case 'contacts_section':
          contacts_ani()
          observer.unobserve(each.target)
          break;
      
        default:
          // console.log('default');
          break;
      }
      
    } else {
    }
  })
},scroll_ani_options)
sections.forEach(each => {
  scroll_ani_observer.observe(each)
});

}






// Project page swiper

var project_swiper_option = {
  effect: "cards",
  grabCursor: true,
  mousewheel: true,
 autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
}
var project_swiper = new Swiper("#project_slider", project_swiper_option);




// Tech page swiper

var tech_swiper_option = {
  mousewheel: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}
var tech_swiper = new Swiper("#Details_swiper", tech_swiper_option);
slider_buttons.forEach((each, index) => {
each.addEventListener('click', (params) => {
  tech_swiper.slideTo(index,500)
})
})

tech_swiper.on('slideChange', function () {
slider_buttons[tech_swiper.previousIndex].classList.remove('slider_button_active')
slider_buttons[tech_swiper.activeIndex].classList.add('slider_button_active')
})



// Header active link funtion



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




// Animated object opacity down
const all_ani_obj = [scroll_down,
  ...social_icons,
  about_sec_bg_text
]

all_ani_obj.forEach(each => {
  each.style.opacity = '0';
})




