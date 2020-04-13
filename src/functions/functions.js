export const isMoveValid = (selected_desk_cards, player_card)=>{
    // console.log("selectedDeskCards", selectedDeskCards)
    // console.log("player_card = ", player_card )
    let deskCards = makeArrOfObjWithIntValue(selected_desk_cards);
    let playerCard = makeObjWithIntValue(player_card);
    let imaStaDaKupi = false;
    let pokupljeneKarte = [];
    let playerPoints = 0;
    let skloniPlayerCard = false;
    let pregledanoSve = false;
    let ostajeNaTalonuZaSledeciKrug = [];
    //console.log("playerCard", playerCard)
    for (let round=0; round<4; round++){
        do {
            let maxCard = findMax(deskCards);
            if (maxCard.value > playerCard.value) 
                deskCards = removeCardFromDeskCards(deskCards, maxCard);
                ostajeNaTalonuZaSledeciKrug.push(maxCard);
            if (maxCard.value === playerCard.value) {
                deskCards = removeCardFromDeskCards(deskCards, maxCard);
                playerPoints += maxCard.point;
                imaStaDaKupi = true;
                pokupljeneKarte.push(maxCard);
                if (deskCards.length<1) {
                    skloniPlayerCard = true;
                    playerPoints += playerCard.point;
                    pokupljeneKarte.push(playerCard);
                    pregledanoSve = true;
                    break;
                }
                if (deskCards.length===1) {;
                    if (deskCards[0].value===playerCard.value) {
                        pokupljeneKarte.push(deskCards[0]);
                        pokupljeneKarte.push(playerCard);
                        playerPoints += deskCard[0].point;
                        playerPoints += playerCard.point;
                        pregledanoSve = true;
                        skloniPlayerCard = true;
                        deskCards = [];


                    }
                }
            };
            if (maxCard.value <  )
        } while (!pregledanoSve)

    }
}

const removeCardFromDeskCards = (cards, maxCard)=>
    cards.filter(card=>card.code!==maxCard.code)

const mmakeArrOfObjWithIntValue = (selectedDeskCards) =>{
    let deskCards = selectedDeskCards.map(card=>makeObjWithIntValue(card));
    return deskCards;
}

const makeObjWithIntValue = (card)=>{
    switch (card.value) {
        case "KING": 
            return obj(14,card.code, 1);
            break;
        case "QUEEN":
            return obj(13, card.code, 1);
            break;
        case "JACK":
            return obj(12, card.code, 1);
            break;
        case "ACE":
            return obj(11, card.code, 1, 1);
            break;
        default:
            let point = 0;
            if ((card.value=="10")||(card.code=="2C")) point = 1; //desetke i mala dvojka
            if (card.code="0C") point = 2; //velika desetka
            return obj(parseInt(card.value), card.code, point);
            break;
    }
}

const obj = (num,code,point, val2=0) => {
    return {value:num, code, point, val2}
}

const findMax = (deskCards) => {
    let max=0;
    let maxCard;
    deskCards.forEach(card=>{
        if (card.value>max){
            max=card.value;
            maxCard = card;
        }
    })
    return maxCard;
}