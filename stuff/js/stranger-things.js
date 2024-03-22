debugger

function doWith(text) {
    function toCapitalCase() {
        return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    doWith.toCapitalCase = toCapitalCase

    return doWith
}

doWith('hola mundo').toCapitalCase()
// Hola Mundo
'Hola Mundo'