# Vowel Letter Distance Finder Thing

*solving only the most real-world problems*

Given a string input of arbitrary length, write a function that returns an array of integers representing how many letters each letter is away from its nearest vowel. 

The input will ONLY contain lowercase letters from the Roman alphabet (i.e. a-z). 

Vowels are `a, e, i, o, u`. 

For example, the input `"abcd"` would return `[0,1,2,1]` as `"a"` is `0` letters from its nearest vowel, `"a"`; `"b"` is `1` letter from its nearest vowel, `"a"`, etc. `"d"` is only one letter from `"e"`, so it would be `1`. 

Do not calculate the values "over the top", i.e. the letter `"z"` should return the int `5` and not `1`

Check your answers with `yarn test`. 

### *BONUS* 
- Code it as functionally as possible. 
- Try doing things in interesting ways (...do I have to write out the alphabet?), 
- Use some obscure syntax/language feature that you've never used before. 
- Flair it up. 
- If you think it's too easy, code golf it.

### **DOUBLE BONUS** 
calculate values over the top (`"z" => 1`, `"y" => 2`, etc)
