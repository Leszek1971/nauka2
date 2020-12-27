odleglosc = 0
basic.show_leds("""
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    """)
basic.pause(2000)

def on_forever():
    global odleglosc
    odleglosc = DFRobotMaqueenPlus.ultra_sonic(PIN.P1, PIN.P2)
    if True:
        pass
    else:
        pass
basic.forever(on_forever)
