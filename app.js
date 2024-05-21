const jokeContainer=document.querySelector("#joke");
const btn=document.querySelector("#btn");
const url="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
 let getJoke= ()=>{
    jokeContainer.classList.remove("fade");
    fetch(url).then(data=>data.json()).then(item=>{
        jokeContainer.innerText=`${item.joke}`;
        jokeContainer.classList.add("fade");
    });
 }

 btn.addEventListener("click",getJoke);
 getJoke();