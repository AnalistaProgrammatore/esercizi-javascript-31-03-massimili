class FunzioneEstesa extends Function {
    defer(ms) {
        setTimeout(() => {
            console.log("ciao in ritardo di " + ms + " millisecondi")
        }, ms);
    }
}

const ritarda = new FunzioneEstesa()
ritarda.defer(3000)

