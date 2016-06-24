should = require('should')
assert = require('assert')
builder = require('botbuilder')

guts = require('../guts')

describe 'Echo Bot', () ->
    it 'should talk smack', (done) ->
        reply = guts.process('hello')
        assert(reply == 'You said: hello')
        done()
