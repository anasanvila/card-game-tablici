import React, {Component} from 'react';
import {AddCards,AddDeckID,AddChosenPlayerCard} from '../redux/action'
import {connect} from 'react-redux'
import Card from './card'
import {PlayerZone, CardBlock } from '../styles/mainStyle'
//import {isMoveValid} from '../functions/functions'
import {isMoveValid} from '../functions/func'

class Player extends Component {
    cardList(cards){
        let cardImages = cards.map(card=>
            <Card 
                card={card} 
                key={card.code} 
                playerNumber={this.props.playerNumber}
                onClick={e=>this.handleClick(card)}
             />
        )
        return <CardBlock>{cardImages}</CardBlock>
    }

    handleClick = (card) => {
        console.log("player card", card);
        this.props.addChosenPlayerCard(this.props.playerNumber, card);
        //isMoveValid(this.props.selectedDeskCards, card);

        
    }

    show(cards){
        return cards ? this.cardList(cards):''
    }

    render(){
        let player = (this.props.playerNumber===1)?this.props.player1cards:this.props.player2cards
        return(
            <PlayerZone> { this.show(player) } </PlayerZone>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        player1cards:store.player1cards,
        player2cards:store.player2cards,
        selectedDeskCards:store.selectedDeskCards,
        selectedPlayerCard:store.selectedPlayerCard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id)),
        addChosenPlayerCard: (player, card) => dispatch(AddChosenPlayerCard(player, card))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);