class Product{
    
    constructor (name, price){
        this.name = name;
        this.price = price
    }
  
   calculateTotal(salesTax){
        return (`Total Prise : ${this.price - (this.price/100* salesTax).toFixed(2)} `)
   }

}

class clothingProduct extends Product{
    constructor(name, price, color, size){
        super(name, price)
        this.color = color
        this.size = size
    }
    displayClothingProduct (){
        const totalPrice = super.calculateTotal(10)
        return (`Product : ${this.name}, ${this.price}, ${this.color}, ${this.size}, ${totalPrice}`)
    }
}
const clothingProduct1 = new clothingProduct("shirt", 12.99,"red", "36")

console.log(clothingProduct1.displayClothingProduct());

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

class Node {
    constructor (data,next=0){
this.data =data
this.next =next
    }
}

class LinkedList{
    constructor(head,size){
        this.head =null
        this.size=0;

    }

    insertFirst(data){

        this.head = new Node(data,this.head)
        this.size++
    }
   
}
const ll = new LinkedList
ll.insertFirst(100)
console.log (ll)