import {ClassPeriodType} from "../types";

export class ClassesStore {
    items: ClassPeriodType[] = [
        {
            id: 1,
            dateStart:'2022-01-07',
            dateEnd:'2022-01-11',
        }, {
            id: 2,
            dateStart:'2022-01-20',
            dateEnd:'2022-01-24',
        }
    ]

    constructor () {

    }
}
