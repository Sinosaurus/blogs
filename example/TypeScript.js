// function greeter(person:String) {
//     return "Hello, " + person;
// }
// let user = '5555555';
// document.body.innerHTML = greeter(user);
var Student = /** @class */ (function () {
  function Student(firstName, middleName) {
    this.firstName = firstName
    this.middleName = middleName
    this.fullName = firstName + '' + middleName
  }
  return Student
})()
function typescript(prson) {
  return peson.firstName + peson.middelName
}
var user = new Student('long', 'huo')
document.body.innerHTML = typescript(user)
