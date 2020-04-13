import React, {Component} from 'react';
import axios from 'axios';
import {AddCards,AddDeckID, SetBlockedZone} from '../redux/action'
import {connect} from 'react-redux'
import Player from './player'
import Desk from './desk'
import PickedUpCards from '../components/pickedUpCards'
import {TableZone} from '../styles/mainStyle'
import {API_PATH, SHUFFLE_DECK_PATH} from '../const/constants'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked:false
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
        if (!this.state.clicked){
            for (let i=0;i<3;i++){
                i===0?this.drawCards(i,4):this.drawCards(i,6);
            }
        }
        this.setState({clicked:true})
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
        let pk1 = this.props.pickedCardsFirstPlayer || '';
        let pk2 = this.props.pickedCardsSecondPlayer ||'';
        return (
            <TableZone>
                <button onClick={ this.drawAllCards } > click </button>
                <PickedUpCards karte={pk1}/>
                <Player playerNumber={1} key="player1"/>
                <Desk playerNumber={0}/>
                <Player playerNumber={2} key="player2"/>
                <PickedUpCards karte={pk2}/>
            </TableZone>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        deckID:store.deckID,
        pickedCardsFirstPlayer:store.pickedCardsFirstPlayer,
        pickedCardsSecondPlayer:store.pickedCardsSecondPlayer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id)),
        setBlockedZone: (blockedZone) => dispatch(SetBlockedZone(blockedZone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);