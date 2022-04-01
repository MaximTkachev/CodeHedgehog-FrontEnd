var temp = sessionStorage.getItem('isSidebarCollapsed');
let isSidebarCollapsed = temp == null || temp === "true";

document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = () =>{
        const toggle = document.getElementById('header-toggle')

            toggle.addEventListener('click', collapseSidebar)
    }
    showNavbar()

    const linkColor = document.querySelectorAll('.nav_link')
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'));
            linkColor.forEach(l=> l.classList.remove('active-hidden'));

            if(isSidebarCollapsed)
                this.classList.add('active-hidden')
            else
                this.classList.add('active')
        }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))

});

function RemoveTransition(){
    document.getElementById('body-pd').classList.add('transition-0');
    document.getElementById('nav-bar').classList.add('transition-0');
    let collection = document.getElementsByClassName('nav_link');
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.add('transition-0');
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function SetTransitionBack(){
    await sleep(10);
    document.getElementById('body-pd').classList.remove('transition-0');
    document.getElementById('nav-bar').classList.remove('transition-0');
    let collection = document.getElementsByClassName('nav_link');
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove('transition-0');
    }
}

function collapseSidebar(isSessionStorageChangeRequired = true){
    if(!isSessionStorageChangeRequired)
        RemoveTransition();

    const toggle = document.getElementById('header-toggle'),
        nav = document.getElementById('nav-bar'),
        bodypd = document.getElementById('body-pd'),
        nav_logo = document.getElementById('nav-logo')
    if(isSessionStorageChangeRequired)
        isSidebarCollapsed = !isSidebarCollapsed;

        document.getElementById('profile-card-small').classList.toggle('d-none');
        document.getElementById('profile-card-big').classList.toggle('d-none');
        document.getElementById('mini-logo').classList.toggle('d-none');
        document.getElementById('nav-link-holder').classList.toggle('nav-link-holder');
        document.getElementById('notification-pill').classList.toggle('d-none');

        nav.classList.toggle('show-navbar') //установить большую ширину сайдбара
        //toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd') //установить padding у body
        nav_logo.classList.toggle('nav_logo_visible') //прижать стрелку к правому краю
        toggle.classList.toggle('fa-angle-left')
        toggle.classList.toggle('fa-angle-right')

        document.getElementById('big-background-logo').classList.toggle('d-none')

        let collection = document.getElementsByClassName('nav_name');
        for(let i = 0; i < collection.length; i++)
            collection[i].classList.toggle('nav-name-hidden');
        if(!isSidebarCollapsed) {
            collection = document.getElementsByClassName('active-hidden');
            for(let i = 0; i < collection.length; i++) {
                collection[i].classList.add('active');
                collection[i].classList.remove('active-hidden');
            }
        }
        else {
            collection = document.getElementsByClassName('active');
            for(let i = 0; i < collection.length; i++) {
                collection[i].classList.add('active-hidden');
                collection[i].classList.remove('active');
            }
        }
        if(isSessionStorageChangeRequired)
        {
            if(isSidebarCollapsed) {
                sessionStorage.setItem('isSidebarCollapsed', 'true')
            }
            else {
                sessionStorage.setItem('isSidebarCollapsed', 'false')
            }
        }
        if(!isSessionStorageChangeRequired)
            SetTransitionBack().then();

        try{
            AdditionalSidebarFunction();
        } catch (e){}
}