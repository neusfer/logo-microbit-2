let Start = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Start = input.runningTime()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showNumber(0)
})
basic.forever(function () {
	
})
