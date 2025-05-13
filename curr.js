const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(" form,button");
const fromCurr = document.querySelector(".from ,select");
const toCurr = document.querySelector(".to ,select");


for (let select of dropdowns)
    {
    for (currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name === "from" && currcode === "USD"){
            newOption.selected = "selected";
        } g
        else if(select.name === "to" && currcode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption)
}
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag=(element)=>{
    console.log(element);
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("form, input");
    let amtVal = amount.value;
    console.log(amtVal);
    if(amtVal = "" || amtVal<0){
        amtVal=1;
        amount.value = "1";
    }


const URL = `${BASE_URL}/${fromCurr.value}/${toCurr.value}.json`;
let response = await fetch(URL);
console.log(response);
});
// heloooo