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

export const SetBlockedZone = (blockedZone) => {
    return {
        type: 'SET_BLOCKED_ZONE',
        blockedZone
    }
}

export const AddChosenDeskCard = (card) => {
    return {
        type: 'ADD_CHOSEN_DESK_CARD',
        card
    }
}

export const AddChosenPlayerCard = (player, card) => {
    return {
        type: 'ADD_CHOSEN_PLAYER_CARD',
        player,
        card
    }
}

export const ReplaceAceInChosenCards = (index) => {
    return {
        type: 'REPLACE_ACE_IN_CHOSEN_CARDS',
        index
    }
}

export const AddAceNum = (num) => {
    return {
        type: 'ADD_ACE_NUM',
        num
    }
}
