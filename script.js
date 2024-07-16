 var menuIcon = document.querySelector(".togle-btn")
 var sidebar = document.querySelector(".side-bar")
 var filter = document.querySelector(".filter")

 menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    filter.classList.toggle("large-filter")
 }