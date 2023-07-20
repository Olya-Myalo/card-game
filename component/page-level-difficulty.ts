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

  const cardElements = document.querySelectorAll(".card");
  cardElements.forEach((card: Element) => {
    card.addEventListener("click", (event) => flipCard(event, difficulty));
  });

  cardElements.forEach((card) => {
    card.classList.remove("flipped");
  });

  let memoryTimeoutId: any;
  memoryTimeoutId = setTimeout(() => {
    cardElements.forEach((card) => {
      card.classList.add("flipped");
    });
  }, 5000);

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
      card.classList.add("flipped");
    });
    renderPageLevelDifficulty(difficulty);
  });

  function renderCards(difficulty: string, cards: Array<string>) {
    const numCards = getNumCards(difficulty) * 2;
    const selectedCards = cards.slice(0, Math.floor(numCards / 2));
    const duplicatedCards = [...selectedCards, ...selectedCards];
    const shuffledCards = shuffle(duplicatedCards);
    let cardsHtml = "";
    for (let i = 0; i < shuffledCards.length; i++) {
      const card = shuffledCards[i];
      const cardHtml = `
    <div data-id="${card.id}" class="card">
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

function shuffle(array: Array<any>) {
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

let flippedFirstCardId: string = "";
let cardsCount: number = 0;
function flipCard(event: Event, difficulty: string) {
  const currentCard = event.currentTarget as HTMLDivElement;
  const cardId = currentCard.dataset.id as string;
  let totalTime;
  if (!currentCard.classList.contains("flipped")) {
    return;
  }
  currentCard.classList.remove("flipped");
  cardsCount += 1;
  const totalCards = getNumCards(difficulty) * 2;
  // клик на первую карту, сохраняет ее
  if (flippedFirstCardId === "") {
    flippedFirstCardId = cardId;
  } else {
    if (flippedFirstCardId === cardId) {
      flippedFirstCardId = "";
      if (cardsCount === totalCards) {
        renderfinalPage(totalTime, true);
      }
    } else {
      renderfinalPage(totalTime, false);
    }
  }

  function renderfinalPage(totalTime: any, isPageVictory: boolean) {
    let timerInterval;
    totalTime = clearInterval(timerInterval);
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
          <div class="total-time-figure">${totalTime}</div>
        <div>
          <button id="start-button" type="submit" class="button">Играть снова</button>
      </form>
    </div>`;
    app.innerHTML = appHtml;
  }
}
