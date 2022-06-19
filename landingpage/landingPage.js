let now1 = document.getElementById("Book1")
now1.addEventListener ("click",BookNow)
let now2 = document.getElementById("Book2")
now2.addEventListener ("click",BookNow)
let now3 = document.getElementById("Book3")
now3.addEventListener ("click",BookNow)
let now4 = document.getElementById("Book4")
now4.addEventListener ("click",BookNow)
function BookNow(){
   alert("Your Car Is Successfully Booked!")
   console.log("inside")
}


//  let notify1 = document.getElementsByClassName("Notify1")
//  notify1.addEventListener("click",notifyme)
//  function notifyme(){
  
//  }

let Notifiy2=document.querySelector(".Notifiy1")
let wrapper=document.querySelector(".main-wraper")
Notifiy2.addEventListener("click", function(){
   wrapper.classList.add("active")
})

let closebtn1=document.querySelector(".End")

closebtn1.addEventListener("click", function(){
   wrapper.classList.remove("active")
})

wrapper.addEventListener("click", function(e){
   if (e.target!==wrapper)return
   wrapper.classList.remove("active")
})
  function selectModel(btn){
   let btns=document.getElementsByClassName("active-model")
   if(btns.length>0){
       btns[0].classList.remove("active-model")
   }
   btn.classList.add("active-model")
  }

  let some=document.querySelector(".class1")

  some.addEventListener("click", function(){
   wrapper.classList.remove("active")
  })
