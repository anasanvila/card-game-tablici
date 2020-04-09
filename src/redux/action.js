export const AddCards = (player, cards) => {
    return {
        type: 'ADD_CARDS',
        cards,
        player
    }
}

export const AddDeckID = (id) => {
    return {
        type: 'ADD_DECK_ID',
        id
    }
}

