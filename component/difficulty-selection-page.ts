import { renderPageLevelDifficulty } from "./page-level-difficulty";

export function renderDifficultySelectionPage() {
  const app: HTMLElement = document.getElementById("app")!;
  const appHtml = `<div class="basic">
        <form class="basic_form">
            <p class="basic_title">Выберите сложность</p>
            <div class="basic_radio-toolbar">
                <input type="radio" id="radio1" name="difficulty" value="easy">
                <label for="radio1">1</label>
  
                <input type="radio" id="radio2" name="difficulty" value="medium">
                <label for="radio2">2</label>
  
                <input type="radio" id="radio3" name="difficulty" value="hard">
                <label for="radio3">3</label>
            </div>
            <button id="start-button" type="submit" class="button">Старт</button>
        </form>
    </div>`;

  app.innerHTML = appHtml;

  const gameData = {
    difficulty: "easy",
    numCards: 3,
  };

  const difficultyInputs = document.querySelectorAll(
    '.basic_radio-toolbar input[name="difficulty"]',
  );

  function updateNumCards() {
    switch (gameData.difficulty) {
      case "easy":
        gameData.numCards = 3;
        break;
      case "medium":
        gameData.numCards = 6;
        break;
      case "hard":
        gameData.numCards = 9;
        break;
    }
  }

  difficultyInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const value = (input as HTMLInputElement).value;
      gameData.difficulty = value;
      updateNumCards();
    });
  });

  const startButton: HTMLButtonElement =
    document.querySelector("#start-button")!;

  startButton.addEventListener("click", () => {
    startGame(gameData.difficulty);
  });

  function startGame(difficulty: string) {
    renderPageLevelDifficulty(difficulty);
  }
}
