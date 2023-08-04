"use strict";

// class Rabbit {}
// let rabbit = new Rabbit();

// alert( rabbit instanceof Rabbit );



// function Rabbit() {}

// alert( new Rabbit() instanceof Rabbit );


// let arr = [1, 2, 3];
// alert( arr instanceof Array );
// alert( arr instanceof Object );



// class Animal {
//     static [Symbol.hasInstance](obj) {
//         if (obj.canEat) return true;
//     }
// }

// let obj = { canEat: 'dd' };

// alert(obj instanceof Animal)



// let object = Object.prototype.toString;

// let arr = [];

// alert( object.call(arr) );




// let s = Object.prototype.toString;

// alert( s.call(123) );
// alert( s.call(null) )
// alert( s.call(alert) );



// let user = {
//     [Symbol.toStringTag]: "Nice"
// };

// alert( {}.toString.call(user) );



// function A() {}
// function B() {}

// A.prototype = B.prototype = {};

// let a = new A();

// alert( a instanceof B );



