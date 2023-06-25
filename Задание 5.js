// Задание 5

class Instruments {
    constructor(type) {
        this.type = type;
        this.location = 'дом'
    }
    getLocation() {
        console.log(`${this.type} расположен(а) ${this.location}a`)
    }
}

class Electricinstruments extends Instruments {
    constructor(type, on, power) {
        super(type);
        this.on = on;
        this.power = power;
    }
    getInfo = function () {
        console.log(`${this.type} мощностью ${this.power} Вт.`)
    };
    getOn = function () {
        console.log(`${this.type}  ${this.on}`)
    };
    size = function () {
        console.log(`Монитор компьютера ${this.sizeMonitor} дюймов.`);
    }
}

function sumPower() {
    console.log(`Суммарная мощность приборов ${lamp.power + computer.power} Вт`)
}

const lamp = new Electricinstruments('Лампа')
lamp.power = 100
lamp.on = 'выключена из розетки'

const computer = new Electricinstruments('Компьютер')
computer.power = 400
computer.on = 'выключен из розетки'
computer.sizeMonitor = 19

lamp.getInfo()
computer.getInfo()
sumPower()
lamp.getLocation()
computer.size()
lamp.getOn()
computer.getOn()
