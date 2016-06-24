
class Guts
    constructor: () ->

    process: (message) ->
        return "You said: "+message

module.exports = new Guts()
