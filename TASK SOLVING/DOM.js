// Найдите все HTML-теги <strong> и окрасьте их в зеленый цвет.

let items=document.querySelectorAll('strong');
items.forEach((item, index)=>{
    item.style.color='green'
}

)



// Найдите все HTML-теги <em> и добавьте им класс selected.

const emElements = document.getElementsByTagName('em');

for (let i = 0; i < emElements.length; i++) {
  emElements[i].classList.add('selected');
}









// Стрелочные Функции


// Перепишите данную функцию в стрелочную функцию:

// function checkTask() { 
//       console.log("Hello World!"); 
// } 

let checkTask=()=>console.log("Hello World!"); 
checkTask()





let checkTask=(name, age)=>console.log(`Happy Birthday ${name}! You are ${age}!`);
checkTask('MAria', 17)




const checkTask = (age, name) => {
    console.log(`Happy Birthday ${name}! You are ${age}!`);
  };
  
  checkTask(23, "Mike");
  






  let m=['John', 'Mike', 'Rick', 'Drake'];
  let checkTask=(cool)=>{
      for (let i=0; i<m.length; i++){
          console.log(`${m[i]} ${cool}`);
      }
  }
  checkTask('is cool');
  
//   ANALOG
  
  let checkTask = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += ' is cool';
    }
    console.log(arr);
  }
  
  let arr = ['John', 'Mike', 'Rick', 'Drake'];
  checkTask(arr);
  







  let checkTask = (str) => {
    let reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);
  };
  
  checkTask('JavaScript');





  

  function findRepeatedLetters(str) {
    let letterCounts = {};
    let repeatedLetters = [];
  
    // update letter counts
    for (let letter of str) {
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
  
    // find repeated letters
    for (let letter in letterCounts) {
      if (letterCounts[letter] > 1) {
        repeatedLetters.push(letter);
      }
    }
  
    return repeatedLetters;
  }
  
  let str = 'JavaScript is a programming language';
  let result = findRepeatedLetters(str);
  console.log(result); // Output: ['a', 'r', 'm', 'i', 'n', 'g', 'u']

  





  // let checkTask=(word, a)=>{
//     let a=0;

// }


const checkTask = (str, char) => {
    const count = str.split(char).length - 1;
    console.log(count);
  }
  
  checkTask('JavaScript', 'a'); 


// НАЧНу с 25 задачи  ебаать 4 вапреля 00:35 а у меня еще 93 задач сукааааааа




const getDivisors = (num) => {
    const divisors = [];
  
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
  
    return divisors;
  };
  
  console.log(getDivisors(18)); 
  console.log(getDivisors(19)); 
  
  
  


  const convertStr = (str) => {
    const words = str.split('_');
    let result = words[0];
  
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      result += word[0].toUpperCase() + word.slice(1);
    }
  
    return result;
  };
  
  console.log(convertStr('var_text_hello')); 
  console.log(convertStr('hello_world')); 
  