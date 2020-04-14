import React from 'react';
import {PickedUpCardsOfPlayer,Box} from '../styles/mainStyle'

function PickedUpCards (props) {
        let arr = props.cards;
        let arrOfCards = arr.map((el,index)=><Box key={index}>{el}</Box>)
        return(<PickedUpCardsOfPlayer>
            {arrOfCards}
        </PickedUpCardsOfPlayer>
        )
    }

    export default PickedUpCards;