
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let secPosition = (3000/60) * (-second+1);
let minPosition = (3000/60) * (-minute+1);
let hourPosition = (1200/24) * (-hour+1);



$(window).ready(() => {

    if(second <= 1){
        afterSec(second);
    }
    if(second >= 58){
        beforeSec(second);
    } 

    if(minute <= 1){
        afterMin(minute);
    }
    if(minute >= 58){
        beforeMin(minute);
    } 

    if(hour <= 1){
        afterHour(hour);
    }
    if(hour >= 22){
        beforeHour(hour);
    } 

    console.log(hour);
    $('.all-seconds').css('top',`${secPosition}px`);

    $('.all-minutes').css('top',`${minPosition}px`);
    $(`.min-${minute}`).addClass('min-active');

    $('.all-hours').css('top',`${hourPosition}px`);
    $(`.hour-${hour}`).addClass('hour-active');
    
}); 


for (let index = 0; index < 60; index++){

    let sec = document.createTextNode(index);
    let min = document.createTextNode(index);

    if(index < 24){
        let hour = document.createTextNode(index);
        if(index < 10){
            hour = document.createTextNode('0'+index);
        }
        let hourC = document.createElement('div')
        $(hourC).append(hour).addClass('items').addClass('hour-'+index);
        $('.all-hours').append(hourC);
    }

    if(index < 10){
        sec = document.createTextNode('0'+index);
        min = document.createTextNode('0'+index);
    }

    let secC = document.createElement('div')
    $(secC).append(sec).addClass('items').addClass('sec-'+index);
    $('.all-seconds').append(secC);
    
    let minC = document.createElement('div')
    $(minC).append(min).addClass('items').addClass('min-'+index);
    $('.all-minutes').append(minC);

}

function afterSec(second){
    for (let index = 0; index < 5; index++) {
        $('.all-seconds').prepend($('.all-seconds').children(":last"));
    }
    return secPosition = (3000/60) * (-4-second);
}
function beforeSec(second){
    for (let index = 0; index < 5; index++) {
        $('.all-seconds').children(":first").appendTo($('.all-seconds'));
    }
    return secPosition += (3000/60) * (4+second-58);
}
function afterMin(minute){
    for (let index = 0; index < 5; index++) {
        $('.all-minutes').prepend($('.all-minutes').children(":last"));
    }
    return minPosition = (3000/60) * (-4-minute);
}
function beforeMin(minute){
    for (let index = 0; index < 5; index++) {
        $('.all-minutes').children(":first").appendTo($('.all-minutes'));
    }
    return minPosition += (3000/60) * (4+minute-58);
}

function afterHour(hour){
    for (let index = 0; index < 5; index++) {
        $('.all-hours').prepend($('.all-hours').children(":last"));
        console.log($('.all-hours').children(":last"));
    }
    return hourPosition = (1200/24) * (-4-hour);
}
function beforeHour(hour){
    for (let index = 0; index < 5; index++) {
        $('.all-hours').children(":first").appendTo($('.all-hours'));
    }
    return hourPosition += (1200/24) * (4+hour-22);
}

let secStatus = false ;

setInterval(
    function() {
        
        let date = new Date();
        let second = date.getSeconds();
     
        $('.sec-active').removeClass('sec-active');
        $(`.sec-${second}`).addClass('sec-active');

        
             $('.all-seconds').children(":first").css('height','0px');
            setTimeout(() => {
                
                $('.all-seconds').children(":first").appendTo($('.all-seconds'));
                $('.all-seconds').children(":last").css('height','50px');
            }, 300);
         secStatus=true;
        if(second == 0){
            let minute = date.getMinutes();
            nextMin(minute);
            if(minute == 0){
                let hour = date.getHours();
                 nextHour(hour);
            }
         }      
},1000);

function nextMin(minute){
    $('.min-active').removeClass('min-active');
    $(`.min-${minute}`).addClass('min-active');
        $('.all-minutes').children(":first").css('height','0px');
    setTimeout(() => {
        $('.all-minutes').children(":first").appendTo($('.all-minutes'));
        $('.all-minutes').children(":last").css('height','50px');
    }, 300);
  }

function nextHour(hour){
    $('.hour-active').removeClass('hour-active');
    $(`.hour-${hour}`).addClass('hour-active');
    $('.all-hours').children(":first").css('height','0px');
    setTimeout(() => {
        $('.all-hours').children(":first").appendTo($('.all-hours'));
        $('.all-hours').children(":last").css('height','50px');
    }, 300);
  }