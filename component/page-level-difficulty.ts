import { cards } from "./array-сards";
import { renderDifficultySelectionPage } from "./difficulty-selection-page";

export function renderPageLevelDifficulty(difficulty: string) {
  const shuffledCards = shuffle([...cards, ...cards]);

  const app: HTMLElement = document.getElementById("app")!;
  const appHtml = `
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

            <div class="modal" id="modal" style="display: none;">
              <div class="modal_basic">
              <div class="modal_content2">
                <div id="modalImage" class="modal_img">
                </div>
                  <p class="modal_text">текст</p>
                  <p class="modal_time-value">Затраченное время</p>
                    <div class="modal_time-figure">00:00
                    </div>
                    <button id="start-button" type="submit" class="button">Играть снова</button>
              </div>
              </div>
            </div>

        <div class="cards">
        ${renderCards(difficulty, shuffledCards)}
        </div>
      </div>
    `;

  app.innerHTML = appHtml;

  const startButton: HTMLButtonElement =
    document.querySelector("#start-button")!;

  startButton.addEventListener("click", () => {
    renderDifficultySelectionPage();
  });

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
      return 3;
    case "medium":
      return 6;
    case "hard":
      return 9;
    default:
      return 3;
  }
}

let flippedFirstCardId = "";
let cardsCount = 0;

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
        showModal(true, formattedTime);
      }
    } else {
      const formattedTime = document.querySelector(".page-maps_time-figure")
        ?.textContent;
      clearInterval(timerInterval);
      showModal(false, formattedTime);
    }
  }
}

function showModal(
  isPageVictory: boolean,
  formattedTime: string | null | undefined,
) {
  const modal: HTMLElement | null = document.getElementById("modal");
  if (modal) {
    modal.style.display = "block";

    const modalTime: HTMLElement | null =
      modal.querySelector(".modal_time-figure");
    if (modalTime) {
      modalTime.textContent = formattedTime !== undefined ? formattedTime : ""; // Проверяем на неопределенность перед присвоением
    }

    const modalText: HTMLElement | null = modal.querySelector(".modal_text");
    if (modalText) {
      modalText.textContent = isPageVictory ? "Вы выиграли!" : "Вы проиграли!";
    }

    const modalElement: HTMLElement | null =
      document.getElementById("modalImage");
    if (modalElement) {
      modalElement.classList.toggle("modal_imgVictory", isPageVictory);
      modalElement.classList.toggle("modal_imgDead", !isPageVictory);
    }
  }
}
