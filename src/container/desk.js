import React, {Component} from 'react';
import {AddCards,AddDeckID, AddChosenDeskCard,ReplaceAceInChosenCards} from '../redux/action'
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
            let aceisOne=false;
            if (card.value==="ACE") ace=true;
            return(<Card 
                card={card} 
                key={card.code} 
                ace={ace}
                aceisOne={aceisOne}
                playerNumber={this.props.playerNumber} 
                onClick={e=>this.handleClick(card)}
            />)}
        )
        return <CardBlock>{cardImages}</CardBlock>
    }

    handleClick = (card) => {
        console.log("card", card);
        console.log("ace==",this.props.ace)
        console.log("aceNum=",this.props.aceNum)
        
        this.props.addChosenDeskCard(card);
       // if (this.props.aceNum>-1) this.props.replaceAceInChosenCards();
        console.log("deskCards",this.props.selectedDeskCards);
    }

    show(value){
        return value?this.cardList(value):''
    }

    render(){
        //console.log("store.selected: ",this.props.selectedDeskCards)
        return(
            <DeskZone> { this.show(this.props.desk) } </DeskZone>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        desk:store.desk,
        blockedZone:store.blockedZone,
        selectedDeskCards:store.selectedDeskCards,
        ace:store.ace,
        aceNum:store.aceNum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id)),
        addChosenDeskCard: (card) => dispatch(AddChosenDeskCard(card)),
        replaceAceInChosenCards: ()=>dispatch(ReplaceAceInChosenCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk);