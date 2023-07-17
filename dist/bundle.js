/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./component/array-сards.js":
/*!**********************************!*\
  !*** ./component/array-сards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cards: () => (/* binding */ cards)\n/* harmony export */ });\nconst cards = [\r\n    {front: '/image/ace_of_spades.svg', back: '/image/reverse_side.svg', id: 1 },\r\n    {front: '/image/king_of_spades.svg', back: '/image/reverse_side.svg', id: 2 },\r\n    {front: '/image/lady_of_spades.svg', back: '/image/reverse_side.svg', id: 3 },\r\n    {front: '/image/jack_of_spades.svg', back: '/image/reverse_side.svg', id: 4 },\r\n    {front: '/image/ten_peaks.svg', back: '/image/reverse_side.svg', id: 5 },\r\n    {front: '/image/nine_peaks.svg', back: '/image/reverse_side.svg', id: 6 },\r\n    {front: '/image/eight_peaks.svg', back: '/image/reverse_side.svg', id: 7 },\r\n    {front: '/image/seven_peaks.svg', back: '/image/reverse_side.svg', id: 8 },\r\n    {front: '/image/six_peaks.svg', back: '/image/reverse_side.svg', id: 9 },\r\n    {front: '/image/ace_of_hearts.svg', back: '/image/reverse_side.svg', id: 10 },\r\n    {front: '/image/king_of_hearts.svg', back: '/image/reverse_side.svg', id: 11 },\r\n    {front: '/image/lady_of_hearts.svg', back: '/image/reverse_side.svg', id: 12 },\r\n    {front: '/image/jack_of_hearts.svg', back: '/image/reverse_side.svg', id: 13 },\r\n    {front: '/image/ten_worms.svg', back: '/image/reverse_side.svg', id: 14 },\r\n    {front: '/image/nine_hearts.svg', back: '/image/reverse_side.svg', id: 15 },\r\n    {front: '/image/eight_hearts.svg', back: '/image/reverse_side.svg', id: 16 },\r\n    {front: '/image/seven_hearts.svg', back: '/image/reverse_side.svg', id: 17 },\r\n    {front: '/image/six_hearts.svg', back: '/image/reverse_side.svg', id: 18 },\r\n    {front: '/image/ace_of_diamonds.svg', back: '/image/reverse_side.svg', id: 19 },\r\n    {front: '/image/king_of_diamonds.svg', back: '/image/reverse_side.svg', id: 20 },\r\n    {front: '/image/lady_of_diamonds.svg', back: '/image/reverse_side.svg', id: 21 },\r\n    {front: '/image/jack_of_diamonds.svg', back: '/image/reverse_side.svg', id: 22 },\r\n    {front: '/image/ten_diamonds.svg', back: '/image/reverse_side.svg', id: 23 },\r\n    {front: '/image/nine_diamonds.svg', back: '/image/reverse_side.svg', id: 24 },\r\n    {front: '/image/eight_diamonds.svg', back: '/image/reverse_side.svg', id: 25 },\r\n    {front: '/image/seven_diamonds.svg', back: '/image/reverse_side.svg', id: 26 },\r\n    {front: '/image/six_diamonds.svg', back: '/image/reverse_side.svg', id: 27 },\r\n    {front: '/image/ace_of_cross.svg', back: '/image/reverse_side.svg', id: 28 },\r\n    {front: '/image/king_of_cross.svg', back: '/image/reverse_side.svg', id: 29 },\r\n    {front: '/image/lady_of_cross.svg', back: '/image/reverse_side.svg', id: 30 },\r\n    {front: '/image/jack_of_cross.svg', back: '/image/reverse_side.svg', id: 31 },\r\n    {front: '/image/ten_crosses.svg', back: '/image/reverse_side.svg', id: 32 },\r\n    {front: '/image/nine_crosses.svg', back: '/image/reverse_side.svg', id: 33 },\r\n    {front: '/image/eight_crosses.svg', back: '/image/reverse_side.svg', id: 34 },\r\n    {front: '/image/seven_crosses.svg', back: '/image/reverse_side.svg', id: 35 },\r\n    {front: '/image/six_crosses.svg', back: '/image/reverse_side.svg', id: 32 },\r\n]\n\n//# sourceURL=webpack://card-game/./component/array-%D1%81ards.js?");

/***/ }),

