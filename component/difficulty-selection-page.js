import { renderPageLevelDifficulty } from "./page-level-difficulty.js";

export function renderDifficultySelectionPage() {
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
      renderPageLevelDifficulty(difficulty);

  };
}
  

