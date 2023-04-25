const header = document.querySelector("header");
window.onscroll=()=>{
  header.classList.toggle('scrollHeader', window.scrollY > 0)
}

const bars = document.querySelector(".bars");
const navlinks = document.querySelector(".nav-links");

bars.onclick=()=>{
  bars.classList.toggle("fa-times");
  if(bars.classList.contains("fa-times")){
    navlinks.classList.add("activeNav");
  }else{
    navlinks.classList.remove("activeNav");
  }
}