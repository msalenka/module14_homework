// Задание 1.

// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

 XML:

{/* <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>

JS-объект:

{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
} */}


const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(xmlString, "text/xml");

let list = [];
const studentsNode = xmlDom.querySelectorAll("student");
studentsNode.forEach((student) => { 
    let name = student.querySelector("first").textContent;
    let surName = student.querySelector("second").textContent;
    let age = student.querySelector("age").textContent;
    let prof = student.querySelector("prof").textContent;
    let nameAttr = student.querySelector("name").getAttribute("lang");
    let object = {
        name: `${name} ${surName}`,
        age: age,
        prof: prof,
        lang: nameAttr
    };
    list.push(object);
});

console.log(object);


