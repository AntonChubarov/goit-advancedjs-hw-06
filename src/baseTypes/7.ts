enum dayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function isWeekend(day: dayOfWeek): boolean {
    return day === dayOfWeek.Saturday || day === dayOfWeek.Sunday;
}

export {};