/***/ "./component/difficulty-selection-page.js":
/*!************************************************!*\
  !*** ./component/difficulty-selection-page.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderDifficultySelectionPage: () => (/* binding */ renderDifficultySelectionPage)\n/* harmony export */ });\n/* harmony import */ var _page_level_difficulty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-level-difficulty.js */ \"./component/page-level-difficulty.js\");\n\r\n\r\nfunction renderDifficultySelectionPage() {\r\n    const appHtml = `\r\n    <div class=\"basic\">\r\n        <form class=\"form\">\r\n            <p class=\"title\">Выберите сложность</p>\r\n            <div class=\"radio-toolbar\">\r\n                <input type=\"radio\" id=\"radio1\" name=\"difficulty\" value=\"easy\">\r\n                <label for=\"radio1\">1</label>\r\n  \r\n                <input type=\"radio\" id=\"radio2\" name=\"difficulty\" value=\"medium\">\r\n                <label for=\"radio2\">2</label>\r\n  \r\n                <input type=\"radio\" id=\"radio3\" name=\"difficulty\" value=\"hard\">\r\n                <label for=\"radio3\">3</label>\r\n            </div>\r\n            <button id=\"start-button\" type=\"submit\" class=\"button\">Старт</button>\r\n        </form>\r\n    </div>\r\n    `;\r\n  \r\n    app.innerHTML = appHtml;\r\n  \r\n    const gameData = {\r\n      difficulty: 'easy', \r\n      numCards: 6 \r\n  };\r\n\r\n  const difficultyInputs = document.querySelectorAll('.radio-toolbar input[name=\"difficulty\"]');\r\n\r\n  const startButton = document.querySelector('#start-button');\r\n\r\n  function updateNumCards() {\r\n      switch (gameData.difficulty) {\r\n          case 'easy':\r\n              gameData.numCards = 6;\r\n              break;\r\n          case 'medium':\r\n              gameData.numCards = 12;\r\n              break;\r\n          case 'hard':\r\n              gameData.numCards = 18;\r\n              break;\r\n      }\r\n  };\r\n\r\n  difficultyInputs.forEach(input => {\r\n      input.addEventListener('change', () => {\r\n          gameData.difficulty = input.value;\r\n          updateNumCards();\r\n      });\r\n  });\r\n  \r\n  startButton.addEventListener('click', () => {\r\n      startGame(gameData.difficulty);\r\n  });\r\n\r\n  function startGame(difficulty) {\r\n      //     // shuffle();// перемешиваем все карточки\r\n      //     // let selectedCards = cards.slice(0, gameData.numCards);\r\n      //     // selectedCards.forEach(card => {\r\n      //     //   card.classList.remove('flipped');\r\n      //     //   card.addEventListener('click', flipCard);};\r\n      (0,_page_level_difficulty_js__WEBPACK_IMPORTED_MODULE_0__.renderPageLevelDifficulty)(difficulty);\r\n\r\n  };\r\n}\r\n  \r\n\r\n\n\n//# sourceURL=webpack://card-game/./component/difficulty-selection-page.js?");

/***/ }),

