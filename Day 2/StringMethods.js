const string = 'JavaScript';

//* 1. Length
const length = string.length;
console.log('length');
console.log(length);

const lastIndex = length - 1;
console.log('lastIndex');
console.log(lastIndex);

//* 2. Select Character
const firstLetter = string[0];
console.log('First Character');
console.log(firstLetter);

const lastLetter = string[lastIndex];
console.log('Last Character');
console.log(lastLetter);

//* 3. toUpperCase()
const upperCase = string.toUpperCase();
console.log(upperCase);

const lowerCase = string.toLowerCase();
console.log(lowerCase);

//* 4. substr()
//` Takes in 2 arguments; first one for the starting index and the second one for the number of characters to slice
//! NOTE: This is deprecated
const substr = string.substr(4, 7);
console.log('substr()');
console.log(substr);

//* 5. substring()
//` Takes in 2 arguments; first one for the starting index and the second one for the stop index. The character at the stop index is not included
const substring = string.substring(4, 10);
console.log('substring()');
console.log(substring);
console.log(string.substring(0, 4));

//* 6. split()
//` Splits the string into an array at the specified character
console.log('split()');
const splitString = string.split('a');
console.log(splitString);

//* 7. replace()
//` Replaces the first instance of the arg1 with arg2
const newString = string.replace('Java', 'Python');
console.log('replace()');
console.log(newString);

//* 8. trim()
//` Removes whitespaces at the start and end of the string
const stringWithWhiteSpaces = '       Something    ';
console.log('trim()');
console.log(stringWithWhiteSpaces.trim());
console.log(stringWithWhiteSpaces);

//* 9. includes()
//` Returns a boolean if the string contains the subsbstring which is passed
console.log('includes()');
string.includes(substring)
    ? console.log(`${string} contains ${substring}`)
    : console.log(`${string} doesn't contain ${substring}`);

//* charAt()
//` Returns the character at the specified index
console.log('charAt()');
console.log(string.charAt(4));

//* charCodeAt()
//` Returns the ASCII value of the character at the specified index
console.log('charCodeAt()');
console.log(string.charCodeAt(1));

//* indexOf()
//` Returns the first index of the substring which is passed
// NOTE: Returns '-1' if the substring isn't present
console.log('indexOf()');
console.log(string.indexOf('a'));

//* lastIndexOf()
//` Returns the last index of the substring which is passed
// NOTE: Returns '-1' if the substring isn't present
console.log('lastIndexOf()');
console.log(string.lastIndexOf('a'));

//* concat()
//` It takes many substrings and joins them
console.log('concat()');
console.log(string.concat(' is Weird'));

//* startsWith()
//` Returns a boolean if the string starts with the substring which is passed
console.log('startsWith()');
console.log(string.startsWith('Java'));

//* endsWith()
//` Returns a boolean if the string ends with the substring which is passed
console.log('endsWith()');
console.log(string.endsWith('Script'));

//* repeat()
//` Repeats the string x number of times
console.log('repeat()');
console.log(string.repeat(5));

//! These Notes Don't Include Regex Methods
