function daysInMonth(month, year) {
    var days;
    switch (month) {
        case 1: // Feb, our problem child
            var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
            days = leapYear ? 29 : 28;
            break;
        case 3: case 5: case 8: case 10:
            days = 30;
            break;
        default:
            days = 31;
    }
    return days;
}