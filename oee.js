// function createInstructor(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

// var favoriteNumber = 42;

// var instructor = {
//     firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// var instructor = {
//     firstName: "Colt",
//     sayHi: function () {
//         return "Hi!";
//     },
//     sayBye: function () {
//         return this.firstName + " says bye!";
//     }
// }

// ES2015 versions

const createInstructor = (firstname, lastname) => {
    return {firstname, lastname};
};

let favoriteNumber = 42;
let instructor = {
    firstname : "Colt",
    [favoriteNumber] : "That's my favorite!"
};

// console.log(instructor[42]);

instructor = {
    firstname : 'Colt',
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return `${this.firstname} says bye!`;
    }
}

// Animal Function
const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            console.log(noise);
        }
    };
};