const btn=document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click",(e) =>
{
    e.preventDefault()            //to stop the data to 
   if(btn.innerText ==="Light")   //light is a string
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