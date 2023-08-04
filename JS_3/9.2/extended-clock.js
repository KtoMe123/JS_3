"use strict";

class ExtendedClock extends Clock{

    constructor({template, precision = 1000}) {
        super( {template} );
        this.precision = precision
    }

    start() {
        super.render();
        this.timer = setInterval(() => this.render(), this.precision)
    }
}

let cl = new ExtendedClock({template: 'h:m:s'})
cl.start();