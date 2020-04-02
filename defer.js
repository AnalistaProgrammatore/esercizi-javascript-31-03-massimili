class FunzioneEstesa extends Function {
    defer(ms) {
        // return setTimeout(console.log("Ciao"), ms);
        setTimeout(() => {
            console.log("ciao in ritardo di " + ms + " millisecondi")
        }, ms);
    }
}

const ritarda = new FunzioneEstesa()
ritarda.defer(3000)

