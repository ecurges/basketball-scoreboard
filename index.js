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


// HIGHLIGHT LEADER

function highlightLeader() {
    // if both teams have exactly 0 points (when the game starts), change both colors to "start color"
    // else if home is leading, change the home color to "lead color" and the guest color to "not lead color"
    // else if guest is leading, change the guest color to "lead color" and the home color to "not lead color"
    // else if both teams have the same score, change both colors to "tie color"
    
    // Some JavaScript to get you started:
    homeScoreEl.style.color = "#F94F6D" // the red color from your CSS
    guestScoreEl.style.color = "#F94F6D" // the red color from your CSS
    
    
    // Call this function inside other functions everytime either home or guest score changes
}