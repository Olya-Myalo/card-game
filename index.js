
function difficultySelectionPage () {
    const appHtml = `
    <div class="basic">
    <tr>
        <div class="title">Выберите сложность</div>
            <div class="radio-toolbar"> 
                <input type="radio" id="radio1" name="radios" value="1" checked>
                <label for="radio1">1</label>
                
                <input type="radio" id="radio2" name="radios" value="2">
                <label for="radio2">2</label>
                
                <input type="radio" id="radio3" name="radios" value="3">
                <label for="radio3">3</label>
            </div> 
        <button type="button" class="button">Старт</button>
    </tr>
</div>
    `

    app.innerHTML = appHtml;


}
difficultySelectionPage();
