var darkMode = true

function switchMode() {
    if (darkMode) { // Switching to light mode
        applyMode(
            "Switch to dark mode",
            "light",
            "#eceff1",
            "#1a2429",
            "#b0bec5",
            "black",
            "#cfd8dc",
            "#6d4c41",
            "#455a64",
            "#455a64"
        )
    } else { // Switching to dark mode
        applyMode(
            "Switch to light mode",
            "dark",
            "#1a2429",
            "#b0bec5",
            "#37474f",
            "white",
            "#263238",
            "#f0f4c3",
            "#78909c",
            "#78909c"
        )
    }
}

function applyMode(buttonSwitchInner, currentModeInner, bodyBg, bodyColor, buttonBg, buttonColor, cardBg, aColor, naColor, unknownColor) {
    var buttonSwitchMode = document.getElementById("button_switch_mode")
    buttonSwitchMode.innerHTML = buttonSwitchInner;
    buttonSwitchMode.style.backgroundColor =  buttonBg
    buttonSwitchMode.style.color =  buttonColor
    document.getElementById("current_mode").innerHTML = currentModeInner;
    document.body.style.background = bodyBg;
    document.body.style.color = bodyColor;
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.background = cardBg;
    }
    var listA = document.getElementsByTagName("a")
    for (var i = 0; i < listA.length; i++) {
        listA[i].style.color = aColor
    }
    var listNa = document.getElementsByClassName('na');
    for (var i = 0; i < listNa.length; i++) {
        listNa[i].style.color = naColor;
    }
    var listUnknown = document.getElementsByClassName('na');
    for (var i = 0; i < listUnknown.length; i++) {
        listUnknown[i].style.color = unknownColor;
    }

    darkMode = !darkMode
}