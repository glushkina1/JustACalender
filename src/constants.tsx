import { Dimensions } from "react-native";

enum DatePatter {
    YEAR_MONTH_DAY = 'yyyy-MM-dd',
    YEAR_MONTH = 'yyyy-MM'
}

const DayInMilliSecs = 24 * 60 * 60 * 1000;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ovalWidth = 130;
const ovalHeight = 300;

export const centredPointWidth = windowWidth / 2;
export const centredPointHeight = windowHeight / 3;
export const centeredLogo = {x: centredPointWidth, y: centredPointHeight}
export const centeredOval = {
    x: (centredPointWidth) - (ovalWidth / 2),
    y: (centredPointHeight) - (ovalHeight / 2),
    width: ovalWidth,
    height: ovalHeight,
}

export const iconSize = 32;


const languageList: Record<string, string> = { en: 'english', rus: 'русский' }

export {DatePatter, DayInMilliSecs, languageList}
