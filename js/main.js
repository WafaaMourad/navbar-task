window.addEventListener("scroll",function(){

    var scrollValue = window.scrollY;
    var navbar = document.querySelector(".navbar");

    if(scrollValue>200){
        navbar.setAttribute("class","navbar md:navbar-expand bg-primary");

    }else{
        navbar.setAttribute("class","navbar md:navbar-expand bg-danger");

    }
});