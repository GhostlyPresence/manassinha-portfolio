let headingTextSection = document.getElementsByClassName('heading')[0];
let navBar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll',()=>{
let val = window.scrollY;
headingTextSection.style.top = val*0.7 + 'px';
 navBar.style.top = val*0.8 + 'px'
 ;});