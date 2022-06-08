export const firePottery = (pottery, firingTemp) => {
    pottery.fired = true
    if (firingTemp >= 2200) {
        pottery.cracked = true
    } else if (firingTemp <= 2200) {
        pottery.cracked = false
    }
}