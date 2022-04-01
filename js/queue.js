const maxWidthToOpenSidebar = 998;
window.addEventListener('load', function (){
    let temp = localStorage.getItem('language');
    if(temp === "en")
        changeLanguage("EN");
    else
        changeLanguage("RU");
});

function changeLanguageOfPage(file){
    changeLanguageOfNavbar(file.navbar);

    document.getElementById('main-title').innerText = file.queue.main_title;
    document.getElementById('page-title').innerText = file.queue.title;

    while(document.getElementById('main-table').childNodes.length > 0)
        document.getElementById('main-table').childNodes[0].remove();

    $template = $("#header-template");
    $tr = $template.clone();

    $tr.find("#header-author").text(file.queue.header.author);
    $tr.find("#header-task").text(file.queue.header.task);
    $tr.find("#header-language").text(file.queue.header.language);
    $tr.find("#header-verdict").text(file.queue.header.verdict);
    $tr.find("#header-date").text(file.queue.header.date);

    $("#main-table").append($tr);

    file.queue.list.map(element=>{
        $template = $("#tr-template");
        $tr = $template.clone();
        $tr.removeAttr('id');

        $tr.find("#td-author").text(element.author);
        $tr.find("#td-task").text(element.task);

        element.date.split("\n").map(elem=>{
            $tr.find("#td-date").append($("#p-template").clone().text(elem));
        })

        $tr.find("#resend-btn").text(file.queue.modal_window.resend);
        $tr.find("#archive-btn").text(file.queue.modal_window.archive);
        $tr.find("#delete-btn").text(file.queue.modal_window.delete);

        if(element.postmoderation_status === "pending")
        {
            $tr.find("#postmoderation-verdict").text(file.queue.verdict_status_text.pending);
            $tr.find("#postmoderation-verdict").addClass("task-pending");
            $tr.find("#postmoderation-icon").addClass('task-pending')
        }
        if(element.postmoderation_status === "reject")
        {
            $tr.find("#postmoderation-verdict").text(file.queue.verdict_status_text.reject_by_postmoderation);
            $tr.find("#postmoderation-verdict").addClass("task-reject");
            $tr.find("#postmoderation-icon").addClass("task-reject");
        }
        if(element.postmoderation_status === "accepted")
        {
            $tr.find("#postmoderation-verdict").text(file.queue.verdict_status_text.accepted);
            $tr.find("#postmoderation-verdict").addClass("task-ok");
            $tr.find("#postmoderation-icon").addClass("task-ok");
        }

        if(element.testing_status === "testing")
        {
            $tr.find("#system-verdict").text(file.queue.verdict_status_text.testing);
            $tr.find("#system-verdict").addClass("task-testing");
            $tr.find("#system-icon").addClass("task-testing");
        }
        if(element.testing_status === "pending")
        {
            $tr.find("#system-verdict").text(file.queue.verdict_status_text.pending);
            $tr.find("#system-verdict").addClass("task-pending");
            $tr.find("#system-icon").addClass("task-pending");
        }
        if(element.testing_status === "reject")
        {
            $tr.find("#system-verdict").text(file.queue.verdict_status_text.reject_by_system);
            $tr.find("#system-verdict").addClass("task-reject");
            $tr.find("#system-icon").addClass("task-reject");
        }
        if(element.testing_status === "accepted")
        {
            $tr.find("#system-verdict").text(file.queue.verdict_status_text.accepted);
            $tr.find("#system-verdict").addClass("task-ok");
            $tr.find("#system-icon").addClass("task-ok");
        }

        $tr.find("#postmoderation-verdict").attr("title", "<span class='tooltip-title'>" + file.queue.popovers_text.postmoderation_text +"</span>");
        $tr.find("#system-verdict").attr("title", "<span class='tooltip-title'>" + file.queue.popovers_text.testing_system_text +"</span>");

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

function AdditionalSidebarFunction()
{
    let collection = document.getElementsByClassName('verdict-holder');
    let textCollection = document.getElementsByClassName('text');
    for(let i = 0; i < collection.length; i++)
    {
        if(sessionStorage.getItem('isSidebarCollapsed') === "false")
        {
            collection[i].classList.add("verdict-holder-sidebar-opened");
            collection[i].classList.remove("verdict-holder-sidebar-closed");
        }
        else
        {
            collection[i].classList.remove("verdict-holder-sidebar-opened");
            collection[i].classList.add("verdict-holder-sidebar-closed");
        }
    }

    for(let i = 0; i < textCollection.length; i++)
    {
        if(sessionStorage.getItem('isSidebarCollapsed') === "false")
        {
            textCollection[i].classList.add("text-sidebar-opened");
            textCollection[i].classList.remove("text-sidebar-closed");
        }
        else
        {
            textCollection[i].classList.remove("text-sidebar-opened");
            textCollection[i].classList.add("text-sidebar-closed");
        }
    }
}