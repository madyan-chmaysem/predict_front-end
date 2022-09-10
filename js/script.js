const container = document.querySelector('#main-container')
const div = document.createElement('div');
container.appendChild(div);
const img=document.createElement("img")
div.appendChild(img)
div.classList.add("imagecontainer")
img.classList.add("center")
img.src ="./images/download.jpg"
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
