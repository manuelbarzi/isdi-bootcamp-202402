class Component {
    constructor(tagName) {
        this._container = document.createElement(tagName)
    }

    setText(text) {
        this._container.innerText = text
    }

    add() {
        const children = arguments

        Array.prototype.forEach.call(children, child => {
            if (!(child instanceof Component)) throw new TypeError('child is not a Component')
        })

        Array.prototype.forEach.call(children, child => {
            this._container.appendChild(child._container)
        })
    }

    assembleTo(element) {
        if (!(element instanceof HTMLElement)) throw new TypeError('element is not an HTMLElement')

        element.appendChild(this._container)
    }

    onClick(callback) {
        this._container.onclick = callback
    }

    setId(id) {
        if (typeof id !== 'string') throw new TypeError('id is not a string')

        this._container.id = id
    }
}