/***/ "./component/page-level-difficulty.js":
/*!********************************************!*\
  !*** ./component/page-level-difficulty.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPageLevelDifficulty: () => (/* binding */ renderPageLevelDifficulty)\n/* harmony export */ });\n/* harmony import */ var _array_ards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-сards.js */ \"./component/array-сards.js\");\n\r\n\r\nfunction renderPageLevelDifficulty(difficulty) {\r\n    const shuffledCards = shuffle([..._array_ards_js__WEBPACK_IMPORTED_MODULE_0__.cards, ..._array_ards_js__WEBPACK_IMPORTED_MODULE_0__.cards]);\r\n    const app = document.querySelector('#app');\r\n\r\n    const appHtml = `\r\n      <div class=\"page-maps\">\r\n        <div class=\"page_header\">\r\n          <div class=\"time\">\r\n            <div class=\"time-value\">\r\n              <p class=\"time-min\">min</p>\r\n              <p class=\"time-sec\">sec</p>\r\n            </div>\r\n            <div class=\"time-figure\">00.00</div>\r\n          </div>\r\n          <div>\r\n            <button id=\"restart-button\" class=\"button-newgame\">Начать заново</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"cards\">\r\n        ${renderCards(difficulty, shuffledCards)}\r\n        </div>\r\n      </div>\r\n    `;\r\n  \r\n    app.innerHTML = appHtml;\r\n\r\n    const cardElements = document.querySelectorAll('.card');\r\n    cardElements.forEach(card => {\r\n      card.addEventListener('click', flipCard);\r\n    });\r\n\r\n    let memoryTimeoutId; \r\n    memoryTimeoutId = setTimeout(() => {\r\n        cardElements.forEach(card => {\r\n          card.classList.remove('flipped');\r\n        });\r\n      }, 5000);\r\n\r\n    cardElements.forEach(card => {\r\n      card.classList.add('flipped');\r\n    });\r\n\r\n    const startTime = new Date().getTime();\r\n  \r\n    const timerValue = document.querySelector('.time-figure');\r\n    const timerInterval = setInterval(() => {\r\n      const currentTime = new Date().getTime();\r\n      const elapsedTime = currentTime - startTime;\r\n      const minutes = Math.floor(elapsedTime / 60000);\r\n      const seconds = Math.floor((elapsedTime % 60000) / 1000);\r\n      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;\r\n      timerValue.textContent = formattedTime;\r\n    }, 1000);\r\n  \r\n    const restartButton = document.querySelector('#restart-button');\r\n    restartButton.addEventListener('click', () => {\r\n      clearInterval(timerInterval);\r\n      clearTimeout(memoryTimeoutId);\r\n      cardElements.forEach(card => {\r\n        card.classList.remove('flipped');\r\n      });\r\n      renderPageLevelDifficulty(difficulty);\r\n    });\r\n\r\nfunction renderCards(difficulty, cards) {\r\n  const numCards = getNumCards(difficulty) * 2;\r\n  const selectedCards = cards.slice(0,  Math.floor(numCards / 2));\r\n  const duplicatedCards = [...selectedCards, ...selectedCards];\r\n  const shuffledCards = shuffle(duplicatedCards);\r\n  let cardsHtml = '';\r\n  for (let i = 0; i < shuffledCards.length; i++) {\r\n    const card = shuffledCards[i];\r\n    const cardHtml = `\r\n    <div class=\"card\">\r\n      <div class=\"card__back\">\r\n        <img src=\"${card.front}\" alt=\"\">\r\n      </div>\r\n      <div class=\"card__front\">\r\n        <img src=\"${card.back}\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  `;\r\n    cardsHtml += cardHtml;\r\n  }\r\n  return cardsHtml;\r\n}\r\n}\r\n\r\nfunction shuffle(array) {\r\n  let currentIndex = array.length, randomIndex;\r\n\r\n  while (currentIndex != 0) {\r\n    randomIndex = Math.floor(Math.random() * currentIndex);\r\n    currentIndex--;\r\n\r\n    [array[currentIndex], array[randomIndex]] = [\r\n      array[randomIndex], array[currentIndex]];\r\n  }\r\n  return array;\r\n}\r\n\r\nfunction getNumCards(difficulty) {\r\n  switch (difficulty) {\r\n    case 'easy':\r\n      return 6;\r\n    case 'medium':\r\n      return 12;\r\n    case 'hard':\r\n      return 18;\r\n    default:\r\n      return 6;\r\n  }\r\n}\r\n\r\nfunction flipCard(event) {\r\n    const currentCard = event.currentTarget\r\n\r\n    if (\r\n        currentCard.classList.contains('flipped') ||\r\n        document.querySelectorAll('.flipped').length === 2\r\n    ) {\r\n        return\r\n    }\r\n\r\n    currentCard.classList.toggle('flipped')\r\n\r\n    const flippedCards = document.querySelectorAll('.flipped')\r\n\r\n    if (flippedCards.length === 2) {\r\n        const flippedCard1 = flippedCards[0]\r\n        const flippedCard2 = flippedCards[1]\r\n\r\n        if (flippedCard1.dataset.cardName === flippedCard2.dataset.cardName) {\r\n            alert('Вы победили!');\r\n        } else {\r\n            setTimeout(() => {\r\n                flippedCards.forEach((card) => {\r\n                    card.classList.add('flipped');\r\n                });\r\n                alert('Вы проиграли!');\r\n            }, 1000);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://card-game/./component/page-level-difficulty.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_difficulty_selection_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/difficulty-selection-page.js */ \"./component/difficulty-selection-page.js\");\n\r\n\r\n(0,_component_difficulty_selection_page_js__WEBPACK_IMPORTED_MODULE_0__.renderDifficultySelectionPage)();\n\n//# sourceURL=webpack://card-game/./index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;