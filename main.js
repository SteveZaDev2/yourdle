let protoWordsArray = [
   ]

const backgroundImagesPortrait=[
  "https://images.unsplash.com/photo-1553114836-026cecec9778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F7%2F5%2F2%2F1205826-download-hd-wallpaper-for-mobile-1080x1920-phone.jpg&f=1&nofb=1&ipt=0f48b165169fc218b7d8b97e67e9af5252f24c633ea559b983689b6e12ae6368&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5Eddf-iZqa_MN20nbwtGiwHaNK%26pid%3DApi&f=1&ipt=e9a94fc1d40cd71c607f25e392e4dd43f44b2b4587ff4a20a7536657371aaefd&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DgWmLmqIFmZq0hIjdsFIngHaNK%26pid%3DApi&f=1&ipt=3abac1e88f83e0a9d81250c5cc0bda9dba4544f0412c75931041b79889040243&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hCfUGUsPp7K3nz5UDJIN9gHaNL%26pid%3DApi&f=1&ipt=670930a20968989d17c8dcec1feae79e5e0b0728aa47f9dbdd135bce667dfed6&ipo=images"
]

const backgroundImagesLandscape=[
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XGH64ptpzA7Wkx1X92LJYQHaEK%26pid%3DApi&f=1&ipt=208ed7a56cd2e7e58bf1e4d01ef3d008bfcebcfaedc947e710e3d21a030abf44&ipo=images",
  "https://wallpapercave.com/dwp1x/wp3137839.jpg",
  "https://wallpapercave.com/dwp1x/wp3137841.jpg",
  "https://wallpapercave.com/dwp1x/wp2860302.jpg",
  "https://wallpapercave.com/dwp1x/wp3137994.jpg",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._CSC4ivQBcOBLoOb3My4awHaEK%26pid%3DApi&f=1&ipt=c9ccf97c6abae469cb8c7525d2bde5c40414ecc636d18dce448cfadcaad9c05f&ipo=images"
]



const audios=[ {name: "default",
                link: "./auds/bgmusic.mp3",
                vol: .105
              },
              {name: "Dream",
              link: "./auds/dream.mp3",
              vol: .25
            },
                {name: "Classical Gas",
                link: "./auds/classicalgas.m4a",
                vol: .25
              }
             ]

let helpText = `YOURDLE accepts comma delimited input that YOU provide and turns it into YOUR own personal Wordle game. Start the process by clicking the "+" on the top menu. Type in a Category name that describes your items. Then go to the large input field and begin typing each item. Letters and spaces up to a max of 35 are the only valid characters. A comma indicates the end of your item and must immediately be followed by your next item, no space after the comma. Your last item should not be followed by a comma. Another method to input your items is to first create the comma seperated items in a text editor such as Notepad, copy all the items, and then paste them into the input field. You can then share that file with friends. Once all your input has been entered, select the submit button. A window will then display all of the items you just entered along with the length of each. Select the "+" menu item again to add another category. Once you have added all that you wish, refresh the page. Your categories will now be avaiable to you to choose. 
NOTE - The items that you create are stored within an area specific to your device and browser. If you create items while in Firefox, those will not be available in Chrome. If you create the items on your desktop, your mobile device will not be aware of them. Sharing them across browsers and devices becomes easy if you create your items in a text editor. If you dont have access to a text editor on your mobile device, you can copy then paste the items into an email that you mail to yourself.              
`

let viewHelpText = `Welcome to YOURDLE! Create your own Wordle universe with words that you choose! Graduating? Create a list of your fellow grads, paste them into this site, then have fun uncovering their names in Wordle type play. Create the list in a simple app like Notepad and share the list with friends. Do the same with a list of guests at an anniverary or wedding party. If a teacher, why not set up a list of vocabulary words for your students to learn. Please read the help(?) for detailed info on how to create and save such lists.`
let sound = true;
let soundPlayer = "";
let randomAudioIdx = Math.floor(Math.random()*audios.length)
soundPlayer = new Audio (audios[randomAudioIdx].link);
let audioName = audios[randomAudioIdx].name;
soundPlayer.loop = true;
soundPlayer.volume = audios[randomAudioIdx].vol
soundPlayer.currentTime = 1;
const maxLettersNarrowScreen = 21;
let chameleon = false;
let validate = false;
DANCE_ANIMATION_DURATION = 1500;
MAX_HISTORY_ITEMS = 500;

// Retrieve the JSON string
const userStr = localStorage.getItem('catObjectY');
console.log("userStr = " + userStr)
if (userStr){
  // Parse JSON string to object
  const userArr = JSON.parse(userStr);
  
  console.log(userArr); 
  console.log(userArr[0].cat); 
  console.log(userArr[0].items[0]); 
 // protoWordsArray.push(userObj);
 for (i=0; i<userArr.length; i++){
  protoWordsArray.push(userArr[i]);

 }
}






let wordFound = true;
let fullScreen = false;
let wordsArray=[]
let keyboardClicks = false;

let playButtonEl = ""
const containerEl = document.getElementById('container')

// in local storage
let currentWordIndex = 0;
let guessedWordCount = 0;
let guessedWords = [[]]
let availableSpace = 1; 
// end local storage


let numofLetters = 5
let numofGuesses = 6
let wordle = ""
let gameInProgress = false;
let atLeastOneGuessMade = false;
let gameActive = true;
let freeSpaces = false;

let randomArray = 0;
let randomWordle = 0;
let revealLetterNum = 0;
const messageContainerEl = document.getElementById('message-container')

/*let categoryPreferences = [
  true, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false, false
];*/

let categoryPreferences = [
];

let resultsArray = []
let resultObj = {
  date: 0,
  wordle: "",
  guesses: 0
}


let createObj = {
  cat: "Testing",
  sel: false,
  parent: "",
  numOfItems: 0,
  items: []
  }


document.addEventListener("DOMContentLoaded", () => {
    initPreferencesModal();
    initCategories();
    initHelpModal();
    initViewHelpModal();
    initStatsModal();
    initCreateModal();
    initCategoriesModal();
    initCategoriesModalBtn();
   
    initLook();
    


  // THIS WORKS IN CASE I WANT TO RANDOMIZE TILE COLORS 
  /*
    let r = document.querySelector(':root');
    let colorNum = Math.floor(Math.random()*120);
    let randomColor = "";
    randomColor =  "hsl(" + colorNum + ", 51%, 47%)"
    r.style.setProperty('--incorrectLetter', randomColor);
    
    colorNum = colorNum + 120;
    randomColor =  "hsl(" + colorNum + ", 51%, 47%)"
    r.style.setProperty('--correctLetter', randomColor);
    colorNum = colorNum + 120;

    randomColor =  "hsl(" + colorNum + ", 51%, 47%)"
    r.style.setProperty('--correctLetterInPlace', randomColor);*/
   
    playButtonEl = document.getElementById("start")
    randCatEl = document.getElementById("randcat")
   

    playButtonEl.addEventListener("click", ({ target }) => {
       letsPlay()
     })

     randCatEl.addEventListener("click", ({ target }) => {
       console.log("clicked on category display");
       if (gameInProgress){
        if (wordsArray){
        messageContainerEl.innerText = "Current category is " + wordsArray[randomArray].cat;
        }
      }
     })
    });




