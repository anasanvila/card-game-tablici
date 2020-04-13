import React from 'react';
import {PokupljeneKarteIgraca} from '../styles/mainStyle'

function PokupljeneKarte (props) {
        let arr = props.karte;
        let arrOfCards = arr.map((el,index)=><span key={index}>{el}</span>)
        return(<PokupljeneKarteIgraca>
            {arrOfCards}
        </PokupljeneKarteIgraca>
        )
    }

    export default PokupljeneKarte;