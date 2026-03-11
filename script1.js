
let sentence = document.getElementById('sentence');
let sentCount = document.getElementById('sent-count');
let Execute = document.getElementById('Execute');
let words = document.getElementById('words');
let count = document.getElementById('count');


Execute.addEventListener('click', function() {
 
    let sentenceText = sentence.value;
    
   
    words.innerHTML = '';


    if (sentenceText.trim() === '') {
        sentCount.value = '0 words';
        count.innerHTML = '';
        return;
    }
    
    let wordArray = sentenceText.split(' ');
    
    let validWords = [];
    
    for (let i = 0; i < wordArray.length; i++) {
        let currentWord = wordArray[i];
        let hasLetterOrNumber = false;
        
            
        for (let j = 0; j < currentWord.length; j++) {
            let char = currentWord[j];
            if ((char >= 'a' && char <= 'z') || 
                (char >= 'A' && char <= 'Z') || 
                (char >= '0' && char <= '9')) {
                hasLetterOrNumber = true;
                break;
            }
        }
        
        if (hasLetterOrNumber) {
            validWords.push(currentWord);
        }
    }
    
   
    sentCount.value = validWords.length + ' words';
    
   
    for (let i = 0; i < validWords.length; i++) {
        let wordSpan = document.createElement('span');
        wordSpan.className = 'underlined-word';
        wordSpan.textContent = validWords[i];
        words.appendChild(wordSpan);
    }
    
   
    count.innerHTML = 'Number of words: ' + validWords.length;
});