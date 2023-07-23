/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./component/array-сards.ts":
/*!**********************************!*\
  !*** ./component/array-сards.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards)
/* harmony export */ });
var cards = [
    {
        front: "/static/image/ace_of_spades.svg",
        back: "/static/image/reverse_side.svg",
        id: 1,
    },
    {
        front: "/static/image/king_of_spades.svg",
        back: "/static/image/reverse_side.svg",
        id: 2,
    },
    {
        front: "/static/image/lady_of_spades.svg",
        back: "/static/image/reverse_side.svg",
        id: 3,
    },
    {
        front: "/static/image/jack_of_spades.svg",
        back: "/static/image/reverse_side.svg",
        id: 4,
    },
    {
        front: "/static/image/ten_peaks.svg",
        back: "/static/image/reverse_side.svg",
        id: 5,
    },
    {
        front: "/static/image/nine_peaks.svg",
        back: "/static/image/reverse_side.svg",
        id: 6,
    },
    {
        front: "/static/image/eight_peaks.svg",
        back: "/static/image/reverse_side.svg",
        id: 7,
    },
    {
        front: "/static/image/seven_peaks.svg",
        back: "/static/image/reverse_side.svg",
        id: 8,
    },
    {
        front: "/static/image/six_peaks.svg",
        back: "/static/image/reverse_side.svg",
        id: 9,
    },
    {
        front: "/static/image/ace_of_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 10,
    },
    {
        front: "/static/image/king_of_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 11,
    },
    {
        front: "/static/image/lady_of_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 12,
    },
    {
        front: "/static/image/jack_of_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 13,
    },
    {
        front: "/static/image/ten_worms.svg",
        back: "/static/image/reverse_side.svg",
        id: 14,
    },
    {
        front: "/static/image/nine_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 15,
    },
    {
        front: "/static/image/eight_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 16,
    },
    {
        front: "/static/image/seven_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 17,
    },
    {
        front: "/static/image/six_hearts.svg",
        back: "/static/image/reverse_side.svg",
        id: 18,
    },
    {
        front: "/static/image/ace_of_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 19,
    },
    {
        front: "/static/image/king_of_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 20,
    },
    {
        front: "/static/image/lady_of_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 21,
    },
    {
        front: "/static/image/jack_of_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 22,
    },
    {
        front: "/static/image/ten_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 23,
    },
    {
        front: "/static/image/nine_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 24,
    },
    {
        front: "/static/image/eight_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 25,
    },
    {
        front: "/static/image/seven_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 26,
    },
    {
        front: "/static/image/six_diamonds.svg",
        back: "/static/image/reverse_side.svg",
        id: 27,
    },
    {
        front: "/static/image/ace_of_cross.svg",
        back: "/static/image/reverse_side.svg",
        id: 28,
    },
    {
        front: "/static/image/king_of_cross.svg",
        back: "/static/image/reverse_side.svg",
        id: 29,
    },
    {
        front: "/static/image/lady_of_cross.svg",
        back: "/static/image/reverse_side.svg",
        id: 30,
    },
    {
        front: "/static/image/jack_of_cross.svg",
        back: "/static/image/reverse_side.svg",
        id: 31,
    },
    {
        front: "/static/image/ten_crosses.svg",
        back: "/static/image/reverse_side.svg",
        id: 32,
    },
    {
        front: "/static/image/nine_crosses.svg",
        back: "/static/image/reverse_side.svg",
        id: 33,
    },
    {
        front: "/static/image/eight_crosses.svg",
        back: "/static/image/reverse_side.svg",
        id: 34,
    },
    {
        front: "/static/image/seven_crosses.svg",
        back: "/static/image/reverse_side.svg",
        id: 35,
    },
    {
        front: "/static/image/six_crosses.svg",
        back: "/static/image/reverse_side.svg",
        id: 32,
    },
];


/***/ }),

/***/ "./component/difficulty-selection-page.ts":
/*!************************************************!*\
  !*** ./component/difficulty-selection-page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDifficultySelectionPage: () => (/* binding */ renderDifficultySelectionPage)
