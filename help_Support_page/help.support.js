document.querySelector(".toggle").addEventListener("click",toggleMenu)
function toggleMenu(){
    let navigation = document.querySelector(".navigation")
    let toggle=document.querySelector(".toggle")
    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
    
}