class Arroz {
    constructor() {
        if (arguments.length !== 1) {
            this.length = arguments.length

            for (var i = 0; i < arguments.length; i++) {
                var argument = arguments[i]

                this[i] = argument
            }
        } else {
            var argument = arguments[0]

            if (typeof argument === 'number') {
                this.length = argument

                return
            }

            this[0] = argument
            this.length = 1
        }
    }

    push() {
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[this.length] = argument
            this.length++
        }

        return this.length
    }

    pop() {
        var lastIndex = this.length - 1

        var last = this[lastIndex]

        delete this[lastIndex]

        this.length--

        return last
    }

    toString() {
        var string = 'Arroz ['

        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            string += element

            if (i < this.length - 1)
                string += ', '
        }

        string += ']'

        return string
    }

    forEach(callback) {
        for (var i = 0; i < this.length; i++) {
            var elem = this[i]

            callback(elem, i, this)
        }
    }

    find(callback) {
        for (var i = 0; i < this.length; i++) {
            var elem = this[i]

            var matches = callback(elem, i, this)

            if (matches) return elem
        }
    }

    map(callback) {
        var mapped = new Arroz

        for (var i = 0; i < this.length; i++) {
            var elem = this[i]

            var mappedElement = callback(elem, i, this)

            mapped[mapped.length++] = mappedElement
        }

        return mapped
    }

    static from(arroz) {
        var instance = new Arroz

        for (var i = 0; i < arroz.length; i++) {
            var elem = arroz[i]

            instance[instance.length++] = elem
        }

        return instance
    }
}

module.exports = Arroz