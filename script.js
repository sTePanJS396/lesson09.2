let whyDate = new Date();
let day = whyDate.getDay();
let date = whyDate.getDate();
let year = whyDate.getFullYear();
let hours = whyDate.getHours();
let minutes = whyDate.getMinutes();
let secunds = whyDate.getSeconds();
let month = whyDate.getMonth() + 1;
let today;
let thisMonth;
let wordsHours;
let wordsSecunds;
let wordsMinutes;

let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function declensionForMinutes () {
    if (hours == 1 || hours == 21) {
        wordsHours = 'час';
    } else if (hours >= 2 && hours <= 4 || hours >= 22 && hours <= 24) {
        wordsHours = 'часа';
    } else if (hours >= 5 && hours <= 20) {
        wordsHours = 'часов';
    } 
};

function declensionForSeconds() {
    if (secunds == 1 || secunds == 21 || secunds == 31 || secunds == 41 || secunds == 51) {
        wordsSecunds = 'секунда';
    } else if (secunds >= 2 && secunds <= 4 || secunds >= 22 && secunds <= 24 || secunds >= 32 && secunds <= 34 || secunds >= 42 && secunds <= 44 || secunds >= 52 && secunds <= 54) {
        wordsSecunds = 'секунды';
    } else if (secunds == 0 || secunds >= 5 && secunds <= 20  || secunds >= 25 && secunds <= 30 || secunds >= 35 && secunds <= 40 || secunds >= 45 && secunds <= 50 || secunds >= 55 && secunds <= 61) {
        wordsSecunds = 'секунд';
    }
};

function declinationForMinutes() {
    if (minutes == 1 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) {
        wordsMinutes = 'минута';
    } else if (minutes >= 2 && minutes <= 4 || minutes >= 22 && minutes <= 24 || minutes >= 32 && minutes <= 34 || minutes >= 42 && minutes <= 44 || minutes >= 52 && minutes <= 54) {
        wordsMinutes = 'минуты';
    } else if (minutes >= 5 && minutes <= 20  || minutes >= 25 && minutes <= 30 || minutes >= 35 && minutes <= 40 || minutes >= 45 && minutes <= 50 || minutes >= 55 && minutes <= 61) {
        wordsMinutes = 'минут';
    }
};

function addingTheDesiredValue() {
    if (day < 10) {
        document.write(`0${date}.`);
    } else {
        document.write(`${date}.`);
    };

    if (month < 10) {
        document.write(`0${month}.${year}`);
    } else {
        document.write(`${month}.${year}`);
    };

    if (hours < 10) {
        document.write(` - 0${hours}`);
    } else {
        document.write(` - ${hours}`);
    };
    
    if (minutes < 10) {
        document.write(`.0${minutes}`);
    } else {
        document.write(`.${minutes}`);
    };
    if (secunds < 10) {
        document.write(`.0${secunds}<br>`);
    } else {
        document.write(`.${secunds}<br>`);
    };

}


addingTheDesiredValue();
declensionForMinutes();
declensionForSeconds();
declinationForMinutes();

for (let r in months){
    thisMonth = months[date - 2]
}

for (let key in days) {
    today = days[day - 1];
}

document.write(`Сегодня ${today}, ${date} ${thisMonth}, ${hours} ${wordsHours}, ${minutes} ${wordsMinutes}, ${secunds} ${wordsSecunds}`);

setInterval(function(){
	location.reload();
}, 1000);
