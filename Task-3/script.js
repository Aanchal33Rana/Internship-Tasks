
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0e6e67134cmsh0384fe594e288a8p1a0fd3jsn89e69be5146e',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn =document.querySelector(".btn")
const summarize=document.querySelector(".summarize")

btn.addEventListener("click", (e)=>
{
    e.preventDefault()
   const input=document.querySelector("#url").value
   const url=`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

   fetch(url, options)
   .then(data=> data.json())
   .then(data=> 
    {
        //console.log(data?.summarize)
        summarize.innerText = data?.summarize
    })
   .catch(error =>
    {
        console.log(error)
    })
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