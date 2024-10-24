const btn=document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click",(e) =>  
{
    e.preventDefault()           
   if(btn.innerText ==="Light")  
   {
    container.style.backgroundColor ="black"
    btn.innerText="Dark";
   }
   else if(container.innerText =="Dark")
   {
    container.style.backgroundColor="White"
    btn.innerText="Light";
   }
})