document.querySelector(".toggle").addEventListener("click",toggleMenu)
function toggleMenu(){
    let navigation = document.querySelector(".navigation")
    let toggle=document.querySelector(".toggle")
    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
    
}




    var mainDiv = document.querySelector("#outsider")
    function scrollright() {
        mainDiv.scrollLeft += 350;
    }

    function scrollleft() {
         mainDiv.scrollLeft -= 350;
    }

    // for calculate popup modal
    let triggered=document.querySelector("#trigger");
    let wrapper= document.querySelector(".m_wrapper")
     triggered.addEventListener("click",function(){
        wrapper.classList.add("active")
    })
    // close button
    let closebtn=document.querySelector(".close")
    closebtn.addEventListener("click",function(){
        wrapper.classList.remove("active")
    })
    // close when you click anywhere on screen
    wrapper.addEventListener("click",function(e){
        if(e.target!==wrapper)return;
        wrapper.classList.remove("active")
    })
    // close pop up when u press esc on key board
    document.addEventListener("keydown",function(e){
        if(e.key==="Escape"){
            wrapper.classList.remove("active")
        }
    })

    // 2nd pop up modal
    let triggered2=document.querySelector("#trigger2");
    let wrapper2= document.querySelector(".m_wrapper2")
     triggered2.addEventListener("click",function(){
        wrapper2.classList.add("active2")
     })

     let closebtn2=document.querySelector(".close2")
    closebtn2.addEventListener("click",function(){
        wrapper2.classList.remove("active2")
        })

        wrapper2.addEventListener("click",function(e){
        if(e.target!==wrapper2)return;
        wrapper2.classList.remove("active2")
    })

    document.addEventListener("keydown",function(e){
        if(e.key==="Escape"){
            wrapper2.classList.remove("active2")
        }
    })

                 // popup modal 3
    let triggered3=document.querySelector("#trigger3");
    let wrapper3= document.querySelector(".m_wrapper3")
     triggered3.addEventListener("click",function(){
        wrapper3.classList.add("active3")
     })

         // close button
    let closebtn3=document.querySelector(".close3")
    closebtn3.addEventListener("click",function(){
        wrapper3.classList.remove("active3")
    })

        // close when you click anywhere on screen
        wrapper3.addEventListener("click",function(e){
        if(e.target!==wrapper3)return;
        wrapper3.classList.remove("active3")
    })

        // close pop up when u press esc on key board
        document.addEventListener("keydown",function(e){
        if(e.key==="Escape"){
            wrapper3.classList.remove("active3")
        }
    })


    let triggered4=document.querySelector("#trigger4")
    triggered4.addEventListener("click",function(){
        wrapper3.classList.add("active3")
     })
     let triggered5=document.querySelector("#trigger5")
    triggered5.addEventListener("click",function(){
        wrapper3.classList.add("active3")
     })

     let data = [
    {
        "company_name":"Mahendra",
        "models":[
            {
                "name":"XUV 500",
                "value":"51,646"
            },
            {
                "name":"TUV 300",
                "value":"41,323"
            },
            {
                "name":"KUV 100",
                "value":"36,146"
            },
            {
                "name":"Mazzarow",
                "value":"41,323"
            },
            {
                "name":"Scorpio",
                "value":"51,646"
            },
            {
                "name":"XUV 500 AT",
                "value":"51,646"
            }
        ]
    },
    {
        "company_name":"Maruti",
        "models":[
            {
                "name":"Baleno",
                "value":"36146"
            },
            {
                "name":"Dzire(Petroll)",
                "value":"41323"
            },
            {
                "name":"Celerio",
                "value":"36,146"
            },
            {
                "name":"Ertiga",
                "value":"41,323"
            },
            {
                "name":"Brezza",
                "value":"41,323"
            },
            {
                "name":"Wagon R",
                "value":"36,146"
            }
        ]
    },
    {
        "company_name":"Tata",
        "models":[
            {
                "name":"Tiago",
                "value":"36,146"
            },
            {
                "name":"Tigor",
                "value":"36,146"
            },
            {
                "name":"Hexa",
                "value":"51,646"
            },
            {
                "name":"Nexon MT",
                "value":"41,323"
            }
        ]
    },
    {
        "company_name":"Nissan",
        "models":[
            {
                "name":"Kwid",
                "value":"36,146"
            },
            {
                "name":"Kicks (Petrol)",
                "value":"36,146"
            }
        ]
    },
    {
        "company_name":"Honda",
        "models":[
            {
                "name":"Amaze",
                "value":"41,323"
            }
        ]
    },
    {
        "company_name":"Hundai",
        "models":[
            {
                "name":"Grand i10",
                "value":"36,146"
            },
            {
                "name":"Verna",
                "value":"41,323"
            },
            {
                "name":"i20",
                "value":"36,146"
            },
            {
                "name":"Santro",
                "value":"36,146"
            },
            {
                "name":"Excent",
                "value":"41,323"
            },
            {
                "name":"Creta",
                "value":"41323"
            },
            {
                "name":"Creta AT",
                "value":"41,323"
            }
        ]
    },
    {
        "company_name":"Dutsun",
        "models":[
            {
                "name":"Redi-Go",
                "value":"36,146"
            }
        ]
    },
    {
        "company_name":"Ford",
        "models":[
            {
                "name":"Aspire",
                "value":"36,146"
            },
            {
                "name":"Ecosport",
                "value":"41,323"
            },
            {
                "name":"Figo",
                "value":"36,146"
            },
            {
                "name":"Freestyle",
                "value":"36,146"
            }
        ]
    },
    {
        "company_name":"Toyota",
        "models":[
            {
                "name":"Corolla",
                "value":"41,323"
            },
            {
                "name":"Etios",
                "value":"41,323"
            },
            {
                "name":"Glanza (Petrol)",
                "value":"36,146"
            },
            {
                "name":"Toyota Yaris",
                "value":"41,323"
            }
        ]
    },
    {
        "company_name":"Volkswagan",
        "models":[
            {
                "name":"Polo",
                "value":"36,146"
            }
        ]
    }
]

console.log(data)

    let company = document.getElementById("company");
    
    for(let i=0;i<data.length;i++){

        company.options.add(new Option(data[i].company_name, data[i].company_name))

       
    }

    getCompanyOptions({value:data[0].company_name})

    function getCompanyOptions(company_name){
        let modal = document.getElementById("model");
        model.options.length = 0
        let company = data.find(item=>item.company_name == company_name.value)

            for(let i=0;i<company.models.length;i++){
    
                model.options.add(new Option(company.models[i].name, company.models[i].name))
            }
    }

    function setAmount(model){
        console.log(model.value)
        let company = data.find(item=>item.company_name == document.getElementById("company").value)
        let models = company.models.find(item=>item.name == model.value)
        document.getElementById("amount").innerHTML = models.value
          
    }


    
        function selectModel(btn){
            let btns = document.getElementsByClassName("active-model")
            if(btns.length > 0){
                btns[0].classList.remove('active-model');
            }

            btn.classList.add('active-model');
        }






