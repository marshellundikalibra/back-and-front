let person1={
    name: 'John',
    lastName:"Snow",
    age: 29,
    sayHello(){
        console.log(`Hello! My name is ${this.name} ${this.last_name}`)
    }
}

console.log(person1)
person1.sayHello()


function Person(name, lastNname, age){
    this.name=name
    this.lastName=lastNname
    this.age=age
}

Person.prototype.sayHello=function(){
    console.log(`Hello! My name is ${this.name} ${this.last_name}`)

}

Person.prototype.sayAge=function(){
    console.log(`I'm ${this.age} y.o`)
}
let person1=new Person('John',"Snow", 29 );
console.log(pesron1)
person1.sayHello()
person2.sayAge()





// #2 VideoUrok



class Person{
    constructor(name, lastName, age){
        this.name=name
        this.lastName=lastName
        this.age=age
    }
    sayHello(){
        console.log(`Hello! My name is ${this.name} ${this.last_name}`)
    }
    sayAge(){
        console.log(`I'm ${this.age} y.o`)

    }
}
let person1=new Person('John',"Snow", 29 );
console.log(pesron1)  





class Person{
    constructor(name, lastName, age){
        this.name=name
        this.lastName=lastName
        this.age=age
        Person.count++
    }
    sayHello(){
        console.log(`Hello! My name is ${this.name} ${this.last_name}`)
    }
    sayAge(){
        console.log(`I'm ${this.age} y.o`)

    }
    static countOfObj(){
        console.log(Person.count);
    }
}
Person.count=0
let person1=new Person('John',"Snow", 29 );
console.log(pesron1)  

console.log(Person.count)
person1.sayHello()


// person1.countOfObj()
Person.countOfObj() #staticmethod



// Наследование



class Mentor extends Person{
    constructor(name, lastName,age,position,type){
        super(name, lastname,age)
        this.position=position
        this.type=type
    }

    work(){
        console.log(`I am a ${this.type} ${this.position}`)
    }
}
let mentor1=new Mentor('John',"Snow", 29 , 'Mentor', 'JavaScript')
console.log(mentor1);
mentor1.sayAge()
mentor1.sayHello()
mentor1.work()








class Animal {
    constructor(name, age){
        this.name=name
        this.age=age
    }

    saySound(){
        console.log('I am an animal')
    }
    static sayBye(){
        console.log('This is a static-Bye')
    }
}
// let dog=new Animal('Rex', 3);
// console.log(dog);
// dog.saySound()

class Dog extends Animal{
    constructor(name, age, voice){
        super(name, age)
        this.voice=voice
    }
    sayVoice(){
        console.log(`${this.voice}`);
    }
}

// let dog=new Dog('Rex', 3, 'Gavvv');
// console.log(dog);
// dog.saySound()
// dog.sayVoice()


class Cat extends Animal{
    constructor(name, age, type){
        super(name, age)
        this.type=type
    }
    sayVoice(){
        console.log(`${this.type}`);
    }
}

let cat=new Cat('Fanta', 3, 'Korotkosherstka');
console.log(dog);
dog.saySound()
dog.sayVoice()








// #Encapsulation: PRACTICE4
// мы можем скрыть свойства и методы класса


class User{
    constructor(password, username){
        this.#password=password
        this.username=username
    }
    #password
    getPassword(username){
        if (username===this.username){
            return this.#password
        }else{
            return 'Not valid username'
        }
        
    }
    setPassword(oldPassword, newPassword,username){
        if (username===this.username && oldPassword===this.#password){
            this.#password=newPassword
            console.log('Password changed');
        }else{
            console.log('Forbidden');
        }

    }
}


let user1=new User('qwerty', 'john777');
// console.log(user1.#password);

// console.log(user1.getPassword('john777'));
user1.setPassword('qwerty', 'asdf', 'john777')
console.log(user1.getPassword('john777'))





class User{
    constructor(password){
        this._password=password
      
    }
    
    get getPassword(){
        return this._password

    }
    set setPassword(newPassword){
        this._password=newPassword
    }
    #sayHello(){
        console.log('hello');
    }
    getPrivateMethod(){
        this.#sayHello()
    }
}
let user1 = new User('qwerty')
console.log(user1.password);
console.log(user1.password);
console.log(user1.getPassword);
user1.setPassword('asdf')

user1.setPassword='asdf';
console.log(user1.getPassword);








//ПОЛИМОРФИЗМ PRACTICE 5


class Dog{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayVoice(){
        console.log('GAVVV!!!');
    }
}



class Cat{
    constructor(name, age){
        constructor(name, age){
            this.name=name
            this.age=age
        }
        sayVoice(){
            console.log('MEOWWW!!!');

        }
    }
}

let dog = new Dog('Rex', 2);
dog.sayVoice()

let cat=new Cat('Fanta', 3);
cat.sayVoice




class Car{
    constructor(brand){
        this.brand=brand
    }

    go(){
        console.log('I am going');
    }
}

class Ship{
    constructor(brand){
        this.brand=brand
    }
    go(){
        console.log('I am moving');
    }
}

let obj1=new Car('Toyata');
let obj2=new Ship('Some ship');
obj1.go()
obj2.go()