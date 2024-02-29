function SystemError(message, fileName, lineNumber) {
    var instance = new Error(message, fileName, lineNumber)

    Object.setPrototypeOf(instance, Object.getPrototypeOf(this))

    instance.name = SystemError.name

    return instance
}

SystemError.prototype = Object.create(Error.prototype, {
    constructor: {
        value: Error,
        enumerable: false,
        writable: true,
        configurable: true
    }
})

if (Object.setPrototypeOf)
    Object.setPrototypeOf(SystemError, Error)
else
    SystemError.__proto__ = Error