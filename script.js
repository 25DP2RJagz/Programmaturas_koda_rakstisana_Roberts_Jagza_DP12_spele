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
const casinobtn = document.getElementById("btncasino")
const casinovalue = document.getElementById("casinoprice")
const cainoamount = document.getElementById("casinoamount")
const portbtn = document.getElementById("btnport")
const portvalue = document.getElementById("portprice")
const portamount = document.getElementById("portamount")
const bankbtn = document.getElementById("btnbank")
const bankvalue = document.getElementById("bankprice")
const bankamount = document.getElementById("bankamount")
import { fulldeck } from "./deck.js"
import { bfulldeck } from "./bdeck.js"
import { gfulldeck } from "./gdeck.js"
import { nfulldeck } from "./ndeck.js"
import { blfulldeck } from "./bldeck.js"
import { afulldeck } from "./adeck.js"
import { pfulldeck } from "./pdeck.js"

let amount = 100n
let chips = 0
let lv = 1
let xp = 0
let clicker = 0n
let clickercost = 20n
let clickermult = 105n
let clickerbuff = 100n
let clickerspeed = 240
let clickertimer = 0
let upg = 1n
let upgmult = 107n
let upgcost = 15n
let upgbuff = 100n
let pizzer = 0n
let pizzerbuff = 100n
let pizzercost = 5000n
let pizzermult = 106n
let pizzerspeed = 240
let pizzertimer = 0
let mattress = 0n
let mattresscost = 100000n
let mattressmult = 107n
let mattressbuff = 100n
let mattresstimer = 0
let mattressspeed = 240
let construction = 0n   
let constructioncost = 25000000n
let constructionmult = 108n
let constructionbuff = 100n
let constructionspeed = 240
let constructiontimer = 0
let casino = 0n
let casinocost = 750000000n
let casinomult = 108n
let casinobuff = 100n
let casinospeed = 240
let casinotimer = 0
let port = 0n
let portcost = 10000000000n
let portmult = 108n
let portbuff = 100n
let portspeed = 240
let porttimer = 0
let bank = 0n
let bankcost = 750000000n
let bankmult = 108n
let bankbuff = 100n
let bankspeed = 240
let banktimer = 0
let ovenbuff = 0n
document.addEventListener("keypress", (event) => {
    switch (event.key) {
        case "e":
            amount = 10000000000000000000000n
            counter.innerHTML = formatNumber(amount) + " pizzas"
            break
        case "r":
            xp = 1000
            levelunlocks()
            break
        case "t":
            chips = 1000000
            chipcounter.innerHTML = formatNumber(chips)
            break
        case "f":
            if (!busted && !stand && card <= 4) {
                drawcard()
                hitreward()
            }
            break
        case "g":
            if (!busted && !stand) {
                hitreward()
                stand = true
                dealerplay()
            }
            break
        case "h":
            if (!blackjack && amount >= cps * minbetmult) {
                    startblackjack(amount)
            } else if (!blackjack && !popup) {
                showpopup(1)
            }
            break
        case "j":
            if (!blackjack && amount / BigInt(2) >= cps * minbetmult) {
                    startblackjack(amount / BigInt(2))
            } else if (!blackjack && !popup) {
                showpopup(1)
            }
            break
        case "k":
            if (!blackjack && amount / BigInt(4) >= cps * minbetmult) {
                    startblackjack(amount / BigInt(4))
            } else if (!blackjack && !popup) {
                showpopup(1)
            }
            break
    }
})
let ovenbonus = 100n + ((upg / 10n) * ovenbuff)
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
        const negative = num < 0n
        if (negative) num = -num
        const sign = negative ? "-" : ""
        const numStr = num.toString()
        const len = numStr.length
        if (len >= 67) return sign + numStr.slice(0, -66) + "." + numStr.slice(-66, -65) + "Uvg"
        if (len >= 64) return sign + numStr.slice(0, -63) + "." + numStr.slice(-63, -62) + "Vg"
        if (len >= 61) return sign + numStr.slice(0, -60) + "." + numStr.slice(-60, -59) + "Nod"
        if (len >= 58) return sign + numStr.slice(0, -57) + "." + numStr.slice(-57, -56) + "Ocd"
        if (len >= 55) return sign + numStr.slice(0, -54) + "." + numStr.slice(-54, -53) + "Spd"
        if (len >= 52) return sign + numStr.slice(0, -51) + "." + numStr.slice(-51, -50) + "Sxd"
        if (len >= 49) return sign + numStr.slice(0, -48) + "." + numStr.slice(-48, -47) + "Qid"
        if (len >= 46) return sign + numStr.slice(0, -45) + "." + numStr.slice(-45, -44) + "Qad"
        if (len >= 43) return sign + numStr.slice(0, -42) + "." + numStr.slice(-42, -41) + "Td"
        if (len >= 40) return sign + numStr.slice(0, -39) + "." + numStr.slice(-39, -38) + "Dd"
        if (len >= 37) return sign + numStr.slice(0, -36) + "." + numStr.slice(-36, -35) + "Ud"
        if (len >= 34) return sign + numStr.slice(0, -33) + "." + numStr.slice(-33, -32) + "Dc"
        if (len >= 31) return sign + numStr.slice(0, -30) + "." + numStr.slice(-30, -29) + "No"
        if (len >= 28) return sign + numStr.slice(0, -27) + "." + numStr.slice(-27, -26) + "Oc"
        if (len >= 25) return sign + numStr.slice(0, -24) + "." + numStr.slice(-24, -23) + "Sp"
        if (len >= 22) return sign + numStr.slice(0, -21) + "." + numStr.slice(-21, -20) + "Sx"
        if (len >= 19) return sign + numStr.slice(0, -18) + "." + numStr.slice(-18, -17) + "Qi"
        if (len >= 16) return sign + numStr.slice(0, -15) + "." + numStr.slice(-15, -14) + "Qa"
        if (len >= 13) return sign + numStr.slice(0, -12) + "." + numStr.slice(-12, -11) + "T"
        if (len >= 10) return sign + numStr.slice(0, -9) + "." + numStr.slice(-9, -8) + "B"
        if (len >= 7) return sign + numStr.slice(0, -6) + "." + numStr.slice(-6, -5) + "M"
        if (len >= 4) return sign + numStr.slice(0, -3) + "." + numStr.slice(-3, -2) + "K"

        return sign + numStr
    }

    return formatNumber(BigInt(Math.floor(num)))
}
const amount1 = document.getElementById("amount1")
const amount5 = document.getElementById("amount5")
const amount25 = document.getElementById("amount25")
const amountmax = document.getElementById("amountmax")
let buyamount = 1
amount1.addEventListener("click", () => {buyamount = 1; updateprices(); playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)})
amount5.addEventListener("click", () => {buyamount = 5; updateprices(); playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)})
amount25.addEventListener("click", () => {buyamount = 25; updateprices(); playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)})
amountmax.addEventListener("click", () => {buyamount = 0; updateprices(); playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)})
function updateprices() {
    updateClickerPrice(); updateUpgPrice(); updatePizzerPrice(); updateMattressPrice(); updateconstructionPrice(); updatecasinoPrice(); updateportPrice(); updatebankPrice();
}
const upgrades = document.getElementById("upgrades")
function updateupgcps(upgrad) {
    switch (upgrad) {
        case 1:
            upgrades.innerHTML = "Mama mia!<br/>" + formatNumber((((clicker * clickerbuff * ovenbonus) / 10000n) * 1000n / BigInt(clickerspeed))) + " pizzas / second"
            break
        case 2:
            upgrades.innerHTML = "Straight outta Little Italy<br/>" + formatNumber((upg * upgbuff) / 100n) + " pizzas per click"
            break
        case 3:
            upgrades.innerHTML = "Five nights at pizza<br/>" + formatNumber(((pizzer * pizzerbuff * 25n * ovenbonus) / 10000n) * 1000n / BigInt(pizzerspeed)) + " pizzas / second"
            break
        case 4:
            upgrades.innerHTML = "The IRS hates this one simple trick<br/>" + formatNumber(((mattress * mattressbuff * 625n * ovenbonus) / 10000n) * 1000n / BigInt(mattressspeed)) + " pizzas / second"
            break
        case 5:
            upgrades.innerHTML = "Concrete shoes sold separately<br/>" + formatNumber((((construction * constructionbuff * 17500n * ovenbonus) / 10000n) * 1000n / BigInt(constructionspeed))) + " pizzas / second"
            break
        case 6:
            upgrades.innerHTML = "You are the house<br/>" + formatNumber((((casino * casinobuff * 250000n * ovenbonus) / 10000n) * 1000n / BigInt(casinospeed))) + " pizzas / second"
            break
        case 7:
            upgrades.innerHTML = "For pizza supplies<br/>" + formatNumber((((port * portbuff * 4000000n * ovenbonus) / 10000n) * 1000n / BigInt(portspeed))) + " pizzas / second"
            break
        case 8:
            upgrades.innerHTML = "Cash dollas<br/>" + formatNumber((((bank * bankbuff * 250000n * ovenbonus) / 10000n) * 1000n / BigInt(bankspeed))) + " pizzas / second"
            break
    }
}
clickerupg.addEventListener("mouseenter", () => {updateupgcps(1)})
clickerupg.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
upgupg.addEventListener("mouseenter", () => {updateupgcps(2)})
upgupg.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
pizzerupg.addEventListener("mouseenter", () => {updateupgcps(3)})
pizzerupg.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
mattressbtn.addEventListener("mouseenter", () => {updateupgcps(4)})
mattressbtn.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
constructionbtn.addEventListener("mouseenter", () => {updateupgcps(5)})
constructionbtn.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
casinobtn.addEventListener("mouseenter", () => {updateupgcps(6)})
casinobtn.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
portbtn.addEventListener("mouseenter", () => {updateupgcps(7)})
portbtn.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
bankbtn.addEventListener("mouseenter", () => {updateupgcps(8)})
bankbtn.addEventListener("mouseleave", () => {upgrades.innerHTML = "Upgrades"})
setInterval(() => {
    clickertimer += 40
    if (clicker > 0 && clickertimer >= clickerspeed) {
        amount += (clicker * clickerbuff * ovenbonus) / 10000n
        trackGain((clicker * clickerbuff * ovenbonus) / 10000n)
        spawnFloatingNumber((clicker * clickerbuff * ovenbonus) / 10000n)
        counter.innerHTML = formatNumber(amount) + " pizzas"
        clickertimer = 0
        updateprices()
    }
    pizzertimer += 40
    if (pizzer > 0 && pizzertimer >= pizzerspeed) {
        amount += (pizzer * pizzerbuff * 25n * ovenbonus) / 10000n
        trackGain((pizzer * pizzerbuff * 25n * ovenbonus) / 10000n)
        spawnFloatingNumber((pizzer * pizzerbuff * 25n * ovenbonus) / 10000n)
        counter.innerHTML = formatNumber(amount) + " pizzas"
        pizzertimer = 0
        updateprices()
    }
    mattresstimer += 40
    if (mattress > 0 && mattresstimer >= mattressspeed) {
        amount += (mattress * mattressbuff * 625n * ovenbonus) / 10000n
        trackGain((mattress * mattressbuff * 625n * ovenbonus) / 10000n)
        spawnFloatingNumber((mattress * mattressbuff * 625n * ovenbonus) / 10000n)
        counter.innerHTML = formatNumber(amount) + " pizzas"
        mattresstimer = 0
        updateprices()
    }
    constructiontimer += 40
    if (construction > 0 && constructiontimer >= constructionspeed) {
        amount += (construction * constructionbuff * 17500n * ovenbonus) / 10000n
        trackGain((construction * constructionbuff * 17500n * ovenbonus) / 10000n)
        spawnFloatingNumber((construction * constructionbuff * 17500n * ovenbonus) / 10000n)
        counter.innerHTML = formatNumber(amount) + " pizzas"
        constructiontimer = 0
        updateprices()
    }
    casinotimer += 40
    if (casino > 0 && casinotimer >= casinospeed) {
        amount += (casino * casinobuff * 250000n * ovenbonus) / 10000n
        trackGain((casino * casinobuff * 250000n * ovenbonus) / 10000n)
        spawnFloatingNumber((casino * casinobuff * 250000n * ovenbonus) / 10000n)
        counter.innerHTML = formatNumber(amount) + " pizzas"
        casinotimer = 0
        updateprices()
    }
    porttimer += 40
    if (port > 0 && porttimer >= portspeed) {
        amount += (port * portbuff * 4000000n * ovenbonus) / 10000n
        trackGain((port * portbuff * 4000000n * ovenbonus) / 10000n)
        spawnFloatingNumber((port * portbuff * 4000000n * ovenbonus) / 10000n)
        counter.innerHTML = formatNumber(amount) + " pizzas"
        porttimer = 0
        updateprices()
    }

    banktimer += 40
    if (bank > 0 && banktimer >= bankspeed) {
        amount += (bank * bankbuff * 250000n * ovenbonus) / 10000n
        trackGain((bank * bankbuff * 250000n * ovenbonus) / 10000n)
        spawnFloatingNumber((bank * bankbuff * 250000n * ovenbonus) / 10000n)
        counter.innerHTML = formatNumber(amount) + " pizzas"
        banktimer = 0
        updateprices()
    }
}, 40)
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
        updateupgcps(1)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
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
        updateupgcps(3)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)

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
            "Bedding Co. x" + amountToBuy + ": " + formatNumber(totalCost)
        mattressamount.innerHTML = mattress
        updateMattressPrice()
        updateupgcps(4)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)

    }
})
function updateMattressPrice() {
    let amountToBuy = buyamount
    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(mattresscost, mattressmult)
    }
    const totalCost = getBulkCost(mattresscost, mattressmult, amountToBuy)
    mattressvalue.innerHTML =
        "Bedding Co. x" + amountToBuy + ": " + formatNumber(totalCost)
}
constructionbtn.addEventListener("click", () => {
    let amountToBuy = buyamount
    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(constructioncost, constructionmult)
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
            "Contractors x" + amountToBuy + ": " + formatNumber(totalCost)
        constructionamount.innerHTML = construction
        updateconstructionPrice()
        updateupgcps(5)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    }
})
function updateconstructionPrice() {
    let amountToBuy = buyamount
    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(constructioncost, constructionmult)
    }
    const totalCost = getBulkCost(constructioncost, constructionmult, amountToBuy)
    constructionvalue.innerHTML =
        "Contractors x" + amountToBuy + ": " + formatNumber(totalCost)
}
casinobtn.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(casinocost, casinomult)
    }

    const totalCost = getBulkCost(casinocost, casinomult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            casinocost = casinocost * casinomult / 100n
            casino += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"
        casinovalue.innerHTML =
            "Casino x" + amountToBuy + ": " + formatNumber(totalCost)

        casinoamount.innerHTML = casino
        updatecasinoPrice()
        updateupgcps(6)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    }
})
function updatecasinoPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(casinocost, casinomult)
    }

    const totalCost = getBulkCost(casinocost, casinomult, amountToBuy)

    casinovalue.innerHTML =
        "Casino x" + amountToBuy + ": " + formatNumber(totalCost)
}
portbtn.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(portcost, portmult)
    }

    const totalCost = getBulkCost(portcost, portmult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            portcost = portcost * portmult / 100n
            port += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"
        portvalue.innerHTML =
            "Port x" + amountToBuy + ": " + formatNumber(totalCost)

        portamount.innerHTML = port
        updateportPrice()
        updateupgcps(7)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    }
})

function updateportPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(portcost, portmult)
    }

    const totalCost = getBulkCost(portcost, portmult, amountToBuy)

    portvalue.innerHTML =
        "Port x" + amountToBuy + ": " + formatNumber(totalCost)
}



bankbtn.addEventListener("click", () => {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(bankcost, bankmult)
    }

    const totalCost = getBulkCost(bankcost, bankmult, amountToBuy)

    if (amount >= totalCost) {
        amount -= totalCost

        for (let i = 0; i < amountToBuy; i++) {
            bankcost = bankcost * bankmult / 100n
            bank += 1n
        }

        counter.innerHTML = formatNumber(amount) + " pizzas"
        bankvalue.innerHTML =
            "Bank x" + amountToBuy + ": " + formatNumber(totalCost)

        bankamount.innerHTML = bank
        updatebankPrice()
        updateupgcps(8)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    }
})

function updatebankPrice() {
    let amountToBuy = buyamount

    if (buyamount === 0) {
        amountToBuy = getMaxAffordable(bankcost, bankmult)
    }

    const totalCost = getBulkCost(bankcost, bankmult, amountToBuy)

    bankvalue.innerHTML =
        "Bank x" + amountToBuy + ": " + formatNumber(totalCost)
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
        updateupgcps(2)
        ovenbonus = 100n + ((upg / 10n) * ovenbuff)
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
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
    amount += upg * upgbuff / 100n
    trackGain(upg)
    spawnFloatingNumber(upg)
    updateprices()
    counter.innerHTML = formatNumber(amount) + " pizzas"
    cookie.classList.remove("cookie-click")
    void cookie.offsetWidth
    cookie.classList.add("cookie-click")
    playSfx("paper", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
updateprices()
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
let blackjackbuff = 100n

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
            bustamount = 21
            winmult = 150
            break
        case 5: //green
            bustamount = 22
            winmult = 180
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
            winmult = 200
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
            break
        case 13: //anaglyph
            bustamount = 21
            winmult = 200
            break
        case 14: //burning
            bustamount = 21
            winmult = 260
            break
        case 15: //even
            bustamount = 22
            winmult = 200
            break
        case 16: //mountain
            bustamount = 21
            winmult = 400
            break
        case 17: //eclipse
            bustamount = 21
            winmult = 200
            break
        case 18: //rhythm
            bustamount = 21
            winmult = 200
            break
        case 19: //thrill
            bustamount = 21
            winmult = 200
            break
        case 20: //prophet
            bustamount = 21
            winmult = 200
            break
        case 21: //nitro
            bustamount = 21
            winmult = 200
            break
        case 22: //duality
            bustamount = 21
            winmult = 200
            break
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
            return [...fulldeck]
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
            return [...gfulldeck]
        case 14:
            return [...fulldeck]
        case 15:
            return [...fulldeck]
        case 16:
            return [...fulldeck]
        case 17:
            return [...fulldeck]
        case 18:
            return [...fulldeck]
        case 19:
            return [...fulldeck]
        case 20:
            return [...fulldeck]
        case 21:
            return [...fulldeck]
        case 22:
            return [...fulldeck]
    }
}
const timingbar = document.getElementById("timingcont")
const cursor = document.getElementById("cursor")
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
            cardval.innerHTML = "Total value: " + (getTotalValue())
            dcardval1 = 0
            dcardval2 = 0
            dcardval3 = 0 
            dcardval4 = 0
            blackjackgame += 1
            card = 1
            dcard = 1
            stand = false
            busted = false
            dstand = false
            dbusted = false
            eclipsedcards = 0
            prophetused = false
            hitbtn.classList.remove("pulsehit")
            halotrigger = false
            ghosttriggered = false
            card1tier = null
            card2tier = null
            card3tier = null
            card4tier = null
            timingspeed = 1.6
            cardreset()
            deckattributes()
            dcardval.innerHTML = "Total value: " + (dcardval1 + dcardval2 + dcardval3 + dcardval4)
            if (currentdeck !== 18) {
                drawcard()
            }
            dealerdrawcard()
            cursorinit()
            drawn = -1
}
const peek1 = document.getElementById("peek1")
const peek2 = document.getElementById("peek2")
const peek3 = document.getElementById("peek3")
const peek4 = document.getElementById("peek4")
const prophetbtn = document.getElementById("prophetbtn")
let prophetused = false
prophetbtn.addEventListener("click", () => {
    if (blackjack && currentdeck == 20 && !prophetused) {
        prophetused = true
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        playSfx("foil2", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        drawn = choosecard()
        switch (card) {
            case 1:
                peek1.style.display = "block"
                peek1.src = drawn.img
                break
            case 2:
                peek2.src = drawn.img
                peek2.style.display = "block"
                break
            case 3:
                peek3.src = drawn.img
                peek3.style.display = "block"
                break
            case 4:
                peek4.src = drawn.img
                peek4.style.display = "block"
                break
        }
    }
})
let timingspeed = 1.6
function cursorreset() {
    if (currentdeck == 18) {
        blackjackdisp.style.display = "none"
        cursor.style.display = "none"
        timingbar.style.display = "flex"
    } else {
        blackjackdisp.style.display = "flex"
        cursor.style.display = "none"
        timingbar.style.display = "none"
    }
}
function cursorinit() {
    if (currentdeck == 18) {
        let curr = blackjackgame
        let currcard = card
        cursor.style.display = "block"
        cursor.style.animationDuration = timingspeed + "s"
        timingbar.style.display = "flex"
        blackjackdisp.style.display = "none"
        cursor.classList.add("passby")
        setTimeout(() => {
            if (curr == blackjackgame && currcard == card) {
                cursor.classList.remove("passby")
                cursor.style.display = "none"
            }
        }, timingspeed * 1000);
    } else {
        timingbar.style.display = "none"
        blackjackdisp.style.display = "flex"
    }
}
function updatespeed() {
    cursor.style.animationDuration = timingspeed + "s" 
}
function checktiming() {
    const cursorRect = cursor.getBoundingClientRect()
    const barRect = timingbar.getBoundingClientRect()
    const percent = ((cursorRect.left + cursorRect.width / 2 - barRect.left) / barRect.width) * 100
    if (percent >= 48 && percent <= 52) {
        playSfx("multihit2", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        return "perfect"
    }
    if (percent >= 40 && percent <= 60) {
        playSfx("multihit1", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        return "good"
    }
    playSfx("cancel", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    return "miss"
}
function hitreward() {
    if (currentdeck == 18 && blackjack) {
        const result = checktiming()
        switch (result) {
            case "perfect":
                timingspeed -= 0.3
                if (timingspeed < 0.6) {
                    timingspeed = 0.6
                }
                updatespeed()
                winmult += 50
                spawnFloatingNumber(0, {
                    text: "Perfect! +0.5",
                    color: "green",
                    size: "70px",
                    duration: 5000
                })
                break
            case "good":
                timingspeed -= 0.05
                if (timingspeed < 0.6) {
                    timingspeed = 0.6
                }
                winmult += 10
                spawnFloatingNumber(0, {
                    text: "Good! +0.1",
                    color: "orange",
                    size: "70px",
                    duration: 5000
                })
                break
            case "miss":
                timingspeed += 0.1
                spawnFloatingNumber(0, {
                    text: "Miss",
                    color: "red",
                    size: "70px",
                    duration: 5000
                })
        }
        cursor.classList.remove("passby")
        cursor.style.display = "none"
        setTimeout(() => {
            if (blackjack) {
                cursorinit()
            }
        }, 200);
    }
}
let minbetmult = 5
betbtn.addEventListener("click", () => {
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
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
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        if (input.value >= cps * minbetmult) {
            if (input.value > 0 && input.value <= amount && !blackjack) {
                startblackjack(BigInt(input.value))
            } else if (!popup && !blackjack) {
                showpopup(1)
            }}
}})
standbtn.addEventListener("click", () => {
    if (!busted && !stand) {
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        hitreward()
        stand = true
        dealerplay()
        peek1.style.display = "none"
        peek2.style.display = "none"
        peek3.style.display = "none"
        peek4.style.display = "none"
        peek1.src = null
        peek2.src = null
        peek3.src = null
        peek4.src = null
    }
})
hitbtn.addEventListener("click", () => {
    if (!busted && !stand && card <= 4) {
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        drawcard()
        hitreward()
        peek1.style.display = "none"
        peek2.style.display = "none"
        peek3.style.display = "none"
        peek4.style.display = "none"
        peek1.src = null
        peek2.src = null
        peek3.src = null
        peek4.src = null
    }
})
bet12btn.addEventListener("click", () => {
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    if (!blackjack && amount / BigInt(2) >= cps * minbetmult) {
            startblackjack(amount / BigInt(2))
    } else if (!blackjack && !popup) {
        showpopup(1)
    }
})
bet14btn.addEventListener("click", () => {
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    if (!blackjack && amount / BigInt(4) >= cps * minbetmult) {
            startblackjack(amount / BigInt(4))
    } else if (!blackjack && !popup) {
        showpopup(1)
    }
})
allinbtn.addEventListener("click", () => {
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
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
    if (getTotalValue() > bustamount && cardval1 == 11) cardval1 = 1
    if (getTotalValue() > bustamount && cardval2 == 11) cardval2 = 1
    if (getTotalValue() > bustamount && cardval3 == 11) cardval3 = 1
    if (getTotalValue() > bustamount && cardval4 == 11) cardval4 = 1
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval1 == 11) dcardval1 = 1
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval2 == 11) dcardval2 = 1 
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval3 == 11) dcardval3 = 1 
    if (dcardval1 + dcardval2 + dcardval3 + dcardval4 > 21 && dcardval4 == 11) dcardval4 = 1 
}
let drawn = -1
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
            card1.classList.add("anaglyph")
            card2.classList.add("anaglyph")
            triggeranaglyph += 1
            playSfx("holo1", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        }
        if (card == 4 && card2tier == card3tier) {
            cardval1 = 21
            cardval2 = 0
            cardval3 = 0
            cardval4 = 0
            card2.classList.add("anaglyph")
            card3.classList.add("anaglyph")
            triggeranaglyph += 1
            playSfx("holo1", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        }
        if (card == 5 && card3tier == card4tier) {
            cardval1 = 21
            cardval2 = 0
            cardval3 = 0
            cardval4 = 0
            card3.classList.add("anaglyph")
            card4.classList.add("anaglyph")
            triggeranaglyph += 1
            playSfx("holo1", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        }
    }
}
let halotrigger = false
function halodeck(curr) {
    let total = getTotalValue()
    let newtotal = total + getCardValue(curr)

    if (newtotal > bustamount && currentdeck == 11 && !halotrigger) {
        spawnFloatingNumber(0, {
            text: "HALO GRACE",
            color: "white",
            size: "70px",
            duration: 5000
        })
        playSfx("foil1", 0.4, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        switch (card) {
            case 1:
                card1.classList.add("haloeffect")
                setTimeout(() => {
                    card1.classList.remove("haloeffect")
                }, 2000);
                break
            case 2:
                card2.classList.add("haloeffect")
                setTimeout(() => {
                    card2.classList.remove("haloeffect")
                }, 2000);
                break
            case 3:
                card3.classList.add("haloeffect")
                setTimeout(() => {
                    card3.classList.remove("haloeffect")
                }, 2000);
                break
            case 4:
                card4.classList.add("haloeffect")
                setTimeout(() => {
                    card4.classList.remove("haloeffect")
                }, 2000);
                break
        }
        halotrigger = true
        return choosecard()
    }

    return curr
}
function cardreset() {
    card1.classList.remove("paintflash")
    card2.classList.remove("paintflash")
    card3.classList.remove("paintflash")
    card4.classList.remove("paintflash")
    card1.classList.remove("anaglyph")
    card2.classList.remove("anaglyph")
    card3.classList.remove("anaglyph")
    card4.classList.remove("anaglyph")
    peek1.style.display = "none"
    peek2.style.display = "none"
    peek3.style.display = "none"
    peek4.style.display = "none"
    peek1.src = null
    peek2.src = null
    peek3.src = null
    peek4.src = null
    card1.style.opacity = 1
    card2.style.opacity = 1
    card3.style.opacity = 1
    card4.style.opacity = 1
    card1.classList.remove("eclipsesun")
    card1.classList.remove("eclipsemoon")
    card2.classList.remove("eclipsesun")
    card2.classList.remove("eclipsemoon")
    card3.classList.remove("eclipsesun")
    card3.classList.remove("eclipsemoon")
    card4.classList.remove("eclipsesun")
    card4.classList.remove("eclipsemoon")
    if (card1.src != deckimg(currentdeck)) {
        flipCard(card1, deckimg(currentdeck))
    }
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
}
let ghosttriggered = false
function ghostcheck() {
    if (currentdeck == 4 && cardval1 + cardval2 + cardval3 + cardval4 >= bustamount && !ghosttriggered) {
        ghosttriggered = true
        playSfx("neg", 0.2, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch + 0.3)
        switch (card) {
            case 1:
                if (cardval1 != 1 || cardval1 != 11) {
                    cardval1 = Math.floor(cardval1 / 2)
                    card1.style.opacity = 0.7
                }
                break
            case 2:
                if (cardval2 != 1 || cardval2 != 11) {
                    cardval2 = Math.floor(cardval2 / 2)
                    card2.style.opacity = 0.7
                }
                break
            case 3:
                if (cardval3 != 1 || cardval3 != 11) {
                    cardval3 = Math.floor(cardval3 / 2)
                    card3.style.opacity = 0.7

                }
                break
            case 4:
                if (cardval4 != 1 || cardval4 != 11) {
                    cardval4 = Math.floor(cardval4 / 2)
                    card4.style.opacity = 0.7

                }
                break
        }
    }
}
let eclipsedcards = 0
let blackjackgame = 0
function checkeclipse() {
    if (currentdeck == 17) {
        let currcard = card - 1
        let currblackjack = blackjackgame
        setTimeout(() => {
            if (currcard == card - 1 && blackjackgame == currblackjack) {
                eclipsedcards += 1
                playSfx("neg", 0.4, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
                switch (currcard) {
                    case 1:
                        if (Math.random() >= 0.5) {
                            cardval1 = Math.trunc(cardval1 * 2)
                            card1.classList.add("eclipsesun")
                        } else {
                            cardval1 = Math.trunc(cardval1 / 2)
                            card1.classList.add("eclipsemoon")
                        }
                        break
                    case 2:
                        if (Math.random() >= 0.5) {
                            cardval2 = Math.trunc(cardval2 * 2)
                            card2.classList.add("eclipsesun")
                        } else {
                            cardval2 = Math.trunc(cardval2 / 2)
                            card2.classList.add("eclipsemoon")
                        }
                        break
                    case 3:
                        if (Math.random() >= 0.5) {
                            cardval3 = Math.trunc(cardval3 * 2)
                            card3.classList.add("eclipsesun")
                        } else {
                            cardval3 = Math.trunc(cardval3 / 2)
                            card3.classList.add("eclipsemoon")
                        }
                        break
                    case 4:
                        if (Math.random() >= 0.5) {
                            cardval4 = Math.trunc(cardval4 * 2)
                            card4.classList.add("eclipsesun")
                        } else {
                            cardval4 = Math.trunc(cardval4 / 2)
                            card4.classList.add("eclipsemoon")
                        }
                        break
                }
            }
            cardval.innerHTML = "Total value: " + (getTotalValue())
            if (getTotalValue() > bustamount) {
                cardval.innerHTML = "Total value: " + (getTotalValue()) + " (busted)"
                busted = true
                card = 1
                finishmatch()
            }
        }, 2000);
    }
}
function checkbetpulse() {
    if (currentdeck == 19 && getTotalValue() >= 16 && getTotalValue() <= 21) {
        hitbtn.classList.add("pulsehit")
    } 
}
function handlePaintDeck() {
    if (currentdeck !== 12) return

    if (card1tier === "a") triggerPaint(card1)
    if (card2tier === "a") triggerPaint(card2)
    if (card3tier === "a") triggerPaint(card3)
    if (card4tier === "a") triggerPaint(card4)
}
function triggerPaint(cardEl) {
    cardEl.classList.remove("paintflash")
    void cardEl.offsetWidth
    cardEl.classList.add("paintflash")
}
function getTotalValue() {
    let total = cardval1 + cardval2 + cardval3 + cardval4

    if (currentdeck == 15) {
        return total + (card - 1) * 0.25
    }
    return total
}
function drawcard() {
    if (card >= 5) {return}
    if (drawn == -1) {
        drawn = choosecard()
    }
    if (Math.random() < 0.5) {
        playSfx("card1", 1, 1)
    } else {
        playSfx("card2", 1, 1)
    }
    switch (card) {
        case 1:
            drawn = halodeck(drawn)
            flipCard(card1, drawn.img)
            cardval1 = getCardValue(drawn)
            acecheck()
            ghostcheck()
            card++
            checkeclipse()
            card1tier = getcardtier(drawn)
            checkanaglyph()
            checkbetpulse()
            handlePaintDeck()
            cardval.innerHTML = "Total value: " + (getTotalValue())
            if (getTotalValue() == bustamount && currentdeck !== 18) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (getTotalValue() > bustamount) {
                cardval.innerHTML = "Total value: " + (getTotalValue()) + " (busted)"
                busted = true
                card = 1
                finishmatch()
            }
            break
        case 2:
            drawn = halodeck(drawn)
            flipCard(card2, drawn.img)
            cardval2 = getCardValue(drawn)
            acecheck()
            ghostcheck()
            card++
            checkeclipse()
            card2tier = getcardtier(drawn)
            checkanaglyph()
            checkbetpulse()
            handlePaintDeck()
            cardval.innerHTML = "Total value: " + (getTotalValue())
            if (getTotalValue() == bustamount && currentdeck !== 18) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (getTotalValue() > bustamount) {
                cardval.innerHTML = "Total value: " + (getTotalValue()) + " (busted)"
                busted = true
                card = 1
                finishmatch()
            }
            break
        case 3:
            drawn = halodeck(drawn)
            flipCard(card3, drawn.img)
            cardval3 = getCardValue(drawn)
            acecheck()
            ghostcheck()
            card++
            checkeclipse()
            card3tier = getcardtier(drawn)
            checkanaglyph()
            checkbetpulse()
            handlePaintDeck()
            cardval.innerHTML = "Total value: " + (getTotalValue())
            if (getTotalValue() == bustamount && currentdeck !== 18) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (getTotalValue() > bustamount) {
                cardval.innerHTML = "Total value: " + (getTotalValue()) + " (busted)"
                busted = true
                card = 1
                finishmatch()
            }
            break
        case 4:
            drawn = halodeck(drawn)
            flipCard(card4, drawn.img)
            cardval4 = getCardValue(drawn)
            acecheck()
            ghostcheck()
            card++
            checkeclipse()
            card4tier = getcardtier(drawn)
            checkanaglyph()
            checkbetpulse()
            handlePaintDeck()
            cardval.innerHTML = "Total value: " + (getTotalValue())
            if (getTotalValue() == bustamount && currentdeck !== 18) {
                if (!busted && !stand) {
                    stand = true
                    dealerplay()}
            }
            if (getTotalValue() > bustamount) {
                cardval.innerHTML = "Total value: " + (getTotalValue()) + " (busted)"
                busted = true
                card = 1
                finishmatch()
            } else if (currentdeck !== 18 && currentdeck !== 17) {
                dealerplay()
                stand = true
            }
            break
    }
    drawn = -1
    if (currentdeck == 5 && getTotalValue() == 22) {
        cardval.classList.add("tilt-oncegr")
        setTimeout(() => {
            cardval.classList.remove("tilt-oncegr")
        }, 500);
    }
    if (currentdeck == 6 && getTotalValue() == 22) {
        cardval.classList.add("tilt-oncema")
        setTimeout(() => {
            cardval.classList.remove("tilt-oncema")
        }, 500);
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
        case 14:
            return "https://static.wikitide.net/balatromodswiki/c/ca/Burnt_Deck_%28Visibility%29.png"
        case 15:
            return "https://static.wikitide.net/balatromodswiki/9/91/Calculus_Deck_%28Showdown%29.png"
        case 16:
            return "https://static.wikitide.net/balatromodswiki/5/5b/Mountain_Deck_%28UNIK%27s_mod%29.png"
        case 17:
            return "https://static.wikitide.net/balatromodswiki/8/80/Syzygy_Deck_%28Manifold%29.png"
        case 18:
            return "https://static.wikitide.net/balatromodswiki/a/a7/Neon_Deck_%28Ortalab%29.png"
        case 19:
            return "https://static.wikitide.net/balatromodswiki/e/e3/Thrillseeker_Deck_%28Paya%27s_Terrible_Additions%29.png"
        case 20:
            return "https://static.wikitide.net/balatromodswiki/1/1a/Blurple_Deck_%28Phanta%29.png"
        case 21:
            return "https://static.wikitide.net/balatromodswiki/6/6e/Acceleration_Deck_%28POLTERWORX%29.png"
        case 22:
            return "https://static.wikitide.net/balatromodswiki/9/96/Rebel_Deck_%28Phanta%29.png"
    }
}
setInterval(() => {
    if (currentdeck == 14 && blackjack) {
        winmult -= 10
    }
}, 250)
async function flipCard(cardElement, newSrc) {
    cardElement.classList.add("flipping")

    const img = new Image()
    img.src = newSrc

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
            jackpopup.classList.add("redpopup")
            popup = true
            setTimeout(() => {
                jackpopup.classList.remove("show")
                popup = false
            }, 3000)
            tpoptext.innerHTML = "Too low bet"
            bpoptext.innerHTML = "Current min bet: " + formatNumber(cps * minbetmult)
            playSfx("tarot2", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
            break
        case 2:
            jackpopup.classList.add("show")
            jackpopup.classList.remove("redpopup")
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
            playSfx("tarot2", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
            bpoptext.innerHTML = quest.join(", ")
    }
}
let sfxmaxpitch = 1
let sfxminpitch = 0.6
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
    while (dcard <= 4 && !dbusted && !dstand && blackjack) {
        if ((dcardval1 + dcardval2 + dcardval3 + dcardval4) < 17) {
            dealerdrawcard()
        } else {
            dstand = true
            playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
            finishmatch()
        }
    }
}
function givechips() {
    let addchips = 0
    let chiprew = 150
    let chipdec = 2.5
    switch (currentdeck) {
        case 1:
            addchips = Math.floor(chiprew - (chipdec * redwins))
            break
        case 2:
            addchips = Math.floor(chiprew - (chipdec * bluewins))
            break
        case 3:
            addchips = Math.floor(chiprew - (chipdec * yellowwins))
            break
        case 4:
            addchips = Math.floor(chiprew - (chipdec * ghostwins))
            break
        case 5:
            addchips = Math.floor(chiprew - (chipdec * greenwins))
            break
        case 6:
            addchips = Math.floor(chiprew - (chipdec * magicwins))
            break
        case 7:
            addchips = Math.floor(chiprew - (chipdec * blackwins))
            break
        case 8:
            addchips = Math.floor(chiprew - (chipdec * nebulawins))
            break
        case 10:
            addchips = Math.floor(chiprew - (chipdec * decayedwins))
            break
        case 11:
            addchips = Math.floor(chiprew - (chipdec * halowins))
            break
        case 12:
            addchips = Math.floor(chiprew - (chipdec * paintedwins))
            break
        case 13:
            addchips = Math.floor(chiprew - (chipdec * anaglyphwins))
            break
        case 14:
            addchips = Math.floor(chiprew - (chipdec * burningwins))
            break
        case 15:
            addchips = Math.floor(chiprew - (chipdec * decimalwins))
            break
        case 16:
            addchips = Math.floor(chiprew - (chipdec * mountainwins))
            break
        case 17:
            addchips = Math.floor(chiprew - (chipdec * eclipsewins))
            break
        case 18:
            addchips = Math.floor(chiprew - (chipdec * pulsewins))
            break
        case 19:
            addchips = Math.floor(chiprew - (chipdec * thrillwins))
            break
        case 20:
            addchips = Math.floor(chiprew - (chipdec * prophetwins))
            break
        case 21:
            addchips = Math.floor(chiprew - (chipdec * nitrowins))
            break
        case 22:
            addchips = Math.floor(chiprew - (chipdec * dualitywins))
            break
    }
    chips += Math.max(1, addchips)
        spawnFloatingNumber(0, {
            text: "Chips: +" + formatNumber(Math.max(1, addchips)),
            color: "green",
            size: "70px",
            duration: 4000
        })
        chipcounter.innerHTML = formatNumber(chips)
    if (Math.random >= 0.5) {
        playSfx("chip1", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    } else {
        playSfx("chip2", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    }
}
let nebulachance = 0
function finishmatch() {
    if (!blackjack) return
    cursor.classList.remove("passby")
    cursor.style.display = "none"
    hitbtn.classList.remove("pulsehit")
    card = 1
    if ((!busted && (dcardval1 + dcardval2 + dcardval3 + dcardval4) < (getTotalValue())) || (dbusted && !busted)) {
        let cashrandom = Math.random()
        if (cashrandom >= 6) {
            playSfx("coin1", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        } else if (cashrandom >= 3) {
            playSfx("coin2", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        } else {
            playSfx("coin3", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        }
        if (currentdeck == 19) {
            switch (getTotalValue()) {
                case 17:
                    winmult = 210
                    break
                case 18:
                    winmult = 240
                    break
                case 19:
                    winmult = 270
                    break
                case 20:
                    winmult = 320
                    break
                case 21:
                    winmult = 400
                    break
            }
        }
        givechips()
        amount += currentbet * (BigInt(winmult) + magicmult) * blackjackbuff / BigInt(10000)
        questwin()
        if (currentdeck !== 14) {
            spawnFloatingNumber(0, {
            text: "BLACKJACK: +" + formatNumber(currentbet * (BigInt(winmult) +magicmult) * blackjackbuff / BigInt(10000)),
            color: "red",
            size: "70px",
            duration: 5000
        })
        } else {
            spawnFloatingNumber(0, {
            text: winmult / 100 + "x burning: +" + formatNumber(currentbet * (BigInt(winmult) +magicmult) * blackjackbuff / BigInt(10000)),
            color: "orange",
            size: "70px",
            duration: 6000
        })
        }
        blackjack = false
        magicmult += BigInt(25)
        counter.innerHTML = formatNumber(amount) + " pizzas"
    } else if ((!busted && (dcardval1 + dcardval2 + dcardval3 + dcardval4) == (getTotalValue()) && !dbusted)) {
        amount += currentbet
        blackjack = false
        counter.innerHTML = formatNumber(amount) + " pizzas"
        spawnFloatingNumber(currentbet)
    } else {
        if (currentdeck == 19) {
            switch (getTotalValue()) {
                case 22:
                    amount -= currentbet / 2n
                    spawnFloatingNumber(0, {
                        text: "- " + formatNumber(currentbet / 2n), 
                        color: "black",
                        size: "70px",
                        duration: 6000
                    })
                    break
                case 23:
                    amount -= currentbet / 3n
                    spawnFloatingNumber(0, {
                        text: "- " + formatNumber(currentbet / 3n), 
                        color: "black",
                        size: "70px",
                        duration: 6000
                    })
                    break
                case 24:
                    amount -= currentbet / 4n
                    spawnFloatingNumber(0, {
                        text: "- " + formatNumber(currentbet / 4n), 
                        color: "black",
                        size: "70px",
                        duration: 6000
                    })
                    break
                case 25:
                    amount -= currentbet / 6n
                    spawnFloatingNumber(0, {
                        text: "- " + formatNumber(currentbet / 6n), 
                        color: "black",
                        size: "70px",
                        duration: 6000
                    })
                    break
            }
        }
        magicmult = BigInt(0)
        nebulachance = Math.random()
        if (currentdeck == 16) {
            amount -= currentbet
            spawnFloatingNumber(0, {
            text: "- " + formatNumber(currentbet), 
            color: "black",
            size: "70px",
            duration: 6000
        })
        }
        if (nebulachance <= 0.3 && currentdeck == 8) {
            amount += currentbet
            counter.innerHTML = formatNumber(amount) + " pizzas"
            spawnFloatingNumber(currentbet)
            spawnFloatingNumber(0, {
            text: "NEBULA SAVE",
            color: "purple",
            size: "70px",
            duration: 5000
        })
        nebulaOverlay.classList.add("nebula-active")
        setTimeout(() => {
            nebulaOverlay.classList.remove("nebula-active")
        }, 2000)
        playSfx("holo1", 0.5, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        } else {
            playSfx("timpani", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        }
        counter.innerHTML = formatNumber(amount) + " pizzas"
        blackjack = false
        if (currentbet >= 1000000000 && currentdeck == 16) {mountainquest += 1; updatequests()}
    }
}
const nebulaOverlay = document.getElementById("nebulaOverlay")
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
    if (currentdeck == 14) {burningwins += 1}
    if (currentdeck == 15) {decimalwins += 1}
    if (currentdeck == 16) {mountainwins += 1}
    if (currentdeck == 17) {eclipsewins += 1}
    if (currentdeck == 18) {pulsewins += 1}
    if (currentdeck == 19) {thrillwins += 1}
    if (currentdeck == 20) {prophetwins += 1}
    if (currentdeck == 21) {nitrowins += 1}
    if (currentdeck == 22) {dualitywins += 1}
    jackearnings += currentbet * (BigInt(winmult) + magicmult) * blackjackbuff / BigInt(200) / 100n
    if (currentbet >= 200000) {win200k += 1}
    if (getTotalValue() == 23 && currentdeck == 5) {triggergreen += 1}
    if (currentbet >= 25000000) {win25m += 1}
    if (currentbet >= 1000000000) {win1b += 1}
    if (currentbet >= 100000000000 && currentdeck == 16) {mountain100bwin += 1}
    if (currentbet >= 100000000000000) {win10t += 1}
    if (currentdeck == 14 && winmult >= 240) {burningquest += 1}
    if (currentdeck == 19 && getTotalValue() == 21) {thrillquest += 1}
    if (currentdeck == 18 && winmult >= 260) {pulsequest += 1}
    if (currentdeck == 17 && eclipsedcards >= 3) {eclipsequest += 1}
    if (magicmult >= 4 && currentdeck == 6) {magicstreak += 1}
    updatequests()
}
function spawnFloatingNumber(value, options = {}) {
    const defaultStyle =
        !("color" in options) &&
        !("size" in options) &&
        !("duration" in options)

    let defaultText = "+" + formatNumber(value)

    if (compactFloatingNumbers && defaultStyle) { return }

    const {
        text = defaultText,
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

    gainHistory = gainHistory.filter(entry => now - entry.time <= 2500)
}
function getCPS() { 
    const now = Date.now()

    gainHistory = gainHistory.filter(entry => now - entry.time <= 2500)

    const total = gainHistory.reduce((sum, entry) => sum + Number(entry.amount), 0)

    return total / 2.5
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
const body = document.getElementById("body")
function setdeckstatus(number) {
    if (currentdeck == 10) {
        body.classList.add("blackandwhite")
    } else {
        body.classList.remove("blackandwhite")
    }
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
    if (budeckowned) {
        bustatus.innerHTML = "Owned"
    } else {
        bustatus.innerHTML = "Price: " + formatNumber(budeckprice)
    }
    if (evdeckowned) {
        evstatus.innerHTML = "Owned"
    } else {
        evstatus.innerHTML = "Price: " + formatNumber(evdeckprice)
    }
    if (modeckowned) {
        mostatus.innerHTML = "Owned"
    } else {
        mostatus.innerHTML = "Price: " + formatNumber(modeckprice)
    }
    if (ecdeckowned) {
        ecstatus.innerHTML = "Owned"
    } else {
        ecstatus.innerHTML = "Price: " + formatNumber(ecdeckprice)
    }
    if (rhdeckowned) {
        rhstatus.innerHTML = "Owned"
    } else {
        rhstatus.innerHTML = "Price: " + formatNumber(rhdeckprice)
    }
    if (thdeckowned) {
        thstatus.innerHTML = "Owned"
    } else {
        thstatus.innerHTML = "Price: " + formatNumber(thdeckprice)
    }
    if (prdeckowned) {
        prstatus.innerHTML = "Owned"
    } else {
        prstatus.innerHTML = "Price: " + formatNumber(prdeckprice)
    }
    if (nideckowned) {
        nistatus.innerHTML = "Owned"
    } else {
        nistatus.innerHTML = "Price: " + formatNumber(nideckprice)
    }
    if (dudeckowned) {
        dustatus.innerHTML = "Owned"
    } else {
        dustatus.innerHTML = "Price: " + formatNumber(dudeckprice)
    }
    switch (number) {
        case 1:
            rstatus.innerHTML = "Selected"
            cardreset()
            break
        case 2:
            bstatus.innerHTML = "Selected"
            cardreset()
            break
        case 3:
            ystatus.innerHTML = "Selected"
            cardreset()
            break
        case 4:
            if (gdeckowned) {
                gstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 5:
            if (grdeckowned) {
                grstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 6:
            if (mdeckowned) {
                mstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 7:
            if (bldeckowned) {
                blstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 8:
            if (ndeckowned) {
                nstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 10:
            if (adeckowned) {
                astatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 11:
            if (hdeckowned) {
                hstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 12:
            if (pdeckowned) {
                pstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 13:
            if (andeckowned) {
                anstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 14:
            if (budeckowned) {
                bustatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 15:
            if (evdeckowned) {
                evstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 16:
            if (modeckowned) {
                mostatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 17:
            if (ecdeckowned) {
                ecstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 18:
            if (rhdeckowned) {
                rhstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 19:
            if (thdeckowned) {
                thstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 20:
            if (prdeckowned) {
                prstatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 21:
            if (nideckowned) {
                nistatus.innerHTML = "Selected"
                cardreset()
            }
            break
        case 22:
            if (dudeckowned) {
                dustatus.innerHTML = "Selected"
                cardreset()
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
const astatus = document.getElementById("astatus")
const adeck = document.getElementById("adeck")
const hstatus = document.getElementById("hstatus")
const hdeck = document.getElementById("hdeck")
const anstatus = document.getElementById("anstatus")
const andeck = document.getElementById("andeck")
const pstatus = document.getElementById("pstatus")
const pdeck = document.getElementById("pdeck")
const bustatus = document.getElementById("bustatus")
const budeck = document.getElementById("budeck")
const evstatus = document.getElementById("evstatus")
const evdeck = document.getElementById("evdeck")
const mostatus = document.getElementById("mostatus")
const modeck = document.getElementById("modeck")
const ecstatus = document.getElementById("ecstatus")
const ecdeck = document.getElementById("ecdeck")
const rhstatus = document.getElementById("rhstatus")
const rhdeck = document.getElementById("rhdeck")
const thstatus = document.getElementById("thstatus")
const thdeck = document.getElementById("thdeck")
const prstatus = document.getElementById("prstatus")
const prdeck = document.getElementById("prdeck")
const nistatus = document.getElementById("nistatus")
const nideck = document.getElementById("nideck")
const dustatus = document.getElementById("dustatus")
const dudeck = document.getElementById("dudeck")

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
let budeckprice = BigInt("10000000000")
let budeckowned = false
let evdeckprice = BigInt("10000000000")
let evdeckowned = false
let modeckprice = BigInt("10000000000")
let modeckowned = false
let ecdeckprice = BigInt("1000000000000")
let ecdeckowned = false
let rhdeckprice = BigInt("1000000000000")
let rhdeckowned = false
let thdeckprice = BigInt("1000000000000")
let thdeckowned = false
let prdeckprice = BigInt("5000000000000000")
let prdeckowned = false
let nideckprice = BigInt("5000000000000000")
let nideckowned = false
let dudeckprice = BigInt("5000000000000000")
let dudeckowned = false

adeck.addEventListener("click", () => {
    if (amount >= adeckprice && !adeckowned) {
        amount -= adeckprice
        adeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && adeckowned) {
        currentdeck = 10
        setdeckstatus(10)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(6)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(1)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(7)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(1)
    }
})
rdeck.addEventListener("click", () => {
    if (!blackjack) {
        currentdeck = 1
        setdeckstatus(1)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(1)
    }
})
bdeck.addEventListener("click", () => {
    if (!blackjack) {
        currentdeck = 2
        setdeckstatus(2)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(1)
    }
})
ydeck.addEventListener("click", () => {
    if (!blackjack) {
        currentdeck = 3
        setdeckstatus(3)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(2)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(3)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(1)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(4)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(10)
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
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(3)
    }
})
budeck.addEventListener("click", () => {
    if (amount >= budeckprice && !budeckowned) {
        amount -= budeckprice
        budeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && budeckowned) {
        currentdeck = 14
        setdeckstatus(14)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(5)
    }
})
evdeck.addEventListener("click", () => {
    if (amount >= evdeckprice && !evdeckowned) {
        amount -= evdeckprice
        evdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && evdeckowned) {
        currentdeck = 15
        setdeckstatus(15)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(1)
    }
})
modeck.addEventListener("click", () => {
    if (amount >= modeckprice && !modeckowned) {
        amount -= modeckprice
        modeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && modeckowned) {
        currentdeck = 16
        setdeckstatus(16)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(10)
    }
})
ecdeck.addEventListener("click", () => {
    if (amount >= ecdeckprice && !ecdeckowned) {
        amount -= ecdeckprice
        ecdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && ecdeckowned) {
        currentdeck = 17
        setdeckstatus(17)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(9)
    }
})
rhdeck.addEventListener("click", () => {
    if (amount >= rhdeckprice && !rhdeckowned) {
        amount -= rhdeckprice
        rhdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && rhdeckowned) {
        currentdeck = 18
        setdeckstatus(18)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(8)
    }
})
thdeck.addEventListener("click", () => {
    if (amount >= thdeckprice && !thdeckowned) {
        amount -= thdeckprice
        thdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && thdeckowned) {
        currentdeck = 19
        setdeckstatus(19)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(2)
    }
})
prdeck.addEventListener("click", () => {
    if (amount >= prdeckprice && !prdeckowned) {
        amount -= prdeckprice
        prdeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && prdeckowned) {
        currentdeck = 20
        setdeckstatus(20)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(3)
    }
})
nideck.addEventListener("click", () => {
    if (amount >= nideckprice && !nideckowned) {
        amount -= nideckprice
        nideckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && nideckowned) {
        currentdeck = 21
        setdeckstatus(21)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(1)
    }
})
dudeck.addEventListener("click", () => {
    if (amount >= dudeckprice && !dudeckowned) {
        amount -= dudeckprice
        dudeckowned = true
        counter.innerHTML = formatNumber(amount) + " pizzas"
    }
    if (!blackjack && dudeckowned) {
        currentdeck = 22
        setdeckstatus(22)
        playSfx("cardfan", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        fadesong(10)
    }
})
setdeckstatus(1)

const questview = document.querySelector(".queststab")
const gameview = document.querySelector(".playingsection")
const deckview = document.querySelector(".customdecks")
const page1btn = document.getElementById("page1btn")
const page2btn = document.getElementById("page2btn")
const page3btn = document.getElementById("page3btn")
const playtab = document.getElementById("playtab")
const decktab = document.getElementById("decktab")
const questtab = document.getElementById("questtab")
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const page3 = document.getElementById("page3")
const upgradestab = document.getElementById("upgradetab")
const buffstab = document.getElementById("buffstab")
const boxestab = document.getElementById("boxestab")
const itemstab = document.getElementById("itemstab")
const upgradesbtn = document.getElementById("upgradesbtn")
const buffsbtn = document.getElementById("buffsbtn")
const boxesbtn = document.getElementById("boxesbtn")
const itemsbtn = document.getElementById("itemsbtn")

playtab.addEventListener("click", () => {
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
    gameview.style.display = "block"
    deckview.style.display = "none"
    questview.style.display = "none"
    cursorreset()
    if (currentdeck == 20) {
        prophetbtn.style.display = "block"
    } else {prophetbtn.style.display = "none"}
})

decktab.addEventListener("click", () => {
    if (!blackjack) {
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        gameview.style.display = "none"
        deckview.style.display = "block"
        questview.style.display = "none"
    }
})
questtab.addEventListener("click", () => {
    if (!blackjack) {
        playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
        gameview.style.display = "none"
        deckview.style.display = "none"
        questview.style.display = "flex"
        updatequests()
    }
})
page1btn.addEventListener("click", () => {
    page1.style.display = "flex"
    page2.style.display = "none"
    page3.style.display = "none"
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
page2btn.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "flex"
    page3.style.display = "none"
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
page3btn.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "flex"
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
upgradesbtn.addEventListener("click", () => {
    upgradestab.style.display = "block"
    buffstab.style.display = "none"
    boxestab.style.display = "none"
    itemstab.style.display = "none"
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
buffsbtn.addEventListener("click", () => {
    upgradestab.style.display = "none"
    buffstab.style.display = "block"
    boxestab.style.display = "none"
    itemstab.style.display = "none"
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
boxesbtn.addEventListener("click", () => {
    upgradestab.style.display = "none"
    buffstab.style.display = "none"
    boxestab.style.display = "block"
    itemstab.style.display = "none"
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
itemsbtn.addEventListener("click", () => {
    upgradestab.style.display = "none"
    buffstab.style.display = "none"
    boxestab.style.display = "none"
    itemstab.style.display = "block"
    playSfx("button", 1, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
})
const lvl2 = document.getElementById("lvl2")
const lvl2decklock = document.getElementById("lvl2decklock")
const lvl3 = document.getElementById("lvl3")
const lvl3decklock = document.getElementById("lvl3decklock")
const lvl4 = document.getElementById("lvl4")
const lvl4decklock = document.getElementById("lvl4decklock")
const lvl5 = document.getElementById("lvl5")
const lvl5decklock = document.getElementById("lvl5decklock")
const lvl6 = document.getElementById("lvl6")
const lvl6decklock = document.getElementById("lvl6decklock")
const lvl7 = document.getElementById("lvl7")
const lvl7decklock = document.getElementById("lvl7decklock")
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
let burningwins = 0
let decimalwins = 0
let mountainwins = 0
let win1b = 0
let mountain100bwin = 0
let burningquest = 0
let mountainquest = 0
let magicstreak = 0
let eclipsewins = 0
let pulsewins = 0
let thrillwins = 0
let eclipsequest = 0
let pulsequest = 0
let thrillquest = 0
let win10t = 0
let prophetwins = 0
let nitrowins = 0
let dualitywins = 0
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
const quest51prog = document.getElementById("quest51prog")
const quest52prog = document.getElementById("quest52prog")
const quest53prog = document.getElementById("quest53prog")
const quest54prog = document.getElementById("quest54prog")
const quest55prog = document.getElementById("quest55prog")
const quest56prog = document.getElementById("quest56prog")
const quest57prog = document.getElementById("quest57prog")
const quest51 = document.getElementById("quest51")
const quest52 = document.getElementById("quest52")
const quest53 = document.getElementById("quest53")
const quest54 = document.getElementById("quest54")
const quest55 = document.getElementById("quest55")
const quest56 = document.getElementById("quest56")
const quest57 = document.getElementById("quest57")
const quest61prog = document.getElementById("quest61prog")
const quest62prog = document.getElementById("quest62prog")
const quest63prog = document.getElementById("quest63prog")
const quest64prog = document.getElementById("quest64prog")
const quest65prog = document.getElementById("quest65prog")
const quest66prog = document.getElementById("quest66prog")
const quest67prog = document.getElementById("quest67prog")
const quest68prog = document.getElementById("quest68prog")
const quest61 = document.getElementById("quest61")
const quest62 = document.getElementById("quest62")
const quest63 = document.getElementById("quest63")
const quest64 = document.getElementById("quest64")
const quest65 = document.getElementById("quest65")
const quest66 = document.getElementById("quest66")
const quest67 = document.getElementById("quest67")
const quest68 = document.getElementById("quest68")
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
let tier5_1stat = false
let tier5_2stat = false
let tier5_3stat = false
let tier5_4stat = false
let tier5_5stat = false
let tier5_6stat = false
let tier5_7stat = false
let tier6_1stat = false
let tier6_2stat = false
let tier6_3stat = false
let tier6_4stat = false
let tier6_5stat = false
let tier6_6stat = false
let tier6_7stat = false
let tier6_8stat = false
function updatequests() {
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
    quest51prog.innerHTML = formatNumber(jackearnings) + " / 1T"
    quest52prog.innerHTML = burningwins + " / 5"
    quest53prog.innerHTML = decimalwins + " / 5"
    quest54prog.innerHTML = mountainwins + " / 5"
    quest55prog.innerHTML = mountain100bwin + " / 1"
    quest56prog.innerHTML = burningquest + " / 1"
    quest57prog.innerHTML = mountainquest + " / 1"
    quest61prog.innerHTML = formatNumber(jackearnings) + " / 100T"
    quest62prog.innerHTML = eclipsewins + " / 5"
    quest63prog.innerHTML = pulsewins + " / 5"
    quest64prog.innerHTML = thrillwins + " / 5"
    quest65prog.innerHTML = thrillquest + " / 1"
    quest66prog.innerHTML = pulsequest + " / 1"
    quest67prog.innerHTML = eclipsequest + " / 1"
    quest68prog.innerHTML = win10t + " / 1"
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
if (jackearnings >= 1000000000000n && !tier5_1stat) {tier5_1stat = true; completedquests.push("Infinite breadsticks")}
if (burningwins >= 5 && !tier5_2stat) {tier5_2stat = true; completedquests.push("Hot hands")}
if (decimalwins >= 5 && !tier5_3stat) {tier5_3stat = true; completedquests.push("Counting cards")}
if (mountainwins >= 5 && !tier5_4stat) {tier5_4stat = true; completedquests.push("Long way down")}
if (mountain100bwin >= 1 && !tier5_5stat) {tier5_5stat = true; completedquests.push("Everest")}
if (burningquest >= 1 && !tier5_6stat) {tier5_6stat = true; completedquests.push("Flamethrower")}
if (mountainquest >= 1 && !tier5_7stat) {tier5_7stat = true; completedquests.push("Sisyphus")}
if (jackearnings >= 100000000000000n && !tier6_1stat) {tier6_1stat = true; completedquests.push("Infinite money")}
if (eclipsewins >= 5 && !tier6_2stat) {tier6_2stat = true; completedquests.push("After hours")}
if (pulsewins >= 5 && !tier6_3stat) {tier6_3stat = true; completedquests.push("Stayin' alive")}
if (thrillwins >= 5 && !tier6_4stat) {tier6_4stat = true; completedquests.push("No guts no glory")}
if (thrillquest >= 1 && !tier6_5stat) {tier6_5stat = true; completedquests.push("Right on the money")}
if (pulsequest >= 1 && !tier6_6stat) {tier6_6stat = true; completedquests.push("Smooth operator")}
if (eclipsequest >= 1 && !tier6_7stat) {tier6_7stat = true; completedquests.push("Numbers guy")}
if (win10t >= 1 && !tier6_8stat) {tier6_8stat = true; completedquests.push("Everything.")}
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
quest51.addEventListener("click", () => {if (tier5_1stat) {quest51.style.display = "none"; xp += 1; levelunlocks(); chips += 2000; chipcounter.innerHTML = formatNumber(chips)}})
quest52.addEventListener("click", () => {if (tier5_2stat) {quest52.style.display = "none"; xp += 1; levelunlocks(); chips += 2000; chipcounter.innerHTML = formatNumber(chips)}})
quest53.addEventListener("click", () => {if (tier5_3stat) {quest53.style.display = "none"; xp += 1; levelunlocks(); chips += 2000; chipcounter.innerHTML = formatNumber(chips)}})
quest54.addEventListener("click", () => {if (tier5_4stat) {quest54.style.display = "none"; xp += 1; levelunlocks(); chips += 2000; chipcounter.innerHTML = formatNumber(chips)}})
quest55.addEventListener("click", () => {if (tier5_5stat) {quest55.style.display = "none"; xp += 1; levelunlocks(); chips += 2000; chipcounter.innerHTML = formatNumber(chips)}})
quest56.addEventListener("click", () => {if (tier5_6stat) {quest56.style.display = "none"; xp += 1; levelunlocks(); chips += 2000; chipcounter.innerHTML = formatNumber(chips)}})
quest57.addEventListener("click", () => {if (tier5_7stat) {quest57.style.display = "none"; xp += 1; levelunlocks(); chips += 2000; chipcounter.innerHTML = formatNumber(chips)}})
quest61.addEventListener("click", () => {if (tier6_1stat) {quest61.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
quest62.addEventListener("click", () => {if (tier6_2stat) {quest62.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
quest63.addEventListener("click", () => {if (tier6_3stat) {quest63.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
quest64.addEventListener("click", () => {if (tier6_4stat) {quest64.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
quest65.addEventListener("click", () => {if (tier6_5stat) {quest65.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
quest66.addEventListener("click", () => {if (tier6_6stat) {quest66.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
quest67.addEventListener("click", () => {if (tier6_7stat) {quest67.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
quest68.addEventListener("click", () => {if (tier6_8stat) {quest68.style.display = "none"; xp += 1; levelunlocks(); chips += 2500; chipcounter.innerHTML = formatNumber(chips)}})
const lvl2decks = document.getElementById("lvl2decks")
const lvl3decks = document.getElementById("lvl3decks")
const lvl4decks = document.getElementById("lvl4decks")
const lvl5decks = document.getElementById("lvl5decks")
const lvl6decks = document.getElementById("lvl6decks")
const lvl7decks = document.getElementById("lvl7decks")
const lv1quests = document.getElementById("lv1quests")
const lv2quests = document.getElementById("lv2quests")
const lv3quests = document.getElementById("lv3quests")
const lv4quests = document.getElementById("lv4quests")
const lv5quests = document.getElementById("lv5quests")
const lv6quests = document.getElementById("lv6quests")
const lv7quests = document.getElementById("lv7quests")
function levelunlocks() {
    if (xp >= 4 && lv == 1) {
        lv = 2
        xp -= 4
        pizzerupg.style.display = "flex"
        lvl2.style.display = "none"
        lvl2decks.style.display = "flex"
        lvl2decklock.style.display = "none"
        lv2quests.style.display = "flex"
        lv1quests.style.display = "none"
        buff5.style.display = "flex"
        buff4.style.display = "flex"
        buff3.style.display = "flex"
    }
    if (xp >= 6 && lv == 2) {
        lv = 3
        xp -= 6
        lvl3decklock.style.display = "none"
        lvl3decks.style.display = "flex"
        lv2quests.style.display = "none"
        lv3quests.style.display = "flex"
        lvl3.style.display = "none"
        mattressbtn.style.display = "flex"
        buff6.style.display = "flex"
        buff7.style.display = "flex"
    }
    if (xp >= 6 && lv == 3) {
        lv = 4
        xp -= 6
        lvl4decklock.style.display = "none"
        lvl4decks.style.display = "flex"
        lv3quests.style.display = "none"
        lv4quests.style.display = "flex"
        lvl4.style.display = "none"
        constructionbtn.style.display = "flex"
        buff8.style.display = "flex"
        buff9.style.display = "flex"
        buff10.style.display = "flex"
        buff11.style.display = "flex"
    }
    if (xp >= 7 && lv == 4) {
        lv = 5
        xp -= 6
        lv5quests.style.display = "flex"
        lv4quests.style.display = "none"
        lvl5.style.display = "none"
        buff12.style.display = "flex"
        buff13.style.display = "flex"
        buff14.style.display = "flex"
        buff15.style.display = "flex"
        buff16.style.display = "flex"
        lvl5decklock.style.display = "none"
        lvl5decks.style.display = "flex"
        casinobtn.style.display = "flex"
    }
    if (xp >= 7 && lv == 5) {
        lv = 6
        xp -= 7
        lvl6decklock.style.display = "none"
        lvl6decks.style.display = "flex"
        lv5quests.style.display = "none"
        lv6quests.style.display = "flex"
        lvl6.style.display = "none"
        portbtn.style.display = "flex"
    }
    if (xp >= 8 && lv == 6) {
        lv = 6
        xp -= 8
        lvl7decklock.style.display = "none"
        lvl7decks.style.display = "flex"
        lv6quests.style.display = "none"
        lv7quests.style.display = "flex"
        lvl7.style.display = "none"
        bankbtn.style.display = "flex"
    }
    if (lv == 1) levelprog.innerHTML = xp + " / 4 until level 2"
    if (lv == 2) levelprog.innerHTML = xp + " / 6 until level 3"
    if (lv == 3) levelprog.innerHTML = xp + " / 6 until level 4"
    if (lv == 4) levelprog.innerHTML = xp + " / 6 until level 5"
    if (lv == 5) levelprog.innerHTML = xp + " / 7 until level 6"
    if (lv == 6) levelprog.innerHTML = xp + " / 8 until level 7"
}
const deckdisp = document.getElementById("deckdisplay")
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
lvl4.addEventListener("mouseenter", () => {
    upgrades.innerHTML = "Complete quests to get to level 4."
})
lvl4.addEventListener("mouseleave", () => {
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
    deckdisp.innerHTML = "Yellow Deck: Winning mult = x2.6, but bust from 21."
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
    deckdisp.innerHTML = "Ghost Deck: Once per round if a card would cause bust then halve its value, win mult = 1.5x"
})
gdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
mdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Magic Deck: Each win increases winning mult by 0.25, but losing resets to 2x, bust limit = 23."
})
mdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
grdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Green Deck: Bust from 23, win mult = 1.8x."
})
grdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
ndeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Nebula Deck: Remove cards 2-5, 30% chance to save money."
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
adeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Lonely deck: Removes every face card, winning mult = 2.5x."
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
    deckdisp.innerHTML = "Twin deck: Removes A, 2, 3, 4, K. Two matching ranks in a row instantly set total to 21."
})
andeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
pdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Painted deck: Adds 8 more aces, removes all nines."
})
pdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
budeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Burning deck: 2.6x win mult, every 0.25 second -0.1 win mult."
})
budeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
evdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Decimal deck: Each cards adds an extra 0.25 to total, bust from 23."
})
evdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
modeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Mountain deck: 4x win mult, 2x losses (can go into debt)."
})
modeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
ecdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Eclipse deck: If 2 seconds pass after drawing a card, the latest card is either doubled or halved."
})
ecdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
rhdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Pulse deck: Timing hit / stand gives more mult."
})
rhdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
thdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Thrill deck: Higher totals give higher win mults, but busting near 21 increases lose mult."
})
thdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
prdeck.addEventListener("mouseenter", () => {
    deckdisp.innerHTML = "Prophet deck: Once per round see the next card."
})
prdeck.addEventListener("mouseleave", () => {
    deckdisp.innerHTML = "Custom decks"
})
const blackjackdisp = document.getElementById("blackdisplay")
allinbtn.addEventListener("mouseenter", () => {
    if (cps > 0 && currentdeck == 16 && amount > 0) {
        blackjackdisp.innerHTML = "!!! " + formattime(Number((amount * 2n) / BigInt(Math.trunc(cps)))) + " to escape debt !!!"
        blackjackdisp.style.color = "red"
        blackjackdisp.classList.add("pulsewarning")
    } else if (cps > 0 && currentdeck == 19 && amount > 0) {
        blackjackdisp.innerHTML = "!!! " + formattime(Number(amount / BigInt(Math.trunc(cps)))) + " to escape debt !!!"
        blackjackdisp.style.color = "red"
        blackjackdisp.classList.add("pulsewarning")
    }
})
allinbtn.addEventListener("mouseleave", () => {
    blackjackdisp.innerHTML = "Blackjack"
    blackjackdisp.style.color = "black"
    blackjackdisp.classList.remove("pulsewarning")
})
bet12btn.addEventListener("mouseenter", () => {
    if (cps > 0 && currentdeck == 16 && amount > 0) {
        blackjackdisp.innerHTML = "!!! " + formattime(Number(amount / BigInt(Math.trunc(cps)))) + " to escape debt !!!"
        blackjackdisp.style.color = "red"
        blackjackdisp.classList.add("pulsewarning")
    } else if (cps > 0 && currentdeck == 19 && amount > 0) {
        blackjackdisp.innerHTML = "!!! " + formattime(Number((amount / 2n) / BigInt(Math.trunc(cps)))) + " to escape debt !!!"
        blackjackdisp.style.color = "red"
        blackjackdisp.classList.add("pulsewarning")
    }
})
bet12btn.addEventListener("mouseleave", () => {
    blackjackdisp.innerHTML = "Blackjack"
    blackjackdisp.style.color = "black"
    blackjackdisp.classList.remove("pulsewarning")
})
bet14btn.addEventListener("mouseenter", () => {
    if (cps > 0 && currentdeck == 16 && amount > 0) {
        blackjackdisp.innerHTML = "!!! " + formattime(Number((amount / 2n) / BigInt(Math.trunc(cps)))) + " to escape debt !!!"
        blackjackdisp.style.color = "red"
        blackjackdisp.classList.add("pulsewarning")
    } else if (cps > 0 && currentdeck == 19 && amount > 0) {
        blackjackdisp.innerHTML = "!!! " + formattime(Number((amount / 4n) / BigInt(Math.trunc(cps)))) + " to escape debt !!!"
        blackjackdisp.style.color = "red"
        blackjackdisp.classList.add("pulsewarning")
    }
})
bet14btn.addEventListener("mouseleave", () => {
    blackjackdisp.innerHTML = "Blackjack"
    blackjackdisp.style.color = "black"
    blackjackdisp.classList.remove("pulsewarning")
})
function formattime(time) {
    if (time < 60) {
        return Math.floor(time) + " seconds"
    } 
    if (time < 3600) {
        return Math.round(time / 60, 2) + " minutes"
    }
    if (time < 86400) {
        return Math.round(time / 3600, 2) + " hours"
    }
    if (time < 604800) {
        return Math.round(time / 86400, 2) + " days"
    }
    if (time < 2419200) {
        return formatNumber(Math.round(time / 604800, 2)) + " weeks"
    }
    if (time < 29030400) {
        return formatNumber(Math.round(time / 2419200, 2)) + " months"
    }
    if (time < 290304000) {
        return formatNumber(Math.round(time / 29030400, 2)) + " years"
    }
    if (time < 2903040000) {
        return formatNumber(Math.round(time / 290304000, 2)) + " decades"
    }
    if (time < 29030400000) {
        return formatNumber(Math.round(time / 2903040000, 2)) + " centuries"
    }
    return formatNumber(Math.round(time / 29030400000, 2)) + " millennia"
}
const buffmsg = document.getElementById("buffmsg")
const buffs = document.getElementById("buffs")
const buff1 = document.getElementById("buff1")
const buff2 = document.getElementById("buff2")
const buff3 = document.getElementById("buff3")
const buff4 = document.getElementById("buff4")
const buff5 = document.getElementById("buff5")
const buff6 = document.getElementById("buff6")
const buff7 = document.getElementById("buff7")
const buff8 = document.getElementById("buff8")
const buff9 = document.getElementById("buff9")
const buff10 = document.getElementById("buff10")
const buff11 = document.getElementById("buff11")
const buff12 = document.getElementById("buff12")
const buff13 = document.getElementById("buff13")
const buff14 = document.getElementById("buff14")
const buff15 = document.getElementById("buff15")
const buff16 = document.getElementById("buff16")
buff3.style.display = "none"
buff4.style.display = "none"
buff5.style.display = "none"
buff6.style.display = "none"
buff7.style.display = "none"
buff8.style.display = "none"
buff9.style.display = "none"
buff10.style.display = "none"
buff11.style.display = "none"
buff12.style.display = "none"
buff13.style.display = "none"
buff14.style.display = "none"
buff15.style.display = "none"
buff16.style.display = "none"

buff1.addEventListener("mouseenter", () => {buffs.innerHTML = "Doubles oven strength"})
buff2.addEventListener("mouseenter", () => {buffs.innerHTML = "Joe makes 20% more pizzas"})
buff3.addEventListener("mouseenter", () => {buffs.innerHTML = "Joe makes pizzas faster"})
buff4.addEventListener("mouseenter", () => {buffs.innerHTML = "Pizzerias make 15% more pizzas"})
buff5.addEventListener("mouseenter", () => {buffs.innerHTML = "Every 10 ovens increases pizzas by 1%"})
buff6.addEventListener("mouseenter", () => {buffs.innerHTML = "Pizzerias make pizzas faster"})
buff7.addEventListener("mouseenter", () => {buffs.innerHTML = "Joe makes 30x pizzas"})
buff8.addEventListener("mouseenter", () => {buffs.innerHTML = "Pizzerias make 20x pizzas"})
buff9.addEventListener("mouseenter", () => {buffs.innerHTML = "Mattress store makes 4x pizzas"})
buff10.addEventListener("mouseenter", () => {buffs.innerHTML = "Joe makes 400x pizzas"})
buff11.addEventListener("mouseenter", () => {buffs.innerHTML = "Extra 0.1x payout from blackjack"})
buff12.addEventListener("mouseenter", () => {buffs.innerHTML = "Pizzerias make 30x pizzas"})
buff13.addEventListener("mouseenter", () => {buffs.innerHTML = "Joe makes 1500x pizzas"})
buff14.addEventListener("mouseenter", () => {buffs.innerHTML = "Pizzerias make 90x pizzas"})
buff15.addEventListener("mouseenter", () => {buffs.innerHTML = "Mattress stores make 80x pizzas"})
buff16.addEventListener("mouseenter", () => {buffs.innerHTML = "Construction sites make 7x pizzas"})
buff1.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff2.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff3.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff4.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff5.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff6.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff7.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff8.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff9.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff10.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff11.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff12.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff13.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff14.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff15.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff16.addEventListener("mouseleave", () => {buffs.innerHTML = "Buffs"})
buff1.addEventListener("click", () => {
    if (chips >= 500) {
        upgbuff += 100n
        buff1.style.display = "none"
        chips -= 500
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff2.addEventListener("click", () => {
    if (chips >= 1500) {
        clickerbuff += 20n
        buff2.style.display = "none"
        chips -= 1500
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff3.addEventListener("click", () => {
    if (chips >= 2000) {
        clickerspeed -= 80
        buff3.style.display = "none"
        chips -= 2000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff4.addEventListener("click", () => {
    if (chips >= 2500) {
        pizzerbuff += 15n
        buff4.style.display = "none"
        chips -= 2500
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff5.addEventListener("click", () => {
    if (chips >= 5000) {
        ovenbuff += 1n
        ovenbonus = 100n + ((upg / 10n) * ovenbuff)
        buff5.style.display = "none"
        chips -= 5000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff6.addEventListener("click", () => {
    if (chips >= 2500) {
        pizzerspeed -= 120
        buff6.style.display = "none"
        chips -= 2500
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff7.addEventListener("click", () => {
    if (chips >= 4000) {
        clickerbuff += 3000n
        buff7.style.display = "none"
        chips -= 4000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff8.addEventListener("click", () => {
    if (chips >= 5000) {
        pizzerbuff += 2000n
        buff8.style.display = "none"
        chips -= 5000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff9.addEventListener("click", () => {
    if (chips >= 5000) {
        mattressbuff += 400n
        buff9.style.display = "none"
        chips -= 5000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff10.addEventListener("click", () => {
    if (chips >= 5000) {
        clickerbuff += 40000n
        buff10.style.display = "none"
        chips -= 5000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff11.addEventListener("click", () => {
    if (chips >= 5000) {
        blackjackbuff += 10n
        buff11.style.display = "none"
        chips -= 5000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff12.addEventListener("click", () => {
    if (chips >= 5000) {
        pizzerbuff += 300n
        buff12.style.display = "none"
        chips -= 5000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff13.addEventListener("click", () => {
    if (chips >= 7000) {
        clickerbuff += 1500000n
        buff13.style.display = "none"
        chips -= 7000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff14.addEventListener("click", () => {
    if (chips >= 7000) {
        pizzerbuff += 90000n
        buff14.style.display = "none"
        chips -= 7000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff15.addEventListener("click", () => {
    if (chips >= 6000) {
        mattressbuff += 8000n
        buff15.style.display = "none"
        chips -= 6000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
buff16.addEventListener("click", () => {
    if (chips >= 6000) {
        constructionbuff += 700n
        buff16.style.display = "none"
        chips -= 6000
        chipcounter.innerHTML = formatNumber(chips)
        checkbuffs()
    }
})
function checkbuffs() {
    const bufflist = [buff1, buff2, buff3, buff4, buff5, buff6, buff7, buff8, buff9, buff10, buff11, buff12, buff13, buff14, buff15, buff16]
    buffmsg.style.display = "block"
    bufflist.forEach(buff => {
        if (buff.style.display !== "none") {
            buffmsg.style.display = "none"
        }
    })
    playSfx("button", 0.7, Math.random() * (sfxmaxpitch - sfxminpitch) + sfxminpitch)
}
levelunlocks()
let globalSfxVolume = 0.2
let globalMusicVolume = 0.2
const SFX = {
  button: new Audio("sfx/button.ogg"),
  card1: new Audio("sfx/card1.ogg"),
  card2: new Audio("sfx/card3.ogg"),
  chips1: new Audio("sfx/chips1.ogg"),
  chips2: new Audio("sfx/chips2.ogg"),
  coin1: new Audio("sfx/coin1.ogg"),
  coin2: new Audio("sfx/coin2.ogg"),
  coin3: new Audio("sfx/coin3.ogg"),
  foil1: new Audio("sfx/foil1.ogg"),
  foil2: new Audio("sfx/foil2.ogg"),
  neg: new Audio("sfx/negative.ogg"),
  holo1: new Audio("sfx/holo1.ogg"),
  cardfan: new Audio("sfx/cardFan2.ogg"),
  intropad: new Audio("sfx/introPad1.ogg"),
  paper: new Audio("sfx/paper1.ogg"),
  timpani: new Audio("sfx/timpani.ogg"),
  tarot2: new Audio("sfx/tarot2.ogg"),
  cancel: new Audio("sfx/cancel.ogg"),
  multihit1: new Audio("sfx/multhit1.ogg"),
  multihit2: new Audio("sfx/multhit2.ogg")
}
Object.values(SFX).forEach(s => {
  s.preload = "auto"
  s.volume = 0.5
})
function playSfx(name, volume = 1, pitch = 1) {
  const base = SFX[name]
  if (!base) return

  const clone = base.cloneNode()
  clone.volume = volume * globalSfxVolume

  clone.playbackRate = pitch

  clone.play()
}
document.addEventListener("click", () => {
  tracks.forEach(m => {
    m.play().catch(() => {})
  })
  fadesong(1)
  playSfx("intropad", 0.2, 1)
}, { once: true })
const musicA = new Audio("music/theme.mp3")
const musicB = new Audio("music/shop.mp3")
const musicC = new Audio("music/celestial.mp3")
const musicD = new Audio("music/arcana.mp3")
const musicE = new Audio("music/exotic.mp3")
const musicF = new Audio("music/piano.mp3")
const musicH = new Audio("music/synthwave.mp3")
const musicI = new Audio("music/breakcore.mp3")
const musicJ = new Audio("music/starve.mp3")
const musicK = new Audio("music/jazz.mp3")
const tracks = [musicA, musicB, musicC, musicD, musicE, musicF, musicH, musicI, musicJ, musicK]
tracks.forEach(m => {
  m.loop = true
  m.mixVolume = 0
  m.volume = 0
})
function fade(audio, target, speed = 0.015) {
  cancelAnimationFrame(audio._fadeId)

  const step = () => {
    audio.mixVolume += (target - audio.mixVolume) * speed

    if (Math.abs(audio.mixVolume - target) < 0.001) {
      audio.mixVolume = target
    }

    audio.volume = audio.mixVolume * globalMusicVolume

    audio._fadeId = requestAnimationFrame(step)
  }

  step()
}
function fadesong(song) {
    switch (song) {
        case 1:
            fade(musicA, 0.2)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 2:
            fade(musicA, 0)
            fade(musicB, 0.2)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 3:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0.2)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 4:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0.2)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 5:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0.2)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 6:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0.2)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 7:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0.2)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 8:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0.2)
            fade(musicJ, 0)
            fade(musicK, 0)
            break
        case 9:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0.2)
            fade(musicK, 0)
            break
        case 10:
            fade(musicA, 0)
            fade(musicB, 0)
            fade(musicC, 0)
            fade(musicD, 0)
            fade(musicE, 0)
            fade(musicF, 0)
            fade(musicH, 0)
            fade(musicI, 0)
            fade(musicJ, 0)
            fade(musicK, 0.2)
            break
    }
}
const volumeBarm = document.getElementById("volumeBarm")
const volumeFillm = document.getElementById("volumeFillm")
let draggingVolumem = false
function updateVolumem(e) {
    const rect = volumeBarm.getBoundingClientRect()

    let x = e.clientX - rect.left
    let percent = x / rect.width

    percent = Math.max(0, Math.min(1, percent))

    globalMusicVolume = percent

    volumeFillm.style.width = (percent * 100) + "%"

    tracks.forEach(t => {
        t.volume = t.mixVolume * globalMusicVolume
    })
}
volumeBarm.addEventListener("mousedown", (e) => {
    draggingVolumem = true
    updateVolumem(e)
})
document.addEventListener("mousemove", (e) => {
    if (draggingVolumem) {
        updateVolumem(e)
    }
})
document.addEventListener("mouseup", () => {
    draggingVolumem = false
})
const volumeBars = document.getElementById("volumeBars")
const volumeFills = document.getElementById("volumeFills")
let draggingVolumes = false
function updateVolumes(e) {
    const rect = volumeBars.getBoundingClientRect()

    let x = e.clientX - rect.left
    let percent = x / rect.width

    percent = Math.max(0, Math.min(1, percent))

    globalSfxVolume = percent

    volumeFills.style.width = (percent * 100) + "%"

    globalSfxVolume = percent
}

volumeBars.addEventListener("mousedown", (e) => {
    draggingVolumes = true
    updateVolumes(e)
})

document.addEventListener("mousemove", (e) => {
    if (draggingVolumes) {
        updateVolumes(e)
    }
})

document.addEventListener("mouseup", () => {
    draggingVolumes = false
})
let settingopen = false
const settingbtn = document.getElementById("settingbtn")
const settingtab = document.getElementById("settingtab")
settingbtn.addEventListener("click", () => {
    if (settingopen) {
        settingtab.style.display = "none"
    } else {
        settingtab.style.display = "block"
    }
    settingopen = !settingopen
})
let compactFloatingNumbers = false
const numbertogbtn = document.getElementById("numbertogbtn")
numbertogbtn.addEventListener("click", () => {
    compactFloatingNumbers = !compactFloatingNumbers
    if (compactFloatingNumbers) {
        numbertogbtn.innerHTML = "Off"
    } else {
        numbertogbtn.innerHTML = "On"
    }
})