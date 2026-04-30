const cookie = document.getElementById("thecookie")
const counter = document.getElementById("amount")
const clickerupg = document.getElementById("btnclicker")
const upgupg = document.getElementById("btnupg")
const input = document.getElementById("numinput")
const bet = document.getElementById("bet")
const hitbtn = document.getElementById("hitbtn")
const betbtn = document.getElementById("betbtn")
const allinbtn = document.getElementById("allinbtn")
const standbtn = document.getElementById("standbtn")
const cardval = document.getElementById("cardval")
const dcardval = document.getElementById("dcardval")
const clickervalue = document.getElementById("clickerprice")
const clickeramount = document.getElementById("clickeramount")
const upgprice = document.getElementById("upgprice")
const upgamount = document.getElementById("upgamount")
const cdbtn = document.getElementById("cdupg")
const cdprice = document.getElementById("cdprice")
const cdamount = document.getElementById("cdamount")
const pwbtn = document.getElementById("pwupg")
const pwprice = document.getElementById("pwprice")
const pwamount = document.getElementById("pwamount")
import { fulldeck } from "./deck.js"

let amount = 0
let clicker = 0
let upg = 1
let clickercost = 20
let upgcost = 40
let cdcost = 50
let cd = 0
let clickerrunning = false
let pw = 0
let pwcost = 500

let gainHistory = []

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

const dcard1 = document.getElementById("dcard1")
const dcard2 = document.getElementById("dcard2")
const dcard3 = document.getElementById("dcard3")
const dcard4 = document.getElementById("dcard4")

const cardbackimage = [

]
const baseSpeed = 2000
function clickLoop() {
    amount += clicker * Math.pow(3, pw)
    spawnFloatingNumber(clicker * Math.pow(3, pw))
    trackGain(clicker * Math.pow(3, pw))
    counter.innerHTML = formatNumber(amount) + " cookies"

    setTimeout(clickLoop, getClickInterval())
}
function getClickInterval() {
    return baseSpeed * Math.pow(0.7, cd) * Math.pow(0.25, pw)
}
function formatNumber(num) {
    const abs = Math.abs(num)

    if (abs >= 1e21) {
        return (num / 1e21).toFixed(1).replace(/\.0$/, "") + "Sx"
    }
    if (abs >= 1e18) {
        return (num / 1e18).toFixed(1).replace(/\.0$/, "") + "Qi"
    }
    if (abs >= 1e15) {
        return (num / 1e15).toFixed(1).replace(/\.0$/, "") + "Qa"
    }
    if (abs >= 1e12) {
        return (num / 1e12).toFixed(1).replace(/\.0$/, "") + "T"
    }
    if (abs >= 1e9) {
        return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B"
    }
    if (abs >= 1e6) {
        return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
    }
    if (abs >= 1e3) {
        return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
    }

    return num.toString()
}
clickerupg.addEventListener("click", () => {
    if (amount >= clickercost) {
        amount -= clickercost
        counter.innerHTML = formatNumber(amount) + " cookies"
        clickercost = Math.round(clickercost * 1.15)
        clicker += 1
        clickervalue.innerHTML = "Clicker: " + formatNumber(clickercost)
        clickeramount.innerHTML = clicker
        if (!clickerrunning) {
            clickerrunning = true
            clickLoop()
        }
    }
})
upgupg.addEventListener("click", () => {
    if (amount >= upgcost) {
        amount -= upgcost
        counter.innerHTML = formatNumber(amount) + " cookies"
        upgcost = Math.round(upgcost * 1.2)
        upg += 1
        upgprice.innerHTML = "Mouse: " + formatNumber(upgcost)
        upgamount.innerHTML = upg
    }
})
cdbtn.addEventListener("click", () => {
    if (amount >= cdcost) {
        amount -= cdcost
        counter.innerHTML = formatNumber(amount) + " cookies"
        cdcost = Math.round(cdcost * 1.25)
        cd += 1
        cdprice.innerHTML = "Clicker CD: " + formatNumber(cdcost)
        cdamount.innerHTML = cd
    }
})
pwbtn.addEventListener("click", () => {
    if (amount >= pwcost) {
        amount -= pwcost
        counter.innerHTML = formatNumber(amount) + " cookies"
        pwcost = Math.round(Math.pow(pwcost, 2))
        pw += 1
        pwprice.innerHTML = "Clicker PW: " + formatNumber(pwcost)
        pwamount.innerHTML = pw
    }
})
cookie.addEventListener("click", () => {
    amount += upg
    trackGain(upg)
    spawnFloatingNumber(upg)
    counter.innerHTML = formatNumber(amount) + " cookies"
    cookie.classList.remove("cookie-click")
    void cookie.offsetWidth
    cookie.classList.add("cookie-click")
})

