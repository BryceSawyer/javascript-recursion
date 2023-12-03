// JAVASCRIPT: RECURSION VS ITERATIVE TRAVERSAL
// Recursion is a powerful tool for solving problems 
// that require the execution of a similar action multiple times until a certain condition is met. 
// For many problems, a recursive solution will result in fewer lines of code 
// and will be easier to comprehend than a solution that uses a for or while loop.
// Recursion is a computational approach where a function calls itself from within its body. 
// performs a similar action multiple times in a row until it reaches a predefined stopping point, also known as a base case.

// Recursive case:
// The conditions under which the function will perform an action and call itself.

// Base case:
// The conditions under which the function returns a value without making any additional calls to itself.

// included both the iterative and recursive solutions to factorial. Both approaches work equally well for this

// May find the syntax to be more readable and easier to understand when addressing certain problems

const LinkedList = require('./LinkedList');

// Recursive //////////////////////////////////////////////////////////////////////////////////////////////////

const recursiveFactorial = (n) => {
    if (n === 0) {
        console.log(`\nBase case: factorial(0) = 1`);
        return 1;
    } else if (n > 0) {
        console.log(`Push to stack ${n} * ...recursiveFactorial(${n - 1})`);
        const recur = recursiveFactorial(n - 1);
        console.log(`\npop from stack ${n} * the returned value of ${recur}`);
        const value = n * recur;
        console.log(`\nResult for recursiveFactorial(${n}) = ${value}`);
        return value;
    }
};

console.log(recursiveFactorial(4));

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

//console.log(fibonacci(5));

const myListRecur = new LinkedList();

myListRecur.addToHead('Node 1');
myListRecur.addToHead('Node 2');
myListRecur.addToHead('Node 3');
myListRecur.addToHead('Node 4');

// const myNodeRecursive = myListRecur.findNodeRecursively('Node 2');
// console.log(myNodeRecursive);


// Iterative //////////////////////////////////////////////////////////////////////////////////////////////////
const iterativeFactorial = (n) => {
    result = 1;
    while (n > 0) {
        result *= n;
        n -= 1;
    }
    return result;
}

//console.log(iterativeFactorial(4));

const myListInter = new LinkedList();

myListInter.addToHead('Node 1');
myListInter.addToHead('Node 2');
myListInter.addToHead('Node 3');
myListInter.addToHead('Node 4');

// const myNodeIteratively = myListInter.findNodeIteratively('Node 2');
// console.log(myNodeIteratively);