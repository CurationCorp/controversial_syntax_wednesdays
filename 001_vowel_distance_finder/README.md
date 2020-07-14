# Vowel Finder

Given a string input of arbitrary length, return an array of integers representing how many letters each letter is away from its nearest vowel. 

The input will ONLY contain lowercase letters from the Roman alphabet (i.e. a-z). 

Vowels are `a, e, i, o, u`. 

For example, the input `abcd` would return `[0,1,2,1]` as `a` is `0` letters from its nearest vowel, `a`; `b` is one letter from its nearest vowel, `a`, etc. `d` is only one letter from `e`, so it would be 1. 

Do not calculate the values "over the top", i.e. the letter `z` should return the int `5` and not `1`

### *BONUS* 
code it as functionally as possible. 

### **DOUBLE BONUS** 
calculate values over the top (`z => 1`, `y => 2`, etc)