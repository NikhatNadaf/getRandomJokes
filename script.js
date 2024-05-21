const para=document.querySelector("#joke");
const btn=document.querySelector("#btn");
const url="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";


const getJokes=async()=>{
    let respons=await fetch(url);
    let data= await respons.json();
    para.innerText=data.joke;

}
btn.addEventListener("click",getJokes);
getJokes();