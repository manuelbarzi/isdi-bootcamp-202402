class Image extends Component {
    constructor() {
        super('img')
    }

    setSource(source) {
        if (typeof source !== 'string') throw new TypeError('source is not a string')

        this._container.src = source
    }
}