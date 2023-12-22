let h=document.querySelector('.test-h');
let m=document.querySelector('.test-m');
let s=document.querySelector('.test-s');

let date = new Date;
let x=270+date.getHours()*30+(date.getMinutes()/60)*30;
let y=270+date.getMinutes()*6;
let z=270+date.getSeconds()*6;

setInterval(function(){
    h.style.transform = `rotateZ(${x}deg)`;
    x+=360/(60*60*24);
    
    m.style.transform = `rotateZ(${y}deg)`;
    y+=360/(60*60);
    
    s.style.transform = `rotateZ(${z}deg)`;
    z+=360/(60);
},1000);
