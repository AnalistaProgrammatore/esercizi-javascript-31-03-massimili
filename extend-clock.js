/**
* Copia e incolla il codice di clock.js come prima cosa per avere accesso alla classe Clock sviluppata 
* nell'esercizio 1
*/
class Clock {
    render() {
        let date = new Date()
        let hours = date.getHours()
        if (hours < 10) hours = '0' + hours
        let mins = date.getMinutes()
        if (mins < 10) mins = '0' + mins
        let secs = date.getSeconds()
        if (secs < 10) secs = '0' + secs
        let output = hours + ":" + mins + ":" + secs
        console.log(output)
    }
    start() {
        setInterval(clock.render, 1000)
    }
}
class ExtendedClock extends Clock {
    constructor(precision = 1000) {
        super()
        this.precision = precision
    }
    startEsteso() {
        setInterval(clockEsteso.render, this.precision)
    }
}
let clock = new Clock()
let clockEsteso = new ExtendedClock(5000)
clockEsteso.startEsteso()