function letsPlay() {
  messageContainerEl.innerText = ""
  // Clear the classes of the keyboard that were set in any previous Wordle
   initClasses();

   playMusic();

// INIT
// 230223wordsArray=[]

currentWordIndex = 0;
guessedWordCount = 0;
revealLetterNum = 0;
guessedWords = [[]]
availableSpace = 1; 
numofLetters = 5
numofGuesses = 6
wordle = ""
gameInProgress = true;





  setColors();


// END OF INIT
  
//


  messageContainerEl.innerText = ""
  wordsArray = []
  for (i=0; i<protoWordsArray.length; i++){
    if (protoWordsArray[i].sel){
      if (protoWordsArray[i].parent != "parent"){
       wordsArray.push(protoWordsArray[i])
      }
    }
  }
  console.log("Checking wordsArray which is equal to " + wordsArray)
  if (wordsArray.length === 0){
    messageContainerEl.innerText = "Please select at least 1 category";
    return;
  }

  playButtonEl.style.display = "none";
  messageContainerEl.innerText = ""

  // LOOP THRU RANDOMLY SELECTED CATEGORIES UNTIL WE FIND ONE THAT HAS AN ACCEPTABLE ITEM
  let foundCategory = false;
  do {
    randomArray = Math.floor(Math.random()*wordsArray.length);
    if(wordsArray[randomArray].numOfItems > 0){
      foundCategory = true;
    }
  } while (!foundCategory)


  const randomArrayWork = window.localStorage.getItem("randomArrayY") || 0;
  if (randomArrayWork){
    randomArray = randomArrayWork;
  }

  
  
  randomWordle = Math.floor(Math.random()*(wordsArray[randomArray].items).length);
  // Loop thru words in the randomly chosen array of categories until a word that is not greater than maxCharacters is found or
  // 3500 times thru  
  /*
  let searchingForWord = true;
  let count = 0;
  do {
    randomWordle = Math.floor(Math.random()*(wordsArray[randomArray].items).length);
    console.log ("*within searchingForWord do loop - randomWordle = " + randomWordle )
    console.log ("*length of word is  = " + (wordsArray[randomArray].items[randomWordle]).length)
    count++;
 //   if ((wordsArray[randomArray].items[randomWordle]).length < Number(maxCharacters + 1)){
      if ((wordsArray[randomArray].items[randomWordle]).length < Number(maxCharacters) + 1 ){
      searchingForWord = false;
      console.log("1 set search to false")
    } else {
      if (count > 3500){
        console.log ("count > 3500")
        wordsArray[randomArray].items[randomWordle] = wordsArray[randomArray].items[randomWordle].slice(0, maxCharacters);
      console.log("2 set search to false")

        searchingForWord = false;
      }
    }
  }
  while (searchingForWord);*/
  
  console.log("randomArray = " + randomArray) 
  console.log("wordsArray category = " + wordsArray[randomArray].cat)
  console.log("randomWordle = " + randomWordle) 


  guessedWords = [[]]
  availableSpace = 1; 


 // calcLettersandGuesses();


  loadLocalStorage();

  //createSquares();

  


  

  function initClasses(){
  /*  let keys = document.getElementsByClassName('correct-letter-in-place');
    if (keys){
    keys.forEach(key => {
      key.classList.remove("correct-letter-in-place")  
    });
    }
*/
    const allElements = document.querySelectorAll('*');
    
allElements.forEach((element) => {
  element.classList.remove('correct-letter-in-place');
  element.classList.remove('correct-letter');
  element.classList.remove('incorrect-letter');
});



  }
 
 // createSquares();

//  loadLocalStorage();
  // Check to see if keyboard click event listener has already been set via the first game of the session  
  if (!keyboardClicks){
    console.log("about to call addKeyboard")
    addKeyboardClicks();
    document.addEventListener('keydown', function(event) {
      console.log ("key pressed was " + event.key)
      handleKeystroke(event.key)
      });
  }

  /* pinned off on 4/25
  guessedWords = [[]]
  availableSpace = 1; 
  */

  const keys = document.querySelectorAll('.keyboard-row button')


  function getCurrentWordArr() {
    console.log("entered getcurrentwordarr")
    const numberOfGuessedWords = guessedWords.length;
    console.log("guessed words = " + numberOfGuessedWords)

    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedLetters(letter){
    console.log("guessedwordsA = " + guessedWords)
    console.log("updateGuessedLetter letter = " + letter)
    console.log("availableSpace = " + availableSpace)
    const currentWordArr = getCurrentWordArr()
    console.log('current array = ' + currentWordArr)
    console.log("numofLetters = " + numofLetters )
    if (currentWordArr && currentWordArr.length < numofLetters){
      currentWordArr.push(letter)
      const availableSpaceEl = document.getElementById(availableSpace)
      availableSpace++;
      console.log("availableSpace = " + availableSpace)
      availableSpaceEl.textContent = letter;
    }
  }

  function getIndicesOfLetter(letter, arr){
    const indices = [];
    let idx = arr.indexOf(letter);
    while (idx != -1){
      indices.push(idx);
      idx = arr.indexOf(letter, idx+1);
    }
    return indices;
  } // END OF getIndicesOfLetter

  function getTileClass(letter, index, currentWordArr) {
    const isCorrectLetter = wordle
      .toUpperCase()
      .includes(letter.toUpperCase());
      if (!isCorrectLetter){
        return "incorrect-letter";
      }

      const letterInThatPosition = wordle.charAt(index);
      const isCorrectPosition = letter.toLowerCase() === letterInThatPosition.toLowerCase();
      if (isCorrectPosition){
        return "correct-letter-in-place";
      }

  
       const isGuessedMoreThanOnce =
       currentWordArr.filter((l) => l === letter).length > 1;

       if (!isGuessedMoreThanOnce) {
        return "correct-letter";
      }

      const existsMoreThanOnce = wordle.split("").filter((l) => l === letter).length > 1;

    // is guessed more than once and exists more than once
    if (existsMoreThanOnce) {
      return "correct-letter";
    }

    const hasBeenGuessedAlready = currentWordArr.indexOf(letter) < index;

    const indices = getIndicesOfLetter(letter, wordle.split(""));
    const otherIndices = indices.filter((i) => i !== index);
    const isGuessedCorrectlyLater = otherIndices.some(
      (i) => i > index && currentWordArr[i] === letter
    );

    if (!hasBeenGuessedAlready && !isGuessedCorrectlyLater) {
      return "correct-letter";
    }

    return "incorrect-letter";


} // END OF getTileClass


  function handleSubmitWord(){
    console.log("entered handlesubmitword ")
    const currentWordArr = getCurrentWordArr();
    const guessedWord = currentWordArr.join("");
    let word = guessedWord;
    console.log("guessedwords1 = " + guessedWords)
    if (guessedWord.length !== numofLetters){
      messageContainerEl.innerText = (`You entered ${currentWordArr.length} characters which is less than the ${numofLetters} needed`);
      return;
    }

    




if (validate) {
//  logic to place in handleword
const DICTIONARY_API_BASE_URL =
'https://api.dictionaryapi.dev/api/v2/entries/en/';
  fetch(DICTIONARY_API_BASE_URL + word)
  .then(response => {
      return response.json();
  })
  .then(word => {
      var singleWordDefinition = word[0].meanings[0].definitions[0].definition;
      console.log("SINGLE: " + singleWordDefinition);
      const currentWordArr = getCurrentWordArr();
    
     // const guessedWord = currentWordArr.join("");
        // XXXXXXXXXXXXXXXXXXXXXX
        window.navigator.vibrate(450);
        //flipTile();
        gameActive = true;
        atLeastOneGuessMade = true;
        let checkWordle = wordle;
        const guess = [];
        console.log("point 2 in  handleRest")
        currentWordArr.forEach(tile => {
          console.log("pushing letter onto guess array - letter = " + tile)
        //  guess.push({letter: tile, color: 'dontknow'});
          guess.push({letter: tile, color: 'incorrect-letter'});
        } )
    
        console.log("");
        console.log("");
        console.log("About to loop thru to look for Greys")
        guess.forEach(guess => {
          if (!checkWordle.includes(guess.letter.toUpperCase())){
            guess.color = 'incorrect-letter'
            console.log ("set grey overlay")
            }
        })
    
    
    
    
    
        console.log("About to loop thru to look for Greens")
        guess.forEach((guess, index) => {
          console.log("guess letter = " + guess.letter + "   wordle letter = " + wordle[index])
          if (guess.letter == wordle[index].toLowerCase()){
            guess.color = 'correct-letter-in-place'
       //     console.log("guess letter2 = " + guess.letter + "   wordle letter = " + wordle[index])
            console.log ("set green overlay")
            checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
            console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
            console.log (" ")
          }
        })
    
        console.log("COLORS AFTER GREEN LOGIC")
        guess.forEach(guess => {
          console.log("guess letter = " + guess.letter);
          console.log("guess color = " + guess.color);
        })
    
    
        console.log(" ");
        console.log(" ");
        console.log("About to loop thru to look for Yellows")
        guess.forEach(guess => {
          console.log("guess letter = " + guess.letter);
          if (checkWordle.includes(guess.letter.toUpperCase())){
            console.log ("guess.color before setting to yellow = " + guess.color)
            if (guess.color === "correct-letter-in-place"){
    
            } else {
            guess.color = 'correct-letter'
            console.log ("set yellow overlay")
            checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
            console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
            console.log (" ")
          }
          }
        })
    
    
    
    
    
      
        let result = guessedWord.toUpperCase();
    
        const firstLetterId = guessedWordCount * numofLetters + 1;
        let interval = 2500 / numofLetters;
    
        localStorage.setItem("availableSpaceY", availableSpace);
    
    
    
    
    
    
    
    
        currentWordArr.forEach((tile, index) => {
        
          setTimeout(() => {
        //    tile.classList.add("animate__flipInX")
        //    tile.classList.add(guess[index].color)
            const letterId = firstLetterId + index;
            const letterEl = document.getElementById(letterId);
         //   if (letter === " "){
         //     letter = "space"
         //   }
         //  let keyboardLetter = letter.toLowerCase();
         //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
     
    
         //   console.log("keyboard letter = " + keyboardLetterEl)
            letterEl.classList.add(guess[index].color)
            letterEl.classList.add("animate__flipInX")
        //    addColorToKey(guess[index].letter, guess[index].color)
            if (tile === " "){
              tile = "space"
            }
    
        const keyboardEl = document.querySelector(`[data-key=${tile}]`);
        console.log ("keyboardEl = " + keyboardEl + " tile = " + tile);
        keyboardEl.classList.add(guess[index].color);
    
            if (index === (numofLetters-1)){
              if (gameActive){
                preserveGameState();
              }
            }
    
          }, interval * index)
      
        })
    
        guessedWordCount += 1;
        window.localStorage.setItem('guessedWordCountY', guessedWordCount);
    
        let date = new  Date();
    //    resultObj.date = date.toString()
        resultObj.date = new Date();
        console.log("New date = " + resultObj.date)
        console.log("New date is of type " + typeof(resultObj.date))
        resultObj.wordle = wordle;
        console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
        let guessedWordUpper = guessedWord.toUpperCase();
        if (guessedWordUpper === wordle){
          messageContainerEl.innerText = "Congratulations!"
          gameActive = false;
          const audio = new Audio ("./auds/success.mp3");
          audio.play()
          danceTiles(currentWordArr, firstLetterId);
          resultObj.guesses = guessedWordCount;
          let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsY'));
          if (resultsArrayTemp){
              resultsArray = JSON.parse(window.localStorage.getItem('resultsY'));
              console.log("New date right before push = " + resultObj.date)
              resultsArray.push(resultObj);
              console.log("Array after push = " + resultsArray);
              console.log ("item date just added = " + resultsArray[resultsArray.length-1].date);
              window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
          } else {
            resultsArray[0] = resultObj;
            window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
          }
    
          setTimeout(function(){
            playButtonEl.innerText = "Play Again?";
            playButtonEl.style.display = "block";
           // messageContainerEl.innerText = ""
        }, 4500);
          const totalWins = window.localStorage.getItem("totalWinsY") || 0;
          window.localStorage.setItem("totalWinsY", Number(totalWins) + 1);
    
          const currentStreak = window.localStorage.getItem("currentStreakY") || 0;
          const maxStreak = window.localStorage.getItem("maxStreakY") || 0;
          let text = "currenStreak = " + currentStreak + " maxStreak = " + maxStreak
       //   window.alert(text)
          window.localStorage.setItem("currentStreakY", Number(currentStreak) + 1);
          if ((Number(currentStreak)+1) > Number(maxStreak)){
       //     window.alert("updating max")
            window.localStorage.setItem("maxStreakY", Number(currentStreak) + 1);
          }
          updateTotalGames();
          resetGameState();
        //  removeKeyboardListeners();
         return;
        } // END OF CORRECT WORD LOGIC
    
        if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
          resultObj.guesses = 10;
          let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsY'));
          if (resultsArrayTemp){
              resultsArray = JSON.parse(window.localStorage.getItem('resultsY'));
              resultsArray.push(resultObj);
              window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
          } else {
            resultsArray[0] = resultObj;
            window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
          }
    
          messageContainerEl.innerText = (`Sorry, no more guesses. The wordle is ${wordle}`)
          gameActive = false;
          window.localStorage.setItem("currentStreakY", 0);
          const audio = new Audio ("./auds/negative.mp3");
          audio.play()
          updateTotalGames();     setTimeout(function(){
         //   messageContainerEl.innerText = ""
            playButtonEl.innerText = "Play Again?";
            playButtonEl.style.display = "block";
        }, 4500);
    
        resetGameState();
    
    
        //  removeKeyboardListeners();
          return;
        } 
    
        const audio = new Audio ("./auds/ascending.mp3");
        audio.play()
        guess.forEach(guess => {
          console.log("letter = " + guess.letter + " color = " + guess.color)
        }
        )
    
    
    
        console.log("guessedwords2 = " + guessedWords)
        guessedWords.push([]);
        console.log("guessedwords3 = " + guessedWords)
        console.log("Guessedwords length = " + guessedWords.length)
    



      const wordDefinitionArr = word[0].meanings;
      wordDefinitionArr.forEach(wordDefinition => {
          console.log("FROM ARRAY: " + wordDefinition.definitions[0].definition);
      });
  }).catch(() => {
    messageContainerEl.innerText = (`You entered ${word} which could not be found`);
  })

}


if (!validate){
  console.log("plug in a bunch of code from above to do basically the same but without ckecking if it is a real word")

  window.navigator.vibrate(450);
  //flipTile();
  gameActive = true;
  atLeastOneGuessMade = true;
  let checkWordle = wordle;
  const guess = [];
  console.log("point 2 in  handleRest")
  currentWordArr.forEach(tile => {
    console.log("pushing letter onto guess array - letter = " + tile)
  //  guess.push({letter: tile, color: 'dontknow'});
    guess.push({letter: tile, color: 'incorrect-letter'});
  } )

  console.log("");
  console.log("");
  console.log("About to loop thru to look for Greys")
  guess.forEach(guess => {
    if (!checkWordle.includes(guess.letter.toUpperCase())){
      guess.color = 'incorrect-letter'
      console.log ("set grey overlay")
      }
  })





  console.log("About to loop thru to look for Greens")
  guess.forEach((guess, index) => {
    console.log("guess letter = " + guess.letter + "   wordle letter = " + wordle[index])
    if (guess.letter == wordle[index].toLowerCase()){
      guess.color = 'correct-letter-in-place'
 //     console.log("guess letter2 = " + guess.letter + "   wordle letter = " + wordle[index])
      console.log ("set green overlay")
      checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
      console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
      console.log (" ")
    }
  })

  console.log("COLORS AFTER GREEN LOGIC")
  guess.forEach(guess => {
    console.log("guess letter = " + guess.letter);
    console.log("guess color = " + guess.color);
  })


  console.log(" ");
  console.log(" ");
  console.log("About to loop thru to look for Yellows")
  guess.forEach(guess => {
    console.log("guess letter = " + guess.letter);
    if (checkWordle.includes(guess.letter.toUpperCase())){
      console.log ("guess.color before setting to yellow = " + guess.color)
      if (guess.color === "correct-letter-in-place"){

      } else {
      guess.color = 'correct-letter'
      console.log ("set yellow overlay")
      checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
      console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
      console.log (" ")
    }
    }
  })






  let result = guessedWord.toUpperCase();

  const firstLetterId = guessedWordCount * numofLetters + 1;
  let interval = 2500 / numofLetters;

  localStorage.setItem("availableSpaceY", availableSpace);








  currentWordArr.forEach((tile, index) => {
  
    setTimeout(() => {
  //    tile.classList.add("animate__flipInX")
  //    tile.classList.add(guess[index].color)
      const letterId = firstLetterId + index;
      const letterEl = document.getElementById(letterId);
   //   if (letter === " "){
   //     letter = "space"
   //   }
   //  let keyboardLetter = letter.toLowerCase();
   //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");


   //   console.log("keyboard letter = " + keyboardLetterEl)
      letterEl.classList.add(guess[index].color)
      letterEl.classList.add("animate__flipInX")
  //    addColorToKey(guess[index].letter, guess[index].color)
      if (tile === " "){
        tile = "space"
      }

  const keyboardEl = document.querySelector(`[data-key=${tile}]`);
  console.log ("keyboardEl = " + keyboardEl + " tile = " + tile);
  keyboardEl.classList.add(guess[index].color);

      if (index === (numofLetters-1)){
        if (gameActive){
          preserveGameState();
        }
      }

    }, interval * index)

  })

  guessedWordCount += 1;
  window.localStorage.setItem('guessedWordCountY', guessedWordCount);

  let date = new  Date();
//    resultObj.date = date.toString()
  resultObj.date = new Date();
  console.log("New date = " + resultObj.date)
  console.log("New date is of type " + typeof(resultObj.date))
  resultObj.wordle = wordle;
  console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
  let guessedWordUpper = guessedWord.toUpperCase();
  if (guessedWordUpper === wordle){
    messageContainerEl.innerText = "Congratulations!"
    gameActive = false;
    const audio = new Audio ("./auds/success.mp3");
    audio.play()
    danceTiles(currentWordArr, firstLetterId);
    resultObj.guesses = guessedWordCount;
    let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsY'));
    if (resultsArrayTemp){
        resultsArray = JSON.parse(window.localStorage.getItem('resultsY'));
        console.log("New date right before push = " + resultObj.date)
        resultsArray.push(resultObj);
        console.log("Array after push = " + resultsArray);
        console.log ("item date just added = " + resultsArray[resultsArray.length-1].date);
        window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
    } else {
      resultsArray[0] = resultObj;
      window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
    }

    setTimeout(function(){
      playButtonEl.innerText = "Play Again?";
      playButtonEl.style.display = "block";
     // messageContainerEl.innerText = ""
  }, 4500);
    const totalWins = window.localStorage.getItem("totalWinsY") || 0;
    window.localStorage.setItem("totalWinsY", Number(totalWins) + 1);

    const currentStreak = window.localStorage.getItem("currentStreakY") || 0;
    const maxStreak = window.localStorage.getItem("maxStreakY") || 0;
    let text = "currenStreak = " + currentStreak + " maxStreak = " + maxStreak
 //   window.alert(text)
    window.localStorage.setItem("currentStreakY", Number(currentStreak) + 1);
    if ((Number(currentStreak)+1) > Number(maxStreak)){
 //     window.alert("updating max")
      window.localStorage.setItem("maxStreakY", Number(currentStreak) + 1);
    }
    updateTotalGames();
    resetGameState();
  //  removeKeyboardListeners();
   return;
  } // END OF CORRECT WORD LOGIC

  if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
    resultObj.guesses = 10;
    let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsY'));
    if (resultsArrayTemp){
        resultsArray = JSON.parse(window.localStorage.getItem('resultsY'));
        resultsArray.push(resultObj);
        window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
    } else {
      resultsArray[0] = resultObj;
      window.localStorage.setItem('resultsY', JSON.stringify(resultsArray));
    }

    messageContainerEl.innerText = (`Sorry, no more guesses. The wordle is ${wordle}`)
    gameActive = false;
    window.localStorage.setItem("currentStreakY", 0);
    const audio = new Audio ("./auds/negative.mp3");
    audio.play()
    updateTotalGames();     setTimeout(function(){
   //   messageContainerEl.innerText = ""
      playButtonEl.innerText = "Play Again?";
      playButtonEl.style.display = "block";
  }, 4500);

  resetGameState();


  //  removeKeyboardListeners();
    return;
  } 

  const audio = new Audio ("./auds/ascending.mp3");
  audio.play()
  guess.forEach(guess => {
    console.log("letter = " + guess.letter + " color = " + guess.color)
  }
  )



  console.log("guessedwords2 = " + guessedWords)
  guessedWords.push([]);
  console.log("guessedwords3 = " + guessedWords)
  console.log("Guessedwords length = " + guessedWords.length)




}















  } // END OF handleSubmitWord   XXXXXXXXXXXXXXXXXXXXXXXX

  function updateTotalGames(){
    const totalGames = window.localStorage.getItem("totalGamesY") || 0;
    window.localStorage.setItem("totalGamesY", Number(totalGames) + 1);
    gameInProgress = false;
    atLeastOneGuessMade = false;
  }




  function handleDelete(){
    const currentWordArr = getCurrentWordArr()
    console.log(currentWordArr)
    if (currentWordArr.length === 0){
      console.log("blank array")
      return;
    }
    currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr

    const lastLetterEl = document.getElementById(availableSpace - 1)

    lastLetterEl.innerHTML = ""   
    availableSpace--; 

  } // END OF handleDelete


  function removeKeyboardListeners(){
    console.log("entered remove listeners")
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
      console.log("keyboard count = " + i)
      keys[i].removeEventListener("click")
    }
   }

  function addKeyboardClicks(){    
      keyboardClicks = true;
      const keys = document.querySelectorAll(".keyboard-row button");
      for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", ({ target }) => {
          if (!gameInProgress){
            return;
          }
      
          messageContainerEl.innerText = ""

          let key = target.getAttribute("data-key");
          target.blur() 
  
 
          if (key === "enter") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleSubmitWord();
            return;
          }
  
          if (key === "del") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleDelete();
            return;
          }

          if (key === "space") {
            const audio = new Audio ("./auds/keypress2.wav");
            audio.play()
            key = " "
          }
          const audio = new Audio ("./auds/keypress2.wav");
          audio.play()
          updateGuessedLetters(key);
        });
      }  // END OF FOR KEYBOARD LOOP

      const titleEl = document.querySelector(".title")
      titleEl.addEventListener("click", ({ target }) => {
      if (!atLeastOneGuessMade){
         console.log("site thinks no guesses have been made")
         return;
        }
        populateRow();
      });
    


        // holdSpaceDel();
        initMisc();




    } // END OF Ians addKeyboardClicks 

function populateRow(){
  console.log("add code to place any green tiles from above onto the current row")
  const allSquaresEl = document.querySelectorAll(".square")
  const currentWordArr = getCurrentWordArr()
  guessedWords[guessedWords.length - 1] = [];
  availableSpace = guessedWordCount * numofLetters + 1;
  console.log ("available spacei in  pop row is " + availableSpace)


  for (i=0; i<numofLetters; i++){
 //   for (i=0; i<4; i++){
    // check for equal modulus values that would indicate the same column, if find correct letter in correct space class output it
    // get id then check class
   // element.classList.contains(class);
 //   updateGuessedLetters('x');
    // loop thru checking all columns except for the last
    let foundGreen = false;
    for (j=0; j<numofGuesses; j++){
    //  let idNum = Number(allSquaresEl[(i*j)-1].id)
      let idNum = (i)+(j*numofLetters)
      console.log ("id num in populateRow function = " + idNum)
      if (allSquaresEl[idNum].classList.contains("correct-letter-in-place")){
        console.log("correct letter in place - that letter is " + allSquaresEl[idNum].innerText )
       /* if (j%numofLetters === i){*/
           foundGreen = (allSquaresEl[idNum].innerText.toLowerCase())
           console.log("FOUNDGREEN SET TO " + foundGreen )
      /*  }*/
      } 
      } // end of for j
    if (foundGreen){
      updateGuessedLetters(foundGreen)
    } else {
      updateGuessedLetters(' ')
    }
  }
} //END OF POPULATE ROW


