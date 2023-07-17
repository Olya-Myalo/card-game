
export function renderPageLevelDifficulty(difficulty) {
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
                <div class="reverse_side">
                <img src="image/ace_of_spades.svg" alt="Туз пики">
                </div>
                <div>
                <img src="image/king_of_spades.svg" alt="Король пики">
                </div>
                <div>
                <img src="image/lady_of_spades.svg" alt="Дама пики">
                </div>
                <div>
                <img src="image/jack_of_spades.svg" alt="Валет пики">
                </div>
                <div>
                <img src="image/ten_peaks.svg" alt="10 пики">
                </div>
                <div>
                    <img src="image/nine_peaks.svg" alt="9 пики">
                </div>
                <div>
                    <img src="image/eight_peaks.svg" alt="8 пики">
                </div>
                <div>
                    <img src="image/seven_peaks.svg" alt="7 пики">
                </div>
                <div>
                    <img src="image/six_peaks.svg" alt="6 пики">
                </div>

                <div>
                    <img src="image/ace_of_hearts.svg" alt="Туз черви">
                </div>
                <div>
                    <img src="image/king_of_hearts.svg" alt="Король черви">
                </div>
                <div>
                    <img src="image/lady_of_hearts.svg" alt="Дама черви">
                </div>
                <div>
                    <img src="image/jack_of_hearts.svg" alt="Валет черви">
                </div>
                <div>
                    <img src="image/ten_worms.svg" alt="10 черви">
                </div>
                <div>
                    <img src="image/nine_hearts.svg" alt="9 черви">
                </div>
                <div>
                    <img src="image/eight_hearts.svg" alt="8 черви">
                </div>
                <div>
                    <img src="image/seven_hearts.svg" alt="7 черви">
                </div>
                <div>
                    <img src="image/six_hearts.svg" alt="6 черви">
                </div>
                <div>
                    <img src="image/ace_of_diamonds.svg" alt="Туз бубны">
                </div>
                <div>
                    <img src="image/king_of_diamonds.svg" alt="Король бубны">
                </div>
                <div>
                    <img src="image/lady_of_diamonds.svg" alt="Дама бубны">
                </div>
                <div>
                    <img src="image/jack_of_diamonds.svg" alt="Валет бубны">
                </div>
                <div>
                    <img src="image/ten_diamonds.svg" alt="10 бубны">
                </div>
                <div>
                    <img src="image/nine_diamonds.svg" alt="9 бубны">
                </div>
                <div>
                    <img src="image/eight_diamonds.svg" alt="8 бубны">
                </div>
                <div>
                    <img src="image/seven_diamonds.svg" alt="7 бубны">
                </div>
                <div>
                    <img src="image/six_diamonds.svg" alt="6 бубны">
                </div>
                <div>
                    <img src="image/ace_of_cross.svg" alt="Туз крести">
                </div>
                <div>
                    <img src="image/king_of_cross.svg" alt="Король крести">
                </div>
                <div>
                    <img src="image/lady_of_cross.svg" alt="Дама крести">
                </div>
                <div>
                    <img src="image/jack_of_cross.svg" alt="Валет крести">
                </div>
                <div>
                    <img src="image/ten_crosses.svg" alt="10 крести">
                </div>
                <div>
                    <img src="image/nine_crosses.svg" alt="9 крести">
                </div>
                <div>
                    <img src="image/eight_crosses.svg" alt="8 крести">
                </div>
                <div class="seven_crosses">
                    <img src="image/seven_crosses.svg" alt="7 крести">
                </div>
                <div>
                    <img src="image/six_crosses.svg" class="reverse_side" alt="6 крести">
                </div>
                `

                app.innerHTML = appHtml;


}