//In this first example, we will try out some typescript
//features and see how they work in the browser
//First, we will declare a variable
var myName = "John Doe";
//Next, we will declare a function
function sayHello(name) {
    console.log("Hello, " + name);
    return "Hello, " + name;
}
//Now, we will call the function
sayHello(myName);
//Now, we will declare a class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
//Now, we will create an instance of the class
var person = new Person("John Doe");
//Now, we will call the function again
sayHello(person.name);
function sayGoodbye(name) {
    console.log("Goodbye, " + name);
    return ("Goodbye, " + name);
}
sayGoodbye(person.name);
//will this work? or cause problems?
function javascriptFunction(arg1) {
    console.log(arg1);
}
javascriptFunction("Hello, World 12345");
