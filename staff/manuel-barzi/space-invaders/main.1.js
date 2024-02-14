var ship = document.getElementById('ship')
var alien = document.getElementById('alien')

var x = 0

ship.style.left = x + 'vw'


document.onkeydown = function (event) {
    console.count('keydown')

    if (event.key === 'ArrowLeft')
        x = x - 1
    else if (event.key === 'ArrowRight')
        x = x + 1

    ship.style.left = x + 'vw'

    var shipRect = ship.getBoundingClientRect()
    var alienRect = alien.getBoundingClientRect()

    console.log(shipRect, alienRect)

    if (shipRect.x + shipRect.width > alienRect.x)
        console.log('collision detected')
}