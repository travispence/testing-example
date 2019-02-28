const { expect } = require('chai');
const  { high, highReduce, createAlpabetScoreMap }  = require('./index.js')
const assert = require('assert');
 
describe('high()', function() {
    const scoreMap = createAlpabetScoreMap();
    
    const inputs = [
        { text: 'man i need a taxi up to ubud', answer: 'taxi' },
        { text: 'what time are we climbing up the volcano', answer: 'volcano' },
        { text: 'take me to semynak', answer: 'semynak' },
        { text: 'massage yes massage yes massage', answer: 'massage' },
        { text:  'take two bintang and a dance please', answer: 'bintang' }
    ]

    it('should be defined and a function', function() {
        assert(high);
        expect(high).to.be.a('function')
    })
  
    it('should only throw an error if either argument is undefined', function() {
        
        const  with0 = high;
        const with1 = high.bind(null, inputs[0].text);
        const withBoth = high.bind(null, inputs[0].text, scoreMap)
       
        expect(with0).to.throw(Error, 'Missing arguments');
        expect(with1).to.throw(Error, 'Missing arguments');
        expect(withBoth).not.to.throw();
    })

    it('should return the word with the highest value', function() {
        
        inputs.forEach(input => {
            const response = high(input.text, scoreMap);
            expect(response.word).to.equal(input.answer)
        })
    });
});
  
describe('highReduce()', function() {
    const map = createAlpabetScoreMap();
    const inputs = [
        { text: 'man i need a taxi up to ubud', answer: 'taxi' },
        { text: 'what time are we climbing up the volcano', answer: 'volcano' },
        { text: 'take me to semynak', answer: 'semynak' },
        { text: 'massage yes massage yes massage', answer: 'massage' },
        { text:  'take two bintang and a dance please', answer: 'bintang' }
    ]

    it('should be defined and a function', function() {
        assert(highReduce);
        expect(highReduce).to.be.a('function')
    })

    it('should return a data object with the keys "text" and "score"', function() {
        
        let word = highReduce(inputs[0].text, map);
        const keys = Object.keys(word);

        expect(word).to.be.a('object')
        expect(keys).to.have.members(['text', 'score'])

    })

    it('should return text of the word with the highest value', function() {
        inputs.forEach(input => {
            let word = highReduce(input.text, map);
            expect(word.text).to.equal(input.answer)
        })
    });
});

describe('createAlphabetScoreMap()', function() {
    
    const response = createAlpabetScoreMap();
    const keys = Object.keys(response); 

    it('should return an object with 26 keys', function() {
        expect(response).to.be.an('object');
        expect(keys.length).to.eq(26);
        
    })
    it('each key should have a numeric value associated with it', function() {
        keys.forEach(key => {
            expect(response[key]).to.be.a('number');
        })
    })
});
