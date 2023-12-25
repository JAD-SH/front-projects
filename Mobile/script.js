let hours = document.querySelector(".cluck .hour span"),
    minutes = document.querySelector(".cluck .mine span"),
    btn = document.querySelector(".cont .btn"),
    lid = document.querySelector(".lid"),
    first_lid = document.querySelector(".lid .first-lid"),
    cover = document.querySelector(".lid .cover"),
    disctop = document.querySelector(".lid .disctop");

setInterval(
    function() {
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();     
    ACCTN(hours,hour);
    ACCTN(minutes,minute);
},1000);

function ACCTN(ele,text) {
    if(text<10){text='0'+text}
    ele.innerHTML="";
    return ele.appendChild(document.createTextNode(text));
}

function btn_clc() {
    $(cover).addClass('cover-off').removeClass('cover-on');
    setTimeout(() => {
        $(cover).css('display','contents');
    }, 500);
    setTimeout(() => {
        $(cover).css('display','block').addClass('cover-on').removeClass('cover-off');
    }, 1000*10);
}

$(lid).dblclick(function (){
    $(disctop).addClass('disctop-on').removeClass('disctop-off');
    $(first_lid).css('margin-left','100%');
    setTimeout(() => {
        $(first_lid).css('display','contents');
    }, 400);
    $(first_lid).addClass('cover-on');
    setTimeout(() => {
        $(disctop).removeClass('disctop-on').addClass('disctop-off');
        $(cover).css('display','block').removeClass('cover-off').addClass('cover-on');    
    }, 1000*30);
});