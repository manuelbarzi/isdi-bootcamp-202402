var o = {
    _name: null,

    /*
    getName() {
        return this._name
    },

    setName(name) {
        this._name = name.toUpperCase()
    },
    */

    get name() {
        return this._name
    },

    set name(name) {
        this._name = name.toUpperCase()
    }
}

//o.setName('pEteR')
//console.log(o.getName())

o.name = 'pEteR'
console.log(o.name)

