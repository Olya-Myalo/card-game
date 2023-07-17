/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./component/array-сards.js":
/*!**********************************!*\
  !*** ./component/array-сards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards)
/* harmony export */ });
const cards = [
    {front: '/image/ace_of_spades.svg', back: '/image/reverse_side.svg', id: 1 },
    {front: '/image/king_of_spades.svg', back: '/image/reverse_side.svg', id: 2 },
    {front: '/image/lady_of_spades.svg', back: '/image/reverse_side.svg', id: 3 },
    {front: '/image/jack_of_spades.svg', back: '/image/reverse_side.svg', id: 4 },
    {front: '/image/ten_peaks.svg', back: '/image/reverse_side.svg', id: 5 },
    {front: '/image/nine_peaks.svg', back: '/image/reverse_side.svg', id: 6 },
    {front: '/image/eight_peaks.svg', back: '/image/reverse_side.svg', id: 7 },
    {front: '/image/seven_peaks.svg', back: '/image/reverse_side.svg', id: 8 },
    {front: '/image/six_peaks.svg', back: '/image/reverse_side.svg', id: 9 },
    {front: '/image/ace_of_hearts.svg', back: '/image/reverse_side.svg', id: 10 },
    {front: '/image/king_of_hearts.svg', back: '/image/reverse_side.svg', id: 11 },
    {front: '/image/lady_of_hearts.svg', back: '/image/reverse_side.svg', id: 12 },
    {front: '/image/jack_of_hearts.svg', back: '/image/reverse_side.svg', id: 13 },
    {front: '/image/ten_worms.svg', back: '/image/reverse_side.svg', id: 14 },
    {front: '/image/nine_hearts.svg', back: '/image/reverse_side.svg', id: 15 },
    {front: '/image/eight_hearts.svg', back: '/image/reverse_side.svg', id: 16 },
    {front: '/image/seven_hearts.svg', back: '/image/reverse_side.svg', id: 17 },
    {front: '/image/six_hearts.svg', back: '/image/reverse_side.svg', id: 18 },
    {front: '/image/ace_of_diamonds.svg', back: '/image/reverse_side.svg', id: 19 },
    {front: '/image/king_of_diamonds.svg', back: '/image/reverse_side.svg', id: 20 },
    {front: '/image/lady_of_diamonds.svg', back: '/image/reverse_side.svg', id: 21 },
    {front: '/image/jack_of_diamonds.svg', back: '/image/reverse_side.svg', id: 22 },
    {front: '/image/ten_diamonds.svg', back: '/image/reverse_side.svg', id: 23 },
    {front: '/image/nine_diamonds.svg', back: '/image/reverse_side.svg', id: 24 },
    {front: '/image/eight_diamonds.svg', back: '/image/reverse_side.svg', id: 25 },
    {front: '/image/seven_diamonds.svg', back: '/image/reverse_side.svg', id: 26 },
    {front: '/image/six_diamonds.svg', back: '/image/reverse_side.svg', id: 27 },
    {front: '/image/ace_of_cross.svg', back: '/image/reverse_side.svg', id: 28 },
    {front: '/image/king_of_cross.svg', back: '/image/reverse_side.svg', id: 29 },
    {front: '/image/lady_of_cross.svg', back: '/image/reverse_side.svg', id: 30 },
    {front: '/image/jack_of_cross.svg', back: '/image/reverse_side.svg', id: 31 },
    {front: '/image/ten_crosses.svg', back: '/image/reverse_side.svg', id: 32 },
    {front: '/image/nine_crosses.svg', back: '/image/reverse_side.svg', id: 33 },
    {front: '/image/eight_crosses.svg', back: '/image/reverse_side.svg', id: 34 },
    {front: '/image/seven_crosses.svg', back: '/image/reverse_side.svg', id: 35 },
    {front: '/image/six_crosses.svg', back: '/image/reverse_side.svg', id: 32 },
]

/***/ }),

/***/ "./component/difficulty-selection-page.js":
/*!************************************************!*\
  !*** ./component/difficulty-selection-page.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDifficultySelectionPage: () => (/* binding */ renderDifficultySelectionPage)
/* harmony export */ });
/* harmony import */ var _page_level_difficulty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-level-difficulty.js */ "./component/page-level-difficulty.js");


