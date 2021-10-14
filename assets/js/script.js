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
const portfolio_swiper_buttons = document.querySelectorAll('.portfolio_container .swiper-slide .button')
const project_container = document.querySelector('.portfolio_section .project_container')
const project_close = project_container.querySelector('.close')
const popup_background = project_container.querySelector('.popup_background')
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
  
  const list_for_hover = [...social_icons, ...all_links, scroll_container, ...slider_buttons, ...portfolio_swiper_buttons, project_close, popup_background]
  
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
//  autoplay: {
//       delay: 2500,
//       disableOnInteraction: true
//     },
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


// Portfolio page project open buttons function


const project_data = {
  neo_academy: {
    name: 'UI Design Of An Course Website',
    description: 'It is a sample online course website UI design. Where all the main services have been described with cards and also has the monthly subscription section.',
    img_url: '/assets/img/protfulio/project_img/neo_academy.jpg',
    tech: ['Figma'],
    preview_url: 'https://www.figma.com/proto/wq41zxFu4pHg5C6Yb2k3tX/Online-Acdamy?node-id=1%3A27&scaling=min-zoom&page-id=0%3A1',
    source_url:'https://www.figma.com/file/wq41zxFu4pHg5C6Yb2k3tX/Online-Acdamy?node-id=0%3A1'
  },
  massage_ui: {
    name: 'Massage And Call App UI Design.',
    description: 'This is a message and calls app UI design. Which is inspired by the Facebook massager. I use blue as my main colour here. I have designed the chat screen, profile screen, settings screen and call screen.',
    img_url: '/assets/img/protfulio/project_img/massage_ui.jpg',
    tech: ['Figma'],
    preview_url: 'https://www.figma.com/proto/ktRVIAGOFwRfl26Li5MDNW/Massage-UI?node-id=16%3A1236&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A1236&show-proto-sidebar=1',
    source_url:'https://www.figma.com/file/ktRVIAGOFwRfl26Li5MDNW/Massage-UI?node-id=0%3A1'
  },
  ola_ui_redesign: {
    name: 'Ola Electric Website UI Redesign',
    description: 'Here I have redesigned the ola electric website. The main theme is moreover the same but I change the accent colour. I have reduced the inconsistency in UI and change some major UI. Thus try to make a more fluid UI.',
    img_url: '/assets/img/protfulio/project_img/ola_ui_redesign.jpg',
    tech: ['Figma'],
    preview_url: 'https://www.figma.com/proto/wVEDRrGylqlEX5ocHsFCjD/Ola-Electric?node-id=1%3A15&scaling=min-zoom&page-id=0%3A1',
    source_url:'https://www.figma.com/file/wVEDRrGylqlEX5ocHsFCjD/Ola-Electric?node-id=0%3A1'
  },
  alpha_electric: {
    name: 'Electric Bicycle Launch Website.',
    description: 'It is an electric bicycle launch website where I have created all the features section of the bicycle. There has the bicycle purchase section and also the service and the app section. At the end, there has the contact section.',
    img_url: '/assets/img/protfulio/project_img/alpha_electric.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Github'],
    preview_url: 'https://alphaelectrify.netlify.app/',
    source_url:'https://github.com/RoyBikram/Alpha'
  },
  favito: {
    name: 'Interior Design Company Website',
    description: 'It is a sample website for the home interior design company. I have created the previous work section. At the end, there has a contact section. Also, there has a purchase section.',
    img_url: '/assets/img/protfulio/project_img/favito.jpg',
    tech: ['HTML','CSS','JavaScript'],
    preview_url: 'https://favito.netlify.app/',
    source_url:'https://github.com/RoyBikram/interior_design_website'
  },
  canvaflow: {
    name: 'Video And Photo Production Website',
    description: 'Here I have created the service section for the company. You also find the key strength section of the company and also testimonial section, previous work section, some of the big client section and many more.',
    img_url: '/assets/img/protfulio/project_img/canvaflow.jpg',
    tech: ['Wordpress'],
    preview_url: 'http://demowebsiteone.unaux.com/',
    source_url:''
  },
}






portfolio_swiper_buttons.forEach(element => {
  element.addEventListener('click', (event) => {
    project_container.classList.add('visible')
    console.log(event.currentTarget.dataset.name);
    const project_heading = document.querySelector('.project_container .about .heading ')
    const project_content = document.querySelector('.project_container .about .content ')
    const project_tech_items = document.querySelectorAll('.project_container .tech .item ')
    const project_preview_button = document.querySelector('.project_container .buttons_container .preview')
    const project_source_button = document.querySelector('.project_container .buttons_container .source')
    const project_preview_img = document.querySelector('.project_container .preview_img')
    const selected_project = event.currentTarget.dataset.name

    project_heading.textContent = project_data[selected_project].name
    project_content.textContent = project_data[selected_project].description
    project_tech_items.forEach((element,index) => {
      element.textContent = project_data[selected_project].tech[index]
    });
    console.log(project_data[selected_project].img_url);
    project_preview_button.href = project_data[selected_project].preview_url
    project_source_button.href = project_data[selected_project].source_url
    project_preview_img.src = project_data[selected_project].img_url
    
  })
});

project_close.addEventListener('click', () => {
  // project_container.style.display = 'none'
  // project_container.style.height = 0;
  // project_container.style.width = 0;
  project_container.classList.remove('visible')

    

  
})
popup_background.addEventListener('click', () => {
  project_container.classList.remove('visible')


  
})



