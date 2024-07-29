//************************************************************************* */


/*
class Node{
    constructor( data,next =null){
        this.data = data;
        this.next = next ;
    }
}

class LinkedList {
    constructor (){
        this.head = null;
        this.size = 0

    }
    insertFirst(data){
     this.head = new Node(data)
     this.size++
    }

   insertLast(data){
    let current;
    let node = new Node(data)

    if (!this.head){
        this.head = node
        this.size++
    } else {
        current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
    }
     this.size++
   }   

   insertAt(data, index){
    let previuos = null;
    let current = this.head;
    let count = 0
    let node = new Node (data)

if(index<0  || index > this.size) return
if (index ===0){
    node.next = this.head
    this.head = node
    this.size++
    return
}
while(count < index){
previuos = current
current = current.next;
count++

}
node.next = current
previuos.next = node
this.size++
   }
 

getData(index){
    if(index<0 || index > this.size) return
    let count = 0
    let current= this.head

    while(count < index){
        current = current.next
        count++

    }
    return current.data
}   

removeAt(index){
    let previous = 0
    let current = this.head
    let count = 0

    if(index<0 || index > this.size) return

if (index ===0){
    this.head = current.next
}else{
     while(count < index){
        previous = current
        current = current.next
        count++
    }
    previous.next=current.next
}

   this.size--
}




printList() {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

clearAll (){
    this.head =null
    this.size = 0
    }
    
    

}
const ll = new LinkedList()

ll.insertFirst(100)
ll.insertAt(200,0)
ll.insertLast(400)
ll.insertAt(300,2)
const data = ll.getData(1)




console.log("GET DATA:",data);

ll.printList()
console.log(ll);



//*********************************************************************** */
//CLASSES
//1. Create a class Employee with properties like name, position, and salary.
// Add methods to increaseSalary and describeEmployee.


//Extend the Employee class to create a Manager class.
// Add a method to add or remove employees under the manager.

// 2. Static Methods and Properties

class Person {
    static totalPersons = 0 //static property
    
        constructor (name, age){
            this.name = name; 
            this.age = age;    
            Person.totalPersons++  //accessing class static property Coun immediately when person is created
        }
        isAdult(){
            if(this.age > 18) return true 
        }
        static countPersons (){
            return Person.totalPersons // class-level method
        }
        static countAges (persons){
            let sum =0
            persons.forEach(person =>{  sum += person.age}
          );
            return sum
        }
    }
    const person1 = new Person ("sam",19)
    const person2 = new Person ("sara",29)
    const persons = [person1, person2];
    
    console.log(person1.isAdult());
    
    
    console.log(Person.countPersons()); // 2
    console.log(Person.countAges(persons)); // 2
    
    console.log("*****************************");

    //****************************************** */


/// 2. Encapsulation: private fields #; getters, setters

class Student {
    #note //private field
    constructor(name, group, note){
        this.name = name
        this.group = group
        this.#note = note
    }
   

    getNote(){
        console.log(`get note: ${this.#note}` ); 
    }
    
    setNote(newNote){
     if (newNote >0){
        this.#note = newNote
     }
     console.log(this.#note);
    }
}
const student1 = new Student("John", "1a", 3) // console: Student { name: 'John', group: '1a' } note is hidden

student1.getNote(5) 

