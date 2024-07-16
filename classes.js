//************************************************************************* */

/////Static Methods and Properties

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
//Create a class Employee with properties like name, position, and salary.
// Add methods to increaseSalary and describeEmployee.

class Employee {
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary = salary
    }
    increasedSalary(percentage){
      const increasedSalary =this.salary + (this.salary/100*percentage)
     console.log(`Salary after ${percentage} % increase:$ ${increasedSalary.toFixed(2)} `); 
    }

    describeEmployee(){
     console.log(`Employee: ${this.name}, ${this.position}, ${this.salary}`);
    }
}



//Extend the Employee class to create a Manager class.
// Add a method to add or remove employees under the manager.

class Manager extends Employee{
    constructor(name,position,salary){
        super(name,position,salary)
        this.employees =[]
    }
  
   addEmployee(employee){
   this.employees.push(employee)
    console.log(`${employee.name} added`);
   }

   removeEmployee(employee){
    this.employees = this.employees.filter((emp)=>emp!== employee)
    console.log(`${employee.name} is removed`);
   }
   displayEmployees(){
  this.employees.forEach((emp)=>emp.describeEmployee())

   }
}
const employee1 = new Employee("sara", "smith", 1200)
const employee2 = new Employee("peter", "pen", 1200)
const employee3 = new Employee("rosa", "bella", 1200)

const manager = new Manager ("Kim", "Belington",3000)

manager.addEmployee(employee1)
manager.addEmployee(employee2)
manager.addEmployee(employee3)
manager.removeEmployee(employee2)
manager.displayEmployees()



/// 2. Encapsulation: private fields #; getters, setters

class Student {
    #note //private field
    constructor(name, group, note){
        this.name = name
        this.group = group
        this.#note = note
    }
   

    getNote(){
        console.log(this.#note); 
    }
    
    setNote(newNote){
     if (newNote >0){
        this.#note = newNote
     }
     console.log(this.#note);
    }
}
const student1 = new Student("John", "1a", 3) // console: Student { name: 'John', group: '1a' } note is hidden
console.log(student1);
student1.getNote()
student1.setNote(5)

/// 3. Polymorphism allows objects of different classes to be treated 
//   as objects of a common super class. It's often used when dealing with inheritance.
//4. Abstract Classes and Methods
//5. Composition
//6.  Advanced Topics :mixins, decoration patter
