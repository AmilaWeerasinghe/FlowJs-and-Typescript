// @flow

// Variables

let name: string = 'Amila Weerasinghe';
let age: number = 25;
let user: string[] = ["amila" , "dilan" ];
let something: any = [1 , 'amila'];

//interface
let person: Person;

person = {
    name: "Amila",
    age: 25,
    hasSiblings: true,
}

interface Person {
    name: string;
    age: number;
    hasSiblings?: boolean;
}

//functions
function greeting(name: string): string{
    return 'Hello '+ name;
}

console.log(greeting('Amila'));

function testFunction(value: string| number){
    return value;
}

//Utility types
type Suit = "Diamonds" | "Clubs" | "Spades";
const clubs: Suit = 'Clubs';
// const Hearts:Suit = 'Hearts';