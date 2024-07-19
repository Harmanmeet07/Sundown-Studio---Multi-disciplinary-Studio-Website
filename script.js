const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC=document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})
var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })






function changeContent(view) {
    const text = document.getElementById('text');
    const image = document.getElementById('image');

    // Remove highlight class from all
    document.getElementById('design').classList.remove('highlighted');
    document.getElementById('project').classList.remove('highlighted');
    document.getElementById('execution').classList.remove('highlighted');

    // Add highlight class to the selected
    if (view === 1) {
        text.innerHTML = 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.';
        image.src = 'design.png';
        document.getElementById('design').classList.add('highlighted');
    } else if (view === 2) {
        text.innerHTML = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.';
        image.src = 'project.webp';
        document.getElementById('project').classList.add('highlighted');
    } else if (view === 3) {
        text.innerHTML = 'We\'re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.';
        image.src = 'execution.webp';
        document.getElementById('execution').classList.add('highlighted');
    }
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var loader=document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4200)



