function changeLanguageOfSidebar(file){
    document.getElementById('sidebar-classes').innerText = file.classes;
    document.getElementById('sidebar-queue').innerText = file.queue;
    document.getElementById('sidebar-postmoderation').innerText = file.postmoderation;
    document.getElementById('sidebar-languages').innerText = file.languages;
    document.getElementById('sidebar-groups').innerText = file.groups;
    document.getElementById('sidebar-themes').innerText = file.themes;
    document.getElementById('sidebar-contests').innerText = file.contests;
    document.getElementById('sidebar-tasks').innerText = file.tasks;
    document.getElementById('sidebar-users').innerText = file.users;
    document.getElementById('sidebar-localization').innerText = file.localization;
    document.getElementById('profile-name').innerText = file.profile.name;
    document.getElementById('profile-settings').innerText = file.profile.settings;
    document.getElementById('profile-logout').innerText = file.profile.logout;
}

function changeLanguageOfNavbar(file){
    document.getElementById("navbar-feed").innerText = file.feed;
    document.getElementById("navbar-tasks").innerText = file.tasks;
    document.getElementById("navbar-themes").innerText = file.themes;
    document.getElementById("navbar-queue").innerText = file.queue;
    document.getElementById("navbar-postmoderation").innerText = file.postmoderation;
    document.getElementById("navbar-results").innerText = file.results;
    document.getElementById("navbar-users").innerText = file.users;
    document.getElementById("navbar-rating").innerText = file.rating;
}

function changeLanguage(lang){
    let collection = document.getElementsByClassName('lang-picker-btn');
    for (let i = 0; i<collection.length;i++){
        collection[i].classList.remove('lang-picker-btn-selected');
        if(collection[i].value === lang)
            collection[i].classList.add('lang-picker-btn-selected');
    }

    if (lang === "EN") {
        localStorage.setItem('language', 'en');
        $("#small-text-desc").text("EN");
        changeLanguageOfSidebar(englishVersion.sidebar);
        changeLanguageOfPage(englishVersion);
    }
    else {
        localStorage.setItem('language', 'ru');
        $("#small-text-desc").text("RU");
        changeLanguageOfSidebar(russianVersion.sidebar);
        changeLanguageOfPage(russianVersion);
    }
}