function renderDifficultySelectionPage() {
    const appHtml = `
    <div class="basic">
        <form class="form">
            <p class="title">Выберите сложность</p>
            <div class="radio-toolbar">
                <input type="radio" id="radio1" name="difficulty" value="easy">
                <label for="radio1">1</label>
  
                <input type="radio" id="radio2" name="difficulty" value="medium">
                <label for="radio2">2</label>
  
                <input type="radio" id="radio3" name="difficulty" value="hard">
                <label for="radio3">3</label>
            </div>
            <button id="start-button" type="submit" class="button">Старт</button>
        </form>
    </div>
    `;
  
    app.innerHTML = appHtml;
  
    const gameData = {
      difficulty: 'easy', 
      numCards: 6 
  };

  const difficultyInputs = document.querySelectorAll('.radio-toolbar input[name="difficulty"]');

  const startButton = document.querySelector('#start-button');

  function updateNumCards() {
      switch (gameData.difficulty) {
          case 'easy':
              gameData.numCards = 6;
              break;
          case 'medium':
              gameData.numCards = 12;
              break;
          case 'hard':
              gameData.numCards = 18;
              break;
      }
  };

  difficultyInputs.forEach(input => {
      input.addEventListener('change', () => {
          gameData.difficulty = input.value;
          updateNumCards();
      });
  });
  
  startButton.addEventListener('click', () => {
      startGame(gameData.difficulty);
  });

  function startGame(difficulty) {
      //     // shuffle();// перемешиваем все карточки
      //     // let selectedCards = cards.slice(0, gameData.numCards);
      //     // selectedCards.forEach(card => {
      //     //   card.classList.remove('flipped');
      //     //   card.addEventListener('click', flipCard);};
      (0,_page_level_difficulty_js__WEBPACK_IMPORTED_MODULE_0__.renderPageLevelDifficulty)(difficulty);

  };
}
  



/***/ }),

/***/ "./component/page-level-difficulty.js":
/*!********************************************!*\
  !*** ./component/page-level-difficulty.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPageLevelDifficulty: () => (/* binding */ renderPageLevelDifficulty)
/* harmony export */ });
/* harmony import */ var _array_ards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-сards.js */ "./component/array-сards.js");


function renderPageLevelDifficulty(difficulty) {
    const shuffledCards = shuffle([..._array_ards_js__WEBPACK_IMPORTED_MODULE_0__.cards, ..._array_ards_js__WEBPACK_IMPORTED_MODULE_0__.cards]);
    const app = document.querySelector('#app');

    const appHtml = `
      <div class="page-maps">
        <div class="page_header">
          <div class="time">
            <div class="time-value">
              <p class="time-min">min</p>
              <p class="time-sec">sec</p>
            </div>
            <div class="time-figure">00.00</div>
          </div>
          <div>
            <button id="restart-button" class="button-newgame">Начать заново</button>
          </div>
        </div>
        <div class="cards">
        ${renderCards(difficulty, shuffledCards)}
        </div>
      </div>
    `;
  
    app.innerHTML = appHtml;

    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(card => {
      card.addEventListener('click', flipCard);
    });

    let memoryTimeoutId; 
    memoryTimeoutId = setTimeout(() => {
        cardElements.forEach(card => {
          card.classList.remove('flipped');
        });
      }, 5000);

    cardElements.forEach(card => {
      card.classList.add('flipped');
    });

    const startTime = new Date().getTime();
  
    const timerValue = document.querySelector('.time-figure');
    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      timerValue.textContent = formattedTime;
    }, 1000);
  
    const restartButton = document.querySelector('#restart-button');
    restartButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      clearTimeout(memoryTimeoutId);
      cardElements.forEach(card => {
        card.classList.remove('flipped');
      });
      renderPageLevelDifficulty(difficulty);
    });

function renderCards(difficulty, cards) {
  const numCards = getNumCards(difficulty) * 2;
  const selectedCards = cards.slice(0,  Math.floor(numCards / 2));
  const duplicatedCards = [...selectedCards, ...selectedCards];
  const shuffledCards = shuffle(duplicatedCards);
  let cardsHtml = '';
  for (let i = 0; i < shuffledCards.length; i++) {
    const card = shuffledCards[i];
    const cardHtml = `
    <div class="card">
      <div class="card__back">
        <img src="${card.front}" alt="">
      </div>
      <div class="card__front">
        <img src="${card.back}" alt="">
      </div>
    </div>
  `;
    cardsHtml += cardHtml;
  }
  return cardsHtml;
}
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function getNumCards(difficulty) {
  switch (difficulty) {
    case 'easy':
      return 6;
    case 'medium':
      return 12;
    case 'hard':
      return 18;
    default:
      return 6;
  }
}

function flipCard(event) {
    const currentCard = event.currentTarget

    if (
        currentCard.classList.contains('flipped') ||
        document.querySelectorAll('.flipped').length === 2
    ) {
        return
    }

    currentCard.classList.toggle('flipped')

    const flippedCards = document.querySelectorAll('.flipped')

    if (flippedCards.length === 2) {
        const flippedCard1 = flippedCards[0]
        const flippedCard2 = flippedCards[1]

        if (flippedCard1.dataset.cardName === flippedCard2.dataset.cardName) {
            alert('Вы победили!');
        } else {
            setTimeout(() => {
                flippedCards.forEach((card) => {
                    card.classList.add('flipped');
                });
                alert('Вы проиграли!');
            }, 1000);
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_difficulty_selection_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/difficulty-selection-page.js */ "./component/difficulty-selection-page.js");


(0,_component_difficulty_selection_page_js__WEBPACK_IMPORTED_MODULE_0__.renderDifficultySelectionPage)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map