function initMisc(){

}




    function holdSpaceDel(){
          // The item (or items) to press and hold on
    let itemSpace = document.querySelector(".space-button");
    let itemDel = document.querySelector(".del-button");

    let timerID;
    let counter = 0;

    let spaceHoldEvent = new CustomEvent("spaceHold");
    let delHoldEvent = new CustomEvent("delHold");  

    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    let pressHoldDuration = 50;

    // Listening for the mouse and touch events    
    itemSpace.addEventListener("mousedown", pressingDown, false);
    itemSpace.addEventListener("mouseup", notPressingDown, false);
    itemSpace.addEventListener("mouseleave", notPressingDown, false);

    itemSpace.addEventListener("touchstart", pressingDown, false);
    itemSpace.addEventListener("touchend", notPressingDown, false);
    // Listening for our custom pressHold event
    itemSpace.addEventListener("spaceHold", spaces, false);

        // Listening for the mouse and touch events on Delete    
        itemDel.addEventListener("mousedown", pressingDown2, false);
        itemDel.addEventListener("mouseup", notPressingDown2, false);
        itemDel.addEventListener("mouseleave", notPressingDown2, false);
    
        itemDel.addEventListener("touchstart", pressingDown2, false);
        itemDel.addEventListener("touchend", notPressingDown2, false);
        // Listening for our custom pressHold event
    //    itemDel.addEventListener("delHold", deletes, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);
      console.log ("e key = " + e.key)
      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
      } else {
        console.log("Press threshold reached!");
        itemSpace.dispatchEvent(spaceHoldEvent);
      }
    }




    function pressingDown2(e) {
      // Start the timer
      requestAnimationFrame(timer2);
      e.preventDefault();

      console.log("Pressing del!");
    }

    function notPressingDown2(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing del!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer2() {
      console.log("Timer2 tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer2);
        counter++;
      } else {
        console.log("Del Press threshold reached!");
        itemDel.dispatchEvent(delHoldEvent);
      }
    }

    function spaces(e) {
 //     console.log("pressHold event fired on spaces!");
   //   for (i=1; i<maxCharacters; i++){
   //     updateGuessedLetters('x');
   //   }
   //   console.log("done with loop of spaces");
      // submit all the spaces
      // handleSubmitWord();
     }



    }





