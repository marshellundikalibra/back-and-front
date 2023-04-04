console.log(document.getElementById('title'));
let title = document.getElementById('title');
let list=document.getElementsByTagName('ul')
let items=document.getElementsByClassName('item');
let inp= document.getElementsByName('inp-name');
console.log(inp)



let title = document.querySelector('#title');
let list=document.querySelectorAll('ul');
let items=document.querySelectorAll('.item');
let inp=document.querySelectorAll('[name="inp-name"]')
console.log(inp);



// Какая разница между nodeList and collection

innetHTML отвечает за содержимое тэга

let items = document.getElementsByClassName('item'); #динамически добавился еще один элемент
let items2=document.querySelectorAll('.item');
let list=document.getElementsByTagName('ul');
// list[0].innerHTML='<li class="item">New elem</li>'
list[0].innerHTML+='<li class="item">New elem</li>'
console.log(list)
console.log(items)
console.log(items2)

for (let i=0; i<items2.length; i++){
    console.log(items[i])
}




innerTEXT
innerHTML


let example=document.getElementById('hello');
// console.log(examole.innerHTML);
// example.innerText='New Data';
// console.log(example.innerHTML);








let h2s=document.querySelectorAll('h2'); //почему node потому что мы использовали query
// для HTML Collection мы не можем использовать методы массивов можно применять только node list
let h2s=document.getElementsByTagName('h2');
console.log(h2s);
h2s.forEach(item =>{
    console.log(item);
    item.innerText='Hello World'
})



let items=document.querySelectorAll('.item');
console.log(items);
items.forEach((item, index)=>{
    item.innerHTML= `${item.innerHTML} ${index + 1}`
    item.getElementsByClassName.color='red'
    item.style.backgroundColor='green'

    if (index % 2 !==0){
        item.style.backgroundColor='pink'
    }
})




// JS METHODS TO WORK WITH HTML

// создание элемента

let newElem=document.createElement('div');
newElem.innerHTML= <span> I am a new element</span>




// добавление элемента 

let container=document.querySelectorAll('.container');
console.log(container)
container[0].appendChild(newElem);
newElem.style.color='brown';
newElem.style.fontSize='25px';



// append принимает дом элементы и строки
// appendchild принимает только дом элемент

let elem1=document.createElement('div');
let elem2=document.createElement('div');
let elem3=document.createElement('div');


elem1.innerText='Element 1';
elem2.innerText='Element 2';
elem3.innerText='Element 3';


container[0].append(elem1);  //push
container[0].prepend(elem2); //unshift
container[0].appendChild(elem3);


// //удаление элемента
// container[0].removeCjild(elem1);

// добавление и удаление классы 
elem1.classList.add('foo');
elem1.classList.remove('foo')
elem1.classList.toggle('foo');



// let dta=new Date().getHours();
// if (date > 21){
//     document.body.vlassList.add('theme-dark')
// }else{
//     document.body.classList.add('theme-light')
// }




let res=prompt('Enter your name:');
let title=document.getElementById('title');
title.innerText=`${title.innerText}, ${res}`;

title.innerText='<span>Kani</span>'