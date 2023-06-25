// Задание 1
const prop = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            console.log(key)
    }
}
const pers = {
    name: 'Ivan',
    city: 'Moscow',
    age: 25,
    profession: 'Engineer',
}
const student = Object.create(pers)
student.name = 'Alex'
prop(student)