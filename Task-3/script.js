
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': ''
	}
};

const btn =document.querySelector(".btn")
const summarize=document.querySelector(".summarize")

btn.addEventListener("click", (e)=>
{
    e.preventDefault()
   const input=document.querySelector("#url").value
   const url=`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

   summarize.innerText = "Please wait article is summarazing"

   if (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input))
   {
    //regular expressions
    summarize.innerText ="Invalid URL ! please provide a correct URL"
   }
   else
   {
    fetch(url, options)
   .then(data => data.json())
   .then(data => 
    {
        //console.log(data?.summarize)
        summarize.innerText = data?.summarize
    })
   .catch(error =>
    {
        console.log(error)
    })
   }
})

/*fetch(url,options)
.then((data) =>
{
    return data.json()
})
.then((data) =>
{
    console.log(data)
})
.catch((error)=> 
{
    console.log(error)
}
)*/