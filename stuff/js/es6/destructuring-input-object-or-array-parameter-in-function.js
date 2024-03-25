{
    /*
    function print(user) {
        console.log(user.name, user.age)
    }
    */

    /*
    function print(user) {
        const { name, age } = user
        
        console.log(name, age)
    }
    */

    /*
    function print({ name, age }) {
        console.log(name, age)
    }
    */

    const print = ({ name, age }) => console.log(name, age)

    const o = { name: 'Oswald', age: 20 }

    print(o)
}

{
    // with arrays

    /*
    function print(data) {
        console.log(data[0], data[1])
    }
    */

    /*
    function print(data) {
        //const { 0: name, 1: age } = data
        const [name, age] = data
        
        console.log(name, age)
    }
    */

    /*
    function print([name, age]) {
        console.log(name, age)
    }
    */

    const print = ([name, age]) => console.log(name, age)

    const o = ['Oswald', 20]

    print(o)
}