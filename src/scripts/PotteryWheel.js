const primaryKey = 1
let currentPotteryID = 0

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    currentPotteryID ++
    const newPottery = {
        id: currentPotteryID,
        shape: potteryShape,
        weightOz: potteryWeight,
        heightInch: potteryHeight
    }
    return newPottery
}