/*   MAY WANT TO ADD SOME OF THIS INTO ABOVE FUNCTION

      var audio = new Audio("./keypress.wav");
      audio.play();
      //let containerEl = document.getElementById('container')
      //containerEl.requestFullscreen();
      if (letter === "enter" ){
        handleSubmitWord();
        return;
      }

      if (letter === "del" ){
        console.log("available space = " + availableSpace)
        handleDeleteLetter();
        return;
      }

      if (letter === 'space'){
        letter = ' ';
      }
      console.log('clicked letter = ' + letter )
      updateGuessedWords(letter);
    }  // END OF addKeyboardClicks 
*/


  function handleKeystroke(letter){
    if (!gameInProgress){
      return;
    }

    console.log ("key in handleKeystroke function - "  + letter)
    messageContainerEl.innerText = "";
    let containerEl = document.getElementById('container')
  //  containerEl.requestFullscreen();

  if (letter === "Enter" || letter === "Delete"){
    console.log ("key in handleKeystroke function2 - "  + letter)
  } else {
      let alpha = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
      let result = alpha.includes(letter);
      if (!result){
        return;
      }
    }
    if (letter === "Enter" ){
      console.log ("about to submitword")
      handleSubmitWord();
      return;
    }

    if (letter === "Delete" ){
      console.log("available space = " + availableSpace)
      handleDelete();
      return;
    }


    console.log("dont want to reach here")
    letter = letter.toLowerCase();
    updateGuessedLetters(letter);

  }

}

// THIS LOGIC IS TAKEN FROM ANIA KUBOWS WORDLE CLONE - ITS COLOR LOGIC WORKS CORRECTLY 
const flipTile = () => {
  // pick up at 
  const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;

  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach(tile => {
    guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
  })

  guess.forEach((guess, index) => {
    if (guess.letter == wordle[index]){
      guess.color = 'green-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  guess.forEach(guess => {
    if (checkWordle.includes(guess.letter)){
      guess.color = 'yellow-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  rowTiles.forEach((tile, index) => {
    
    setTimeout(() => {
      tile.classList.add('flip')
      tile.classList.add(guess[index].color)
      addColorToKey(guess[index].letter, guess[index].color)
    }, 500 * index)

  })
}


function initHelpModal() {
  const modal = document.getElementById("help-modal");
 // modal.textContent = "Explanation of this version of WORDLE"
  // Get the button that opens the modal
  const btn = document.getElementById("help");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-help");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on help button")
    modal.style.display = "block";
    helpEl = document.querySelector(".modal-body")
    helpEl.innerHTML = helpText
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    window.localStorage.setItem('viewedhelpY', "viewed");
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}



function initViewHelpModal() {
  const modal = document.getElementById("view-help-modal");
  const span = document.getElementById("close-view-help");

  if (!window.localStorage.getItem("viewedhelpY")){
    modal.style.display = "block";
    helpEl = document.getElementById("view-help")
    helpEl.innerHTML = viewHelpText
  }
 
  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
  modal.classList.toggle("fade-out")
  setTimeout(function(){
    modal.style.display = "none";
    modal.classList.toggle("fade-out")
   }, 2500);

  });


}


function updateStatsModal(){
  const currentStreak = window.localStorage.getItem("currentStreakY");
  const maxStreak = window.localStorage.getItem("maxStreakY");
  const totalWins = window.localStorage.getItem("totalWinsY");
  const totalGames = window.localStorage.getItem("totalGamesY");
  const audio = new Audio ("./auds/stats.mp3");
  audio.play()

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;
  document.getElementById('max-streak').textContent = maxStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;

}

function initStatsModal() {
  const modal = document.getElementById("stats-modal");
  // Get the button that opens the stats modal
  const btn = document.getElementById("stats");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-stats");
  const delEl = document.getElementById("delete-stats");
  const delBodyEl = document.getElementById("delete-body");
  const delModal = document.getElementById("delete-modal");
  const closeDel = document.getElementById("close-delete");
  const yesEl = document.getElementById("yes");
  const noEl = document.getElementById("no");

  // Get the element that shows results
  const resultsEl = document.querySelector(".results")
  const resultsButton = document.getElementById("stats-info");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on stats button classlist = " + btn.classList)
    updateStatsModal();
    modal.style.display = "block";
    helpEl = document.getElementById("stats-modal")
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    resultsEl.style.display = "none";
  });


    // When the user clicks on delete stats <span> (x), display confirmation box
    delEl.addEventListener("click", function () {
      delModal.style.display = "block";
    });


      // When the user clicks on <span> (x), close the delete modal
    closeDel.addEventListener("click", function () {
      delModal.style.display = "none";
    });

      // When the user clicks on Yes, clear history via localstorage clear the results tray and close delete modal
      yesEl.addEventListener("click", function () {
        localStorage.removeItem("resultsY")
        localStorage.removeItem("currentStreakY")
        localStorage.removeItem("maxStreakY")
        localStorage.removeItem("totalWinsY")
        localStorage.removeItem("totalGamesY")
        const resultsTrayEl = document.getElementById("results-tray");
        resultsTrayEl.innerHTML = ""
        delModal.style.display = "none";
        resultsArray = [];
      });

      // When the user clicks on No, close delete modal
      noEl.addEventListener("click", function () {
        delModal.style.display = "none";
      });
      

  

    // When the user clicks on stats info (i) show results
    resultsButton.addEventListener("click", function () {
      console.log("just clicked on results button")
      resultsEl.style.display = "block";
      buildResults();
    });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      resultsEl.style.display = "none";
    }
  });
}

function buildResults(){
  console.log("entered build results")
  const resultsTrayEl = document.getElementById("results-tray")

  // LOOP THRU RESULTS IN REVERSE ORDER

  let resultItemEl = document.createElement('div')
//      resultItemEl.innerText = "here are where results will go"
//  resultsTrayEl.appendChild(resultItemEl)

  let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsY'));
  if (resultsArrayTemp){
      if (resultsArrayTemp.length > MAX_HISTORY_ITEMS){
        let numToDelete = resultsArrayTemp.length - MAX_HISTORY_ITEMS;
        resultsArrayTemp.splice(0, numToDelete)
        window.localStorage.setItem('resultsY', JSON.stringify(resultsArrayTemp));
      }

      resultsArray = JSON.parse(window.localStorage.getItem('resultsY'));
      console.log("resultsArray =  " + resultsArray);
      console.log("results array date = " + resultsArray[resultsArray.length-1].date)
      date = new Date(resultsArray[resultsArray.length-1].date);
      const year = date.getFullYear();
      const hours = date.getHours();
      console.log("after getfullyear function year = " + year + " hours = " + hours)
      resultsTrayEl.innerHTML = ""
      let resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Date"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Wordle"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "#"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)

      for (i=resultsArray.length - 1; i>-1; i--){
        let resultItemEl = document.createElement('div')
        let date = new Date(resultsArray[i].date);
        let year = date.getFullYear();
        let yy = year.toString().slice(2);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        resultItemEl.innerText = month + "/" + day + "/" + yy
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        let screenWidth = window.innerWidth;
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].wordle
        if (resultsArray[i].wordle.length > maxLettersNarrowScreen){
          if (screenWidth < 400){
             resultItemEl.innerText = resultsArray[i].wordle.slice(0, maxLettersNarrowScreen - 1) + ".."
          }
        }
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].guesses
        if (resultsArray[i].guesses === 10){
          resultItemEl.innerText = "-"  
          resultItemEl.style.color = "red";
        }
        resultsTrayEl.appendChild(resultItemEl)
      }
      // write out buffer for padding
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)

  }

}

