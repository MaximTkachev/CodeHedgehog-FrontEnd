const maxWidthToOpenSidebar = 770;
window.addEventListener('load', function (){
    let temp = localStorage.getItem('language');
    if(temp === "en")
        changeLanguage("EN");
    else
        changeLanguage("RU");
});

function changeLanguageOfPage(file){
    document.getElementById('main-title').innerText = file.task.main_title;

    document.getElementById('return_btn').innerText = file.task.return_btn;
    document.getElementById('page-title').innerText = file.task.title;
    document.getElementById('points').innerText = file.task.points;
    document.getElementById('number-of-solved').innerText = file.task.number_of_solved;
    document.getElementById('condition').innerText = file.task.condition.title;

    while(document.getElementById('condition-holder').childNodes.length > 0)
        document.getElementById('condition-holder').childNodes[0].remove();
    file.task.condition.description.split("\n").map(str =>{
        $("#condition-holder").append($("#p-template").clone().removeAttr('id').text(str))
    })

    document.getElementById("input-title").innerText = file.task.input.title;
    document.getElementById("input-description").innerText = file.task.input.description;
    document.getElementById("output-title").innerText = file.task.output.title;
    document.getElementById("output-description").innerText = file.task.output.description;

    document.getElementById('example-title').innerText = file.task.example.title;
    document.getElementById('table-input').innerText = file.task.example.table_header.input;
    document.getElementById('table-output').innerText = file.task.example.table_header.output;

    document.getElementById('memory-limit').innerText = file.task.right_block.memory_limit;
    document.getElementById('time-limit').innerText = file.task.right_block.time_limit;
    document.getElementById('input-file').innerText = file.task.right_block.input_file;
    document.getElementById('out-file').innerText = file.task.right_block.output_file;
    document.getElementById('send-btn').innerText = file.task.right_block.send_btn;
}
document.getElementById('small-text-desc').addEventListener('click', function (){
    if(document.getElementById('small-text-desc').innerText === "EN")
        changeLanguage("RU");
    else
        changeLanguage("EN");
});