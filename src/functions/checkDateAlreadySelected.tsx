import { getFullPeriod } from './getFullPeriod'

const checkDateAlreadySelected = (pressedDay: any, periods: any) => {
    for (const period of periods) {
        const remainingDays = getFullPeriod(period[0], period[1])
        for (const day of remainingDays) {
            if (pressedDay === day) {
                return false
            }
        }
    }
    return true
}

export { checkDateAlreadySelected }
