"use strict";


// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name)
//     }
// }

// let user = new User("Ivan")
// user.sayHi()

// let User = class MyClass {
//     sayHi() {
//         alert(MyClass)
//     }
// };

// new User().sayHi();



// function makeClass(pharse) {
//     return class {
//         sayHi() {
//             alert(pharse);
//         };
//     };
// }

// let User = makeClass("Hello");

// new User().sayHi();



// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if ( value.length < 4 ) {
//             alert("Имя слишком короткое.");
//             return;
//         } 
//         this._name = value;
//     }
// }

// let user = new User("Ilya");
// alert(user.name);

// user = new User("");




// class User {

//     ['say' + 'Hi']() {
//         alert('hi')
//     }
// }

// new User().sayHi();




// class User {
//     name = "Anonym";

//     sayHi() {
//         alert(`hi ${this.name}`)
//     }
// }

// new User().sayHi();




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

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000)
    }
}


let clock = new Clock({template: "h:m:s"});

clock.start()