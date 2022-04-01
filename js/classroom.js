const maxWidthToOpenSidebar = 945;
window.addEventListener('load', function (){
    let temp = localStorage.getItem('language');
    if(temp === "en")
        changeLanguage("EN");
    else
        changeLanguage("RU");
});

function changeLanguageOfPage(file){
    changeLanguageOfNavbar(file.navbar);

    document.getElementById('main-title').innerText = file.classroom.main_title;
    document.getElementById('btn-return').innerText = file.classroom.logo.return_btn;
    document.getElementById('logo-title').innerText = file.classroom.logo.title;
    document.getElementById('logo-desc').innerText = file.classroom.logo.description;

    while(document.getElementById('news-holder').childNodes.length > 0)
        document.getElementById('news-holder').childNodes[0].remove();

    $("#news-holder").append($("#page-title").clone().text(file.classroom.title).removeClass('d-none'));
    let i = 0;
    file.classroom.news.map(el=>{
        $template = $("#news-template");
        $element = $template.clone();
        $element.removeAttr("id");
        $element.find("#news-title").text(el.title);
        $element.find("#news-date").text(el.date);
        $element.find("#news-author").text(el.author);
        $element.find('#details-btn').text(file.classroom.details_btn);
        el.description.split("\n").map(str =>{
            $temp= $("#p-template");
            $p = $temp.clone();
            $p.removeAttr('id');
            $p.text(str);
            $p.removeClass("d-none");
            $element.find("#news-description").append($p);
        })

        if(i !== 0)
            $element.addClass("mt-4");
        if(i === file.classroom.news.length - 1)
            $element.addClass("mb-5");
        i++;
        $element.removeClass('d-none');
        $("#news-holder").append($element);
    })
}
document.getElementById('small-text-desc').addEventListener('click', function (){
    if(document.getElementById('small-text-desc').innerText === "EN")
        changeLanguage("RU");
    else
        changeLanguage("EN");
});