// Variable Hosting

console.log(a);

var a = 3;

function foo() {
    console.log(a)
    var a = 6;
    console.log(a);
}

foo();
console.log(a);


//************************************************************************* */


//Lexical scoping
var a = "Hey";



function first(){
    console.log(a)
    var b= "Amit";

    second();

    function second() {
        var c = "here";

        console.log(a + b + c)
    }
}

first();