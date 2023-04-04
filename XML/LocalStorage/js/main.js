// //https://www.npmjs.com/package/json-server

// //HXMLHttpRequest
// let list=$('.task-list');

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:8000/todos');
// xhr.send();
// xhr.onload=function(){
//     // console.log(xhr.response);
//     let data=JSON.parse(xhr.response);
//     // console.log(data);
//     data.forEach(element => {
//         list.append(`<li>${element.task}</li>`)
//     });
// }



// //XMLHttpRequest
// let list=$('.task-list');

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:8000/todos');
// xhr.send();
// xhr.onload=function(){
//     // console.log(xhr.response);
//     let data=JSON.parse(xhr.response);
//     // console.log(data);
//     data.forEach(element => {
//         list.append(`<li>${element.task}</li>`)
//     });
// }







//json-server --watch db.json --port 8000








// //FETCH


// let list=$('.task.list');

// let promise=fetch('http://localhost:8000/todos')

// promise
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//         });
            
//     })










// // AJAX функция JQuery

// let list=$('.task.list');

// $.ajax({
//     url: 'http://localhost:8000/todos',
//     type: 'GET',
//     success: function(data){
//         // console.log(data);
//         data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//         });

//     },
//     error: function(){
//         console.log('ERROR');
//     }
// })










//CORRECTED
let list=$('.task.list');

$.ajax({
    url: 'http://localhost:8000/todos',
    type: 'GET',
    success: function(data){
        // console.log(data);
        data.forEach(element => {
            list.append(`<li>${element.task}</li>`)
        });

    },
    error: function(){
        console.log('ERROR');
    }
});
