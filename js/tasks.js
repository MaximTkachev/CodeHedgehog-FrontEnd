const maxWidthToOpenSidebar = 1125;
window.addEventListener('load', function (){
    let temp = localStorage.getItem('language');
    if(temp === "en")
        changeLanguage("EN");
    else
        changeLanguage("RU");
});
function changeLanguageOfPage(file){
    changeLanguageOfNavbar(file.navbar);
    document.getElementById('main-title').innerText = file.tasks.main_title;

    document.getElementById('page-title').innerText = file.tasks.title;
    document.getElementById('input-name').placeholder = file.tasks.input.input_name_title;
    document.getElementById('input-division').placeholder = file.tasks.input.input_division_title;
    document.getElementById('search-btn').innerText = file.tasks.input.search_btn_title;

    while (document.getElementById('main-table').childNodes.length > 0)
        document.getElementById('main-table').childNodes[0].remove();

    $template = $("#header-template");
    $el = $template.clone();
    $el.find("#header-title").text(file.tasks.table_header.title);
    $el.find("#header-contest").text(file.tasks.table_header.contest);
    $el.find("#header-points").text(file.tasks.table_header.points);
    $el.find("#header-deadline").text(file.tasks.table_header.deadline);
    $("#main-table").append($el);

    file.tasks.list_of_tasks.map(elem=>{
        $template = $("#tr-template");
        $tr = $template.clone();
        $tr.removeAttr('id');
        $tr.find("#a-template").text(elem.title);
        $tr.find("#contest-template").text(elem.contest);
        $tr.find("#date-template").text(elem.deadline);
        $tr.find("#send-btn-template").text(file.tasks.send_btn);
        $tr.find("#icon-template").attr('title', file.tasks.postmoderation + ' <span class=\'verdict\'>' + elem.postmoderation_text + '</span>');

        if(elem.status === "accepted")
            $tr.addClass("verdict-ok");
        if(elem.status === "reject")
            $tr.addClass("verdict-reject");
        if(elem.status === "testing")
            $tr.addClass("verdict-testing");

        if(elem.postmoderation === "accepted")
            $tr.find("#icon-template").addClass("verdict-ok");
        if(elem.postmoderation === "reject")
            $tr.find("#icon-template").addClass("verdict-reject");

        $tr.removeClass('d-none');
        $("#main-table").append($tr);
    })

    turnOnTooltips();
}
document.getElementById('small-text-desc').addEventListener('click', function (){
    if(document.getElementById('small-text-desc').innerText === "EN")
        changeLanguage("RU");
    else
        changeLanguage("EN");
});