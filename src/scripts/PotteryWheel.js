const primaryKey = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    let currentPotteryID = 0
    currentPotteryID ++
    const newPottery = {
        id: currentPotteryID,
        shape: potteryShape,
        weightOz: potteryWeight,
        heightInch: potteryHeight
    }
    return newPottery
}