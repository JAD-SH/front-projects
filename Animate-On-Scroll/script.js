
SOSFunction();
function SOSFunction(){

  let sos_slide = document.querySelectorAll('*[data-sos]');
  if(sos_slide.length > 0){
    
    const slideOnScrollObserver_options = {
      //rootMargin:'-50px',
      //threshold:0.15,
    };
    const slideOnScrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(entry.target.getAttribute('data-sos') ,entry.isIntersecting);
        if(entry.target.getAttribute('data-sos-once') == 'true' ){
          if(entry.isIntersecting){
            slideOnScrollObserver.unobserve(entry.target);
          }
        }
          
      });
    },slideOnScrollObserver_options);
    
    sos_slide.forEach(ele => {
      slideOnScrollObserver.observe(ele);
    });
  }
}
 