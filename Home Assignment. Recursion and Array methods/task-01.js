// task #1

function getCountRepeatedWords(words) {
    let wordsWithCount = [];

    words.forEach((word) => {
        let count = 0;

        words.forEach((item) => {
            if (word === item) {
                count++;
            }
        });

        wordsWithCount.push({ [word]: count });
    });

    return wordsWithCount;
}

function getUnique(duplicateArray) {
    let uniqWordsWithCount = [];

    duplicateArray.forEach((item) => {
        let key = Object.keys(item)[0];

        if (!uniqWordsWithCount.find((word) => word[key])) {
            uniqWordsWithCount.push(item);
        }
    });

    return uniqWordsWithCount;
}

function getObjectFromArray(arrayOfObjects) {
    let obj = {};

    arrayOfObjects.forEach((item) => {
        let key = Object.keys(item)[0];

        obj[key] = item[key];
    });

    return obj;
}

const words = ['Web Developer', 'Refocus', 'Web Developer', 'Web Developer', 'Refocus', 'Awesome'];
const countRepeatedWords = getCountRepeatedWords(words);
const uniqWordsWithCount = getUnique(countRepeatedWords);
const output = getObjectFromArray(uniqWordsWithCount);

console.log(output);
