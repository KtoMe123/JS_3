"use strict";


// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}`)
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stop`);
//     }
// }

// let animal = new Animal("Dog");

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }

//     hide() {
//         alert(`${this.name} прячется`);
//     }

//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit('white rabbit', 10);

// alert(rabbit.name)
// alert(rabbit.earLength)
// rabbit.run(5);
// rabbit.stop()



// function f(val) {
//     return class {
//         sayHi() {
//             alert(val)
//         }
//     };
// }

// class User extends f("hi"){}

// new User().sayHi()




// class Rabbit extends Animal {
//     stop() {
//         alert("rab stop");
//     }
// }
// new Rabbit().stop()




// class Animal {
//     showName() {
//         alert("animal");
//     }

//     constructor() {
//         this.showName()
//     }
// }

// class Rabbit extends Animal {
//     showName() {
//         alert("rabbit");
//     }
// }

// new Animal();
// new Rabbit()




// let animal = {
//     name: "animal",

//     eat() {
//         alert(`${this.name} eat`);
//     }
// }

// let rabbit = {
//     name: "qwe",
//     __proto__: animal,

//     eat() {
//         super.eat();
//     }
// }


// let longEar = {
//     name: "ggg",

//     eat() {
//         super.eat();
//     }
// }

// animal.eat()
// rabbit.eat()
// longEar.eat()


// let animal = {
//     sayHi() {
//         alert("qq")
//     }
// };

// let rabbit = {
//     __proto__: animal,

//     sayHi() {
//         super.sayHi()
//     }
// };

// let plant = {
//     sayHi() {
//         alert("ww")
//     }
// };

// let tree = {
//     __proto__: plant,

//     // sayHi: rabbit.sayHi
//     sayHi() {
//         super.sayHi()
//     }
// };

// tree.sayHi()



// let animal = {
//     // eat() {
//     eat: function() {
//         alert("sas")
//     }
// };

// let rabbit = {
//     __proto__: animal,

//     // eat() {
//     eat: function() {
//         super.eat();
//     }
// }

// rabbit.eat()




// class Animal {

//     constructor(name) {
//         this.name = name;
//     }
// }


// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.create = Date.now();
//     }
// }

// let rabbit = new Rabbit("krol");
// alert(rabbit.name)



class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if ( hours < 10 ) hours = '0' + hours;

        let mins = date.getMinutes();
        if ( mins < 10 ) mins = '0' + mins;

        let secs = date.getSeconds();
        if ( secs < 10 ) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    start() {
        this.render();
        this.timer =setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer)
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start()


