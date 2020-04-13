const reducer = (store, action) => {
    let newStore = { ...store}
    switch (action.type) {
        case 'ADD_CARDS' :
            switch (action.player) {
                case 0: newStore.desk = action.cards; break;
                case 1: newStore.player1cards = action.cards; break;
                case 2: newStore.player2cards = action.cards; break;
                default:return newStore;
            }
            break;
        case 'ADD_DECK_ID' :
            newStore.deckID = action.id;
            break;
        case 'SELECT_PLAYER_CARD' :
            newStore.selectedPlayerCard = action.card;
            break;
        case 'ADD_CHOSEN_DESK_CARD' :
            if (newStore.selectedDeskCards.find(c=>c.code===action.card.code))
                newStore.selectedDeskCards = newStore.selectedDeskCards.filter(c=>c.code!==action.card.code)
                else newStore.selectedDeskCards.push(action.card)
            break;
        case 'ADD_CHOSEN_PLAYER_CARD' :
            newStore.selectedPlayerCard = action.card;
            newStore.selectedPlayer = action.player;
            break;
        case 'SET_BLOCKED_ZONE' :
            newStore.zone = action.blockedZone;
            break;
        default: return newStore;
    }

    return newStore;
}

export default reducer;