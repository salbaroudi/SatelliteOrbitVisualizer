//In this first example, we will try out some typescript
//features and see how they work in the browser

//First, we will declare a variable
let myName1: string = "John Doe"

//Next, we will declare a function
function sayHello(name: string): string {
    console.log("Hello, " + name)
    return "Hello, " + name
}

//Now, we will call the function
sayHello(myName1);

//Now, we will declare a class
class Person {  
    constructor(public name: string) { }
}   

//Now, we will create an instance of the class
let person = new Person("John Doe")

//Now, we will call the function again
sayHello(person.name);

function sayGoodbye(name:string): string {
    console.log("Goodbye, " + name)
    return ("Goodbye, " + name)
}

sayGoodbye(person.name)

//will this work? or cause problems?
function javascriptFunction(arg1) {
    console.log(arg1);
}

javascriptFunction("Hello, World 12345");
