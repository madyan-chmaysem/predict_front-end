const container = document.querySelector('#main-container')
const div = document.createElement('div');
container.appendChild(div);
const img=document.createElement("img")
div.appendChild(img)
div.classList.add("imagecontainer")
img.classList.add("center")
fetch("https://dog.ceo/api/breeds/image/random")
.then(res=>res.json())
.then(data=>{ 
    img.src =data.message

})

const div1 = document.createElement('div');
container.appendChild(div1)
const p=document.createElement("p")
div1.appendChild(p)
p.textContent=" What name do you want to predict for?";
const inp=document.createElement("input")
inp.placeholder="enter the name"
div1.appendChild(inp)
const div2 = document.createElement('div');
div1.appendChild(div2)
div2.classList.add("item")
const p1=document.createElement("p")
div2.appendChild(p1)
p1.textContent="Predict!"
const div3=document.createElement("div")
container.appendChild(div3)
    const P_gendre=document.createElement("p")
    div3.appendChild(P_gendre)
    const div4=document.createElement("div")
    container.appendChild(div4)
    const P_age=document.createElement("p")
    div4.appendChild(P_age)
    const div5=document.createElement("div")
    container.appendChild(div4)
    const P_natio=document.createElement("p")
    div4.appendChild(P_natio)

div2.addEventListener("click",()=>{
    
   

    const val=inp.value
    
  
     const genderAPI=" https://api.genderize.io?name="+val

  
     fetch(genderAPI)
    .then(res=>res.json())
    .then(data=>{ 
        P_gendre.textContent="gender is:"+ data.gender
    })
      
       const P_age1=" https://api.agify.io/?name="+val
      
     fetch(P_age1)
    .then(res=>res.json())
    .then(data=>{ 
       
      
       P_age.textContent="age is:"+ data.age


})
const Pnatio1=" https://api.nationalize.io/?name="+val

fetch(Pnatio1)
.then(res=>res.json())
.then(data=>{ 

    P_natio.textContent="nationality is : "+data.country[0]["country_id"]+" / "+data.country[1]["country_id"]


})


})