/* harmony export */ });
/* harmony import */ var _page_level_difficulty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-level-difficulty */ "./component/page-level-difficulty.ts");

function renderDifficultySelectionPage() {
    var app = document.getElementById("app");
    var appHtml = "<div class=\"basic\">\n        <form class=\"basic_form\">\n            <p class=\"basic_title\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</p>\n            <div class=\"basic_radio-toolbar\">\n                <input type=\"radio\" id=\"radio1\" name=\"difficulty\" value=\"easy\">\n                <label for=\"radio1\">1</label>\n  \n                <input type=\"radio\" id=\"radio2\" name=\"difficulty\" value=\"medium\">\n                <label for=\"radio2\">2</label>\n  \n                <input type=\"radio\" id=\"radio3\" name=\"difficulty\" value=\"hard\">\n                <label for=\"radio3\">3</label>\n            </div>\n            <button id=\"start-button\" type=\"submit\" class=\"button\">\u0421\u0442\u0430\u0440\u0442</button>\n        </form>\n    </div>";
    app.innerHTML = appHtml;
    var gameData = {
        difficulty: "easy",
        numCards: 6,
    };
    var difficultyInputs = document.querySelectorAll('.basic_radio-toolbar input[name="difficulty"]');
    var startButton = document.querySelector("#start-button");
    function updateNumCards() {
        switch (gameData.difficulty) {
            case "easy":
                gameData.numCards = 6;
                break;
            case "medium":
                gameData.numCards = 12;
                break;
            case "hard":
                gameData.numCards = 18;
                break;
        }
    }
    difficultyInputs.forEach(function (input) {
        input.addEventListener("change", function () {
            var value = input.value;
            gameData.difficulty = value;
            updateNumCards();
        });
    });
    startButton.addEventListener("click", function () {
        startGame(gameData.difficulty);
    });
    function startGame(difficulty) {
        (0,_page_level_difficulty__WEBPACK_IMPORTED_MODULE_0__.renderPageLevelDifficulty)(difficulty);
    }
}


/***/ }),

/***/ "./component/page-level-difficulty.ts":
/*!********************************************!*\
  !*** ./component/page-level-difficulty.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPageLevelDifficulty: () => (/* binding */ renderPageLevelDifficulty)
