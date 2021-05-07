menu=["Macaroni Pizza","Cheese Pizza","Chicken Pizza"];
function Get_Menu(){
    html_data="<ol>";
    for (var index = 0; index < menu.length; index++) {
    html_data=html_data+'<li>'+menu[index]+'</li>';
        
    }
    html_data=html_data=+"</ol>";
    console.log(html_data);
    document.getElementById("Menu_List").innerHTML=html_data;
}