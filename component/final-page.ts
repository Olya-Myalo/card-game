export function renderfinalPage() {
  let body = document.getElementsByTagName("body")[0];
  body.classList.add("darken");
  const app: HTMLElement = document.getElementById("app")!;
  const appHtml: string =  `<div class="final">
        <form class="final-form">
            <div>
                <img src="image/victory.svg" alt="победа">
            </div>
            <p class="final-form-title">Вы выиграли!</p>
            <p class="total-time-value">Затраченное время</p>
            <div class="total-time-figure">00.00</div>
          <div>
            <button id="start-button" type="submit" class="button">Играть снова</button>
        </form>
    </div>`;

  app.innerHTML = appHtml;
}
