import {cards} from "./array-сards.js";

export function renderPageLevelDifficulty(difficulty) {
    const shuffledCards = shuffle([...cards, ...cards]);
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