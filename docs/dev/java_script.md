# JavaScript
## Node Blacklist Packages
- colors
- faker
- node-ipc > 9.2.1

## DEEP COPY
```
const deepCopy = (obj) => { 
  JSON.parse(JSON.stringify(obj)) 
};
```

## Добавление свойства в объект по условию
```js
const condition = true;
const person = {
  id: 1,
  name: 'John Doe',
  ...(condition && { age: 16 }),
};
```
## Проверка наличия свойства в объекте
```js
const person = { name: 'John Doe', salary: 1000 };
console.log('salary' in person); // returns true
console.log('age' in person); // returns false
```
## Динамические имена свойств в объектах
```js
const dynamic = 'flavour';

var item = {
  name: 'Biscuit',
  [dynamic]: 'Chocolate'
}
console.log(item); // { name: 'Biscuit', flavour: 'Chocolate' }

const keyName = 'name';
console.log(item[keyName]); // returns 'Biscuit'
```
## Деструктуризация объекта с динамическими ключами
Переименовать переменные при деструктуризации с помощью алиасов (псевдонимов):
```js
const person = { id: 1, name: 'John Doe' };
const { name: personName } = person;
console.log(personName); // returns 'John Doe'
```
С помощью динамического ключа:
```js
const templates = {
  'hello': 'Hello there',
  'bye': 'Good bye'
};
const templateName = 'bye';
const { [templateName]: template } = templates;
console.log(template) // returns 'Good bye'
```
## Оператор нулевого слияния
```js
const foo = null ?? 'Hello';
console.log(foo); // returns 'Hello'

const bar = 'Not null' ?? 'Hello';
console.log(bar); // returns 'Not null'

const baz = 0 ?? 'Hello';
console.log(baz); // returns 0

const cannotBeZero = 0 || 5;
console.log(cannotBeZero); // returns 5

const canBeZero = 0 ?? 5;
console.log(canBeZero); // returns 0
```
## Опциональные последовательности
```js
const book = { id:1, title: 'Title', author: null };

// normally, you would do this
console.log(book.author.age) // throws error
console.log(book.author && book.author.age); // returns null (no error)

// with optional chaining
console.log(book.author?.age); // returns undefined

// or deep optional chaining
console.log(book.author?.address?.city); // returns undefined
```
```js
const person = {
  firstName: 'Haseeb',
  lastName: 'Anwar',
  printName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.printName()); // returns 'Haseeb Anwar'
console.log(persone.doesNotExist?.()); // returns undefined
```
## Логическое преобразование с помощью оператора !!
```js
const greeting = 'Hello there!';
console.log(!!greeting) // returns true

const noGreeting = '';
console.log(!!noGreeting); // returns false
```
## Преобразование между строками и числами
Преобразовать строку в число можно с помощью унарного оператора +
```js
const stringNumer = '123';

console.log(+stringNumer); // returns integer 123
console.log(typeof +stringNumer); // returns 'number'
```
Обратное преобразование:
```js
const myString = 25 + '';

console.log(myString); // returns '25'
console.log(typeof myString); // returns 'string'
```
## Проверка ложных значений в массиве
```js
const myArray = [null, false, 'Hello', undefined, 0];

// filter falsy values
const filtered = myArray.filter(Boolean);
console.log(filtered); // returns ['Hello']

// check if at least one value is truthy
const anyTruthy = myArray.some(Boolean);
console.log(anyTruthy); // returns true

// check if all values are truthy
const allTruthy = myArray.every(Boolean);
console.log(allTruthy); // returns false
```
## Уменьшение уровня вложенности в массиве массивов
С помощью метода Array.prototype.flat можно создать единый массив, поднимая его содержимое на уровень родительского:
```js
const myArray = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]];

const flattedArray = myArray.flat(); 
// returns [ { id: 1 }, { id: 2 }, { id: 3 } ]
```
Также можно определить уровень глубины массива, для этого нужно передать в метод соответствующий параметр:
```js
const arr = [0, 1, 2, [[[3, 4]]]];

console.log(arr.flat(2)); // returns [0, 1, 2, [3,4]]
```
## Получение значения cookie браузера
```js
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"
```
## Преобразование RGB в HEX
```js
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(0, 51, 255); 
// Result: #0033ff
```
## Копирование в буфер обмена
```js
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard("Hello World");
```
## Проверка подлинности даты
```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("December 17, 1995 03:24:00");
// Result: true
```
## Определение дня в году
```js
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());
// Result: 272
```
## Сделать первую букву в строке заглавной
```js
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("follow for more")
// Result: Follow for more
```
##Определить количество дней между двумя датами
```
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Result: 366
```
## Очистка cookies
```js
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```
## Генерация случайного HEX-кода
```js
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());
// Result: #92b008
```
## Удаление дубликатов из массива
```js
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]
```
## Получение параметров запроса из URL
```js
const getParameters = (URL) => {
  URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
  return JSON.stringify(URL);
};
getParameters(window.location)
// Result: { search : "easy", page : 3 }
```
## Регистрация времени в формате hour::minutes::seconds
```js
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Result: "17:30:00"
```
## Четное/нечетное число
```js
const isEven = num => num % 2 === 0;
console.log(isEven(2)); 
// Result: True
```
## Получение среднего значения аргументов
```js
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
// Result: 2.5
```
## Прокрутка страницы до конкретного места
```js
const goToTop = () => window.scrollTo(0, 0);
goToTop();
```
## Реверс строки
```js
const reverse = str => str.split('').reverse().join('');
reverse('hello world');     
// Result: 'dlrow olleh'
```
## Проверить, пуст ли массив
```js
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]);
// Result: true
```
## Получить выделенный текст
```js
const getSelectedText = () => window.getSelection().toString();
getSelectedText();
```
## Перемешивание массива
```js
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]
```
## Узнать, включен ли у пользователя темный режим
```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode) // Result: True or False
```
## Snippets
```js
Check if a variable is an array
Array.isArray(variable);

Merge two arrays
const newArray = array1.concat(array2);

Remove duplicates from an array:
const uniqueArray = [...new Set(array)];

Sort an array in ascending order:
array.sort((a, b) => a - b);

Reverse an array:
array.reverse();

Convert string to number:
const number = parseInt(string);

Generate a random number between two values:
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

Check if a string contains a substring:
string.includes(substring);

Get the length of an object:
Object.keys(object).length;

Convert object to array:
const array = Object.entries(object);

Check if an object is empty:
Object.keys(object).length === 0 && object.constructor === Object

Get current URL:
const currentUrl = window.location.href;

Redirect to a new URL:
window.location.replace(url);

Set a cookie:
document.cookie = "name=value; expires=date; path=path; domain=domain; secure";

Get a cookie:
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

Check if a cookie exists:
document.cookie.split(';').some((item) => item.trim().startsWith('name='))

Remove a cookie:
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=path; domain=domain; secure";

Get the current viewport dimensions:
const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

Copy text to clipboard:
navigator.clipboard.writeText(text);
```
## 
```js
```
