// const str ="Hello World, I am Kani! I am Python Developer and currently work at Makers Coding Bootcamp as a Python Mentor.";
// // const regexp=/Kani/;
// // const regex=/\d\d/;
// // const regex=/\d\d/g;
// // const regexp=/\w\w\w\w\w\w/
// // const regex=/\W\W\W/
// // const regex=/\D\D/
// // const regexp=/[AU]/
// const result=str.match(regexp);
// console.log(result)



// const str="Python I fell in love with this language and IT-sphere, so I decided to stop my medicine study ";

// const regexp=/[AUE]lan/g;






// const str="Today is 20.10.2020";
// // const regexp=/\d/
// // const regexp=/\d\.\d\d.\d\d\d\d/
// // const regexp=/\d{2}.\d{2}.\d{4}/
// // const regexp=/\./
// const result=str.match(regexp);
// console.log(result);





// PRACTICE 2 PART

// let str = "We see you. wee need you";
// let pattern = /we/gi;
// console.log(str.replace(pattern, 'I'));






// let str=prompt('Enter word: ');
// let regexp=new RegExp(/[a-zA-Z]/, 'g');
// console.log(regexp.test(str))





// let str = prompt('Enter product weight');
// let regexp = new RegExp(/^\d+(kg|t|g)$/, 'gi');
// console.log(regexp.test(str));




// let str = "Name: Jack, lastName: Alan";
// let newArr=[];
// for (let i=0; i<str.length; i++){
//     if (str[i].toLocaleLowerCase() !=='a')newArr.push(str[i])
//     else newArr.push('*')
// }
// let newStr=newArr.join('');
// console.log(newStr);
// console.log(str.replace(/a/gi, '*'))



let str=prompt('Enter your phone Number: ');
let regexp=new RegExp(/^\+996\d{9}/, 'g');
console.log(regexp.test(str));

if(regexp.text(str)){
    alert('Correct')

}else{
    alert('Wrong')
}
















