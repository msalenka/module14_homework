// Задание 5.

// Написать скрипт, который при открытии страницы будет делать следующее:

// если пользователь зашел в первый раз, вывести окно prompt с сообщением:

// «Добро пожаловать! Назовите, пожалуйста, ваше имя».

// После того, как пользователь введет имя, записать имя, дату и время визита в localStorage.

// Подсказка: для определения текущей даты используйте new Date().
// Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих записей в localStorage), вывести в alert сообщение вида:

// «Добрый день, *имя пользователя*! Давно не виделись. В последний раз вы были у нас *дата последнего посещения*»

// и перезаписать дату последнего посещения.

// Дату можно вывести в любом удобочитаемом формате (не Timestamp, должен четко читаться день, месяц, год и время — часы и минуты).


let userName = localStorage.getItem("userName");
let visitDate = localStorage.getItem("date")

if (userName == undefined) {
    userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя")
}
    else {
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${visitDate}.`)

};

const currentDate = new Date();
localStorage.setItem("userName", userName);
localStorage.setItem("date", `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()} ${currentDate.getHours()}:0${currentDate.getMinutes()}`)


