//Задание 4

function Instruments(type) {
    this.type = type;
    this.location = 'дом'
}
Instruments.prototype.getLocation = function (location) {
    console.log(`${this.type} расположен(а) ${this.location}a`)
}
function Electricinstruments(type, on, power) {
    this.type = type;
    this.on = on;
    this.power = power;
}
Electricinstruments.prototype = new Instruments()
Electricinstruments.prototype.getInfo = function () {
    console.log(`${this.type} мощностью ${this.power} Вт.`);
}
Electricinstruments.prototype.getOn = function () {
    console.log(`${this.type}  ${this.on}`);
}

const lamp = new Electricinstruments('Лампа')
lamp.power = 100
lamp.on = 'выключена из розетки'

const computer = new Electricinstruments('Компьютер', 'включён', 400)
computer.sizeMonitor = 19
computer.on = 'включен в розетку'
Electricinstruments.prototype.size = function () {
    console.log(`Монитор компьютера ${this.sizeMonitor} дюймов.`);
}
function sumPower() {
    console.log(`Суммарная мощность приборов ${lamp.power + computer.power} Вт`)
}
lamp.getInfo()
computer.getInfo()
sumPower()
lamp.getLocation()
computer.size()
lamp.getOn()
computer.getOn()