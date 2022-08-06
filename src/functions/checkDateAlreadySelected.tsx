import { getRemainingDates } from './getRemainingDates'

const checkDateAlreadySelected = (pressedDay: any, periods: any, setIsDateAvaliable: any) => {
  for (const period of periods) {
    console.log(pressedDay)
    const remainingDays = getRemainingDates(period[0], period[1])
    for (const day of remainingDays) {
      if (pressedDay === day) {
        setIsDateAvaliable(false)
        console.log('ПОПАЛСЯ!!!', day)
      }
    }

    console.log('PIPA', remainingDays)
  }

  // getRemainingDates()
}

export { checkDateAlreadySelected }
