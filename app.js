$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-scrolling");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

// document.querySelector("#section-id").classList.add("new-class-name");
// document.querySelector("#section-id").classList.remove("new-class-name"); -->adds and removes classes to the list of class of #section-id
// document.querySelector("#section-id").classList.contains("new-class-name"); -->checks if there is a particular class in a  list of class of #section-id/ returns boolean
// document.querySelector("#section-id").classList.toggle("new-class-name"); -->adds and remove class/ returns boolean
// document.querySelector("#section-id").getAttribute("id"); -->gets the id
// document.querySelector("#section-id").setAttribute("id", "new-id"); -->sets the id to new-id
// document.querySelector("#section-id").setAttribute("href", "www.google.com");
// document.querySelector("#section-id").removeAttribute("href");

/** ------------------------
let box = document.querySelector(".caption");
let newElement = document.createElement("a");
//let newContent = document.createTextNode ("this is a link"); -->older browser
//newElement.appendChild(newContent); -->older browser
newElement.append("This is a link");
box.appendChild(newElement);
------------------------------ */
//document.querySelector("h1").style.fontSize = "2rem";
//document.querySelector("h1").style.cssText = "color: red; font-size: 4rem;";
//document.querySelector("h1").setAttribute("style", "color: red; font-size: 4rem;"); -->not used much
/**--------------------------------------
 * <a onclick="menuToggle()" class="menu-btn">menu</a>
 * let menuBtn = document.querySelector(".menu-btn");
 * let menu = document.querySelector(".menu");
 * let menuStatus = false;
 * 
 * menu.style.marginLeft = "-300px";
 * 
 * function menuToggle() {
 *  if(menuStatus == false) {
 *    menu.style.marginLeft = "0px";
 *    menuStatus = true;
 *  }
 *  else if(menuStatus == true) {
 *    menu.style.marginLeft = "-300px";
 *    menuStatus = false;
 *  }
 * }
 */
