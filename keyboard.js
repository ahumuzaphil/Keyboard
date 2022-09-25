const keyEl = document.querySelectorAll("#keys");
console.log(keyEl)
const inputEl = document.querySelector(".input_el");
const spaceEl = document.querySelector(".space");
console.log(spaceEl)
const upperEl = document.querySelector(".upper");

const delEl = document.querySelector(".del");
const ulEl = document.querySelector(".ul_el");
const sendEl = document.querySelector("#send");
const doneEl = document.querySelector(".done");
const capEl = document.querySelectorAll(".cap");
const clearEl = document.querySelector(".symbols")

upperEl.addEventListener('click',upper)
 function upper(){
    for(let i = 0;i < capEl.length;i++){
    capEl[i].style.textTransform = 'uppercase';
    }
    
 //console.log(upperEl.style)
}

for(let i=0;i<keyEl.length;i++){
    keyEl[i].addEventListener('click',toinput)

    function toinput(event){
        event.preventDefault();
        
        inputEl.value += keyEl[i].innerHTML 

    }
}

spaceEl.addEventListener("click", space)
function space(){
    let gap = " "
    inputEl.value += gap
    console.log(inputEl.value)

}



delEl.addEventListener('click', del)
function del(){

    inputEl.value = inputEl.value.substring(0,inputEl.value.length-1)
}

sendEl.addEventListener("click",message);

function message(){
const listEl = document.createElement("div");
listEl.classList.add("list_el");

const item = document.createElement("li");
item.classList.add("li_el")
listEl.appendChild(item);
item.textContent = inputEl.value
console.log(item.innerHTML)

ulEl.appendChild(listEl)
inputEl.value = " "
console.log(item.textContent)
}

doneEl.addEventListener('click',newline);
function newline(){
     message()
}

clearEl.addEventListener('click',clear);

function clear(){
    ulEl.innerHTML = " "
}
