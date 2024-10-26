let imageNameElement = document.getElementById('imageName');
let boxes = document.querySelectorAll('.image-box');
let messageElement = document.getElementById('message');
let scoreElement = document.getElementById('score');
let startGameButton = document.getElementById('startGame');

let images = ['olma', 'nok', 'banan', 'uzum', 'qulupnay', 'mandarin', 'ananas', 'shaftoli', 'gilos', 'apelsin'];

let imageFiles = {
    'olma': 'img/olma.jpg',
    'nok': 'img/nok.jpg',
    'banan': 'img/banan.jpg',
    'uzum': 'img/uzum.jpg',
    'qulupnay': 'img/qulupnay.jpg',
    'mandarin': 'img/mandarin.jpg',
    'ananas': 'img/ananas.jpg',
    'shaftoli': 'img/shaftoli.jpg',
    'gilos': 'img/gilos.jpg',
    'apelsin': 'img/apelsin.jpg',
}

let score = 0;
let correctImage;

function startGame() {
    // score = 0;
    // scoreElement.textContent = score;
    nextRound();
}

function nextRound() {
    messageElement.textContent = '';

    //Tasodifiy rasm tanlash
    let randomImageName = images[Math.floor(Math.random() * images.length)];
    correctImage = randomImageName;
    imageNameElement.textContent = randomImageName;

    // Rasmlarni aralashtirish
    let shuffledImages = [...images].sort(() => Math.random() - 0.5);

    boxes.forEach((box, index) => {
        box.style.backgroundImage = `url(${imageFiles[shuffledImages[index]]})`;
        box.onclick = () => checkAnswer(shuffledImages[index]);
    })
}

function checkAnswer(selectedImage) {
    if(selectedImage === correctImage) {
        messageElement.textContent = "To'g'ri!";
        score++;
        scoreElement.textContent = score;
        nextRound();
    } else {
        messageElement.textContent = `Noto'g'ri! Bu ${selectedImage} edi!`;
        score = 0;
        scoreElement.textContent = score;
    }
}


startGameButton.addEventListener('click', startGame);
