const createMetrics = (text) => {
    const objectMetrics = {};          //total object we are returning
    const words = [];

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's','t', 'v', 'w', 'x', 'y', 'z'];

    let letters = 0;
    let nonLetters = 0;
    let vowelsNumber = 0;
    let consenentsNumber = 0;
    let wordString = '';

    for(let i = 0; i<= text.length; i++){
        const textLetter = text.charAt(i).toLowerCase();

        if(alphabet.includes(textLetter)) {    //sees if its a letter
            letters = letters + 1;
            wordString += textLetter;    //concatinates the string with the current letter
        } else {
            nonLetters = nonLetters + 1;     //if its not a letter it adds to non letter
            words.push(wordString);         //pushes the real word to the array
            wordString = '';                //if its not a word it just resets wordstring
        }


        vowels.forEach(value => {              // loops through vowels and adds 1 if its a value
            if(textLetter === value ) {
                vowelsNumber = vowelsNumber + 1;
            }
        });

        consonants.forEach(value => {              // loops through constents and if its a consonant adds 1
            if(textLetter === value ) {
                consenentsNumber = consenentsNumber + 1;
            }
        });



    }

    const totalWords = words.filter(value => {         //filters the words array for just words
        return value !== '';
    });

    const uniqueWords = totalWords.filter((value, index) => {
        return index === totalWords.indexOf(value);         //this checks the new filtered totalwords for the correct index of each word, if duplicate, it doesnt find it
    });

    const longWords = totalWords.filter(value => {
        return value.length >= 6;
    });

    objectMetrics["totalLetters"] = letters;
    objectMetrics["totalNonLetters"] = nonLetters - 1;
    objectMetrics["totalVowels"] = vowelsNumber;
    objectMetrics["totalConsonants"] = consenentsNumber;
    objectMetrics["totalWords"] = totalWords.length;
    objectMetrics["uniqueWords"] = uniqueWords.length;
    objectMetrics["longWords"] = longWords.length;



 //   console.log(uniqueWords);
 //   console.log(totalWords);
 //   console.log(longWords)
    return console.log(objectMetrics);

}

createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23");
//createMetrics("\nI! saw Susie 17384 sitting $$in a shoe shine \n \n \n \nshop. Where she\t sits she shines, 1and where she\t shines 456she sits&^&%$#\n.");

//REMEMBER TO CHECK FOR ERRORS




//{
//     totalLetters: total number of letter characters in the text,
//     totalNonLetters: total number of non-letters in the text,
//     totalVowels: total number of vowels in the text (not counting y),
//     totalConsonants: total number of consonants in the text (counting y),
//     totalWords: total number of words in the text; a word is defined as any sequence of letters broken by any not-letter. For example, the phrase to-do is two words; a word does not start until a letter appears,
//     uniqueWords: total number of unique words that appear in the lowercased text,
//     longWords: number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
//     averageWordLength: the average number of letters in a word in the text; this is counting the individual words, not unique words,
//     wordOccurrences: a dictionary of each word and how many times each word occurs in the text.
//}



module.exports = {
    createMetrics,
}