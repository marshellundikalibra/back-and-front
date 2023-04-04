

let $title = $('h1');
let welcome=$('.welcome');//название класса
let titlebyId=$('#title'); //по id
let inp=$('[name="inp-name"]'); //input

// console.log(title, welcome, titlebyId, inp)

// $title.css('color', 'red');
// welcome.css('background-color', 'pink')



// welcome.addclass('example1  example2');
// console,log(welcome.hasClass('welcome'));
// console,log(welcome.hasClass('example3'));
// welcome.removeClass('example2')



// append() appendChild()  prepend()
// titlebyId.append('World');
// titlebyId.prepend('Hello');


// $title.prependTo(titleById);






// $('.center').before('<h3 class="new">New Element 1</h3>')
// $('.center').after('<h3 class="new">New Element 2</h3>')




// let result = confirm('Are you 18 y.o?')
// if (result){
//     $('h1').css('display', 'block');
// }


// $('p').empty();
// $('p').remove();



// $('body').html('<h1> Hello Makers Bootcamp!</h1>');
// $('body').after('<div class="container> </div>');




// let conedElem=$('body').clone();
// console.log(clonedElem);
// clonedElem[0].children[0].innerText='Modeified'
// console.log(clonedElem)
// $('.container').append(clonedElem);




// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// let result = num1 + num2
// $('body').html(`<h1>${result}</h1>`);




function sum (){
    let num1 = +prompt('Enter first number');
    let num2 = +prompt('Enter second number');
    let result = num1 + num2
    $('body').html(`<h1>${result}</h1>`);
}


function sub (){
    let num1 = +prompt('Enter first number');
    let num2 = +prompt('Enter second number');
    let result = num1 - num2
    $('body').html(`<h1>${result}</h1>`);
}

function mul (){
    let num1 = +prompt('Enter first number');
    let num2 = +prompt('Enter second number');
    let result = num1 * num2
    $('body').html(`<h1>${result}</h1>`);
}


function div (){
    let num1 = +prompt('Enter first number');
    let num2 = +prompt('Enter second number');
    let result = num1 / num2
    $('body').html(`<h1>${result}</h1>`);
}









