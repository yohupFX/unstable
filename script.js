// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'cardD1', img: 'cards/cards/card downgrade/barbedwire.jpg' },
        { name: 'cardD2', img: 'cards/cards/card downgrade/blindinglight.jpg' },
        { name: 'cardD3', img: 'cards/cards/card downgrade/brokenstable.jpg' },
        { name: 'cardD4', img: 'cards/cards/card downgrade/nannycam.jpg' },
        { name: 'cardD5', img: 'cards/cards/card downgrade/pandamonium.jpg' },
        { name: 'cardD6', img: 'cards/cards/card downgrade/sadisticritual.jpg' },
        { name: 'cardD7', img: 'cards/cards/card downgrade/slowdown.jpg' },
        { name: 'cardD8', img: 'cards/cards/card downgrade/tinystable.jpg' },
        { name: 'cardU1', img: 'cards/cards/card upgrade/doubledutch.jpg' },
        { name: 'cardU2', img: 'cards/cards/card upgrade/extratail.jpg' },
        { name: 'cardU3', img: 'cards/cards/card upgrade/glitterbomb.jpg' },
        { name: 'cardU4', img: 'cards/cards/card upgrade/rainbowaura.jpg' },
        { name: 'cardU5', img: 'cards/cards/card upgrade/rainbowmane.jpg' },
        { name: 'cardU6', img: 'cards/cards/card upgrade/summoningritual.jpg' },
        { name: 'cardU7', img: 'cards/cards/card upgrade/unicornlasso.jpg' },
        { name: 'cardU8', img: 'cards/cards/card upgrade/yay.jpg' },
        { name: 'cardM1', img: 'cards/cards/card magic/backkick.jpg' },
        { name: 'cardM2', img: 'cards/cards/card magic/blatantthievery.jpg' },
        { name: 'cardM3', img: 'cards/cards/card magic/changeofluck.jpg' },
        { name: 'cardM4', img: 'cards/cards/card magic/glittertornado.jpg' },
        { name: 'cardM5', img: 'cards/cards/card magic/gooddeal.jpg' },
        { name: 'cardM6', img: 'cards/cards/card magic/mysticalvortex.jpg' },
        { name: 'cardM7', img: 'cards/cards/card magic/resetbutton.jpg' },
        { name: 'cardM8', img: 'cards/cards/card magic/retarget.jpg' },
        { name: 'cardM9', img: 'cards/cards/card magic/shakeup.jpg' },
        { name: 'cardM10', img: 'cards/cards/card magic/targeteddestruction.jpg' },
        { name: 'cardM11', img: 'cards/cards/card magic/twoforone.jpg' },
        { name: 'cardM12', img: 'cards/cards/card magic/unfairbargain.jpg' },
        { name: 'cardM13', img: 'cards/cards/card magic/unicornpoison.jpg' },
        { name: 'cardM14', img: 'cards/cards/card magic/unicornshrinkray.jpg' },
        { name: 'cardM15', img: 'cards/cards/card magic/unicornswap.jpg' },
        { name: 'cardI1', img: 'cards/cards/card instant/neigh.jpg' },
        { name: 'cardI2', img: 'cards/cards/card instant/superneigh.png' },
        { name: 'cardUB1', img: 'cards/cards/unicorns/unicorns basic/basicblue.jpg' },
        { name: 'cardUB2', img: 'cards/cards/unicorns/unicorns basic/basicgreen.jpg' },
        { name: 'cardUB3', img: 'cards/cards/unicorns/unicorns basic/basicindigo.jpg' },
        { name: 'cardUB4', img: 'cards/cards/unicorns/unicorns basic/basicnarwhal.jpg' },
        { name: 'cardUB5', img: 'cards/cards/unicorns/unicorns basic/basicorange.jpg' },
        { name: 'cardUB6', img: 'cards/cards/unicorns/unicorns basic/basicpurple.jpg' },
        { name: 'cardUB7', img: 'cards/cards/unicorns/unicorns basic/basicred.jpg' },
        { name: 'cardUB8', img: 'cards/cards/unicorns/unicorns basic/basicyellow.jpg' },
        { name: 'cardUM1', img: 'cards/cards/unicorns/unicorns magical/alluring.png' },
        { name: 'cardUM2', img: 'cards/cards/unicorns/unicorns magical/americorn.png' },
        { name: 'cardUM3', img: 'cards/cards/unicorns/unicorns magical/annoying.png' },
        { name: 'cardUM4', img: 'cards/cards/unicorns/unicorns magical/blackknight.jpg' },
        { name: 'cardUM5', img: 'cards/cards/unicorns/unicorns magical/chainsaw.jpg' },
        { name: 'cardUM6', img: 'cards/cards/unicorns/unicorns magical/classynarwhal.jpg' },
        { name: 'cardUM7', img: 'cards/cards/unicorns/unicorns magical/ginormous.jpg' },
        { name: 'cardUM8', img: 'cards/cards/unicorns/unicorns magical/greedyflying.jpg' },
        { name: 'cardUM9', img: 'cards/cards/unicorns/unicorns magical/magicalflying.jpg' },
        { name: 'cardUM10', img: 'cards/cards/unicorns/unicorns magical/majesticflying.jpg' },
        { name: 'cardUM11', img: 'cards/cards/unicorns/unicorns magical/mermaid.jpg' },
        { name: 'cardUM12', img: 'cards/cards/unicorns/unicorns magical/narwhaltorpedo.jpg' },
        { name: 'cardUM13', img: 'cards/cards/unicorns/unicorns magical/puppicorn.jpg' },
        { name: 'cardUM14', img: 'cards/cards/unicorns/unicorns magical/queenbee.jpg' },
        { name: 'cardUM15', img: 'cards/cards/unicorns/unicorns magical/rainbow.jpg' },
        { name: 'cardUM16', img: 'cards/cards/unicorns/unicorns magical/rhinocorn.jpg' },
        { name: 'cardUM17', img: 'cards/cards/unicorns/unicorns magical/seductive.jpg' },
        { name: 'cardUM18', img: 'cards/cards/unicorns/unicorns magical/shabby.jpg' },
        { name: 'cardUM19', img: 'cards/cards/unicorns/unicorns magical/sharkwithahorn.jpg' },
        { name: 'cardUM20', img: 'cards/cards/unicorns/unicorns magical/stabby.jpg' },
        { name: 'cardUM21', img: 'cards/cards/unicorns/unicorns magical/swiftflying.jpg' },
        { name: 'cardUM22', img: 'cards/cards/unicorns/unicorns magical/thegreatnarwhal.jpg' },
        { name: 'cardUM23', img: 'cards/cards/unicorns/unicorns magical/unicornonthecob.jpg' }
    ];

    const gameContainer = document.querySelector('.game-container');

    let cards = [...cardsArray, ...cardsArray]; // Duplicate each card to create pairs
    cards = shuffle(cards); // Shuffle the cards

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card.name;
        cardElement.innerHTML = `
            <div class="back">?</div>
            <img src="${card.img}" alt="${card.name}">
        `;
        gameContainer.appendChild(cardElement);
    });

    let flippedCard = false;
    let firstCard, secondCard;
    let lockBoard = false;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flipped');

        if (!flippedCard) {
            flippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [flippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(card => card.addEventListener('click', flipCard));
});
