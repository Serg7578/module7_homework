// Задание 2
const propName = (str, obj) => {
    return str in obj ? true : false
}
const pers = {
    name: 'Ivan',
    city: 'Moscow',
    age: 25,
    profession: 'Engineer',
}
console.log(propName('profession', pers))