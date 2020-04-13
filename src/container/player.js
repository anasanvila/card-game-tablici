import React, {Component} from 'react';
import {AddCards,AddDeckID,AddChosenPlayerCard,ReplaceAceInChosenCards} from '../redux/action'
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
        for (let i=0; i<this.props.aceNum; i++){
            let index = this.props.selectedDeskCards.findIndex(card=>card.value=="ACE") 
            this.props.replaceAceInChosenCards(index);
        }
        this.props.addChosenPlayerCard(this.props.playerNumber, card);
        console.log("at the end selected DeskCards", this.props.selectedDeskCards)
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
        selectedPlayerCard:store.selectedPlayerCard,
        ace:store.ace,
        aceNum:store.aceNum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id)),
        addChosenPlayerCard: (player, card) => dispatch(AddChosenPlayerCard(player, card)),
        replaceAceInChosenCards: (index)=>dispatch(ReplaceAceInChosenCards(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);