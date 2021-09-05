(() => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.follower');
    const social_icons = document.querySelectorAll('.social_icons')
    const nav_link = document.querySelectorAll('.nav_link')
    const nav_massage = document.querySelector('.nav_massage')
    const scroll_container = document.querySelector('.scroll-container')
    const aboutpage_button = document.querySelector('.aboutpage_button')
    const hire_button = document.querySelectorAll('.hire_button')
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        setTimeout(() => {
            follower.style.left = e.pageX + 'px';
            follower.style.top = e.pageY + 'px';
        }, 100);
    })

    const list_for_hover = [...social_icons, ...nav_link,scroll_container,aboutpage_button,...hire_button,nav_massage] 

    list_for_hover.forEach((each) => {
        each.addEventListener('mouseenter', e => {
            follower.classList.toggle('follower_enter')
        })
        each.addEventListener('mouseleave', e => {
            follower.classList.toggle('follower_enter')

        })
    })
})();

