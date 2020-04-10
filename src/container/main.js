import React, {Component} from 'react';
import axios from 'axios';
import {AddCards,AddDeckID, SetZone} from '../redux/action'
import {connect} from 'react-redux'
import Player from './player'
import Desk from './desk'
import {TableZone} from '../styles/mainStyle'
import {API_PATH, SHUFFLE_DECK_PATH} from '../const/constants'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //round:0,
        };
        this.getDeckId = this.getDeckId.bind(this);
    }

    getDeckId() {
        axios.get(API_PATH + SHUFFLE_DECK_PATH)
        .then(res => {
            this.props.addDeckID( res.data.deck_id);
        });
    }

    drawAllCards = () => {
        for (let i=0;i<3;i++){
            i===0?this.drawCards(i,4):this.drawCards(i,6);
        }
        //this.setState({round:this.state.round+1})
    }

    drawCards = (playerNumber, num) => {
        axios.get(API_PATH + this.props.deckID + '/draw/?count=' + num)
        .then(res => {
            let cards = res.data.cards;
            cards.forEach(obj=>{
                delete obj.images;
                delete obj.suit;
            })
            this.props.addCards(playerNumber,cards);
        });
    }

    componentDidMount(){
        this.getDeckId();
    }

    render(){
        return (
            <TableZone>
                <button onClick={ this.drawAllCards } > click </button>
                <Player playerNumber={1} key="player1"/>
                <Desk playerNumber={0}/>
                <Player playerNumber={2} key="player2"/>
            </TableZone>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        deckID:store.deckID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id)),
        setZone: (zone) => dispatch(SetZone(zone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);