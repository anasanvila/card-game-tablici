import React, {Component} from 'react';
import {AddCards,AddDeckID,AddChosenPlayerCard,ReplaceAceInChosenCards,SetPickedUpCards} from '../redux/action'
import {connect} from 'react-redux'
import Card from './card'
import styled from 'styled-components';
import {PlayerZone } from '../styles/mainStyle'
import {isMoveValid, mapped, makeObjWithIntValue} from '../functions/func'

const CardBlock = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:100%;
    
`

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
        for (let i=0; i<this.props.aceNum; i++){
            let index = this.props.selectedDeskCards.findIndex(card=>card.value==="ACE") 
            this.props.replaceAceInChosenCards(index);
        }
        this.props.addChosenPlayerCard(this.props.playerNumber, card);
        let ArrOfCards = isMoveValid(this.props.selectedDeskCards, card);
        //console.log("Resenja:",ArrOfCards)
        let Arr = mapped(ArrOfCards);
        let karta = makeObjWithIntValue(card)
        if (Arr.length>0) Arr.push(karta.value);
        if (Arr) this.props.setPickedUpCards(Arr,this.props.playerNumber)
        else console.log("nista od karata ne moze da se pokupi")
    }

    show(cards){
        return cards ? this.cardList(cards):''
    }

    render(){
        console.log("blockedZone",this.props.blockedZone, "playerNumber",this.props.playerNumber)
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
        aceNum:store.aceNum,
        blockedZone:store.blockedZone
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id)),
        addChosenPlayerCard: (player, card) => dispatch(AddChosenPlayerCard(player, card)),
        replaceAceInChosenCards: (index)=>dispatch(ReplaceAceInChosenCards(index)),
        setPickedUpCards: (arr,player)=>dispatch(SetPickedUpCards(arr,player))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);