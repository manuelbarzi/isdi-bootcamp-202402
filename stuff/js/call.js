function Person(name, surname) {
    this.name = name
    this.surname = surname
}

var p = new Person('Peter', 'Pan')

console.log(p)

var o = {}

Person.call(o, 'Wendy', 'Darling')

console.log(o)
// VM815:8 Person {name: 'Peter', surname: 'Pan'}
// VM815:14 {name: 'Wendy', surname: 'Darling'}