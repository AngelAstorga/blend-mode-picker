var result=document.getElementsByClassName("container_result");
var image="";
function changeImage(element){
    console.log(element);
    var id=element.id;
    var item=document.getElementById(id);
    console.log(item);
    var url="/assets/images/paisaje"+id+".jpg";
    console.log(url)
    result.item(0).style.backgroundImage="url("+url+")";
}

function change(element){
    var id=element.id;
    result.item(0).style.backgroundBlendMode=id;
    console.log(id);
}