const maxWidthToOpenSidebar = 780;
window.addEventListener('load', function (){
    let temp = localStorage.getItem('language');
    if(temp === "en")
        changeLanguage("EN");
    else
        changeLanguage("RU");
});

function changeLanguageOfPage(file){
    document.getElementById('main-title').innerText = file.details_page.main_title;
    document.getElementById('return_btn').innerText = file.details_page.return_btn;
    document.getElementById('page-title').innerText = file.details_page.title_page;
    document.getElementById('page-date').innerText = file.details_page.date;
    document.getElementById('page-author').innerText = file.details_page.author;

    while(document.getElementById('content-holder').childNodes.length > 0)
        document.getElementById('content-holder').childNodes[0].remove();

    file.details_page.content.map(element =>{
        $post = $("#content-template").clone();
        $post.removeAttr("id");
        element.split("\n").map(el =>{
            $post.find("#content").append($("#p-template").clone().removeAttr('id').text(el));
        })

        $("#content-holder").append($post);
    })
}
document.getElementById('small-text-desc').addEventListener('click', function (){
    if(document.getElementById('small-text-desc').innerText === "EN")
        changeLanguage("RU");
    else
        changeLanguage("EN");
});