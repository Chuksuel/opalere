const type = new Typed(".typing",{
  strings: ["", "with better satisfaction", "with better understanding","with over thousands of people", "with us and become your own master", "with us on our youtube channels","with us and pratice with us personal", "what are you waiting for ?","enroll now"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
 });
 window.addEventListener("scroll", function(e){
  const header = document.querySelector("header");
  header.classList.toggle("sticky" , window.scrollY > 0)
 })
 

// const back = document.querySelector("body")
//  const body = document.getElementById("inner");
//     body.onclick = function(){
//       body.classList.toggle("demo")
//       back.classList.toggle("demo")
//     }
   
