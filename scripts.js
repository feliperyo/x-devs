const cards = document.querySelectorAll('.card')

let position = 0

function Next() {
    const selectedCard = document.querySelector('.selected')

    if (position === cards.length - 1) return

    selectedCard.classList.remove('selected')

    position++
    cards[position].classList.add('selected')


}

function Back() {
    const selectedCard = document.querySelector('.selected')

    if (position === 0) return

    selectedCard.classList.remove('selected')

    position--
    cards[position].classList.add('selected')
}