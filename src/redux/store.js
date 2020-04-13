import reducer from './reducer'
import {createStore} from 'redux'

const getInitialState = () => {
    return {
     player1cards:[],
     player2cards:[],
     blockedZone: 2,
     selectedPlayerCard:{},
     selectedPlayer:0,
     selectedDeskCards:[],
     pokupljeneKartePrvogIgraca:[],
     pokupljeneKarteDrugogIgraca:[],
     desk:[],
     ace:false,
     aceNum:0,
     deckID: 0,
    }
}

export const store = createStore(reducer, getInitialState());