let dcardval1 = 0
let dcardval2 = 0
let dcardval3 = 0
let dcardval4 = 0

let cardval1 = 0
let cardval2 = 0
let cardval3 = 0
let cardval4 = 0
let deck = []
let blackjack = false
let card = 1
let dcard = 1
let busted = false
let dbusted = false
let stand = false
let dstand = false
let currentbet = 0

function startblackjack(betamount) {
            amount -= betamount
            counter.innerHTML = formatNumber(amount) + " cookies"
            bet.innerHTML = "Current bet: " + formatNumber(parseInt(betamount))
            currentbet = parseInt(betamount)
            blackjack = true
            deck = [...fulldeck]
            cardval1 = 0
            cardval2 = 0
            cardval3 = 0
            cardval4 = 0
            dcardval1 = 0
            dcardval2 = 0
            dcardval3 = 0 
            dcardval4 = 0
            card = 1
            dcard = 1
            stand = false
            busted = false
            dstand = false
            dbusted = false
            card1.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            card2.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            card3.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            card4.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            dcard1.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            dcard2.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            dcard3.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            dcard4.src = "https://balatrowiki.org/images/Red_Deck.png?b56d3"
            dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4)
            drawcard()
            dealerdrawcard()
}
betbtn.addEventListener("click", () => {
    if (input.value > 0 && input.value <= amount && !blackjack) {
                    startblackjack(input.value)
    }
})
input.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        if (input.value > 0 && input.value <= amount && !blackjack) {
                    startblackjack(input.value)
        }
}})
standbtn.addEventListener("click", () => {
    if (!busted && !stand) {
        stand = true
        dealerplay()
    }
})
allinbtn.addEventListener("click", () => {
    if (!blackjack) {
            startblackjack(amount)
    }
})
function getCardValue(card) {
    const value = card.name.slice(0, -1)

    if (value === "a") return 11
    if (["k", "q", "j"].includes(value)) return 10
    return parseInt(value)
}
function choosecard() {
    const index = Math.floor(Math.random() * deck.length)
    const card = deck[index]
    deck.splice(index, 1)
    return card
}
function drawcard() {
    const drawn = choosecard()
    switch (card) {
        case 1:
            flipCard(card1, drawn.img)
            cardval1 = getCardValue(drawn)
            card++
            cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4)
            if (cardval1 + cardval2 + cardval3 + cardval4 > 21) {
                cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4) + " (busted)"
                busted = true
                blackjack = false
                card = 1
                finishmatch()
            }
            break
        case 2:
            flipCard(card2, drawn.img)
            cardval2 = getCardValue(drawn)
            card++
            cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4)
            if (cardval1 + cardval2 + cardval3 + cardval4 > 21) {
                cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4) + " (busted)"
                busted = true
                blackjack = false
                card = 1
                finishmatch()
            }
            break
        case 3:
            flipCard(card3, drawn.img)
            cardval3 = getCardValue(drawn)
            card++
            cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4)
            if (cardval1 + cardval2 + cardval3 + cardval4 > 21) {
                cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4) + " (busted)"
                busted = true
                blackjack = false
                card = 1
                finishmatch()
            }
            break
        case 4:
            flipCard(card4, drawn.img)
            cardval4 = getCardValue(drawn)
            card++
            cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4)
            if (cardval1 + cardval2 + cardval3 + cardval4 > 21) {
                cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4) + " (busted)"
                busted = true
                blackjack = false
                card = 1
                finishmatch()
            } else {
                dealerplay()
            }
            break
    }
}
hitbtn.addEventListener("click", () => {
    if (!busted && !stand) {
        drawcard()
    }
})
function flipCard(cardElement, newSrc) {
    cardElement.classList.add("flipping")

    setTimeout(() => {
        cardElement.src = newSrc
    }, 200)

    setTimeout(() => {
        cardElement.classList.remove("flipping")
    }, 400)
}
function dealerdrawcard() {
    const drawn = choosecard()
        switch (dcard) {
            case 1:
                flipCard(dcard1, drawn.img)
                dcardval1 = getCardValue(drawn)
                dcard++
                dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4)
                if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21) {
                    dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4) + " (busted)"
                    dbusted = true
                    dcard = 1
                    finishmatch()
                }
                break
            case 2:
                flipCard(dcard2, drawn.img)
                dcardval2 = getCardValue(drawn)
                dcard++
                dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4)
                if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21) {
                    dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4) + " (busted)"
                    dbusted = true
                    dcard = 1
                    finishmatch()
                }
                break
            case 3:
                flipCard(dcard3, drawn.img)
                dcardval3 = getCardValue(drawn)
                dcard++
                dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4)
                if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21) {
                    dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4) + " (busted)"
                    dbusted = true
                    dcard = 1
                    finishmatch()
                }
                break
            case 4:
                flipCard(dcard4, drawn.img)
                dcardval4 = getCardValue(drawn)
                dcard++
                dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4)
                if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21) {
                    dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4) + " (busted)"
                    dbusted = true
                    dcard = 1
                    finishmatch()
                } else {
                    finishmatch()
                    dcard = 1
                }
                break
        }
}
function dealerplay() {
    while (dcard <= 4 && !dbusted && !dstand) {
        if ((dcardval1 + dcardval2 + dcardval3 + dcardval4) < 17) {
            dealerdrawcard()
        } else {
            dstand = true
            finishmatch()
        }
    }

}
function finishmatch() {
    if (!blackjack) return
    if ((!busted && (dcardval1 + dcardval2 + dcardval3 + dcardval4) < (cardval1 + cardval2 + cardval3 + cardval4)) || (dbusted && !busted)) {
        amount += parseInt(currentbet) * 2
        spawnFloatingNumberBlack(parseInt(currentbet) * 2)
        trackGain(parseInt(currentbet) * 2)
        blackjack = false
        counter.innerHTML = formatNumber(amount) + " cookies"
    } else if (!busted && (dcardval1 + dcardval2 + dcardval3 + dcardval4) == (cardval1 + cardval2 + cardval3 + cardval4) && !dbusted) {
        amount += parseInt(currentbet)
        blackjack = false
        counter.innerHTML = formatNumber(amount) + " cookies"
        spawnFloatingNumberBlack(parseInt(currentbet))
        trackGain(parseInt(currentbet))
    } else {
        blackjack = false
    }
}

