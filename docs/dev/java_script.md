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
