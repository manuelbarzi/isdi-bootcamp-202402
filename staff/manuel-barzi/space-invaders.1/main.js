var ship = document.getElementById('ship')

var x = 0

ship.style.left = x + 'vw'


document.onkeydown = function (event) {
    console.count('keydown')

    if (event.key === 'ArrowLeft')
        x = x - 1
    else if (event.key === 'ArrowRight')
        x = x + 1

    ship.style.left = x + 'vw'

    var rect = ship.getBoundingClientRect()

    console.log(rect)
}