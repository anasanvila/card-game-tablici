import React, {Component} from 'react';
import {AddCards,AddDeckID, AddChosenDeskCard} from '../redux/action'
import {connect} from 'react-redux'
import Card from './card'
import {DeskZone, CardBlock } from '../styles/mainStyle'


class Desk extends Component {

    constructor(props){
        super(props);
        this.state = {
            move: false,
        }
    }

    cardList(cards){
        let cardImages = cards.map(card=>{
            let ace=false;
            if (card.value==="ACE") ace=true;
            return(<Card 
                card={card} 
                key={card.code} 
                ace={ace}
                playerNumber={this.props.playerNumber} 
                onClick={e=>this.handleClick(card)}
            />)}
        )
        return <CardBlock>{cardImages}</CardBlock>
    }

    handleClick = (card) => {
        console.log("card", card);
        this.props.addChosenDeskCard(card)
    }

    show(value){
        return value?this.cardList(value):''
    }

    render(){
        console.log("store.selected: ",this.props.selectedDeskCards)
        return(
            <DeskZone> { this.show(this.props.desk) } </DeskZone>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        desk:store.desk,
        blockedZone:store.blockedZone,
        selectedDeskCards:store.selectedDeskCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id)),
        addChosenDeskCard: (card) => dispatch(AddChosenDeskCard(card)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk);