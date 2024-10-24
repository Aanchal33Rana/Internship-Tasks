const button = document.querySelector(".btn")
const password = document.querySelector(".password")
const generatePassword = (iteration) =>
{
    const chars = 
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX@#$%&^*"
    let password =""
    for(let i=1;i<=iteration;i++)
    {
       const index= Math.floor(Math.random() *chars.length)
       password = password+chars[index]
    }
return password
}
console.log(generatePassword(10))

button.addEventListener("click",(event)=>
{
    event.preventDefault()

    const length= Number(document.querySelector(".length").value) 
    if(length<=0)
    {
        alert("You have to put a positive number")
    }
    else
    {
        password.innerText= generatePassword(length)
    }
    
}
)