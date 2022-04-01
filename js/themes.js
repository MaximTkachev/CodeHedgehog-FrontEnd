const maxWidthToOpenSidebar = 945;
function changeAngle(element){
    element.childNodes[1].classList.toggle("fa-angle-right");
    element.childNodes[1].classList.toggle("fa-angle-down");
}

window.addEventListener('load', function (){
    let temp = localStorage.getItem('language');
    if(temp === "en")
        changeLanguage("EN");
    else
        changeLanguage("RU");
});

function changeLanguageOfPage(file){
    changeLanguageOfNavbar(file.navbar);
    document.getElementById('main-title').innerText = file.themes.main_title;

    let i = 0;
    while (document.getElementById('content-holder').childNodes.length > 0)
        document.getElementById('content-holder').childNodes[0].remove();
    $("#content-holder").append($("#page-title").clone().text(file.themes.title).removeAttr('id'));
    file.themes.list.map(element =>{
        $list = $("#list-holder-template").clone();
        $list.removeAttr("id");
        $list.find("#title-template").text(element.title);
        $list.find("#a-template").attr('href', '#CollapseExample-' + i);
        $list.find("#a-template").removeAttr('id');
        $list.find("#collapse-template").attr('id', 'CollapseExample-' + i);
        $list.addClass("mb-3");
        i++;
        element.subtopics.map(elem =>{
            $subtopic = $("#subtopic-block-template").clone();
            $subtopic.find("#subtopic-title").text(elem.title);
            $subtopic.find("#task-btn").text(file.themes.task_btn);
            $subtopic.removeAttr('id');

            $subtopic.find("#a-subtopic-template").attr('href', '#CollapseExample-' + i);
            $subtopic.find("#subtopic-list-template").attr('id', 'CollapseExample-' + i);
            elem.tasks.map(el =>{
                $template = $("#a-task-template")
                $task = $template.clone();

                $task.removeClass('d-none');
                $task.removeAttr('id');
                $task.text(el);

                $subtopic.find("#task-holder").append($task);
            })

            $subtopic.removeClass('d-none');
            $list.find("#subtopics-holder").append($subtopic);
            i++;
        })

        $list.removeClass('d-none');
        $("#content-holder").append($list);
    })
}
document.getElementById('small-text-desc').addEventListener('click', function (){
    if(document.getElementById('small-text-desc').innerText === "EN")
        changeLanguage("RU");
    else
        changeLanguage("EN");
});