function updateCategoriesModal(){

let categories = document.querySelectorAll(".category")
for (i=0; i<categories.length; i++){
  if (protoWordsArray[i].sel){
    categories[i].style.color = "black";
    categories[i].style.fontWeight = "bold";

  } else {
     categories[i].style.color = "grey";
     categories[i].style.fontWeight = "normal";

  }
  if (protoWordsArray[i].parent==="parent"){
    categories[i].style.color = "green";
    categories[i].style.fontWeight = "normal";
    calcTotalParentItems(protoWordsArray[i].cat, i)
  }
 }
}

function calcTotalParentItems(parentCat, i){
  console.log("total all of the children of " + parentCat)
  let childClass = (".child" + parentCat)
  const childEls = document.querySelectorAll(childClass)
  console.log("lenght of children = " + childEls.length)
  let total = 0; 
  for (j=0; j<childEls.length; j++){
    if(protoWordsArray[i+j+1].sel){
  //    total = total + protoWordsArray[i+j+1].items.length;
      total = total + protoWordsArray[i+j+1].numOfItems;
      console.log("total = " + total)
    }
  }
  const category = document.querySelector("."+parentCat)
  category.innerText = `${protoWordsArray[i].cat} ${total}...`;
  if(total>0){
    category.innerText = `${protoWordsArray[i].cat} ${total}...`;
    category.style.fontWeight = "bold";
  } else {
    category.innerText = `${protoWordsArray[i].cat}...`;
    category.style.fontWeight = "normal";
  }
}

