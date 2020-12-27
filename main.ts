let odleglosc = 0
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    `)
basic.pause(2000)
basic.forever(function () {
    odleglosc = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
    if (odleglosc < 45 && odleglosc != 0) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 95)
        basic.pause(randint(100, 300))
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        if (Math.randomBoolean()) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 93)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 90)
        }
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        music.ringTone(262)
        basic.pause(randint(50, 200))
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        music.stopAllSounds()
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 158)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
    }
})
