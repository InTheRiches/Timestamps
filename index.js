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
        const hoursAgo = now.getHours() - date.getHours();
        if(date.getHours() > 12 && !hourTime) hoursAgo -= 12;
        return hoursAgo === 1 ? hoursAgo + " hour ago." : "Today at " + date.getHours() + ":" + (date.getMinutes > 9 ? date.getMinutes() : "0" + date.getMinutes());
    }
    
    if (now.getDay() - date.getDay() === 1 && now.getMonth() === date.getMonth() && now.getYear() === date.getYear()) {
        return "Yesterday at " + (date.getHours() > 12 && !hourTime ? date.getHours()-12 : date.getHours()) + ":" + (date.getMinutes > 9 ? date.getMinutes() : "0" + date.getMinutes());
    }
    
    return date.getMonth() + "/" + date.getDay() + "/" + (1900 + date.getYear());
}

console.log(createTimestamp(new Date(2021, 8, 8, 10, 5, 0, 0), true));