function initCategoriesModal() {
  // Look for category preferences in localstorage
  // if found apply those values to the protoarray
  console.log("add category local storage get logic")
  let categoryPreferencesTemp = JSON.parse(window.localStorage.getItem('categoryPreferencesY'));

  if (categoryPreferencesTemp) {
    categoryPreferences = JSON.parse(window.localStorage.getItem('categoryPreferencesY'))
    console.log("prefernces = " + categoryPreferences)
    for (i=0; i<protoWordsArray.length; i++){
      protoWordsArray[i].sel = categoryPreferences[i]
      if (protoWordsArray[i].parent === "parent"){
        protoWordsArray[i].sel = false; 
      }
    }
    
}
  const modal = document.getElementById("categories-modal");
  // Get the button that opens the categories modal
  const btn = document.getElementById("categories");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-categories");


  let categoriesContainerEl = document.getElementById("categories-body")
  categoriesContainerEl.innerHTML = ""

  for (i=0; i<protoWordsArray.length; i++){
    let category = document.createElement("div");
  //  category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].items.length}`;
    category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].numOfItems}`;
    if (protoWordsArray[i].parent === "parent"){
      category.innerText = protoWordsArray[i].cat + "...";
    }

    category.classList.add("category")
    // Add class of parent or child
    if (protoWordsArray[i].parent === "parent"){
      category.classList.add("parent")
      category.classList.add(protoWordsArray[i].cat)
      console.log("parent")
    }
    if (protoWordsArray[i].parent === "Music"){
      category.classList.add("child")
      category.classList.add("child")
      category.classList.add("childMusic")
      console.log("child")
    }
    if (protoWordsArray[i].parent === "Sports"){
      category.classList.add("child")
      category.classList.add("childSports")
      console.log("child")
    }    
    category.id = i;
    categoriesContainerEl.appendChild(category);
    category.addEventListener("click", ({ target }) => {
       // window.alert(category.innerText + category.id)
        protoWordsArray[category.id].sel = !(protoWordsArray[category.id].sel)
        if (protoWordsArray[category.id].sel){
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } 
        else {
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play()     
        }
        if (protoWordsArray[category.id].parent==="parent"){
          let children = document.querySelectorAll(".child"+protoWordsArray[category.id].cat)
          console.log("category = " + protoWordsArray[category.id].cat)
          if (protoWordsArray[category.id].sel){
            for (l=0; l<children.length; l++){
              children[l].style.display = "block"
            }
          } else {
            for (l=0; l<children.length; l++){
              children[l].style.display = "none"
            }
          } 
        }

        updateCategoriesModal()
      });
  }

  // When the user clicks on the button, open the modal
 /* console.log("right before categores button add event click listener")
  btn.addEventListener("click", function () {
    console.log("just clicked on categories button")
    updateCategoriesModal();
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("categories-modal")
   });*/

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    preserveCategories();

  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function initCategoriesModalBtn(){
    // When the user clicks on the button, open the modal
    const modal = document.getElementById("categories-modal");
    const btn = document.getElementById("categories");
    console.log("right before categores button add event click listener")
    btn.addEventListener("click", function () {
      console.log("just clicked on categories button")
      updateCategoriesModal();
      const audio = new Audio ("./auds/stats.mp3");
      audio.play()
      modal.style.display = "block";
      helpEl = document.getElementById("categories-modal")
     });
  
}

function preserveCategories(){
  console.log("add category local storage update logic in preserve function")
    for (i=0; i<protoWordsArray.length; i++){
      console.log(protoWordsArray[i].sel)
      console.log(categoryPreferences[i])
      categoryPreferences[i] = protoWordsArray[i].sel
    }
    window.localStorage.setItem('categoryPreferencesY', JSON.stringify(categoryPreferences));
}





function revealLetter(){
  console.log ("entered reveal letter function")
 // const currentWordArr = getCurrentWordArr()

  const numberOfGuessedWords = guessedWords.length;
  currentWordArr = guessedWords[numberOfGuessedWords - 1]
  let letter = wordle[revealLetterNum]
  console.log('current array = ' + currentWordArr)
  console.log("numofLetters = " + numofLetters )
    currentWordArr[revealLetterNum] = letter;
    //const availableSpaceEl = document.getElementById(revealLetterNum)
  //  availableSpaceEl.textContent = letter;
    const availableSpaceEl = document.getElementById(revealLetterNum+1)
    availableSpaceEl.textContent = letter;
    revealLetterNum++

}

function initLook(){
      // Select background image based on portrait or landscape mode but first check for default
      const body = document.getElementsByTagName('body')[0];
      let backgroundImage  = JSON.parse(window.localStorage.getItem('backgroundY'));
      console.log("background from localstorage = " + backgroundImage)
  //    window.localStorage.setItem('backgroundY', JSON.stringify(resultsArray));
      if (backgroundImage === "Random" || !backgroundImage){
        if (window.innerHeight > window.innerWidth){
          let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
  //        const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesPortrait[randomImg] + ")";
        } else {  
          let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
    //      const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")";
      }
    } else {
      body.style.backgroundImage = "url(" + backgroundImage + ")";
    }


      initAudio()
    }



function initAudio(){
let icon = document.querySelector(".fa-volume-up");

icon.onclick = function (){
    music();
    console.log("classlist when clicked = " + icon.classList)
    if(icon.classList.contains("fa-volume-up")){
        icon.classList.replace("fa-volume-up", "fa-volume-off");
    }
    else{
        icon.classList.replace("fa-volume-off", "fa-volume-up");
    }
}
}


function music(){
  console.log("entered music toggle")
  sound = !sound;
  if (sound===false){
    if (soundPlayer){
      soundPlayer.pause();
    }
  }
  if (sound===true){
    if (soundPlayer){
      soundPlayer.play();
    }
  }
}


function playMusic(){
  if (sound){
  soundPlayer.play();
  }
}


function initPreferencesModal() {


  const modal = document.getElementById("preferences-modal");
  // Get the button that opens the preferences modal
  const btn = document.getElementById("preferences");
  const rndLandscapeEl = document.getElementById("random-bg-container");
  const rndPortraitEl = document.getElementById("portrait-random-bg-container");
 
  // Get the <span> element that closes the modal 
  const span = document.getElementById("close-preferences");


  const preferencesContainerEl = document.getElementById("preferences-body")
  const portraitPreferencesContainerEl = document.getElementById("portrait-preferences-body")

  const textAreaEl = document.querySelector("textarea");
 // preferencesContainerEl.style.display="none"
  portraitPreferencesContainerEl.style.display="none"


  let randomImagesEl = document.querySelectorAll('#random-bg-container img');
for (i=0; i<6; i++){
  randomImagesEl[i].src = backgroundImagesLandscape[i];
}


let oneImagesEl = document.querySelectorAll('#one-bg-container img');
for (i=0; i<6; i++){
  oneImagesEl[i].src = backgroundImagesLandscape[i];
}


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on preferences button")
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("preferences-modal")
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    initCategories();
    initCategoriesModal();
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

 

  textAreaEl.addEventListener("selectionchange", function (event) {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + textAreaEl.value + ")"
        window.localStorage.setItem('backgroundY', JSON.stringify(textAreaEl.value));
      }
    );


    // When the user clicks on the random landscpape - randomly change the background
    rndLandscapeEl.addEventListener("click", function (event) {
      console.log("add code to randomly change background")
      let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
      window.localStorage.setItem('backgroundY', JSON.stringify("Random"));
    });

        // When the user clicks on the random portrait - randomly change the background
        rndPortraitEl.addEventListener("click", function (event) {
          console.log("add code to randomly change background")
          let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
          const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
          window.localStorage.setItem('backgroundY', JSON.stringify("Random"));
        });
    


    const bgs = document.querySelectorAll(".maxi-img");
    for (let i = 0; i < bgs.length; i++) {
      bgs[i].addEventListener("click", ({ target }) => {

        let bg = target.getAttribute("src");
        console.log("bg = " + bg )
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + bg + ")"
        window.localStorage.setItem('backgroundY', JSON.stringify(bg));

      });
      }


      initBgAudios();
      initChameleon();
      initValidate();
 
    }




    
function initBgAudios() {

  const audioContainerEl = document.getElementById("audios-body")
  let bgAudio = document.createElement("div");
 // bgAudio.innerText = "Random"
//  bgAudio.style.color = "gray";
//  audioContainerEl.appendChild(bgAudio);
  for (i=0; i<audios.length; i++){
    let bgAudio = document.createElement("div");
    bgAudio.innerText = audios[i].name;
    
    bgAudio.id = i;
    bgAudio.style.color = "gray";
    bgAudio.classList.add("audio")
    audioContainerEl.appendChild(bgAudio);  


    bgAudio.addEventListener("click", ({ target }) => {
      const toggleAudios = document.querySelectorAll(".audio");
      for (i=0; i<audios.length; i++){
        toggleAudios[i].style.color = "gray"
        toggleAudios[i].style.fontWeight = "normal"
      }
      soundPlayer.setAttribute('src',audios[target.id].link); //change the source
      bgAudio.style.color = 'black';
      bgAudio.style.fontWeight = 'bold';
      let audioName = audios[target.id].name
      soundPlayer.volume = audios[target.id].vol
      playMusic()
          });
  }
}


function initChameleon() {

  const chameleonEl = document.getElementById("chameleon")
    console.log("entered initchameleon")

    chameleonEl.addEventListener("click", ({ target }) => {
      console.log("clicked initchameleon")
        chameleon = !chameleon;
        if (chameleon){
          chameleonEl.style.color = 'black';
          chameleonEl.style.fontWeight = 'bold';
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } else {
          chameleonEl.style.color = 'gray'; 
          chameleonEl.style.fontWeight = 'normal';
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play() 
        }
          });
  }



  function initValidate() {

    const validateEl = document.getElementById("validate")
  

    // Check validate value in localstorage
    validate = JSON.parse(window.localStorage.getItem('validateY'));
    


    if (validate){
        validateEl.style.color = 'black';
        validateEl.style.fontWeight = 'bold';
      } else {
        validateEl.style.color = 'gray'; 
        validateEl.style.fontWeight = 'normal';
      }
  
      validateEl.addEventListener("click", ({ target }) => {
        console.log("clicked validate")
          validate = !validate;
          if (validate) {
            window.localStorage.setItem("validateY", "true");
          } else {
            window.localStorage.setItem("validateY", "false");
          } 

          if (validate){
            validateEl.style.color = 'black';
            validateEl.style.fontWeight = 'bold';
            const audio = new Audio ("./auds/shortgood.mp3");
            audio.play()
          } else {
            validateEl.style.color = 'gray'; 
            validateEl.style.fontWeight = 'normal';
            const audio = new Audio ("./auds/pop39222.mp3");
            audio.play() 
          }
            });
    }
  






  // DANCE TILES FROM WEBDEV SIMPLIFIED
function danceTiles(tiles, firstLetterId){

  tiles.forEach((tile, index) => {
    setTimeout(() => {
    const letterId = firstLetterId + index;
    const letterEl = document.getElementById(letterId);
    letterEl.classList.add("dance")
    letterEl.addEventListener(
      "animationend",
      () => {
        letterEl.classList.remove("dance")
        console.log("removed dance class")
      },
      {once: true}
      )
    }, index * DANCE_ANIMATION_DURATION / tiles.length)
  })
}

function setColors(){
  
  let r = document.querySelector(':root');
  if (chameleon){
      let colorNum1 = Math.floor(Math.random()*280);
      let colorNum2 = Math.floor(Math.random()*299);
      // Make sure color hues are sufficiently different
      if (colorNum2 > colorNum1){
        if ((colorNum2-colorNum1) < 60){
          colorNum2 = colorNum2 + 60;
        }
      } else {
        if ((colorNum1-colorNum2) < 60){
          colorNum1 = colorNum1 + 60;
        }
      }
      let randomColor = "";
  
      randomColor =  "hsl(" + colorNum1 + ", 60%, 55%)"
      r.style.setProperty('--correctLetter', randomColor);
  
      randomColor =  "hsl(" + colorNum2 + ", 60%, 35%)"
      r.style.setProperty('--correctLetterInPlace', randomColor);
      r.style.setProperty('--freeSpace', randomColor);
    } else { // Set default Wordle colors 
      r.style.setProperty('--correctLetter', 'rgb(181, 159, 59)');
      r.style.setProperty('--correctLetterInPlace', 'rgb(83, 141, 78)');
      r.style.setProperty('--freeSpace', 'rgb(83, 141, 78)');
    }
}

function initCategories(){
  // LOOP THRU EACH CATEGORY
  for(i=0; i<protoWordsArray.length; i++){
    let workcount = 0;
    for(j=0; j<protoWordsArray[i].items.length; j++){
        workcount++;
    }
    protoWordsArray[i].numOfItems = workcount;
    console.log("items for array " + protoWordsArray[i].cat + " equals " + workcount)
  } 
}

function preserveGameState(){
  console.log("entered preserveGameState")
  window.localStorage.setItem('guessedWordsY', JSON.stringify(guessedWords));
  const keyboardContainer = document.getElementById('keyboard-container');
  window.localStorage.setItem("keyboardContainerY", keyboardContainer.innerHTML);
  const boardContainer = document.getElementById('board-container');
  window.localStorage.setItem("boardContainerY", boardContainer.innerHTML);
  const board = document.getElementById('board');
  window.localStorage.setItem("boardY", board.innerHTML);
  window.localStorage.setItem('randomArrayY', Number(randomArray));
  
}

function loadLocalStorage(){
  let kContainer = window.localStorage.getItem("keyboardContainerY");
  wordle =window.localStorage.getItem("wordleY");
  if (kContainer){
    calcLettersandGuesses();
    messageContainerEl.innerText = "Last Wordlength game was interrupted - continue at point it was lost";
    atLeastOneGuessMade = true;
    setTimeout(function(){
  }, 4500);
  } else {
    wordle = wordsArray[randomArray].items[randomWordle];
    window.localStorage.setItem("wordleY", wordle);
    calcLettersandGuesses();
    createSquares();
  }

  guessedWordCount = Number(window.localStorage.getItem('guessedWordCountY')) || guessedWordCount
  availableSpace = Number(window.localStorage.getItem('availableSpaceY')) || availableSpace
  console.log("available space = " + availableSpace)
  guessedWords = JSON.parse(window.localStorage.getItem('guessedWordsL')) || guessedWords
  

  const storedBoardContainer = window.localStorage.getItem("boardContainerY");
  if (storedBoardContainer){
    document.getElementById("board-container").innerHTML = storedBoardContainer;
  }

  const storedBoard = window.localStorage.getItem("boardY");
  if (storedBoard){
    document.getElementById("board").innerHTML = storedBoard;
  }

  const storedKeyboardContainer = window.localStorage.getItem("keyboardContainerY");
  if (storedKeyboardContainer){
    document.getElementById("keyboard-container").innerHTML = storedKeyboardContainer;
  }




}

function resetGameState(){
  console.log("entered resetGameState")
  localStorage.removeItem('wordleY')
  localStorage.removeItem('guessedWordCountY')
  localStorage.removeItem('keyboardContainerY')
  localStorage.removeItem('boardContainerY')
  localStorage.removeItem('boardY')
  localStorage.removeItem('availableSpaceY')
  localStorage.removeItem('guessedWordsY')
  localStorage.removeItem('randomArrayY')
}

function calcLettersandGuesses(){

  numofLetters = wordle.length;
  if(window.innerWidth < 900){
    if (numofLetters > maxLettersNarrowScreen){
      messageContainerEl.innerText = "Mobile Screen - " + numofLetters + " character Wordle has been truncated to " + maxLettersNarrowScreen;
      setTimeout(function(){
   //     messageContainerEl.innerText = ""
    }, 4500);
      numofLetters = maxLettersNarrowScreen;
      wordle = wordle.slice(0, maxLettersNarrowScreen);
    }
  }
  console.log("wordle = " + wordle +  " num of letters = " + numofLetters)
 // let guessedWordCount = 0;
  numofGuesses = 6;
  if (numofLetters > 6){
    numofGuesses = 7;
  }
  if (numofLetters > 7){
    numofGuesses = 8;
  }


}



  function createSquares(){
    console.log("entered createSquares")
    let screenWidth = window.innerWidth;
    if (screenWidth > 900){
      screenWidth = 900;
    }
    let screenHeight = window.innerHeight;

    console.log ("createSquares  screenWidth = " + screenWidth + "  screenHeight = " + screenHeight);

    const gameBoard = document.getElementById("board")


    // Clear out any elements of class "square"
    let squares = document.getElementsByClassName('square');
    while (squares[0]){
      squares[0].parentNode.removeChild(squares[0]);
    }

    for (let i = 0; i < (numofLetters*numofGuesses); i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square)
    }  

    //  FROM HERE TO END OF FUNCTION ADDED BECAUSE NUMBER OF LETTERS IN WORDLE CAN VARY
    const board = document.getElementById("board")
    const square = document.querySelectorAll(".square")
    console.log(square)
    square.forEach(square => {
      square.style.width = (screenWidth / (numofLetters + 4) + 'px');
      square.style.height = ((screenHeight / 15) + 'px');
      square.style.height = (screenWidth / (numofLetters + 4) + 'px');
      square.style.fontSize = (screenWidth / (numofLetters + 4) + 'px');
      if (screenWidth > screenHeight){
        square.style.height = ((screenHeight / 15) + 'px');
        square.style.fontSize = ((screenHeight / 20) + 'px');

      }
    });
    board.style.gridTemplateColumns = 'repeat(' + numofLetters + ', 1fr)'
  
  } // END OF createSquares 

  function showSpacesForFree(){
    console.log ("add free space logic")

    let checkWordle = wordle;
    const guess = [];
  
    // set guess equal to an array of numofletters spaces
    for (i=0; i<numofLetters; i++){
      guess.push({letter: ' ', color: 'incorrect-letter'});
    }

  
    console.log("About to loop thru to look for Greens")
    guess.forEach((guess, index) => {
      console.log("guess letter = " + guess.letter + "   wordle letter = " + wordle[index])
      if (guess.letter == wordle[index].toLowerCase()){
        console.log ("free space")
        guess.color = 'free-space'
      }
    })


    const firstLetterId = guessedWordCount * numofLetters + 1;

    guess.forEach((tile, index) => {
    
   
        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
        letterEl.classList.add(guess[index].color)
    //    addColorToKey(guess[index].letter, guess[index].color)
        if (tile === " "){
          tile = "space"
        }

    })

  }
console.log("about to lock orientation")
  screen.orientation.lock("natural");
  screen.addEventListener("orientationchange", () => {
    console.log(`The orientation of the screen is: ${screen.orientation}`);
  });






  

function initCreateModal() {
  const modal = document.getElementById("create-yours");
  const modal2 = document.getElementById("create-modal");
  // Get the button that opens the stats modal
  const createBtn = document.getElementById("create");

  const cancelEl = document.getElementById("cancel-btn");
  const submitEl = document.getElementById("sub-btn");
  const textAreaEl = document.getElementById("create-items");
  const createCloseEl = document.getElementById("close-create");
  let customEl = document.getElementById("custom");
  const createsEl = document.querySelector(".creates")



  // When the user clicks on the button, open the modal
  createBtn.addEventListener("click", function () {
    console.log("just clicked on create button")
    modal.classList.toggle("hidden")
  });

    // When the user clicks on the button, open the modal
    createCloseEl.addEventListener("click", function () {
      console.log("just clicked on create close button")
      modal2.style.display = "none"
    });
   

/*
    let createObj = {
      cat: "Testing",
      sel: false,
      parent: "",
      numOfItems: 0,
      items: []
      }
*/


    // When the user clicks on the submit button, attempt to create a category
    submitEl.addEventListener("click", function () {

protoWordsArray.length = 0;
// Retrieve the JSON string
const userStr = localStorage.getItem('catObjectY');
console.log("userStr = " + userStr)
if (userStr){
  // Parse JSON string to object
  const userArr = JSON.parse(userStr);
  
  console.log(userArr); 
  console.log(userArr[0].cat); 
  console.log(userArr[0].items[0]); 
 // protoWordsArray.push(userObj);
 for (i=0; i<userArr.length; i++){
  protoWordsArray.push(userArr[i]);

 }
}





      let createdInfoEl = document.getElementById("create-modal")
      let newCategoryEl = document.getElementById("new-category")
      let yourCategoryEl = document.getElementById("custom")
      let str = textAreaEl.value.toUpperCase();
      let createdArray = str.split(',');
      newCategoryEl.innerText = yourCategoryEl.value.toUpperCase();
      createdInfoEl.style.display = "block"
      createObj.cat = yourCategoryEl.value.toUpperCase();
      createObj.items.length = 0;

      const createTrayEl = document.getElementById("create-tray")
      createTrayEl.innerText = "";
      
    console.log("category = " + customEl.value.toUpperCase())
    for(var i = 0; i < createdArray.length; i++)
    {
      createdArray[i].toUpperCase
      createObj.items.push(createdArray[i]);
       console.log("item " + i + " = " + createdArray[i]);






      console.log("trying to create elements in tray")
      // create a div for each word and word length and append them
      createItemEl = document.createElement('div')
      createItemEl.innerText = createdArray[i]
      createTrayEl.appendChild(createItemEl)
      createItemEl = document.createElement('div')
      createItemEl.innerText = createdArray[i].length
      createTrayEl.appendChild(createItemEl)


    }

    createsEl.style.display = "block";
    console.log(createObj) 
    protoWordsArray.push(createObj);
    for(i=0; i<protoWordsArray.length; i++){
    console.log("array " + i + " = " + protoWordsArray[i].cat)
    } 



   // window.localStorage.setItem("catObjectY", JSON.stringify(createObj));
    window.localStorage.setItem("catObjectY", JSON.stringify(protoWordsArray));
    });
  

    // When the user clicks on the cancel button, toggle hidden class
    cancelEl.addEventListener("click", function () {
      modal.classList.toggle("hidden")
    });
  


}


