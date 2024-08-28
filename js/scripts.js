// Snack 1

const firstWord = prompt('Inserisci una parola:');
console.log(firstWord);

const secondWord = prompt('Inserisci una parola:');
console.log(secondWord);

function checkLength (firstword, secondWord) {
    if (firstWord.length == secondWord.length){
        return true;
    }
    else{
        return false;
    }
}

if (checkLength(firstWord, secondWord)){
    console.log(firstWord, '-', secondWord);
}
else if (firstWord.length > secondWord.length){
    console.log(firstWord);
}
else{
    console.log(secondWord);
}