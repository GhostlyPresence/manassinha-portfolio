let mybutton = document.getElementsByClassName("scroll-top")[0];

mybutton.addEventListener('click',()=>{
  document.documentElement.scrollTop = 0;
});