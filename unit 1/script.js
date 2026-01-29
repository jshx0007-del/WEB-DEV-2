// DOM (Document Object Model): It represents the structure of a web page as a tree of objects, 
// allowing JavaScript to access, manipulate, and change the content, structure, and style of the page dynamically without reloading it. 
/* let heading= document.getElementById("heading")
let head2= document.getElementsByClassName("head2")
console.log(head2) //Returns as array  */
/* let h1 = document.querySelector(`#heading`);
console.log(h1);
let h2=document.querySelector(`.head2`);
console.log(h2);
let h= document.querySelector(`h1`);
console.log(h);
h.style.color = `blue`;
h1.innerText = `Hey guys`; */

/* let h = document.querySelector(`#head`);
let para = document.querySelector(`.para`);
let div = document.querySelector(`div`);

h.innerText= `Hello there`;
para.style.color = `yellow`;
div.style.height = `200px`;
div.style.width = `200px`;
div.style.backgroundColor = `lightblue`;

console.log(para.innerText);
console.log(div.innerText);
console.log(h.innerText); */

/* let div = document.getElementById(`diva`)
div.innerHTML = `<h1>Hello Tag</h1>
                <p>Hello para</p>
                <img src="" alt="This is an image">`

div.style.height = `200px`;
div.style.width = `200px`;
div.style.backgroundColor = `lightblue`;

let head2 = document.getElementById(`head2`);
head2.innerText= `hello  

head 2`; // it considers the space. if display:none is set, it wont show it 

// head2.textContent = `Hello 2`; // it removes extra space. it shows the display:none vala content
 */

/* let box1 = document.querySelector(`#div1`);
let box2 = document.querySelector(`#div2`);
let box3 = document.querySelector(`#div3`);

box1.style.backgroundColor = `black`; // inline style
box1.style.color = `white`;
box1.style.height = `100px`;
box1.style.width = `100px`;

box2.style.backgroundColor = `red`; // inline style
box2.style.color = `blue`;
box2.style.height = `100px`;
box2.style.width = `200px`;

box3.style.backgroundColor = `yellow`; // inline style
box3.style.color = `orange`;
box3.style.height = `150px`;
box3.style.width = `200px`; */

// CLASSLIST
// toggle: adds the class name if its not present there and removes the class name if its present
// let box = document.querySelector(`div`)
// box.classList.add(`box2`) // adds box2
// box.classList.remove(`box3`) // removes box3
// box.classList.toggle(`box7`) // adds box7
// box.classList.toggle(`box2`) // removes box2

// let res = box.classList.contains(`box7`) // checks if the class is present 
// console.log(res) // true
// let res2 = box.classList.contains(`box3`)
// console.log(res2) // false

// let para = document.querySelector(`p`)
// para.classList.add(`box7`)
// let box = document.querySelector(`div`)
// let btn1 = document.querySelector(`#add`)
// function addstyle() {
//     box.classList.add(`box7`)
// }
// // btn.addEventListener(): takes two argument, first - what action/event, second- which function
// btn1.addEventListener(`click`,addstyle)
// let btn2 = document.querySelector(`#remove`)
// function removestyle() {
//     box.classList.remove(`box7`)
// }
// btn2.addEventListener(`click`,removestyle)
// let body = document.querySelector(`body`)
// let box = document.createElement(`div`);
// box.innerText = `Div created!`
// body.appendChild(box)

// let box = document.querySelector(`div`)
// let inp = document.querySelector(`input`)

// box.addEventListener(`mouseover`, function(){
//     console.log(`Box - Mouse Over`)
// })
// inp.addEventListener(`keydown`, function(event){
//     console.log(`Key Presses: `, event.key)
// })

// inp.addEventListener(`keyup`,function(){
//     console.log(`Key Presses`)
// } )
// let form = document.querySelector(`form`)
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(`Form Submitted`)
// })

/* et inp1 = document.querySelector(`#i1`)

let inp2 = document.querySelector(`#i2`)
inp1.addEventListener(`keyup`, function(){
    console.log(`Key Pressed`)
})
inp2.addEventListener(`keydown`, function(){
    console.log(`Key Pressed`)
})
let box = document.querySelector(`div`)
box.addEventListener(`mouseover`,function(){
    console.log(`hover`)
})
let btn1 = document.querySelector(`#btn1`)
btn1.addEventListener(`click`, function(event){
    event.preventDefault();
    console.log(`Clicked`)
})
let form = document.querySelector(`form`)
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(`Form Submitted`)
}) */

// let outer = document.querySelector(`#outer`)
// let middle = document.querySelector(`#middle`)
// let inner = document.querySelector(`#inner`)
// bubbling goes from inner child to outer parent: false
// capturing goes from outer to inner: true
// outer.addEventListener(`click`, function(){
//     alert(`Outer Div`) 
// })
// middle.addEventListener(`click`, function(){
//     alert(`Middle Div`)
// })
// inner.addEventListener(`click`, function(event){
//     event.stopPropagation();
//     alert(`Inner button`)
// })

var a= 5;
function addition(num){
    var ans = num+num;
    return ans;
}
var res1 = addition(a)
var res2 = addition(10)

/* 
    js execution context handles how js code is run
    there are 2 types of execution context
    1. Global ec: created when js file is run
        there r two phases in gec: 1. Memory allocation phase/ Variable enviornment: 
            a: undefined //when variable is declared with var its stored as undefined // starting from line 156
            addition: {
                var ans: num+num
                return ans;
            }
            res1: undefined
            res2: undefined
        2. Execution phase/ thread of execution:
            a = 5
            //function is skipped until its envoked
            another 
    2. function or local ec: created when the function is called
 */