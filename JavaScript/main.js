
// check if theres local storage color option

let mainColors = localStorage.getItem("color_option")


if (mainColors !== null) {

  document.documentElement.style.setProperty("--main-color", mainColors)

  // check for active class 

  document.querySelectorAll(".colors-list li").forEach(element => {

    // remove active class from all childrens
    element.classList.remove("active")


    //Add active class to element with datat color => Localstorage 
    if (element.dataset.color === mainColors) {
      //Add active class to element
      element.classList.add("active")
    }

  });


}



// toglle spin class pn icon

document.querySelector(".togle-setting .gear").onclick = function () {

  // toglle class fa-spin to rotate itself

  this.classList.toggle("fa-spin")

  // togle class open on main setting box
  document.querySelector(".setting-box").classList.toggle("open")

};


// switch colors
const colorsLi = document.querySelectorAll(".colors-list li")
// start looping of LiS and colors
colorsLi.forEach(li => {

  li.addEventListener("click", (e) => {



    // set color on root

    document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

    // set color in Localstorage
    localStorage.setItem("color_option", e.target.dataset.color)

    // remove active class from all childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active")
    });
    // add active class to itself
    e.target.classList.add("active")


  })


});



// ******************************
// // start landing page

// let landing = document.querySelector(".landing");

// // Get array of Imgs

// let imgsArray = ["/images/landing-photo-5.jpg", '/images/landing-photo-2.webp'];

// // Change background image url
// // landing.style.backgroundImage = "url('/images/landing-photo-1.jpg')";

// // get random number



// setInterval(() => {
//   let ranNum = Math.floor(Math.random() * imgsArray.length)
//   landing.style.backgroundImage = `url('${imgsArray[ranNum]}')`;
// }, 10000);

// ******************************

let skills = document.querySelector(".skills ")

console.log(skills)

const toop = document.querySelector(".top")
window.onscroll = function () {

if(window.scrollY >= 600){
  toop.classList.add("opacity")
}else{
  toop.classList.remove("opacity")
}

toop.addEventListener("click", function top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
  if (window.scrollY >= skills.offsetTop - 609) {

    let allSkils = document.querySelectorAll(".prog-holder .prog span")

    allSkils.forEach(skill => {

      skill.style.width = skill.dataset.progress

      // console.log(skill.dataset.progress);
    })

  }
  
  

}

let bar = document.querySelector("header .bar")
let linksOfMobile = document.querySelector("header ul")
let linksOfMobileAaA =document.querySelectorAll("header ul li a")
let sts = document.querySelector(".stx")
let lasts = document.querySelector(".lastx")
let mids = document.querySelector(".ndx")

console.log(mids)

bar.onclick = function () {
  linksOfMobile.classList.toggle("spec")
  linksOfMobileAaA.style.csstext="pointer-events: visible ;"
  sts.classList.toggle("xs")
  lasts.classList.toggle("xtl")
  mids.classList.toggle("xnd")
}
// ************************
//




// bar.addEventListener("click", function () {
  //   linksOfMobileLis.style.cssText = "width:100%;"
  //   linksOfMobile.style.cssText = "width:100%;padding:7px;text-align:center;display:flex;flex-direction:column;position:absolute;top:100%;background-color:#000; "
  // })
  
  
  // x.onclick = function () {
    //   linksOfMobile.style.cssText = "display:none; transition:0.3s ease linear;"
    // }