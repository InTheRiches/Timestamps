function createTimestamp(date, hourTime) {
    const now = new Date();
    
    if (now.getTime() - date.getTime() <= 60000) {
        return "Just now.";
    }

    if (now.getTime() - date.getTime() <= 3600000 && now.getTime() - date.getTime() >= 0) {
        const minutesAgo = now.getMinutes() - date.getMinutes();
        return minutesAgo === 1 ? minutesAgo + " minute ago." : minutesAgo + " minutes ago.";
    }
    
    if (now.getTime() - date.getTime() <= 86400000 && now.getTime() - date.getTime() >= 0) {
        let hoursAgo = now.getHours() - date.getHours();

        if(date.getHours() > 12 && !hourTime) hoursAgo -= 12;

        return hoursAgo === 1 ? hoursAgo + " hour ago." : "Today at " + date.getHours() + ":" + (date.getMinutes > 9 ? date.getMinutes() : "0" + date.getMinutes());
    }
    
    if (now.getDay() - date.getDay() === 1 && now.getMonth() === date.getMonth() && now.getYear() === date.getYear()) {
        return "Yesterday at " + (date.getHours() > 12 && !hourTime ? date.getHours()-12 : date.getHours()) + ":" + (date.getMinutes > 9 ? date.getMinutes() : "0" + date.getMinutes());
    }
    
    return date.getMonth() + "/" + date.getDay() + "/" + (1900 + date.getYear());
}

function timer() {
    var start = new Date().getTime();
  
    console.log(createTimestamp(new Date(2021, 8, 8, 10, 5, 0, 0), true));
  
    var end = new Date().getTime();

    return end - start;
}


console.log(timer());

class Date {

    days = {
        1: 31,
        2: year%4 === 0 ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    }

    constructor(year, month, day, hours, minutes, seconds, milliseconds) {

        this.year = year;
        this.month = month;
        this.day = day;
        this.days = days[month];
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.milliseconds = milliseconds;
    }

    getTime() {
        let time = this.milliseconds;
        time += this.seconds*1000;
        time += this.minutes*60000;
        time += this.hours*3600000;
        time += this.day*24*3600000;
        for (i = 1; i <= this.month; i++) {
            time += days[i]*24*3600000;
        }
        time += year*31557600000;
    }
}
