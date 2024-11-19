input.onButtonPressed(Button.A, function () {
    // Augmente le tempo de 20 bpm
    music.changeTempoBy(20)
})
input.onButtonPressed(Button.B, function () {
    // Diminue le tempo de 20 bpm
    music.changeTempoBy(-20)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Arrête la mélodie
    music.stopAllSounds()
})
