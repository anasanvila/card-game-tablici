import React from 'react';
import {PokupljeneKarteIgraca,Box} from '../styles/mainStyle'

function PokupljeneKarte (props) {
        let arr = props.karte;
        let arrOfCards = arr.map((el,index)=><Box key={index}>{el}</Box>)
        return(<PokupljeneKarteIgraca>
            {arrOfCards}
        </PokupljeneKarteIgraca>
        )
    }

    export default PokupljeneKarte;