 student1.setNote(5) ; 

/// 3. Polymorphism 

class Payment {
    process(){
        console.log("payment");
    }
}
class PaypalPayment extends Payment{
    process(){
        console.log("Paypal payment");
    }
}
class CardPayment extends Payment{
    process(){
        console.log("Card payment");
    }
}

let payments = [new PaypalPayment, new CardPayment]

for (let payment of payments){
   payment.process()
}


//4. Abstract Classes and Methods

class Animal{
    constructor( ){
              if(new.target===Animal){
            throw new TypeError("cannot construct animal instance directly")
        }
   } 
speak(){
        throw new Error("  method speak() must be implemented")
    }  


}

class Dog{
    speak(){console.log("wow");}
}
class Cat{
    speak(){console.log("miau");}
}

const myDog = new Dog()
const myCat = new Cat()
myDog.speak()
myCat.speak()


//5. Composition

//5a) Object composition canWalk, canSwim, and canFly are objects that represent different behaviors.
//createBird and createFish functions create new objects and combine them with the desired behaviors using Object.assign.
const canWalk = {
    walk(){console.log("walking...");} //object
}

const canFly = {
    fly(){console.log("flying...");} //object
}

function createBird (name){           //function
let bird ={name}
return Object.assign(bird,canFly, canWalk)
}



const duck = createBird("Duck")
duck.fly()
duck.walk()


//FUNCTIONAL COMPOSITION
/*

const canEat =(state)=>({                           //function takes state object and return object
eat: ()=>{console.log(`${state.name} is eating`)}
})

const canSleep =(state)=>({
    sleep: ()=>{console.log(`${state.name} can sleep`);} //function
})

const createPerson = (name)=>{                          //main function. // define state
    let state = {name}
    return Object.assign(state, canEat(state), canSleep(state))
}

let person = createPerson("john")
person.eat()
person.sleep()

//6.  Advanced Topics :mixins, decoration patter

//Mixins provide a way to extend the functionality of a CLASS  or an object without using classical inheritance. 
//They allow you to combine behaviors from multiple sources into a single object or class.
/*

const canRead ={                                               //object
    read(){console.log(`${this.name} is reading`);}
}
const canListen = {                                             //object
    listen(){console.log(`${this.name} is listening`);}
}
class Kid{                                                       //class
    constructor(name){
        this.name=name
    }
}

Object.assign(Kid.prototype, canRead,canListen)
const kid1 = new Kid ("tom")
kid1.read()
kid1.listen()

*/

class Employee{
    constructor( name, position, salary){
        this.name = name;
        this.position = position;
        this.salary  =salary;
    }

    increaseSalary(){
        const newSalary = this.salary *1.2
        return `Old Salary: ${this.salary}; New salary: ${newSalary} `
    }

    displayempoyee(){
        return`Employee: ${this.name}, ${this.position}`
    }
}

const employee1 = new Employee("Sara","Developer",2000)

console.log(employee1.increaseSalary());
console.log(employee1.displayempoyee());

class Developer extends Employee{
    #birthday                       //private property
    static totalDevelopers =0           //static property
    constructor(name, position, salary,birthday){
        super(name,position, salary)
        this.#birthday =birthday
        this.ListOfDevelopers = []
        Developer.totalDevelopers ++
    }
countDevelopers(){
    return Developer.totalDevelopers   //method returns atatic property
}

getBirthday(dev){
    console.log(`birthday of ${this.name} is on ${this.#birthday}`); // use getter to get private property
}
setBirthday(newBirthday){                                            // use setter to change private property
    if( newBirthday>0){
        this.#birthday=newBirthday
    }
}

    addDeveloper(dev){
        this.ListOfDevelopers.push(dev)
    }
    removeDeveloper(dev){
        this.ListOfDevelopers= this.ListOfDevelopers.filter((item)=>item !== dev )
    }
    displayDevelopers(){
              const list =  this.ListOfDevelopers.map((dev,index)=> `${index +1} ${dev.displayempoyee()}`) .join("\n")
              return list
    }
    countSalaries(){
        
      return this.ListOfDevelopers.reduce((total,current)=>total+current.salary,0)
     
    }
    sortDevelopers(){
        return this.ListOfDevelopers.sort((a,b)=>a.salary-b.salary)
    }
}
const developer1 = new Developer("Kim", "developer", 5000, 1976)
const developer2 = new Developer("Peter", "developer", 1900, 1999)
const developer3 = new Developer("Alex", "developer", 3000, 2000)


const mainDeveloper = new Developer("lead", "developer", 3000,1989)
//mainDeveloper.addDeveloper(mainDeveloper)
mainDeveloper.addDeveloper(developer1)
mainDeveloper.addDeveloper(developer2)
mainDeveloper. addDeveloper(developer3)




console.log(mainDeveloper.displayDevelopers());
mainDeveloper.setBirthday(2001)
mainDeveloper.getBirthday();