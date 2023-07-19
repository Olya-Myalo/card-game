import { cards } from "./array-сards";

export function renderPageLevelDifficulty(difficulty: string) {
  const shuffledCards = shuffle([...cards, ...cards]);

  const app: HTMLElement = document.getElementById("app")!;
  const appHtml: string = `
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
  cardElements.forEach((card: Element) => {
    card.addEventListener("click", flipCard);
  });

  let memoryTimeoutId: any = [];
  memoryTimeoutId = setTimeout(() => {
    cardElements.forEach((card) => {
      card.classList.remove('flipped');
    }, 5000);
  });

  cardElements.forEach((card) => {
    card.classList.add('flipped');
  });

  const startTime = new Date().getTime();

  const timerValue = document.querySelector(".time-figure");
  const timerInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
    (timerValue as HTMLElement).textContent = formattedTime;
  }, 1000);

  const restartButton: HTMLButtonElement =
    document.querySelector("#restart-button")!;
  restartButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    clearTimeout(memoryTimeoutId);
    cardElements.forEach((card) => {
      card.classList.remove('flipped');
    });
    renderPageLevelDifficulty(difficulty);
  });

  function renderCards(difficulty: string, cards: any) {
    const numCards = getNumCards(difficulty) * 2;
    const selectedCards = cards.slice(0, Math.floor(numCards / 2));
    const duplicatedCards = [...selectedCards, ...selectedCards];
    const shuffledCards = shuffle(duplicatedCards);
    let cardsHtml = "";
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

function shuffle(array: any) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function getNumCards(difficulty: string) {
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

function flipCard(event: any) {
  const currentCard = event.currentTarget as HTMLDivElement;

  if (
    currentCard.classList.contains('flipped') ||
    document.querySelectorAll('.flipped').length === 2
  ) {
    return;
  }

  currentCard.classList.toggle('flipped');

  const flippedCards = document.querySelectorAll('.flipped');

  if (flippedCards.length === 2) {
    const flippedCard1 = flippedCards[0] as HTMLDivElement;
    const flippedCard2 = flippedCards[1] as HTMLDivElement;

    if (flippedCard1.dataset.cardId === flippedCard2.dataset.cardId) {
      renderfinalPage();
    } else {
      setTimeout(() => {
        flippedCards.forEach((card) => {
          card.classList.add('flipped');
        });
        alert("Вы проиграли!");
      }, 1000);
    }
  }
  function renderfinalPage() {
    const isPageVictory = true;
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("darken");
    const app: HTMLElement = document.getElementById("app")!;
    const appHtml: string = `<div class="final">
          <form class="final-form">
              <div> ${
                isPageVictory
                  ? '<img src="static/image/victory.svg" alt="победа">'
                  : '<img src="static/image/dead.svg" alt="проигрыш">'
              }
              </div>
              <p class="final-form-title">${
                isPageVictory ? "Вы выиграли!" : "Вы проиграли!"
              }</p>
              <p class="total-time-value">Затраченное время</p>
              <div class="total-time-figure">00.00</div>
            <div>
              <button id="start-button" type="submit" class="button">Играть снова</button>
          </form>
      </div>`;
  
    app.innerHTML = appHtml;
  }
}

// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//     if (lockBoard) return;
//     if (this === firstCard) return;
//     this.classList.add('flip');

//     if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;
//         return;
//     }

//     secondCard = this;
//     checkForMatch();
//     if (document.querySelectorAll('.memory-card').length == document.querySelectorAll('.memory-card.flip').length) {
//       console.log("game over");
//       document.querySelectorAll('.memory-card.flip').forEach(c => c.classList.remove('flip'));
//     }
// }
// function checkForMatch() {

//     let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//     isMatch ? disableCards() : unflipCards();

// }
// function disableCards() {

//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);

//     resetBoard();

// }
// function unflipCards() {

//     lockBoard = true;

//     setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');

//         resetBoard();

//     }, 1500);

// }

// function resetBoard() {

//     [hasFlippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null, null];

// }

// (function shuffle() {

//     cards.forEach(card => {
//         let ramdomPos = Math.floor(Math.random() * 12);
//         card.style.order = ramdomPos;
//     });

// })();

// cards.forEach(card => card.addEventListener('click', flipCard));