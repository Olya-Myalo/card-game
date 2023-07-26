import { cards } from "./array-сards";

export function renderPageLevelDifficulty(difficulty: string) {
  const shuffledCards = shuffle([...cards, ...cards]);

  const app: HTMLElement = document.getElementById("app")!;
  const appHtml: string = `
      <div class="page-maps">
        <div class="page-maps_header">
          <div class="page-maps_time">
            <div class="page-maps_time-value">
              <p class="page-maps_time-min">min</p>
              <p class="page-maps_time-sec">sec</p>
            </div>
            <div class="page-maps_time-figure">00.00</div>
          </div>
          <div>
            <button id="restart-button" class="page-maps_button-newgame">Начать заново</button>
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
    card.addEventListener("click", (event) =>
      flipCard(event, difficulty, timerInterval),
    );
  });

  cardElements.forEach((card) => {
    card.classList.remove("flipped");
  });

  const memoryTimeoutId = setTimeout(() => {
    cardElements.forEach((card) => {
      card.classList.add("flipped");
    });
  }, 5000);

  const startTime = new Date().getTime();

  const timerValue = document.querySelector(".page-maps_time-figure");
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
  interface Card {
    id: number;
    front: string;
    back: string;
  }
  function renderCards(difficulty: string, cards: Array<Card>) {
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

export function shuffle<T>(array: Array<T>): Array<T> {
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

export function getNumCards(difficulty: string) {
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
function flipCard(
  event: Event,
  difficulty: string,
  timerInterval: ReturnType<typeof setInterval>,
) {
  const currentCard = event.currentTarget as HTMLDivElement;
  const cardId = currentCard.dataset.id as string;
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
        const formattedTime = document.querySelector(".page-maps_time-figure")
          ?.textContent;
        clearInterval(timerInterval);
        renderFinalPage(true, formattedTime);
      }
    } else {
      const formattedTime = document.querySelector(".page-maps_time-figure")
        ?.textContent;
      clearInterval(timerInterval);
      renderFinalPage(false, formattedTime);
    }
  }

  function renderFinalPage(
    isPageVictory: boolean,
    formattedTime: string | null | undefined,
  ) {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("darken");
    const app: HTMLElement = document.getElementById("app")!;
    const appHtml: string = `<div class="page-final">
      <form class="page-final_form">
          <div> ${
            isPageVictory
              ? '<img src="static/image/victory.svg" alt="победа">'
              : '<img src="static/image/dead.svg" alt="проигрыш">'
          }
          </div>
          <p class="page-final_title">${
            isPageVictory ? "Вы выиграли!" : "Вы проиграли!"
          }</p>
          <p class="page-final_time-value">Затраченное время</p>
          <div class="page-final_time-figure">${formattedTime}</div>
        <div>
          <button id="start-button" type="submit" class="button">Играть снова</button>
      </form>
    </div>`;
    app.innerHTML = appHtml;
  }
}
