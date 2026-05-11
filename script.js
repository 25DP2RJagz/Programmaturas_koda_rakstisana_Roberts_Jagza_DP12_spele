const cookie = document.getElementById("thecookie")
const counter = document.getElementById("amount")
const clickerupg = document.getElementById("btnclicker")
const upgupg = document.getElementById("btnupg")
const input = document.getElementById("numinput")
const bet = document.getElementById("bet")
const hitbtn = document.getElementById("hitbtn")
const betbtn = document.getElementById("betbtn")
const allinbtn = document.getElementById("allinbtn")
const bet12btn = document.getElementById("bet12btn")
const bet14btn = document.getElementById("bet14btn")
const standbtn = document.getElementById("standbtn")
const cardval = document.getElementById("cardval")
const dcardval = document.getElementById("dcardval")
const clickervalue = document.getElementById("clickerprice")
const clickeramount = document.getElementById("clickeramount")
const upgprice = document.getElementById("upgprice")
const upgamount = document.getElementById("upgamount")
const pizzerupg = document.getElementById("btnpizzer")
const pizzervalue = document.getElementById("pizzerprice")
const pizzeramount = document.getElementById("pizzeramount")
const mattressbtn = document.getElementById("btnmattress")
const mattressvalue = document.getElementById("mattressprice")
const mattressamount = document.getElementById("mattressamount")
const constructionbtn = document.getElementById("btnconstruction")
const constructionvalue = document.getElementById("constructionprice")
const constructionamount = document.getElementById("constructionamount")
import { fulldeck } from "./deck.js"
import { bfulldeck } from "./bdeck.js"
import { gfulldeck } from "./gdeck.js"
import { nfulldeck } from "./ndeck.js"
import { blfulldeck } from "./bldeck.js"
import { afulldeck } from "./adeck.js"
import { pfulldeck } from "./pdeck.js"

let amount = BigInt("10000000000000")
let clicker = 0n
let upg = BigInt("1")
let clickercost = BigInt("20")
let upgcost = BigInt("15")
let pizzer = BigInt(0)
let pizzercost = BigInt("5000")
let clickermult = 105n
let pizzermult = 106n
let upgmult = 107n
let mattress = BigInt(0)
let mattresscost = BigInt("100000")
let mattressmult = 107n
let construction = 0n   
let constructioncost = BigInt("25000000")
let constructionmult = 108n

let gainHistory = []

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

