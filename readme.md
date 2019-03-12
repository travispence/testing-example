Example of Unit Tests 
==========

### About

This is a simple project to showcase writing unit tests with mocha and chai. In an interview I was tasked with creating writing a function `high()` that took a string of words and with a score assigned for each letter of the alphabet would return the word that has the highest value. If there are 2 or more words with the same score, the first word should be returned. 

The function `high()` was my original  attempt and `highReduce()` is my second attempt that utilizes the Array `reduce()` method.

3 functions are exported in the `index.js` module.

- `createAlphabetScoreMap()` - Creates a Lookup in the style { letter: score (int) }
- `high(str, scoreMap)` - returns the word in sentence `str` that has the highest score.  
- `highReduce(str, scoreMap)` - Another implementation of high() using reduce() to build the result.


#### Running Instructions

```
npm install
npm run test
```

#### Expected Output

![Testing Output](https://github.com/travispence/testing-example/blob/master/output.png?raw=true)
