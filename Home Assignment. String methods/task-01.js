function findFirstUppercaseLetter(sentence) {
    let sentenceInArray = sentence.split('');
    let sentenceInArrayLength = sentenceInArray.length;
    let firstUppercaseLetter = null;

    for (let i = 0; i < sentenceInArrayLength; i++) {
        let currentLetter = sentenceInArray[i].toUpperCase().trim().replace(',', ' ');

        if (sentenceInArray[i] === currentLetter) {
            firstUppercaseLetter = sentenceInArray[i];
            break;
        }
    }

    if (firstUppercaseLetter === null) {
        return 'No uppercase letter found';
    }

    return firstUppercaseLetter;
}

const statement = 'there is a storm coming to the East of the Philippines';
const output = findFirstUppercaseLetter(statement);

console.log(`The first uppercase letter in the sentence is: ${output}`);
