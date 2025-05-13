const url = "https://jsonplaceholder.typicode.com/posts";
const para = document.querySelector("#facts");
const btn = document.querySelector("#btn");
const getfacts = async ()=>{
    console.log("Getting data...");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    para.innerText = data[1].title;
};
btn.addEventListener("click",getfacts);