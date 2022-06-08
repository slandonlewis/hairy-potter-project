// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('cylinder', 6, 3.3)
let bowl = makePottery('sphere', 16, 6)
let planter = makePottery('cylinder', 64, 18)
let candleHolder = makePottery('square', 16, 6)
let cakeStand = makePottery('sphere', 24, 4)
// to log each piece
// console.log(mug)
// console.log(bowl)
// console.log(planter)
// console.log(candleHolder)
// console.log(cakeStand)

// Fire each piece of pottery in the kiln
firePottery(mug, 2000)
firePottery(bowl, 2050)
firePottery(planter, 2150)
firePottery(candleHolder, 2300)
firePottery(cakeStand, 2500)
// to log each piece
console.log(mug)
console.log(bowl)
console.log(planter)
console.log(candleHolder)
console.log(cakeStand)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



