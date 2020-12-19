// Задание 6.

// Создать Promise, в котором c задержкой в 3 секунды сгенерировать случайное целое число от 1 до 100.
// Для создания задержки использовать setTimeout.Если сгенерированное число — четное, Promise выполнится успешно(resolve),
// если нечетное — выполнится с ошибкой(reject).После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:

// «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
// «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число


const myFirstPromice = new Promise((resolve, reject) => {
    setTimeout(() => { 
        let number = getRandom(101);

    if (number % 2 === 0) { resolve(`Завершено успешно. Сгенерированное число — ${number}`) }
        else { reject(`Завершено с ошибкой. Сгенерированное число — ${number}`) };
            }, 3000);

});

myFirstPromice.then((result) => { 
    console.log(result)
});

myFirstPromice.catch((error) => {
    console.log(error)
});

function getRandom(num) {
    return Math.floor(Math.random() * num)
};
