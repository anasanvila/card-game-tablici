import React, {Component} from 'react';
import {AddCards,AddDeckID} from '../redux/action'
import {connect} from 'react-redux'
import Card from './card'
import {PlayerZone, CardBlock } from '../styles/mainStyle'

class Player extends Component {
    cardList(cards){
        let cardImages = cards.map(card=>
            <Card card={card} key={card.code} playerNumber={this.props.playerNumber} />
            )
        return <CardBlock>{cardImages}</CardBlock>
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
        zone:store.zone
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);