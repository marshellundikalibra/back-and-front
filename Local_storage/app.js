// let btn = document.querySelector('.btn');
// let inp=document.querySelector('.task-input');
// let list=document.querySelector('.task-list');

// render()

// BigInt.addEventListener('click', () =>{
//     console.log(inp.value);

//     if (!inp.value.trim()){
//         alert('заполните поле');
//         return ;
//     }
//     let obj={
//         task: inp.value,

//     };
//     setItemToStorage(obj)
//     render();

// });


// function  setItemToStorage(task){
//     let data=JSON.parse(localStorage.getItem('tasks-data')) || [];
//     data.push(task);
//     localStorage.setItem('tasks-data', JSON.stringify(data));
// }


// function render (){
//     if (!localStorage.getItem('task-data')){
//         localStorage.setItem('task-data', '[]');
//     }


//     let newData = JSON.parse(localStorage.getItem('task-data'));
//     console.log(newData);

//     list.innerHTML='';
//     newData.forEach((item)=>{
//         let li = document.createElement('li');
//         let btnDelete=document.createElement('button');
//         li.innerText=item.task;
//         btnDelete.innerText="Delete";
//         list.appendChild(li);
//         list.appendChild(btnDelete);

//         btnDelete.addEventListener('click', ()=>{
//             deleteElement(index);
//         });
//     }

//     );
// }


// function deleteElement(id){
//     let data= Json.parse(localStorage.getItem('task-data'));
//     data.splice(id, 1);
//     localStorage.setItem('task-data', JSON.stringify(data));
//     render();
// }








let btn = document.querySelector('.btn');
let inp=document.querySelector('.task-input');
let list=document.querySelector('.task-list');

// вызов render() при загрузке страницы
render();

btn.addEventListener('click', () =>{
    console.log(inp.value);

    if (!inp.value.trim()){
        alert('заполните поле');
        return ;
    }
    let obj={
        task: inp.value,

    };
    setItemToStorage(obj);
    render();

});


function  setItemToStorage(task){
    let data=JSON.parse(localStorage.getItem('tasks-data')) || [];
    data.push(task);
    localStorage.setItem('tasks-data', JSON.stringify(data));
}


function render (){
    if (!localStorage.getItem('tasks-data')){
        localStorage.setItem('tasks-data', '[]');
    }


    let newData = JSON.parse(localStorage.getItem('tasks-data'));
    console.log(newData);

    list.innerHTML='';
    newData.forEach((item, index)=>{
        let li = document.createElement('li');
        let btnDelete=document.createElement('button');
        li.innerText=item.task;
        btnDelete.innerText="Delete";
        list.appendChild(li);
        list.appendChild(btnDelete);

        btnDelete.addEventListener('click', ()=>{
            deleteElement(index);
        });
    });

}


function deleteElement(id){
    let data= JSON.parse(localStorage.getItem('tasks-data'));
    data.splice(id, 1);
    localStorage.setItem('tasks-data', JSON.stringify(data));
    render();
}
