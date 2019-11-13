console.log("hello");

const myArray = [
    { name: 'Bob',      age: 52 },
    { name: 'Jake',     age: 22 },
    { name: 'Carol',    age: 69 },
    { name: 'Jack',     age: 49 },
    { name: 'Lewiston', age: 49 },
]

const peopleOver30 = myArray.filter((person) => {
    return person.age >= 30
})

console.log(peopleOver30);








console.log("goodbye");