const dcard1 = document.getElementById("dcard1")
const dcard2 = document.getElementById("dcard2")
const dcard3 = document.getElementById("dcard3")
const dcard4 = document.getElementById("dcard4")

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
const amount1 = document.getElementById("amount1")
const amount5 = document.getElementById("amount5")
const amount25 = document.getElementById("amount25")
const amountmax = document.getElementById("amountmax")
let buyamount = 1
amount1.addEventListener("click", () => {buyamount = 1; updateprices()})
amount5.addEventListener("click", () => {buyamount = 5; updateprices()})
amount25.addEventListener("click", () => {buyamount = 25; updateprices()})
amountmax.addEventListener("click", () => {buyamount = 0; updateprices()})
function updateprices() {
    updateClickerPrice(); updateUpgPrice(); updatePizzerPrice(); updateMattressPrice(); updateconstructionPrice();
}
const upgrades = document.getElementById("upgrades")
clickerupg.addEventListener("mouseenter", () => {upgrades.innerHTML = "Joe makes the best pizzas, 4 p/s."})
clickerupg.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
upgupg.addEventListener("mouseenter", () => {upgrades.innerHTML = "Oven for making pizzas manually."})
upgupg.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
pizzerupg.addEventListener("mouseenter", () => {upgrades.innerHTML = "Five nights at pizza, 100 p/s."})
pizzerupg.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
mattressbtn.addEventListener("mouseenter", () => {upgrades.innerHTML = "Who buys this many mattresses? 2.5K p/s."})
mattressbtn.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
constructionbtn.addEventListener("mouseenter", () => {upgrades.innerHTML = "No show jobs, 70K p/s."})
constructionbtn.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
setInterval(() => {
    if (clicker > 0) {
        amount += BigInt(clicker)

        trackGain(clicker)
        spawnFloatingNumber(clicker)

        counter.innerHTML =
            formatNumber(amount) + " pizzas"
    }
    if (pizzer > 0) {
        amount += pizzer * 25n

        trackGain(pizzer * 25n)
        spawnFloatingNumber(pizzer * 25n)

        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (mattress > 0) {
        amount += mattress * 625n

        trackGain(mattress * 625n)
        spawnFloatingNumber(mattress * 625n)

        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (construction > 0) {
        amount += construction * 17500n

        trackGain(construction * 17500n)
        spawnFloatingNumber(construction * 17500n)

        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    updateprices()

}, 250)
function getBulkCost(startCost, multiplier, amountToBuy) {
    let cost = startCost
    let total = 0n

    for (let i = 0; i < amountToBuy; i++) {
        total += cost
        cost = cost * BigInt(multiplier) / 100n
    }

    return total
}
function getMaxAffordable(startCost, multiplier) {
    let cost = startCost
    let total = 0n
    let bought = 0

    while (total + cost <= amount) {
        total += cost
        cost = cost * BigInt(multiplier) / 100n
        bought++
    }

    return bought
}
clickerupg.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(clickercost, clickermult)
    }

    const totalCost = getBulkCost(clickercost, clickermult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            clickercost = clickercost * clickermult / 100n
            clicker += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"

        clickervalue.innerHTML =
            "Joe x" + amountToBuy + ": " + formatNumber(totalCost)

        clickeramount.innerHTML = clicker

        updateClickerPrice()

    }
})
function updateClickerPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(clickercost, clickermult)
    }

    const totalCost = getBulkCost(clickercost, clickermult, amountToBuy)

    clickervalue.innerHTML =
        "Joe x" + amountToBuy + ": " + formatNumber(totalCost)
}
pizzerupg.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(pizzercost, pizzermult)
    }

    const totalCost = getBulkCost(pizzercost, pizzermult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            pizzercost = pizzercost * pizzermult / 100n
            pizzer += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"

        pizzervalue.innerHTML =
            "Pizzeria x" + amountToBuy + ": " + formatNumber(totalCost)

        pizzeramount.innerHTML = pizzer

        updatePizzerPrice()

    }
})
function updatePizzerPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(pizzercost, pizzermult)
    }

    const totalCost = getBulkCost(pizzercost, pizzermult, amountToBuy)

    pizzervalue.innerHTML =
        "Pizzeria x" + amountToBuy + ": " + formatNumber(totalCost)
}
mattressbtn.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(mattresscost, mattressmult)
    }

    const totalCost = getBulkCost(mattresscost, mattressmult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            mattresscost = mattresscost * mattressmult / 100n
            mattress += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"

        mattressvalue.innerHTML =
            "Mattress x" + amountToBuy + ": " + formatNumber(totalCost)

        mattressamount.innerHTML = mattress

        updateMattressPrice()

    }
})
function updateMattressPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(mattresscost, mattressmult)
    }

    const totalCost = getBulkCost(mattresscost, mattressmult, amountToBuy)

    mattressvalue.innerHTML =
        "Mattress x" + amountToBuy + ": " + formatNumber(totalCost)
}
constructionbtn.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(construcitoncost, constructionmult)
    }

    const totalCost = getBulkCost(constructioncost, constructionmult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            constructioncost = constructioncost * constructionmult / 100n
            construction += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"

        constructionvalue.innerHTML =
            "Construction x" + amountToBuy + ": " + formatNumber(totalCost)

        constructionamount.innerHTML = construction

        updateconstructionPrice()

    }
})
function updateconstructionPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(constructioncost, constructionmult)
    }

    const totalCost = getBulkCost(constructioncost, constructionmult, amountToBuy)

    constructionvalue.innerHTML =
        "Construction x" + amountToBuy + ": " + formatNumber(totalCost)
}
upgupg.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(upgcost, upgmult)
    }

    const totalCost = getBulkCost(upgcost, upgmult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            upgcost = upgcost * upgmult / 100n
            upg += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"

        upgprice.innerHTML =
            "Oven x" + amountToBuy + ": " + formatNumber(upgcost)

        upgamount.innerHTML = upg

        updateUpgPrice()

    }
})
function updateUpgPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(upgcost, upgmult)
    }

    const totalCost = getBulkCost(upgcost, upgmult, amountToBuy)

    upgprice.innerHTML =
        "Oven x" + amountToBuy + ": " + formatNumber(totalCost)
}
cookie.addEventListener("click", () => {
    amount += BigInt(upg)
    trackGain(upg)
    spawnFloatingNumber(upg)
    updateprices()
    counter.innerHTML = formatNumber(amount) + " pizzas"
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
        case 1: //red
            bustamount = 21
            winmult = 200
            break
        case 2: //blue
            bustamount = 21
            winmult = 200
            break
        case 3: //yellow
            bustamount = 20
            winmult = 260
            break
        case 4: //ghost
            bustamount = 10000
            winmult = 150
            break
        case 5: //green
            bustamount = 23
            winmult = 200
            break
        case 6: //magic
            bustamount = 22
            winmult = 200
            break
        case 7: //black
            bustamount = 21
            winmult = 210
            break
        case 8: //nebula
            bustamount = 21
            winmult = 250
            break
        case 9: //sacred
            bustamount = 21
            winmult = 200
            break
        case 10: // abandoned
            bustamount = 21
            winmult = 250
            break
        case 11: //halo
            bustamount = 21
            winmult = 180
            break
        case 12: //painted
            bustamount = 21
            winmult = 200
        case 13: //anaglyph
            bustamount = 21
            winmult = 200
    }
}
function assigndeck() {
    switch (currentdeck) {
        case 1:
            return [...fulldeck]
        case 2:
            return [...blfulldeck]
        case 3:
            return [...fulldeck]
        case 4:
            return [...gfulldeck]
        case 5:
            return [...fulldeck]
        case 6:
            return [...bfulldeck]
        case 7:
            return [...fulldeck]
        case 8:
            return [...nfulldeck]
        case 9:
            return [...fulldeck]
        case 10:
            return [...afulldeck]
        case 11:
            return [...fulldeck]
        case 12:
            return [...pfulldeck]
        case 13:
            return [...fulldeck]
    }
}
function startblackjack(betamount) {
            amount -= betamount
            counter.innerHTML = formatNumber(amount) + " pizzas"
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
            card1tier = null
            card2tier = null
            card3tier = null
            card4tier = null
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
let minbetmult = 5
betbtn.addEventListener("click", () => {
    if (input.value >= cps * minbetmult) {
        if (input.value > 0 && input.value <= amount && !blackjack) {
            startblackjack(BigInt(input.value))
        }
    } else if (!popup && !blackjack) {
        showpopup(1)
    }
})
input.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        if (input.value >= cps * minbetmult) {
            if (input.value > 0 && input.value <= amount && !blackjack) {
                startblackjack(BigInt(input.value))
            } else if (!popup && !blackjack) {
                showpopup(1)
            }}
}})
standbtn.addEventListener("click", () => {
    if (!busted && !stand) {
        stand = true
        dealerplay()
    }
})
bet12btn.addEventListener("click", () => {
    if (!blackjack && amount / BigInt(2) >= cps * minbetmult) {
            startblackjack(amount / BigInt(2))
    } else if (!blackjack && !popup) {
        showpopup(1)
    }
})
bet14btn.addEventListener("click", () => {
    if (!blackjack && amount / BigInt(4) >= cps * minbetmult) {
            startblackjack(amount / BigInt(4))
    } else if (!blackjack && !popup) {
        showpopup(1)
    }
})
allinbtn.addEventListener("click", () => {
    if (!blackjack && amount >= cps * minbetmult) {
            startblackjack(amount)
    } else if (!blackjack && !popup) {
        showpopup(1)
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
function choosedealercard() {
    const index = Math.floor(Math.random() * ddeck.length)
    const card = ddeck[index]
    ddeck.splice(index, 1)
    return card
}
function acecheck() {
    if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount && cardval1 == 11) cardval1 = 1
    if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount && cardval2 == 11) cardval2 = 1
    if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount && cardval3 == 11) cardval3 = 1
    if (cardval1 + cardval2 + cardval3 + cardval4 > bustamount && cardval4 == 11) cardval4 = 1
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval1 == 11) dcardval1 = 1
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval2 == 11) dcardval2 = 1 
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval3 == 11) dcardval3 = 1 
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval4 == 11) dcardval4 = 1 
}
let drawn = 0
let card1tier = null
let card2tier = null
let card3tier = null
let card4tier = null
function getcardtier(card) {
    return card.name.slice(0, -1)
}
function checkanaglyph() {
    if (currentdeck == 13) {
        if (card == 3 && card1tier == card2tier) {
            cardval1 = 21
            cardval2 = 0
            cardval3 = 0
            cardval4 = 0
            triggeranaglyph += 1
        }
        if (card == 4 && card2tier == card3tier) {
            cardval1 = 21
            cardval2 = 0
            cardval3 = 0
            cardval4 = 0
            triggeranaglyph += 1
        }
        if (card == 5 && card3tier == card4tier) {
            cardval1 = 21
            cardval2 = 0
            cardval3 = 0
            cardval4 = 0
            triggeranaglyph += 1
        }
    }
}
function halodeck(curr) {
    let total = cardval1 + cardval2 + cardval3 + cardval4
    let newtotal = total + getCardValue(curr)

    if (newtotal > bustamount && currentdeck == 11) {
        spawnFloatingNumber(0, {
            text: "HALO GRACE",
            color: "white",
            size: "70px",
            duration: 5000
        })

        return choosecard()
    }

    return curr
}
function drawcard() {
    drawn = choosecard()
    switch (card) {
        case 1:
            drawn = halodeck(drawn)
            flipCard(card1, drawn.img)
            cardval1 = getCardValue(drawn)
            card++
            card1tier = getcardtier(drawn)
            checkanaglyph()
            acecheck()
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
            drawn = halodeck(drawn)
            flipCard(card2, drawn.img)
            cardval2 = getCardValue(drawn)
            card++
            card2tier = getcardtier(drawn)
            checkanaglyph()
            acecheck()
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
            drawn = halodeck(drawn)
            flipCard(card3, drawn.img)
            cardval3 = getCardValue(drawn)
            card++
            card3tier = getcardtier(drawn)
            checkanaglyph()
            acecheck()
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
            drawn = halodeck(drawn)
            flipCard(card4, drawn.img)
            cardval4 = getCardValue(drawn)
            card++
            card4tier = getcardtier(drawn)
            checkanaglyph()
            acecheck()
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
        case 10:
            return "https://balatrowiki.org/images/Abandoned_Deck.png?e6d1d"
        case 11:
            return "https://static.wikitide.net/balatromodswiki/3/31/Orbit_Deck_%28Monarchy%29.png"
        case 12:
            return "https://balatrowiki.org/images/Painted_Deck.png?5fdce"
        case 13:
            return "https://balatrowiki.org/images/Anaglyph_Deck.png?97cb8"
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
const jackpopup = document.querySelector(".jackpopup")
const tpoptext = document.getElementById("tpoptext")
const bpoptext = document.getElementById("bpoptext")
let popup = false
function showpopup(message, quest) {
    switch (message) {
        case 1:
            jackpopup.classList.add("show")
            popup = true
            setTimeout(() => {
                jackpopup.classList.remove("show")
                popup = false
            }, 3000)
            tpoptext.innerHTML = "Too low bet"
            bpoptext.innerHTML = "Current min bet: " + formatNumber(cps * minbetmult)
            break
        case 2:
            jackpopup.classList.add("show")
            popup = true

            setTimeout(() => {
                jackpopup.classList.remove("show")
                popup = false
            }, 3000)
            if (quest.length == 1) {
                tpoptext.innerHTML = "Quest complete"
            } else {
                tpoptext.innerHTML = "Quests complete"
            }

            bpoptext.innerHTML = quest.join(", ")
    }
}
function dealerdrawcard() {
    const drawn = choosedealercard()
        switch (dcard) {
            case 1:
                flipCard(dcard1, drawn.img)
                dcardval1 = getCardValue(drawn)
                dcard++
                acecheck()
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
                acecheck()
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
                acecheck()
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
                acecheck()
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
        questwin()
        spawnFloatingNumber(0, {
            text: "BLACKJACK: +" + formatNumber(currentbet * (BigInt(winmult) +magicmult) / BigInt(100)),
            color: "red",
            size: "60px",
            duration: 3000
        })
        blackjack = false
        magicmult += BigInt(25)
        counter.innerHTML = formatNumber(amount) + " pizzas"
    } else if ((!busted && (dcardval1 + dcardval2 + dcardval3 + dcardval4) == (cardval1 + cardval2 + cardval3 + cardval4) && !dbusted)) {
        amount += currentbet
        blackjack = false
        counter.innerHTML = formatNumber(amount) + " pizzas"
        spawnFloatingNumber(currentbet)
    } else {
        magicmult = BigInt(0)
        nebulachance = Math.random()
        if (nebulachance <= 0.4 && currentdeck == 8) {
            amount += currentbet
            counter.innerHTML = formatNumber(amount) + " pizzas"
            spawnFloatingNumber(currentbet)
            spawnFloatingNumber(0, {
            text: "NEBULA SAVE",
            color: "purple",
            size: "70px",
            duration: 5000
        })
        }
        blackjack = false
    }
}
function questwin() {
    if (currentdeck == 1) {redwins += 1}
    if (currentdeck == 3) {yellowwins += 1}
    if (currentdeck == 2) {bluewins += 1}
    if (currentdeck == 5) {greenwins += 1}
    if (currentdeck == 7) {blackwins += 1}
    if (currentdeck == 10) {decayedwins += 1}
    if (currentdeck == 12) {paintedwins += 1}
    if (currentdeck == 13) {anaglyphwins += 1}
    if (currentdeck == 11) {halowins += 1}
    if (currentdeck == 4) {ghostwins += 1}
    if (currentdeck == 6) {magicwins += 1}
    if (currentdeck == 8) {nebulawins += 1}
    jackearnings += currentbet * (BigInt(winmult) + magicmult) / BigInt(200)
    if (currentbet >= 200000) {win200k += 1}
    if (cardval1 + cardval2 + cardval3 + cardval4 == 23 && currentdeck == 5) {triggergreen += 1}
    if (currentbet >= 25000000) {win25m += 1}
    if (currentbet >= 1000000000) {win1b += 1}
    if (magicmult >= 4) {magicstreak += 1}
    updatequests()
}
function spawnFloatingNumber(value, options = {}) {
    const {
        text = "+" + formatNumber(value),
        color = "rgb(184, 141, 1)",
        size = "45px",
        duration = 1000
    } = options

    const number = document.createElement("div")
    number.className = "floating-number"
    number.textContent = text

    number.style.color = color
    number.style.fontSize = size
    number.style.animationDuration = duration + "ms"

    const rotation = getRotation()
    number.style.setProperty('--rot', rotation + 'deg')

    const cookieRect = cookie.getBoundingClientRect()
    const parentRect = document.querySelector(".maintab").getBoundingClientRect()

    const x = cookieRect.left - parentRect.left + Math.random() * cookieRect.width
    const y = cookieRect.top - parentRect.top + Math.random() * cookieRect.height

    number.style.left = x + "px"
    number.style.top = y + "px"

    document.querySelector(".maintab").appendChild(number)

    setTimeout(() => number.remove(), duration)
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
let cps = 0
function updateCPSDisplay() {
    cps = getCPS()

    document.getElementById("cps").innerHTML =
        formatNumber(cps) + " pizzas/sec"

    requestAnimationFrame(updateCPSDisplay)
}

updateCPSDisplay()

let currentdeck = 1

function setdeckstatus(number) {
    magicmult = BigInt("0")
    rstatus.innerHTML = "Owned"
    bstatus.innerHTML = "Owned"
    ystatus.innerHTML = "Owned"
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
    if (adeckowned) {
        astatus.innerHTML = "Owned"
    } else {
        astatus.innerHTML = "Price: " + formatNumber(adeckprice)
    }
    if (hdeckowned) {
        hstatus.innerHTML = "Owned"
    } else {
        hstatus.innerHTML = "Price: " + formatNumber(hdeckprice)
    }
    if (pdeckowned) {
        pstatus.innerHTML = "Owned"
    } else {
        pstatus.innerHTML = "Price: " + formatNumber(pdeckprice)
    }
    if (andeckowned) {
        anstatus.innerHTML = "Owned"
    } else {
        anstatus.innerHTML = "Price: " + formatNumber(andeckprice)
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
            bstatus.innerHTML = "Selected"
            flipCard(card1, deckimg(currentdeck))
            flipCard(card2, deckimg(currentdeck))
            flipCard(card3, deckimg(currentdeck))
            flipCard(card4, deckimg(currentdeck))
            break
        case 3:
            ystatus.innerHTML = "Selected"
            flipCard(card1, deckimg(currentdeck))
            flipCard(card2, deckimg(currentdeck))
            flipCard(card3, deckimg(currentdeck))
            flipCard(card4, deckimg(currentdeck))
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
        case 10:
            if (adeckowned) {
                astatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 11:
            if (hdeckowned) {
                hstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 12:
            if (pdeckowned) {
                pstatus.innerHTML = "Selected"
                flipCard(card1, deckimg(currentdeck))
                flipCard(card2, deckimg(currentdeck))
                flipCard(card3, deckimg(currentdeck))
                flipCard(card4, deckimg(currentdeck))
            }
            break
        case 13:
            if (andeckowned) {
                anstatus.innerHTML = "Selected"
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
const astatus = document.getElementById("astatus")
const adeck = document.getElementById("adeck")
const hstatus = document.getElementById("hstatus")
const hdeck = document.getElementById("hdeck")
const anstatus = document.getElementById("anstatus")
const andeck = document.getElementById("andeck")
const pstatus = document.getElementById("pstatus")
const pdeck = document.getElementById("pdeck")

let adeckprice = BigInt("25000")
let adeckowned = false
let andeckprice = BigInt("1000000")
let andeckowned = false
let gdeckprice = BigInt("200000000")
let gdeckowned = false
let grdeckprice = BigInt("25000")
let grdeckowned = false
let mdeckprice = BigInt("200000000")
let mdeckowned = false
let hdeckprice = BigInt("1000000")
let hdeckowned = false
let pdeckprice = BigInt("1000000")
let pdeckowned = false
let bldeckprice = BigInt("25000")
let bldeckowned = false
let ndeckprice = BigInt("200000000")
let ndeckowned = false
let zdeckprice = BigInt("3700000000000000000")
let zdeckowned = false
adeck.addEventListener("click", () => {
    if (amount >= adeckprice && !adeckowned) {
        amount -= adeckprice
        adeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && adeckowned) {
        currentdeck = 10
        setdeckstatus(10)
    }
})
pdeck.addEventListener("click", () => {
    if (amount >= pdeckprice && !pdeckowned) {
        amount -= pdeckprice
        pdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && pdeckowned) {
        currentdeck = 12
        setdeckstatus(12)
    }
})
andeck.addEventListener("click", () => {
    if (amount >= andeckprice && !andeckowned) {
        amount -= andeckprice
        andeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && andeckowned) {
        currentdeck = 13
        setdeckstatus(13)
    }
})
hdeck.addEventListener("click", () => {
    if (amount >= hdeckprice && !hdeckowned) {
        amount -= hdeckprice
        hdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && hdeckowned) {
        currentdeck = 11
        setdeckstatus(11)
    }
})
rdeck.addEventListener("click", () => {
    if (!blackjack) {
        currentdeck = 1
        setdeckstatus(1)
    }
})
bdeck.addEventListener("click", () => {
    if (!blackjack) {
        currentdeck = 2
        setdeckstatus(2)
    }
})
ydeck.addEventListener("click", () => {
    if (!blackjack) {
        currentdeck = 3
        setdeckstatus(3)
    }
})
gdeck.addEventListener("click", () => {
    if (amount >= gdeckprice && !gdeckowned) {
        amount -= gdeckprice
        gdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && gdeckowned) {
        currentdeck = 4
        setdeckstatus(4)
    }
})
grdeck.addEventListener("click", () => {
    if (amount >= grdeckprice && !grdeckowned) {
        amount -= grdeckprice
        grdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && grdeckowned) {
        currentdeck = 5
        setdeckstatus(5)
    }
})
mdeck.addEventListener("click", () => {
    if (amount >= mdeckprice && !mdeckowned) {
        amount -= mdeckprice
        mdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && mdeckowned) {
        currentdeck = 6
        setdeckstatus(6)
    }
})
bldeck.addEventListener("click", () => {
    if (amount >= bldeckprice && !bldeckowned) {
        amount -= bldeckprice
        bldeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && bldeckowned) {
        currentdeck = 7
        setdeckstatus(7)
    }
})
ndeck.addEventListener("click", () => {
    if (amount >= ndeckprice && !ndeckowned) {
        amount -= ndeckprice
        ndeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && ndeckowned) {
        currentdeck = 8
        setdeckstatus(8)
    }
})
zdeck.addEventListener("click", () => {
    if (amount >= zdeckprice && !zdeckowned) {
        amount -= zdeckprice
        zdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && zdeckowned) {
        currentdeck = 9
        setdeckstatus(9)
    }
})
setdeckstatus(1)

const questview = document.querySelector(".queststab")
const gameview = document.querySelector(".playingsection")
const deckview = document.querySelector(".customdecks")
const page1btn = document.getElementById("page1btn")
const page2btn = document.getElementById("page2btn")
const playtab = document.getElementById("playtab")
const decktab = document.getElementById("decktab")
const questtab = document.getElementById("questtab")
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const upgradestab = document.getElementById("upgradetab")
const buffstab = document.getElementById("buffstab")
const boxestab = document.getElementById("boxesstab")
const itemstab = document.getElementById("itemstab")
const upgradesbtn = document.getElementById("upgradesbtn")
const buffsbtn = document.getElementById("buffsbtn")
const boxesbtn = document.getElementById("boxesbtn")
const itemsbtn = document.getElementById("itemsbtn")
const leveltab = document.getElementById("levelquests")
const endlesstab = document.getElementById("endlessquests")
const levelbtn = document.getElementById("levelbtn")
const endlessbtn = document.getElementById("endlessbtn")

playtab.addEventListener("click", () => {
    gameview.style.display = "block"
    deckview.style.display = "none"
    questview.style.display = "none"
})

decktab.addEventListener("click", () => {
    if (!blackjack) {
        gameview.style.display = "none"
        deckview.style.display = "block"
        questview.style.display = "none"
    }
})
questtab.addEventListener("click", () => {
    if (!blackjack) {
        gameview.style.display = "none"
        deckview.style.display = "none"
        questview.style.display = "flex"
        updatequests()
    }
})
page1btn.addEventListener("click", () => {
    page1.style.display = "flex"
    page2.style.display = "none"
})
page2btn.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "flex"
})
levelbtn.addEventListener("click", () => {
    leveltab.style.display = "block"
    endlesstab.style.display = "none"
})
endlessbtn.addEventListener("click", () => {
    leveltab.style.display = "none"
    endlesstab.style.display = "block"
})
upgradesbtn.addEventListener("click", () => {
    upgradestab.style.display = "block"
    buffstab.style.display = "none"
    boxestab.style.display = "none"
    itemsbtn.style.display = "none"
})
buffsbtn.addEventListener("click", () => {
    upgradestab.style.display = "none"
    buffstab.style.display = "block"
    boxestab.style.display = "none"
    itemsbtn.style.display = "none"
})
boxesbtn.addEventListener("click", () => {
    upgradestab.style.display = "none"
    buffstab.style.display = "none"
    boxestab.style.display = "block"
    itemsbtn.style.display = "none"
})
itemsbtn.addEventListener("click", () => {
    upgradestab.style.display = "none"
    buffstab.style.display = "none"
    boxestab.style.display = "none"
    itemsbtn.style.display = "block"
})
let reqadd = 1.4
let chipadd = 1.1
const end1 = document.getElementById("end1")
const end1prog = document.getElementById("end1prog")
const end1chip = document.getElementById("end1chip")
let end1ch = 300
let end1req = 3
end1.addEventListener("click", () => {if (redwins >= end1req) {end1req = Math.floor(end1req * reqadd); chips += end1ch; end1ch = Math.floor(end1ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})
const end2 = document.getElementById("end2")
const end2prog = document.getElementById("end2prog")
const end2chip = document.getElementById("end2chip")
let end2ch = 300
let end2req = 3
end2.addEventListener("click", () => {if (yellowwins >= end2req) {end2req = Math.floor(end2req * reqadd); chips += end2ch; end2ch = Math.floor(end2ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end3 = document.getElementById("end3")
const end3prog = document.getElementById("end3prog")
const end3chip = document.getElementById("end3chip")
let end3ch = 300
let end3req = 3
end3.addEventListener("click", () => {if (bluewins >= end3req) {end3req = Math.floor(end3req * reqadd); chips += end3ch; end3ch = Math.floor(end3ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end4 = document.getElementById("end4")
const end4prog = document.getElementById("end4prog")
const end4chip = document.getElementById("end4chip")
let end4ch = 300
let end4req = 3
end4.addEventListener("click", () => {if (blackwins >= end4req) {end4req = Math.floor(end4req * reqadd); chips += end4ch; end4ch = Math.floor(end4ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end5 = document.getElementById("end5")
const end5prog = document.getElementById("end5prog")
const end5chip = document.getElementById("end5chip")
let end5ch = 300
let end5req = 3
end5.addEventListener("click", () => {if (decayedwins >= end5req) {end5req = Math.floor(end5req * reqadd); chips += end5ch; end5ch = Math.floor(end5ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})
const end6 = document.getElementById("end6")
const end6prog = document.getElementById("end6prog")
const end6chip = document.getElementById("end6chip")
let end6ch = 300
let end6req = 3
end6.addEventListener("click", () => {if (greenwins >= end6req) {end6req = Math.floor(end6req * reqadd); chips += end6ch; end6ch = Math.floor(end6ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end7 = document.getElementById("end7")
const end7prog = document.getElementById("end7prog")
const end7chip = document.getElementById("end7chip")
let end7ch = 300
let end7req = 3
end7.addEventListener("click", () => {if (anaglyphwins >= end7req) {end7req = Math.floor(end7req * reqadd); chips += end7ch; end7ch = Math.floor(end7ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end8 = document.getElementById("end8")
const end8prog = document.getElementById("end8prog")
const end8chip = document.getElementById("end8chip")
let end8ch = 300
let end8req = 3
end8.addEventListener("click", () => {if (paintedwins >= end8req) {end8req = Math.floor(end8req * reqadd); chips += end8ch; end8ch = Math.floor(end8ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end9 = document.getElementById("end9")
const end9prog = document.getElementById("end9prog")
const end9chip = document.getElementById("end9chip")
let end9ch = 300
let end9req = 3
end9.addEventListener("click", () => {if (halowins >= end9req) {end9req = Math.floor(end9req * reqadd); chips += end9ch; end9ch = Math.floor(end9ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end10 = document.getElementById("end10")
const end10prog = document.getElementById("end10prog")
const end10chip = document.getElementById("end10chip")
let end10ch = 300
let end10req = 3
end10.addEventListener("click", () => {if (ghostwins >= end10req) {end10req = Math.floor(end10req * reqadd); chips += end10ch; end10ch = Math.floor(end10ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end11 = document.getElementById("end11")
const end11prog = document.getElementById("end11prog")
const end11chip = document.getElementById("end11chip")
let end11ch = 300
let end11req = 3
end11.addEventListener("click", () => {if (magicwins >= end11req) {end11req = Math.floor(end11req * reqadd); chips += end11ch; end11ch = Math.floor(end11ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})

const end12 = document.getElementById("end12")
const end12prog = document.getElementById("end12prog")
const end12chip = document.getElementById("end12chip")
let end12ch = 300
let end12req = 3
end12.addEventListener("click", () => {if (nebulawins >= end12req) {end12req = Math.floor(end12req * reqadd); chips += end12ch; end12ch = Math.floor(end12ch * chipadd); updatequests(); chipcounter.innerHTML = formatNumber(chips)}})
const lvl2 = document.getElementById("lvl2")
const lvl2decklock = document.getElementById("lvl2decklock")
const lvl3 = document.getElementById("lvl3")
const lvl3decklock = document.getElementById("lvl3decklock")
const lvl4 = document.getElementById("lvl4")
const lvl4decklock = document.getElementById("lvl4decklock")
let lv = 4
let xp = 0
let redwins = 0
let yellowwins = 0
let bluewins = 0
let blackwins = 0
let decayedwins = 0
let greenwins = 0
let anaglyphwins = 0
let paintedwins = 0
let halowins = 0
let triggeranaglyph = 0
let win25m = 0
let triggergreen = 0
let win200k = 0
let jackearnings = 0n
let ghostwins = 0
let magicwins = 0
let nebulawins = 0
let win1b = 0
let magicstreak = 0
const levelprog = document.getElementById("levelprog")
const quest1 = document.getElementById("quest1")
const quest2 = document.getElementById("quest2")
const quest3 = document.getElementById("quest3")
const quest4 = document.getElementById("quest4")
const quest1prog = document.getElementById("quest1prog")
const quest2prog = document.getElementById("quest2prog")
const quest3prog = document.getElementById("quest3prog")
const quest4prog = document.getElementById("quest4prog")
const quest21 = document.getElementById("quest21")
const quest21prog = document.getElementById("quest21prog")
const quest22 = document.getElementById("quest22")
const quest22prog = document.getElementById("quest22prog")
const quest23 = document.getElementById("quest23")
const quest23prog = document.getElementById("quest23prog")
const quest24 = document.getElementById("quest24")
const quest24prog = document.getElementById("quest24prog")
const quest25 = document.getElementById("quest25")
const quest25prog = document.getElementById("quest25prog")
const quest26 = document.getElementById("quest26")
const quest26prog = document.getElementById("quest26prog")
const quest31 = document.getElementById("quest31")
const quest31prog = document.getElementById("quest31prog")
const quest32 = document.getElementById("quest32")
const quest32prog = document.getElementById("quest32prog")
const quest33 = document.getElementById("quest33")
const quest33prog = document.getElementById("quest33prog")
const quest34 = document.getElementById("quest34")
const quest34prog = document.getElementById("quest34prog")
const quest35 = document.getElementById("quest35")
const quest35prog = document.getElementById("quest35prog")
const quest36 = document.getElementById("quest36")
const quest36prog = document.getElementById("quest36prog")
const quest41prog = document.getElementById("quest41prog")
const quest42prog = document.getElementById("quest42prog")
const quest43prog = document.getElementById("quest43prog")
const quest44prog = document.getElementById("quest44prog")
const quest45prog = document.getElementById("quest45prog")
const quest46prog = document.getElementById("quest46prog")
const quest41 = document.getElementById("quest41")
const quest42 = document.getElementById("quest42")
const quest43 = document.getElementById("quest43")
const quest44 = document.getElementById("quest44")
const quest45 = document.getElementById("quest45")
const quest46 = document.getElementById("quest46")
let quest1stat = false
let quest2stat = false
let quest3stat = false
let quest4stat = false
let quest21stat = false
let quest22stat = false
let quest23stat = false
let quest24stat = false
let quest25stat = false
let quest26stat = false
let quest31stat = false
let quest32stat = false
let quest33stat = false
let quest34stat = false
let quest35stat = false
let quest36stat = false
let tier4_1stat = false
let tier4_2stat = false
let tier4_3stat = false
let tier4_4stat = false
let tier4_5stat = false
let tier4_6stat = false
let chips = 0
function updatequests() {
    end1prog.innerHTML = redwins + " / " + end1req
    end1chip.innerHTML = end1ch
    let completedquests = []
    quest1prog.innerHTML = formatNumber(jackearnings) + " / 25K"
    quest2prog.innerHTML = redwins + " / 5"
    quest3prog.innerHTML = yellowwins + " / 5"
    quest4prog.innerHTML = bluewins + " / 5"
    quest21prog.innerHTML = formatNumber(jackearnings) + " / 1M"
    quest22prog.innerHTML = greenwins + " / 5"
    quest23prog.innerHTML = blackwins + " / 5"
    quest24prog.innerHTML = decayedwins + " / 5"
    quest25prog.innerHTML = win200k + " / 1"
    quest26prog.innerHTML = triggergreen + " / 1"
    quest31prog.innerHTML = formatNumber(jackearnings) + " / 100M"
    quest32prog.innerHTML = paintedwins + " / 5"
    quest33prog.innerHTML = anaglyphwins + " / 5"
    quest34prog.innerHTML = halowins + " / 5"
    quest35prog.innerHTML = win25m + " / 1"
    quest36prog.innerHTML = triggeranaglyph + " / 2"
    quest41prog.innerHTML = formatNumber(jackearnings) + " / 10B"
    quest42prog.innerHTML = ghostwins + " / 5"
    quest43prog.innerHTML = magicwins + " / 5"
    quest44prog.innerHTML = nebulawins + " / 5"
    quest45prog.innerHTML = win1b + " / 1"
    quest46prog.innerHTML = magicstreak + " / 4"
if (jackearnings >= 25000 && !quest1stat) {quest1stat = true; completedquests.push("Makin' dough")}
if (redwins >= 5 && !quest2stat) {quest2stat = true; completedquests.push("The classics")}
if (yellowwins >= 5 && !quest3stat) {quest3stat = true; completedquests.push("Go big")}
if (bluewins >= 5 && !quest4stat) {quest4stat = true; completedquests.push("Go home")}
if (jackearnings >= 1000000 && !quest21stat) {quest21stat = true; completedquests.push("Big cheese")}
if (greenwins >= 5 && !quest22stat) {quest22stat = true; completedquests.push("Green thumb")}
if (blackwins >= 5 && !quest23stat) {quest23stat = true; completedquests.push("Capisce?")}
if (decayedwins >= 5 && !quest24stat) {quest24stat = true; completedquests.push("Forget about it")}
if (win200k >= 1 && !quest25stat) {quest25stat = true; completedquests.push("Money talks")}
if (triggergreen >= 1 && !quest26stat) {quest26stat = true; completedquests.push("House rules")}
if (jackearnings >= 100000000 && !quest31stat) {quest31stat = true; completedquests.push("Filthy rich")}
if (paintedwins >= 5 && !quest32stat) {quest32stat = true; completedquests.push("Color me impressed")}
if (anaglyphwins >= 5 && !quest33stat) {quest33stat = true; completedquests.push("Seein' double")}
if (halowins >= 5 && !quest34stat) {quest34stat = true; completedquests.push("Walk it off")}
if (win25m >= 1 && !quest35stat) {quest35stat = true; completedquests.push("Put it all on red")}
if (triggeranaglyph >= 2 && !quest36stat) {quest36stat = true; completedquests.push("One too many")}
if (jackearnings >= 10000000000n && !tier4_1stat) {tier4_1stat = true; completedquests.push("Infinite money glitch")}
if (ghostwins >= 5 && !tier4_2stat) {tier4_2stat = true; completedquests.push("Who you gonna call?")}
if (magicwins >= 5 && !tier4_3stat) {tier4_3stat = true; completedquests.push("Wizard money")}
if (nebulawins >= 5 && !tier4_4stat) {tier4_4stat = true; completedquests.push("Astronomical odds")}
if (win1b && !tier4_5stat) {tier4_5stat = true; completedquests.push("Call Jack, I'm in")}
if (magicstreak >= 4 && !tier4_6stat) {tier4_6stat = true; completedquests.push("Magic touch")}
if (completedquests.length > 0) {
    showpopup(2, completedquests)}
}
const chipcounter = document.getElementById("chipcounter")
quest1.addEventListener("click", () => {if (quest1stat) {quest1.style.display = "none"; xp += 1; levelunlocks(); chips += 300; chipcounter.innerHTML = formatNumber(chips)}})
quest2.addEventListener("click", () => {if (quest2stat) {quest2.style.display = "none"; xp += 1; levelunlocks(); chips += 300; chipcounter.innerHTML = formatNumber(chips)}})
quest3.addEventListener("click", () => {if (quest3stat) {quest3.style.display = "none"; xp += 1; levelunlocks(); chips += 300; chipcounter.innerHTML = formatNumber(chips)}})
quest4.addEventListener("click", () => {if (quest4stat) {quest4.style.display = "none"; xp += 1; levelunlocks(); chips += 300; chipcounter.innerHTML = formatNumber(chips)}})
quest21.addEventListener("click", () => {if (quest21stat) {quest21.style.display = "none"; xp += 1; levelunlocks(); chips += 500; chipcounter.innerHTML = formatNumber(chips)}})
quest22.addEventListener("click", () => {if (quest22stat) {quest22.style.display = "none"; xp += 1; levelunlocks(); chips += 500; chipcounter.innerHTML = formatNumber(chips)}})
quest23.addEventListener("click", () => {if (quest23stat) {quest23.style.display = "none"; xp += 1; levelunlocks(); chips += 500; chipcounter.innerHTML = formatNumber(chips)}})
quest24.addEventListener("click", () => {if (quest24stat) {quest24.style.display = "none"; xp += 1; levelunlocks(); chips += 500; chipcounter.innerHTML = formatNumber(chips)}})
quest25.addEventListener("click", () => {if (quest25stat) {quest25.style.display = "none"; xp += 1; levelunlocks(); chips += 500; chipcounter.innerHTML = formatNumber(chips)}})
quest26.addEventListener("click", () => {if (quest26stat) {quest26.style.display = "none"; xp += 1; levelunlocks(); chips += 500; chipcounter.innerHTML = formatNumber(chips)}})
quest31.addEventListener("click", () => {if (quest31stat) {quest31.style.display = "none"; xp += 1; levelunlocks(); chips += 800; chipcounter.innerHTML = formatNumber(chips)}})
quest32.addEventListener("click", () => {if (quest32stat) {quest32.style.display = "none"; xp += 1; levelunlocks(); chips += 800; chipcounter.innerHTML = formatNumber(chips)}})
quest33.addEventListener("click", () => {if (quest33stat) {quest33.style.display = "none"; xp += 1; levelunlocks(); chips += 800; chipcounter.innerHTML = formatNumber(chips)}})
quest34.addEventListener("click", () => {if (quest34stat) {quest34.style.display = "none"; xp += 1; levelunlocks(); chips += 800; chipcounter.innerHTML = formatNumber(chips)}})
quest35.addEventListener("click", () => {if (quest35stat) {quest35.style.display = "none"; xp += 1; levelunlocks(); chips += 800; chipcounter.innerHTML = formatNumber(chips)}})
quest36.addEventListener("click", () => {if (quest36stat) {quest36.style.display = "none"; xp += 1; levelunlocks(); chips += 800; chipcounter.innerHTML = formatNumber(chips)}})
quest41.addEventListener("click", () => {if (tier4_1stat) {quest41.style.display = "none"; xp += 1; levelunlocks(); chips += 1500; chipcounter.innerHTML = formatNumber(chips)}})
quest42.addEventListener("click", () => {if (tier4_2stat) {quest42.style.display = "none"; xp += 1; levelunlocks(); chips += 1500; chipcounter.innerHTML = formatNumber(chips)}})
quest43.addEventListener("click", () => {if (tier4_3stat) {quest43.style.display = "none"; xp += 1; levelunlocks(); chips += 1500; chipcounter.innerHTML = formatNumber(chips)}})
quest44.addEventListener("click", () => {if (tier4_4stat) {quest44.style.display = "none"; xp += 1; levelunlocks(); chips += 1500; chipcounter.innerHTML = formatNumber(chips)}})
quest45.addEventListener("click", () => {if (tier4_5stat) {quest45.style.display = "none"; xp += 1; levelunlocks(); chips += 1500; chipcounter.innerHTML = formatNumber(chips)}})
quest46.addEventListener("click", () => {if (tier4_6stat) {quest46.style.display = "none"; xp += 1; levelunlocks(); chips += 1500; chipcounter.innerHTML = formatNumber(chips)}})
const lvl2decks = document.getElementById("lvl2decks")
const lvl3decks = document.getElementById("lvl3decks")
const lvl4decks = document.getElementById("lvl4decks")
const lv1quests = document.getElementById("lv1quests")
const lv2quests = document.getElementById("lv2quests")
const lv3quests = document.getElementById("lv3quests")
const lv4quests = document.getElementById("lv4quests")
function levelunlocks() {
    if (xp == 4 && lv == 1) {
        lv = 2
        xp = 0
    }
    if (xp == 6 && lv == 2) {
        lv = 3
        xp = 0
    }
    if (xp == 6 && lv == 3) {
        lv = 4
        xp = 0
    }
    if (xp == 6 && lv == 4) {
        lv = 5
        xp = 0
    }
    if (lv >= 2) {
        pizzerupg.style.display = "flex"
        lvl2.style.display = "none"
        lvl2decks.style.display = "flex"
        lvl2decklock.style.display = "none"
        lv2quests.style.display = "flex"
        lv1quests.style.display = "none"
    }
    if (lv >= 3) {
        lvl3decklock.style.display = "none"
        lvl3decks.style.display = "flex"
        lv2quests.style.display = "none"
        lv3quests.style.display = "flex"
        lvl3.style.display = "none"
        mattressbtn.style.display = "flex"
    }
    if (lv >= 4) {
        lvl4decklock.style.display = "none"
        lvl4decks.style.display = "flex"
        lv2quests.style.display = "none"
        lv3quests.style.display = "none"
        lv4quests.style.display = "flex"
        lvl4.style.display = "none"
        constructionbtn.style.display = "flex"
    }
    if (lv == 1) levelprog.innerHTML = xp + " / 4 until level 2"
    if (lv == 2) levelprog.innerHTML = xp + " / 6 until level 3"
    if (lv == 3) levelprog.innerHTML = xp + " / 6 until level 4"
    if (lv == 4) levelprog.innerHTML = xp + " / 6 until level 5"
}
const deckdisp = document.getElementById("deckdisplay")
levelunlocks()
lvl2.addEventListener("mouseenter", () => {
    upgrades.innerHTML = "Complete quests to get to level 2."
})
lvl2.addEventListener("mouseleave", () => {
    upgrades.innerHTML = "Upgrades"
})
lvl3.addEventListener("mouseenter", () => {
    upgrades.innerHTML = "Complete quests to get to level 3."
})
lvl3.addEventListener("mouseleave", () => {
    upgrades.innerHTML = "Upgrades"
})
lvl2decklock.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Complete quests to get to level 2."
})
lvl2decklock.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
lvl3decklock.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Complete quests to get to level 3."
})
lvl3decklock.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
lvl4decklock.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Complete quests to get to level 4."
})
lvl4decklock.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
rdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Red Deck: Nothing of note, just the starting deck."
})
rdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
ydeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Yellow Deck: Winning mult = x3, but bust from 20."
})
ydeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
bdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Blue Deck: Remove cards 6-9."
})
bdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
gdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Ghost Deck: Remove cards above 9, bust from 130, winning mult = x1.5, a tie = lose."
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
    deckdisp.innerHTML = "Black Deck: Remove cards 2-5 and increase winning mult to 2.1x."
})
bldeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
zdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Sacred deck: Adds 8 new cards to deck, hover over card to see its effects."
})
zdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
adeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Tainted deck: Removes every face card, winning mult = 2.5x."
})
adeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
hdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Halo deck: Once per round rerolls the latest card, when you bust, win mult reduced to 1.8x."
})
hdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
andeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Twin deck: Getting two of the same tier cards in a row sets total card value to 21."
})
andeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
pdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Painted deck: Adds 6 more aces, removes all nines."
})
pdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})