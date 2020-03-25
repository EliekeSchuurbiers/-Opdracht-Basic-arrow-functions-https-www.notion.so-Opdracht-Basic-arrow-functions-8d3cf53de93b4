// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

//arrowfunction
const ikRockArrowFunctions2 = () => {
    console.log("Joe, ik rock de arrow functions!");
};
ikRockArrowFunctions();


// zet de functie om naar een arrow functie
const fivePlusSeven = function () {
    return 5 + 7
};

fivePlusSeven();
//arrowfunction   
const fivePlusSeven2 = () => 5 + 7;
fivePlusSeven();

//arrowfunctie (anonymous)
() => 1 + 2

//arrowfunction met parameters
const myfunction = (a, b) => a + b

//arrowfunction met 1 parameter
const addFive = a => a + 5

//arrowfunction return object
const createObject = () => ({ greeting: "hoi" })