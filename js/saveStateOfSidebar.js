window.addEventListener('load', function (){

    let isSidebarCollapsed = sessionStorage.getItem("isSidebarCollapsed");
    console.log(isSidebarCollapsed);

    if(isSidebarCollapsed === null)
        isSidebarCollapsed = true;


    if(isSidebarCollapsed === "false")
    {
        collapseSidebar(false);
    }
});