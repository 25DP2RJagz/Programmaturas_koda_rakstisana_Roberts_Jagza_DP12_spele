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
import { bfulldeck } from "./bdeck.js"
import { gfulldeck } from "./gdeck.js"
import { nfulldeck } from "./ndeck.js"
import { blfulldeck } from "./bldeck.js"

let amount = BigInt("99999999999999999999999999999")
let clicker = 0
let upg = BigInt("1")
let clickercost = BigInt("20")
let upgcost = BigInt("40")
let cdcost = BigInt("50")
let cd = 0
let clickerrunning = false
let pw = 0
let pwcost = BigInt("500")
let clickdelay = 1

let gainHistory = []

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

const dcard1 = document.getElementById("dcard1")
const dcard2 = document.getElementById("dcard2")
const dcard3 = document.getElementById("dcard3")
const dcard4 = document.getElementById("dcard4")

const baseSpeed = 1000
function clickLoop() {
    amount += BigInt(Math.round(clicker * Math.pow(2.5, pw)))
    spawnFloatingNumber(clicker * Math.pow(2.5, pw))
    trackGain(clicker * Math.pow(2.5, pw))
    counter.innerHTML = formatNumber(amount) + " cookies"

    setTimeout(clickLoop, getClickInterval())
}
function getClickInterval() {
    return baseSpeed * Math.pow(0.9, cd) * Math.pow(1.5, pw)
}
function formatNumber(num) {
    if (typeof num === 'bigint') {
        const numStr = num.toString()
        const len = numStr.length

        if (len >= 67) return numStr.slice(0, -66) + "." + numStr.slice(-66, -65) + "Uvg"
        if (len >= 64) return numStr.slice(0, -63) + "." + numStr.slice(-63, -62) + "Vg"
        if (len >= 61) return numStr.slice(0, -60) + "." + numStr.slice(-60, -59) + "Nod"
        if (len >= 58) return numStr.slice(0, -57) + "." + numStr.slice(-57, -56) + "Ocd"
        if (len >= 55) return numStr.slice(0, -54) + "." + numStr.slice(-54, -53) + "Spd"
        if (len >= 52) return numStr.slice(0, -51) + "." + numStr.slice(-51, -50) + "Sxd"
        if (len >= 49) return numStr.slice(0, -48) + "." + numStr.slice(-48, -47) + "Qid"
        if (len >= 46) return numStr.slice(0, -45) + "." + numStr.slice(-45, -44) + "Qad"
        if (len >= 43) return numStr.slice(0, -42) + "." + numStr.slice(-42, -41) + "Td"
        if (len >= 40) return numStr.slice(0, -39) + "." + numStr.slice(-39, -38) + "Dd"
        if (len >= 37) return numStr.slice(0, -36) + "." + numStr.slice(-36, -35) + "Ud"
        if (len >= 34) return numStr.slice(0, -33) + "." + numStr.slice(-33, -32) + "Dc"
        if (len >= 31) return numStr.slice(0, -30) + "." + numStr.slice(-30, -29) + "No"
        if (len >= 28) return numStr.slice(0, -27) + "." + numStr.slice(-27, -26) + "Oc"
        if (len >= 25) return numStr.slice(0, -24) + "." + numStr.slice(-24, -23) + "Sp"
        if (len >= 22) return numStr.slice(0, -21) + "." + numStr.slice(-21, -20) + "Sx"
        if (len >= 19) return numStr.slice(0, -18) + "." + numStr.slice(-18, -17) + "Qi"
        if (len >= 16) return numStr.slice(0, -15) + "." + numStr.slice(-15, -14) + "Qa"
        if (len >= 13) return numStr.slice(0, -12) + "." + numStr.slice(-12, -11) + "T"
        if (len >= 10) return numStr.slice(0, -9) + "." + numStr.slice(-9, -8) + "B"
        if (len >= 7) return numStr.slice(0, -6) + "." + numStr.slice(-6, -5) + "M"
        if (len >= 4) return numStr.slice(0, -3) + "." + numStr.slice(-3, -2) + "K"

        return numStr
    }

    return formatNumber(BigInt(Math.floor(num)))
}
clickerupg.addEventListener("click", () => {
    if (amount >= clickercost) {
        amount -= clickercost
        counter.innerHTML = formatNumber(amount) + " cookies"
        clickercost = clickercost * BigInt(115) / BigInt(100)
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
        upgcost = upgcost * BigInt(120) / BigInt(100)
        upg += BigInt("1")
        upgprice.innerHTML = "Mouse: " + formatNumber(upgcost)
        upgamount.innerHTML = upg
    }
})
cdbtn.addEventListener("click", () => {
    if (amount >= cdcost) {
        amount -= cdcost
        counter.innerHTML = formatNumber(amount) + " cookies"
        cdcost = cdcost * BigInt(125) / BigInt(100)
        cd += 1
        cdprice.innerHTML = "Clicker CD: " + formatNumber(cdcost)
        cdamount.innerHTML = cd
    }
})
pwbtn.addEventListener("click", () => {
    if (amount >= pwcost) {
        amount -= pwcost
        counter.innerHTML = formatNumber(amount) + " cookies"
        pwcost = pwcost * BigInt(230) / BigInt(100)
        pw += 1
        pwprice.innerHTML = "Clicker PW: " + formatNumber(pwcost)
        pwamount.innerHTML = pw
    }
})
cookie.addEventListener("click", () => {
    amount += BigInt(upg)
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
let ddeck = []
let blackjack = false
let card = 1
let dcard = 1
let busted = false
let dbusted = false
let stand = false
let dstand = false
let currentbet = BigInt("0")
let bustamount = 21
let winmult = 2
let magicmult = BigInt("0")


function deckattributes() {
    switch (currentdeck) {
        case 1:
            bustamount = 21
            winmult = 200
            break
        case 2:
            bustamount = 21
            winmult = 190
            break
        case 3:
            bustamount = 20
            winmult = 400
            break
        case 4:
            bustamount = 10000
            winmult = 150
            break
        case 5:
            bustamount = 23
            winmult = 200
            break
        case 6:
            bustamount = 22
            winmult = 200
            break
        case 7:
            bustamount = 21
            winmult = 300
            break
        case 8:
            bustamount = 21
            winmult = 250
            break
        case 9:
            bustamount = 21
            winmult = 500
            break
    }
}
function assigndeck() {
    switch (currentdeck) {
        case 1:
            return [...fulldeck]
        case 2:
            return [...bfulldeck]
        case 3:
            return [...fulldeck]
        case 4:
            return [...gfulldeck]
        case 5:
            return [...fulldeck]
        case 6:
            return [...blfulldeck]
        case 7:
            return [...fulldeck]
        case 8:
            return [...nfulldeck]
        case 9:
            return [...fulldeck]
    }
}
function startblackjack(betamount) {
            amount -= betamount
            counter.innerHTML = formatNumber(amount) + " cookies"
            bet.innerHTML = "Current bet: " + formatNumber(parseInt(betamount))
            currentbet = betamount
            blackjack = true
            deck = assigndeck()
            ddeck = [...fulldeck]
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
            deckattributes()
            if (card2.src != deckimg(currentdeck)) {
                flipCard(card2, deckimg(currentdeck))
            }
            if (card3.src != deckimg(currentdeck)) {
                flipCard(card3, deckimg(currentdeck))
            }
            if (card4.src != deckimg(currentdeck)) {
                flipCard(card4, deckimg(currentdeck))
            }
            if (dcard1.src != deckimg(1)) {
                flipCard(dcard1, deckimg(1))
            }
            if (dcard2.src != deckimg(1)) {
                flipCard(dcard2, deckimg(1))
            }
            if (dcard3.src != deckimg(1)) {
                flipCard(dcard3, deckimg(1))
            }
            if (dcard4.src != deckimg(1)) {
                flipCard(dcard4, deckimg(1))
            }
            dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4)
            drawcard()
            dealerdrawcard()
}
betbtn.addEventListener("click", () => {
    if (input.value > 0 && input.value <= amount && !blackjack) {
                    startblackjack(BigInt(input.value))
    }
})
input.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        if (input.value > 0 && input.value <= amount && !blackjack) {
                    startblackjack(BigInt(input.value))
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
function erraticchoosecard() {
    const index = Math.floor(Math.random() * deck.length)
    const card = deck[index]
    return card
}
function choosedealercard() {
    const index = Math.floor(Math.random() * ddeck.length)
    const card = ddeck[index]
    ddeck.splice(index, 1)
    return card
}
let drawn = 0
function drawcard() {
    if (currentdeck == 9) {
        drawn = erraticchoosecard()
    } else {
        drawn = choosecard()
    }
    switch (card) {
        case 1:
            flipCard(card1, drawn.img)
            cardval1 = getCardValue(drawn)
            card++
            cardval.innerHTML = "Total value: " + (cardval1 + cardval2 + cardval3 + cardval4)
            if (cardval1 + cardval2 + cardval3 + cardval4 == bustamount) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount) {
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
            if (cardval1 + cardval2 + cardval3 + cardval4 == bustamount) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount) {
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
            if (cardval1 + cardval2 + cardval3 + cardval4 == bustamount) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount) {
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
            if (cardval1 + cardval2 + cardval3 + cardval4 == bustamount) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount) {
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
function deckimg(number) {
    switch (number){
        case 1:
            return "https://balatrowiki.org/images/Red_Deck.png?b56d3"
        case 2:
            return "https://balatrowiki.org/images/Blue_Deck.png?00228"
        case 3:
            return "https://balatrowiki.org/images/Yellow_Deck.png?9cdee"
        case 4:
            return "https://balatrowiki.org/images/Ghost_Deck.png?4aae9"
        case 5:
            return "https://balatrowiki.org/images/Green_Deck.png?5f8ea"
        case 6:
            return "https://balatrowiki.org/images/Magic_Deck.png?e8151"
        case 7:
            return "https://balatrowiki.org/images/Black_Deck.png?0e79f"
        case 8:
            return "https://balatrowiki.org/images/Nebula_Deck.png?38113"
        case 9:
            return "https://balatrowiki.org/images/Erratic_Deck.png?171f6"
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
    const drawn = choosedealercard()
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
let nebulachance = 0
function finishmatch() {
    if ((!busted && (dcardval1 + dcardval2 + dcardval3 + dcardval4) < (cardval1 + cardval2 + cardval3 + cardval4)) || (dbusted && !busted)) {
        amount += currentbet * (BigInt(winmult) + magicmult) / BigInt(100)
        spawnFloatingNumber(currentbet * (BigInt(winmult) +magicmult) / BigInt(100))
        blackjack = false
        magicmult += BigInt(100)
        counter.innerHTML = formatNumber(amount) + " cookies"
    } else if (!busted && (dcardval1 + dcardval2 + dcardval3 + dcardval4) == (cardval1 + cardval2 + cardval3 + cardval4) && !dbusted) {
        amount += currentbet
        blackjack = false
        counter.innerHTML = formatNumber(amount) + " cookies"
        spawnFloatingNumber(currentbet)
    } else {
        magicmult = BigInt(0)
        nebulachance = Math.random()
        if (nebulachance <= 0.4 && currentdeck == 8) {
            amount += currentbet
            counter.innerHTML = formatNumber(amount) + " cookies"
            spawnFloatingNumber(currentbet)
        }
        blackjack = false
    }
}

function spawnFloatingNumber(value) {
    const number = document.createElement("div")
    number.className = "floating-number"
    number.textContent = "+" + formatNumber(value)

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

    gainHistory = gainHistory.filter(entry => now - entry.time <= 2000)

    const total = gainHistory.reduce((sum, entry) => sum + Number(entry.amount), 0)

    return total / 2
}
function updateCPSDisplay() {
    const cps = getCPS()

    document.getElementById("cps").innerHTML =
        formatNumber(cps) + " cookies/sec"

    requestAnimationFrame(updateCPSDisplay)
}

updateCPSDisplay()

let currentdeck = 1

function setdeckstatus(number) {
    magicmult = BigInt("0")
    rstatus.innerHTML = "Owned"
    if (bdeckowned) {
        bstatus.innerHTML = "Owned"
    } else {
        bstatus.innerHTML = "Price: " + formatNumber(bdeckprice)
    }
    if (ydeckowned) {
        ystatus.innerHTML = "Owned"
    } else {
        ystatus.innerHTML = "Price: " + formatNumber(ydeckprice)
    }
    if (gdeckowned) {
        gstatus.innerHTML = "Owned"
    } else {
        gstatus.innerHTML = "Price: " + formatNumber(gdeckprice)
    }
    if (grdeckowned) {
        grstatus.innerHTML = "Owned"
    } else {
        grstatus.innerHTML = "Price: " + formatNumber(grdeckprice)
    }
    if (mdeckowned) {
        mstatus.innerHTML = "Owned"
    } else {
        mstatus.innerHTML = "Price: " + formatNumber(mdeckprice)
    }
    if (bldeckowned) {
        blstatus.innerHTML = "Owned"
    } else {
        blstatus.innerHTML = "Price: " + formatNumber(bldeckprice)
    }
    if (ndeckowned) {
        nstatus.innerHTML = "Owned"
    } else {
        nstatus.innerHTML = "Price: " + formatNumber(ndeckprice)
    }
    if (zdeckowned) {
        zstatus.innerHTML = "Owned"
    } else {
        zstatus.innerHTML = "Price: " + formatNumber(zdeckprice)
    }
    switch (number) {
        case 1:
            rstatus.innerHTML = "Selected"
            flipCard(card1, deckimg(currentdeck))
            flipCard(card2, deckimg(currentdeck))
            flipCard(card3, deckimg(currentdeck))
            flipCard(card4, deckimg(currentdeck))
            break
        case 2:
            if (bdeckowned) {
                bstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 3:
            if (ydeckowned) {
                ystatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 4:
            if (gdeckowned) {
                gstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 5:
            if (grdeckowned) {
                grstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 6:
            if (mdeckowned) {
                mstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 7:
            if (bldeckowned) {
                blstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 8:
            if (ndeckowned) {
                nstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 9:
            if (zdeckowned) {
                zstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
    }
}

const rdeck = document.getElementById("rdeck")
const bdeck = document.getElementById("bdeck")
const ydeck = document.getElementById("ydeck")
const gdeck = document.getElementById("gdeck")
const grdeck = document.getElementById("grdeck")
const rstatus = document.getElementById("rstatus")
const bstatus = document.getElementById("bstatus")
const ystatus = document.getElementById("ystatus")
const gstatus = document.getElementById("gstatus")
const grstatus = document.getElementById("grstatus")
const mstatus = document.getElementById("mstatus")
const mdeck = document.getElementById("mdeck")
const blstatus = document.getElementById("blstatus")
const bldeck = document.getElementById("bldeck")
const nstatus = document.getElementById("nstatus")
const ndeck = document.getElementById("ndeck")
const zstatus = document.getElementById("zstatus")
const zdeck = document.getElementById("zdeck")

let bdeckprice = BigInt("5000000")
let bdeckowned = false
let ydeckprice = BigInt("100000")
let ydeckowned = false
let gdeckprice = BigInt("13000000000000")
let gdeckowned = false
let grdeckprice = BigInt("100000000")
let grdeckowned = false
let mdeckprice = BigInt("5000000000000000")
let mdeckowned = false
let bldeckprice = BigInt("10000000000")
let bldeckowned = false
let ndeckprice = BigInt("500000000000000000")
let ndeckowned = false
let zdeckprice = BigInt("3700000000000000000")
let zdeckowned = false

rdeck.addEventListener("click", () => {
    if (!blackjack) {
        currentdeck = 1
        setdeckstatus(1)
    }
})
bdeck.addEventListener("click", () => {
    if (amount >= bdeckprice) {
        amount -= bdeckprice
        bdeckowned = true
    }
    if (!blackjack && bdeckowned) {
        currentdeck = 2
        setdeckstatus(2)
    }
})
ydeck.addEventListener("click", () => {
    if (amount >= ydeckprice) {
        amount -= ydeckprice
        ydeckowned = true
    }
    if (!blackjack && ydeckowned) {
        currentdeck = 3
        setdeckstatus(3)
    }
})
gdeck.addEventListener("click", () => {
    if (amount >= gdeckprice) {
        amount -= gdeckprice
        gdeckowned = true
    }
    if (!blackjack && gdeckowned) {
        currentdeck = 4
        setdeckstatus(4)
    }
})
grdeck.addEventListener("click", () => {
    if (amount >= grdeckprice) {
        amount -= grdeckprice
        grdeckowned = true
    }
    if (!blackjack && grdeckowned) {
        currentdeck = 5
        setdeckstatus(5)
    }
})
mdeck.addEventListener("click", () => {
    if (amount >= mdeckprice) {
        amount -= mdeckprice
        mdeckowned = true
    }
    if (!blackjack && mdeckowned) {
        currentdeck = 6
        setdeckstatus(6)
    }
})
bldeck.addEventListener("click", () => {
    if (amount >= bldeckprice) {
        amount -= bldeckprice
        bldeckowned = true
    }
    if (!blackjack && bldeckowned) {
        currentdeck = 7
        setdeckstatus(7)
    }
})
ndeck.addEventListener("click", () => {
    if (amount >= ndeckprice) {
        amount -= ndeckprice
        ndeckowned = true
    }
    if (!blackjack && ndeckowned) {
        currentdeck = 8
        setdeckstatus(8)
    }
})
zdeck.addEventListener("click", () => {
    if (amount >= zdeckprice) {
        amount -= zdeckprice
        zdeckowned = true
    }
    if (!blackjack && zdeckowned) {
        currentdeck = 9
        setdeckstatus(9)
    }
})
setdeckstatus(1)

const gameview = document.querySelector(".playingsection")
const deckview = document.querySelector(".customdecks")

const playtab = document.getElementById("playtab")
const decktab = document.getElementById("decktab")

playtab.addEventListener("click", () => {
    gameview.style.display = "block"
    deckview.style.display = "none"
})

decktab.addEventListener("click", () => {
    if (!blackjack) {
        gameview.style.display = "none"
        deckview.style.display = "block"
    }
})
const deckdisp = document.getElementById("deckdisplay")
rdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Red Deck: Nothing of note, just the starting deck."
})
rdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
ydeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Yellow Deck: Winning mult = x4, but bust from 21."
})
ydeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
bdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Blue Deck: Remove cards 2-4 and winning mult = x1.9."
})
bdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
gdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Ghost Deck: Remove cards above 9, bust from 130, winning mult = x1.5."
})
gdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
mdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Magic Deck: Each win increases winning mult by 1, but losing resets to 0."
})
mdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
grdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Green Deck: Bust from 24."
})
grdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
ndeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Nebula Deck: Remove cards 2-5, 40% chance to save money when losing and winning mult = 2.5x."
})
ndeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
bldeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Black Deck: Remove cards 6-9, but increases winning mult to 2.5x."
})
bldeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
zdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Erratic Deck: Randomize every card in deck, but increase winning mult to 5x."
})
zdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})