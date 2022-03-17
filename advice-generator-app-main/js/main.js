const btn = document.querySelector('.btn');
const id = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');

function onBtnClick() {
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(response => response.json())
        .then(jsonData => {
            id.innerText = 'advice #' + jsonData['slip']['id'];
            advice.innerText = '"' + jsonData['slip']['advice'] + '"';
        });
}

btn.addEventListener('click', onBtnClick);

