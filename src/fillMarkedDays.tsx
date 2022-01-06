import {DateData} from "react-native-calendars/src/types";
import { addDays, format } from 'date-fns'


const fillMarkedDays = (selectedDay: DateData | undefined) => {
    let period: object = {}
    if (selectedDay) {
        const lastDay = addDays(new Date(selectedDay.dateString), 4)
        const result = format(new Date(lastDay), 'yyyy-MM-dd')
        console.log('fillMarkedDays', selectedDay.dateString,'lastDay', result)
    }

}


export {fillMarkedDays}
