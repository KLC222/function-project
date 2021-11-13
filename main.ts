input.onButtonPressed(Button.A, function () {
    x += 1
})
let x = 0
basic.forever(function () {
    basic.showNumber(x * x)
})
