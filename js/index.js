const maxWidthToOpenSidebar = 768;
window.addEventListener('load', function (){
    let temp = localStorage.getItem('language');
    if(temp === "en")
        changeLanguage("EN");
    else
        changeLanguage("RU");
});

function changeLanguageOfPage(file){
    file = file.index;

    document.getElementById('main-title').innerText = file.main_title;

    document.getElementById('navbar-title').innerText = file.navbar_title;
    document.getElementById('navbar-create').innerText = file.navbar_create;
    document.getElementById('navbar-join').innerText = file.navbar_join;
    document.getElementById('navbar-archive').innerText = file.navbar_archive;

    document.getElementById('search-btn').innerText = file.search_btn_title;
    document.getElementById('search-title').placeholder = file.input_name_title;
    document.getElementById('search-division').placeholder = file.input_division_title;

    while(document.getElementById('card-holder').childNodes.length > 0)
        document.getElementById('card-holder').childNodes[0].remove();

    if(localStorage.getItem('language') === "en")
        SetClassCards(englishVersion);
    else
        SetClassCards(russianVersion);
}
function SetClassCards(file){
    let i = 0;
    while(i < file.index.classes.length)
    {
        let el = file.index.classes[i]; i++;
        $template = $("#card-template");
        $card = $template.clone();
        $card.find('#card-title').text(el.title);
        $card.find('#card-description').text(el.description);
        $card.find('#menu-postmoderation').text(file.index.classes_menu.postmoderation);
        $card.find('#menu-queue').text(file.index.classes_menu.queue);
        $card.find('#menu-tasks').text(file.index.classes_menu.tasks);
        $card.find('#menu-users').text(file.index.classes_menu.users);
        $card.removeClass('d-none');
        $('#card-holder').append($card);
    }
}
document.getElementById('small-text-desc').addEventListener('click', function (){
    if(document.getElementById('small-text-desc').innerText === "EN")
        changeLanguage("RU");
    else
        changeLanguage("EN");
});