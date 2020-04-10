import reducer from './reducer'
import {createStore} from 'redux'

const getInitialState = () => {
    return {
     player1cards:[],
     player2cards:[],
     zone: 0,
     selectedPlayerCard:{},
     selectedDeskCards:[],
     desk:[],
     deckID: 0,
    }
}

export const store = createStore(reducer, getInitialState());