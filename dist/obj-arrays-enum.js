"use strict";
//Example w implemantation of tuple
// const person: 
// {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Manon',
//     age: 30,
//     hobbies: ['Sport', 'Meditation'],
//     role: [2, 'author'] // this is a tuple size of 2 [number, string]
// };
//Example w implemantation of enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// will attribute ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Manon',
    age: 30,
    hobbies: ['Sport', 'Meditation'],
    role: Role.ADMIN
};
let favoriteActivities;
console.log(person.name);
console.log(person.age);
for (const hobby of person.hobbies) // to print an array
    console.log(hobby.toUpperCase());
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
