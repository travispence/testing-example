readMe
==========

### About

This is a simple project to showcase writing unit tests with mocha and chai.

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