function spawnFloatingNumber(value) {
    const number = document.createElement("div")
    number.className = "floating-number"
    number.textContent = "+" + value

    const rotation = getRotation()
    number.style.setProperty('--rot', rotation + 'deg')

    const cookieRect = cookie.getBoundingClientRect()
    const parentRect = document.querySelector(".maintab").getBoundingClientRect()

    const x = cookieRect.left - parentRect.left + Math.random() * cookieRect.width
    const y = cookieRect.top - parentRect.top + Math.random() * cookieRect.height

    number.style.left = x + "px"
    number.style.top = y + "px"

    document.querySelector(".maintab").appendChild(number)

    setTimeout(() => number.remove(), 300)
}
function spawnFloatingNumberBlack(value) {
    const number = document.createElement("div")
    number.className = "floating-number-blackjack"
    number.textContent = "+" + value

    const rotation = getRotation()
    number.style.setProperty('--rot', rotation + 'deg')

    const cookieRect = cookie.getBoundingClientRect()
    const parentRect = document.querySelector(".maintab").getBoundingClientRect()

    const x = cookieRect.left - parentRect.left + Math.random() * cookieRect.width
    const y = cookieRect.top - parentRect.top + Math.random() * cookieRect.height

    number.style.left = x + "px"
    number.style.top = y + "px"

    document.querySelector(".maintab").appendChild(number)

    setTimeout(() => number.remove(), 300)
}
function getRotation() {
    return (Math.random() - 0.5) * 60
}
function trackGain(amount) {
    const now = Date.now()

    gainHistory.push({ time: now, amount: amount })

    gainHistory = gainHistory.filter(entry => now - entry.time <= 2000)
}
function getCPS() {
    const now = Date.now()

    gainHistory = gainHistory.filter(entry => now - entry.time <= 5000)

    const total = gainHistory.reduce((sum, entry) => sum + entry.amount, 0)

    return total / 2
}
function updateCPSDisplay() {
    const cps = getCPS()

    document.getElementById("cps").innerHTML =
        formatNumber(cps) + " cookies/sec"

    requestAnimationFrame(updateCPSDisplay)
}

updateCPSDisplay()