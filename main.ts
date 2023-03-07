let Start = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Start = input.runningTime()
    basic.showIcon(IconNames.Heart)
    basic.showNumber(0)
})
basic.forever(function () {
	
})
