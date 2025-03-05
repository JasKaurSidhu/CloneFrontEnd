



function navAnimation()
{
    var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function(){
    // console.log("Hello");
    //Whenever the mouse will enter we will write gsap code
    let tl = gsap.timeline()
   tl.to(".nav-bottom", {
        height: "21vh"
    })
    tl.to(".nav-part2 h5", {
        display: "block"
    })
// From is to make the things come out
    tl.to(".nav-part2 h5 span", {
        y: 0,//Where are they on screen before showing up
       // stagger : 0.1,
        //duration:0.7//Time they are taking to come out
        // All the elements will uplift one by one. More stagger value means more time to uplift
        stagger:{
            amount:0.8
            // It's the speed by which the elements come out
        }
    })
 })

  nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
 
 // It will go down in screen like before with to
    tl.to(".nav-part2 h5 span", {
        y: 20,
        stagger:{
            amount:0.8
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration:0.7
    })
    tl.to(".nav-bottom", {
        height: 0,
        duration:0.3
    })
 })
}




// This is the code to just show the image in one element without moving
// var elem = document.querySelector("#right-elem1");
// var image = document.querySelector("#right-elem1 img");

// elem.addEventListener("mouseenter", function()
// {
//     image.style.opacity = 1
// })





//-----------------------------Page2Animation-----------------------------------



function page2Animation()
{
    var rightElems = document.querySelectorAll(".right-elem");
//loop is running on each element of rightElems
rightElems.forEach(function(elem)
{       // elem is the div which contains data of the right-elem 
    //console.log(elem); Data is in the form of nodelist
    elem.addEventListener("mouseenter", function()
{
    //console.log(elem.getBoundingClientRect());//Useful to get the dimesnions of a rectangle
    // Child nodes will give the data of all the children inside div like img, h2 etc
    //console.log(elem.childNodes[1]); Now image is at 3rd position


    //elem.childNodes[3].style.opacity = 1;
    //Better way to do this is gd=sap to smoothen the process

    gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
    })
})

elem.addEventListener("mouseleave", function()
{
   // elem.childNodes[3].style.opacity = 0;

    gsap.to(elem.childNodes[3],{
    opacity:1,
    scale:0
})
})
elem.addEventListener("mousemove", function(dets)//dets are details or mouse events when we move the mouse
{
   // console.log(dets.x)
   // console.log(elem.getBoundingClientRect().x);//To know where it is at x or y axis
//The upper statement means from where the rectangle starts at x axis, y axis or height width

        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x - 25,
            y:dets.y - elem.getBoundingClientRect().y-70
        })
        //X axis - x axis where rectangle starts(Its a one value thing)

})
})
}


//-----------------------------Page3Animation-----------------------------------
function Page3Animation()
{
   
    var page3center = document.querySelector(".page3-center");
var video = document.querySelector(".page3 video");

page3center.addEventListener("click", function()
{
    video.play()
// To increase the size here
    gsap.to(video, {
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius : 0
    })
})

video.addEventListener("click", function()
{
    video.pause()
// To increase the size here
    gsap.to(video, {
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius : "30px"
    })
})


}

//-----------------------------Page4Animation-----------------------------------

var sections = document.querySelectorAll(".sec-right");

sections.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play()  //We can give autoplay in html in video tag
    })
})


navAnimation()

page2Animation()

Page3Animation()