/* harmony export */ });
/* harmony import */ var _array_ards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-сards */ "./component/array-сards.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function renderPageLevelDifficulty(difficulty) {
    var shuffledCards = shuffle(__spreadArray(__spreadArray([], _array_ards__WEBPACK_IMPORTED_MODULE_0__.cards, true), _array_ards__WEBPACK_IMPORTED_MODULE_0__.cards, true));
    var app = document.getElementById("app");
    var appHtml = "\n      <div class=\"page-maps\">\n        <div class=\"page-maps_header\">\n          <div class=\"page-maps_time\">\n            <div class=\"page-maps_time-value\">\n              <p class=\"page-maps_time-min\">min</p>\n              <p class=\"page-maps_time-sec\">sec</p>\n            </div>\n            <div class=\"page-maps_time-figure\">00.00</div>\n          </div>\n          <div>\n            <button id=\"restart-button\" class=\"page-maps_button-newgame\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n          </div>\n        </div>\n        <div class=\"cards\">\n        ".concat(renderCards(difficulty, shuffledCards), "\n        </div>\n      </div>\n    ");
    app.innerHTML = appHtml;
    var cardElements = document.querySelectorAll(".card");
    cardElements.forEach(function (card) {
        card.addEventListener("click", function (event) {
            return flipCard(event, difficulty, timerInterval);
        });
    });
    cardElements.forEach(function (card) {
        card.classList.remove("flipped");
    });
    var memoryTimeoutId = setTimeout(function () {
        cardElements.forEach(function (card) {
            card.classList.add("flipped");
        });
    }, 5000);
    var startTime = new Date().getTime();
    var timerValue = document.querySelector(".page-maps_time-figure");
    var timerInterval = setInterval(function () {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;
        var minutes = Math.floor(elapsedTime / 60000);
        var seconds = Math.floor((elapsedTime % 60000) / 1000);
        var formattedTime = "".concat(String(minutes).padStart(2, "0"), ":").concat(String(seconds).padStart(2, "0"));
        timerValue.textContent = formattedTime;
    }, 1000);
    var restartButton = document.querySelector("#restart-button");
    restartButton.addEventListener("click", function () {
        clearInterval(timerInterval);
        clearTimeout(memoryTimeoutId);
        cardElements.forEach(function (card) {
            card.classList.add("flipped");
        });
        renderPageLevelDifficulty(difficulty);
    });
    function renderCards(difficulty, cards) {
        var numCards = getNumCards(difficulty) * 2;
        var selectedCards = cards.slice(0, Math.floor(numCards / 2));
        var duplicatedCards = __spreadArray(__spreadArray([], selectedCards, true), selectedCards, true);
        var shuffledCards = shuffle(duplicatedCards);
        var cardsHtml = "";
        for (var i = 0; i < shuffledCards.length; i++) {
            var card = shuffledCards[i];
            var cardHtml = "\n    <div data-id=\"".concat(card.id, "\" class=\"card\">\n      <div class=\"card__back\">\n        <img src=\"").concat(card.front, "\" alt=\"\">\n      </div>\n      <div class=\"card__front\">\n        <img src=\"").concat(card.back, "\" alt=\"\">\n      </div>\n    </div>\n  ");
            cardsHtml += cardHtml;
        }
        return cardsHtml;
    }
}
function shuffle(array) {
    var _a;
    var currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        _a = [
            array[randomIndex],
            array[currentIndex],
        ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array;
}
function getNumCards(difficulty) {
    switch (difficulty) {
        case "easy":
            return 6;
        case "medium":
            return 12;
        case "hard":
            return 18;
        default:
            return 6;
    }
}
var flippedFirstCardId = "";
var cardsCount = 0;
function flipCard(event, difficulty, timerInterval) {
    var _a, _b;
    var currentCard = event.currentTarget;
    var cardId = currentCard.dataset.id;
    if (!currentCard.classList.contains("flipped")) {
        return;
    }
    currentCard.classList.remove("flipped");
    cardsCount += 1;
    var totalCards = getNumCards(difficulty) * 2;
    // клик на первую карту, сохраняет ее
    if (flippedFirstCardId === "") {
        flippedFirstCardId = cardId;
    }
    else {
        if (flippedFirstCardId === cardId) {
            flippedFirstCardId = "";
            if (cardsCount === totalCards) {
                var formattedTime = (_a = document.querySelector(".page-maps_time-figure")) === null || _a === void 0 ? void 0 : _a.textContent;
                clearInterval(timerInterval);
                renderfinalPage(true, formattedTime);
            }
        }
        else {
            var formattedTime = (_b = document.querySelector(".page-maps_time-figure")) === null || _b === void 0 ? void 0 : _b.textContent;
            clearInterval(timerInterval);
            renderfinalPage(false, formattedTime);
        }
    }
    function renderfinalPage(isPageVictory, formattedTime) {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("darken");
        var app = document.getElementById("app");
        var appHtml = "<div class=\"page-final\">\n      <form class=\"page-final_form\">\n          <div> ".concat(isPageVictory
            ? '<img src="static/image/victory.svg" alt="победа">'
            : '<img src="static/image/dead.svg" alt="проигрыш">', "\n          </div>\n          <p class=\"page-final_title\">").concat(isPageVictory ? "Вы выиграли!" : "Вы проиграли!", "</p>\n          <p class=\"page-final_time-value\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F</p>\n          <div class=\"page-final_time-figure\">").concat(formattedTime, "</div>\n        <div>\n          <button id=\"start-button\" type=\"submit\" class=\"button\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n      </form>\n    </div>");
        app.innerHTML = appHtml;
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
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_difficulty_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/difficulty-selection-page */ "./component/difficulty-selection-page.ts");

(0,_component_difficulty_selection_page__WEBPACK_IMPORTED_MODULE_0__.renderDifficultySelectionPage)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map