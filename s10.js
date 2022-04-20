function deleteWord(str, word){
    let newStr=str.replace(word,"");
    console.log(newStr);
}
deleteWord("The quick brown fox jumps over the lazy dog", "the");