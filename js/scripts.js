window.onload=function(){
const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');



burger.addEventListener('click', () => { 

//toggle links
  nav.classList.toggle('nav-active');

//animate links
navLinks.forEach((link, index) => {
  if (link.style.animation) {
    link.style.animation = '';
  } 
  else {link.style.animation = 'navLinkFade 0.5s ease fowards ${index/7 + 1.5}s';
}
});
//Burger Animation
burger.classList.toggle('toggle');

});
}

navSlide();
  
}


/**
    * Disable right-click of mouse, F12 key, and save key combinations on page
    * By Arthur Gareginyan (https://www.arthurgareginyan.com)
    * For full source code, visit https://mycyberuniverse.com
    */
  //  window.onload = function() {
  //   document.addEventListener("contextmenu", function(e){
  //     e.preventDefault();
  //   }, false);
  //   document.addEventListener("keydown", function(e) {
  //   //document.onkeydown = function(e) {
  //     // "I" key
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
  //       disabledEvent(e);
  //     }
  //     // "J" key
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
  //       disabledEvent(e);
  //     }
  //     // "S" key + macOS
  //     if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
  //       disabledEvent(e);
  //     }
  //     // "U" key
  //     if (e.ctrlKey && e.keyCode == 85) {
  //       disabledEvent(e);
  //     }
  //     // "F12" key
  //     if (event.keyCode == 123) {
  //       disabledEvent(e);
  //     }
  //   }, false);
  //   function disabledEvent(e){
  //     if (e.stopPropagation){
  //       e.stopPropagation();
  //     } else if (window.event){
  //       window.event.cancelBubble = true;
  //     }
  //     e.preventDefault();
  //     return false;
  //   }
  // };


