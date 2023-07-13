import { renderPageFirstLevelDifficulty } from "./page-first-level-difficulty.js";
import { renderPageSecondLevelDifficulty } from "./page-second-level-difficulty.js";
import { renderPageThirdLevelDifficulty } from "./page-third-level-difficulty.js";

export function renderDifficultySelectionPage() {
    const appHtml = `
    <div class="basic">
        <form class="form">
            <p class="title">Выберите сложность</p>
            <div class="radio-toolbar">
                <input type="radio" id="radio1" name="radios" value="1">
                <label for="radio1">1</label>
  
                <input type="radio" id="radio2" name="radios" value="2">
                <label for="radio2">2</label>
  
                <input type="radio" id="radio3" name="radios" value="3">
                <label for="radio3">3</label>
            </div>
            <button type="submit" class="button">Старт</button>
        </form>
    </div>
    `;
  
    app.innerHTML = appHtml;
  
    const form = document.querySelector("form");
  
    const oneLevel = document.getElementById("radio1");
    const twoLevel = document.getElementById("radio2");
    const threeLevel = document.getElementById("radio3");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
    
      if (oneLevel.checked) {
        renderPageFirstLevelDifficulty();
      } else if (twoLevel.checked) {
        renderPageSecondLevelDifficulty();
      } else if (threeLevel.checked) {
        renderPageThirdLevelDifficulty();
      }
    });
  }
  

