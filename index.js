let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeCount = 0
let guestCount = 0

// HOME SCORE

function home1Btn() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function home2Btn() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function home3Btn() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

// GUEST SCORE

function guest1Btn() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function guest2Btn() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guest3Btn() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

// NEW GAME

function newGame() {
    // console.log("NEW GAME")
    guestCount = 0
    homeCount = 0
    homeScoreEl.textContent = homeCount
    guestScoreEl.textContent = guestCount
    
}
