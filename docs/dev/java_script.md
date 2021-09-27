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
