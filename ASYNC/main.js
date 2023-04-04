for (let i=0; i<100; i++){}
console.log('I am here');




async

setTimeout(()=>{
    console.log('1');
})

console.log('2');










function func(){
    console.log('hello function 1');

}
setTimeout(func, 1000);

setTimeout(()=>{
    console.log('hello setTimeout 2');
} ,1000);

console.log('Hello console.log 3')











const id = setTimeout(() =>{
console.log(1);
}, 1000);


const id2=setTimeout(()=>{
    console.log(2);
}, 1500);

console.log(id);
console.log(id2);

clearTimeout(id);





let i=0;

const id=setInterval(()=>{
    console.log(`Hello ${i++}`);
}, 1000);

setTimeout(()=>{
    clearInterval(id);
}, 5000);












Promise





let age=20;
const newPromise=new Promise(function(resolve, reject) {
    if (age>=21){
        resolve({age, status: true});   
    }
    reject({age, status: false});
});

newPromise
    .then((resolve)=>console.log(resolve, 'SUCCESS'))
    .catch((error)=>console.log(error));
    .finally(()=>console.log('finally'));












let xhr=new XMLHttpRequests();
xhr.open('GET', 'https://jut.su/pokemon/season-1/episode-1.html');

xhr.send();

xhr.onload=function(){
    console.log(xhr);
    console.log(JSON.parse(xhr.response));
};






fetch('https://jut.su/pokemon/season-1/episode-1.html')
    .then((result)=>result.json())
    .then((data)=>console.log(data));

console.log('hello');
    

















































































