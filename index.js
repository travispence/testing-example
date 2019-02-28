/**
 * Helper Function to generate a simple key-value datastructure. 
 * Where a key is a single letter of the alphabet and the value is a score based on 
 * it's position, starting from 1.
 *  
 * @returns {Object} a Key-Value lookup map. 
 */
const createAlpabetScoreMap = function() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    // Approach 1
    // const scoreMap = {};
    // alphabet.split('').forEach(function(value, idx) {
    //     scoreMap[value] = idx +1;
    //  })

    return alphabet.split('')
        .map((value, idx) => {
            return {key: value, value: idx + 1}
        })
        .reduce((prev, next) => {
            prev[next.key] = next.value
            return prev;
        },{});   
}

/**
 * 
 * @param {String} str Sentence containing 1 or more words seperated by /\s/
 * @param {Object} scoreMap a letter-score map.
 * 
 * @returns {String} The text representing the highest scoring word 
 */
function high(str, scoreMap) {
    if(!str || !scoreMap) {
        throw new Error('Missing arguments');
    }

    const words = str.split(/\s/);
    const wordAndScore = words.map(function(word) {
         let score = 0;
         word.split('').forEach((letter) => {
            score +=  scoreMap[letter]
         });
         return { score, word }
     });
    
    // Primitives type variables that will be changed need to use let instead of const 
    let score = 0;
    let word = '';
    wordAndScore.forEach(function(item) {
         if (item.score > score) {
             score = item.score;
             word = item.word;
         }
    })
    // ES6 Object Literals
    return {word, score};
}

/**
 * This implemtation has the same inputs and outputs as high(). It demonstrates
 * using the function es6 reduce()
 * 
 * @param {String} str Sentence containing 1 or more words seperated by /\s/
 * @param {Object} scoreMap a letter-score map.
 * 
 * @returns {String} The text representing the highest scoring word 
 */
function highReduce(str, scoreMap) {
    if(!str || !scoreMap) {
        throw new Error('Missing arguments');
    }

    return str.split(/\s/)
            .map(word => {
                const score = word.split('').map(letter => {
                    return scoreMap[letter];
                }).reduce((acc, score) => {
                    return acc + score;
                }, 0);
                return { text: word, score: score }
            })
            .reduce((prev, next) => {
                    if (next.score > prev.score) {
                        prev.text = next.text;
                        prev.score  = next.score;
                    }
                    return prev;
            },
            { text: '', score: 0})
}

module.exports = {
     high,
     highReduce,
     createAlpabetScoreMap
 }