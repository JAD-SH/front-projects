    let tenxsten = Array.from(document.querySelectorAll(".tenxsten .con div")),
        rng = document.querySelector("input"),
        cercl = document.querySelector(".up-body-led .cercl"),
        container  =  document.querySelector(".container"),
        ubl = document.querySelector(".up-body-led"),
        dbl = document.querySelector(".down-body-led"),
        dbla = document.querySelector(".down-body-led .after"),
        dblb = document.querySelector(".down-body-led .before"),
        arled = [cercl,dbl,dblb,dbla,ubl];
        
    
    function read(evtType) {
        rng.addEventListener(evtType, readclc);
    }

    read("mousedown");
    read("change");
    read("mousemove");
    read("keydown"); 

    
    function readclc(){
        let rngVal = this.value,
            x = rngVal/7,
            z = rngVal/3,
            y = `rgba(255, 100, 100, ${rngVal/150})`,
            xl = rngVal/2,
            zl = rngVal/1.2,
            yl = '#ffffb7';

        $(tenxsten).css("border-color", `${y}`).css("box-shadow",`${x}px ${x}px ${z}px ${y}, -${x}px -${x}px ${z}px ${y}, ${x}px -${x}px ${z}px ${y}, -${x}px ${x}px ${z}px ${y}`);
        
        arled.forEach(element => {
            $(element).css("background",`${yl}`).css("box-shadow",`${xl}px ${xl}px ${zl}px ${yl}, -${xl}px -${xl}px ${zl}px ${yl}, ${xl}px -${xl}px ${zl}px ${yl}, -${xl}px ${xl}px ${zl}px ${yl}`);
            if(rngVal == 0){
                $(element).css("background", '#fff');
            }              
        });
        if(rngVal == 0){
            $(tenxsten).css("border-color", '#75757541');
        }              

        $(container).css("background", `radial-gradient(circle, rgba(255, 255, 255, ${rngVal/150}) 35%, #331f4a)`);
    }
