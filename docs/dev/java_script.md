# JavaScript
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
