import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AddCards} from '../redux/action'
import {PlayerZone, Desk, CardStyle, CardBlock } from '../styles/mainStyle'

class Table extends Component {
    
    cardsView(cards){
        let cardImages = cards.map(card=><CardStyle><img src={card.image} key={card.code} height="100%"/></CardStyle>)
        return <CardBlock>{cardImages}</CardBlock>
    }

    render(){
        let player1cards = this.props.player2cards;
        let desk = this.props.desk;
        let player2cards = this.props.player2cards;
        return( <React.Fragment>
                    <PlayerZone> { this.cardsView(player1cards) } </PlayerZone>
                    <Desk> { this.cardsView(desk) } </Desk>
                    <PlayerZone> { this.cardsView(player2cards) }</PlayerZone>
                </React.Fragment>
        )
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);