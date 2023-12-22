let container=document.querySelector('.container');

let items1=document.querySelector('.items1');
let item1=document.querySelector('.item1');
let ex1=$(items1).offset().left;
let ey1=$(items1).offset().top;

let items2=document.querySelector('.items2');
let item2=document.querySelector('.item2');
let ex2=$(items2).offset().left;
let ey2=$(items2).offset().top;

let WHEye1=[
    container.offsetWidth,container.offsetHeight,
items1.offsetWidth,items1.offsetHeight,
item1.offsetWidth,item1.offsetHeight,];

let WHEye2=[
    container.offsetWidth,container.offsetHeight,
    items2.offsetWidth,items2.offsetHeight,
    item2.offsetWidth,item2.offsetHeight,];

function myFunction(e) {
    let mx = e.clientX;
    let my = e.clientY;
    $(item1).offset({
        top:(((WHEye1[3]-WHEye1[5])*my)/WHEye1[1])+ey1,
        left:(((WHEye1[2]-WHEye1[4])*mx)/WHEye1[0])+ex1,
    });
    $(item2).offset({
        top:(((WHEye2[3]-WHEye2[5])*my)/WHEye2[1])+ey2,
        left:(((WHEye2[2]-WHEye2[4])*mx)/WHEye2[0])+ex2,
    });
    
}