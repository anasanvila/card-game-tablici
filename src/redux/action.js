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

export const SelectPlayerCard = (card, player) => {
    return {
        type: 'SELECT_PLAYER_CARD',
        card,
        player
    }
}

export const SetZone = (zone) => {
    return {
        type: 'SET_ZONE',
        zone
    }
}

export const AddChosenDeskCard = (card) => {
    return {
        type: 'ADD_CHOSEN_DESK_CARD',
        card
    }
}