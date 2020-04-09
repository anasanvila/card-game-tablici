import React, {Component} from 'react';
import axios from 'axios';
import {AddCards,AddDeckID} from '../redux/action'
import {connect} from 'react-redux'
import {TableZone, PlayerZone, Desk, CardStyle, CardBlock } from '../styles/mainStyle'

const API_PATH = 'https://deckofcardsapi.com/api/deck/';
const SHUFFLE_DECK_PATH = 'new/shuffle/';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //round: 0,
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

    cardView(cards){
        let cardImages = cards.map(card=><CardStyle><img src={card.image} key={card.code} height="100%"/></CardStyle>)
        return <CardBlock>{cardImages}</CardBlock>
    }

    show(value){
        return value?this.cardView(value):''
    }

    render(){
        let p1c = this.props.player1cards;
        let d = this.props.desk;
        let p2c = this.props.player2cards;
        return (
            <TableZone>
                <button onClick={ this.drawAllCards } > click </button>
                <PlayerZone> { this.show(p1c) } </PlayerZone>
                <Desk> { this.show(d) } </Desk>
                <PlayerZone> { this.show(p2c) }</PlayerZone>
            </TableZone>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        player1cards:store.player1cards,
        player2cards:store.player2cards,
        desk:store.desk,
        deckID:store.deckID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);