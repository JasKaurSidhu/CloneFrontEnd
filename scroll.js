document.querySelectorAll('.card').forEach(jas=> {


    // card is the element that we want to animate and it can be any name and
    //now we changed card with jas
    gsap.to(jas,{
        scale:0.7,
        opacity:0,
    
        scrollTrigger:{
            // trigger:'.card3', THIS WILL TRIGGER THE ANIMATION WHEN THE CARD3 IS IN THE VIEWPORT
            //AND AFTER THAT EVERYTHING WILL BE TRIGGERED TOGETHER AT ONCE
            // trigger:'.card',  this will trigger the animation when the card is in the viewport
            trigger:jas,
            start:"top 15%",
            end:"bottom 15%",
            scrub:true,
            // markers:true,
        }
         
    })
    
})









