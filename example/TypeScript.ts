// function greeter(person:String) {
//     return "Hello, " + person;
// }

// let user = '5555555';

// document.body.innerHTML = greeter(user);

class Student {
  fullName: 'Sinosaurus'
  constructor(public firstName: String, public middleName: String) {
    this.fullName = firstName + '' + middleName
  }
}

interface Person {
  firstName: String
  middelName: String
}

function typescript(prson: Person) {
  return peson.firstName + peson.middelName
}

let user = new Student('long', 'huo')

document.body.innerHTML = typescript(user)

let list: number[] = [1, 2, 3, 4]
let str: string = ''

// 元组
let x: [number, string]
x = [2, 'sinosaurus']

console.log(x[0].substr(1))
