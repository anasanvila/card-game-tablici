import React, {Component} from 'react';
import {AddCards,AddDeckID} from '../redux/action'
import {connect} from 'react-redux'
import Card from './card'
import {DeskZone, CardBlock } from '../styles/mainStyle'


class Desk extends Component {

    constructor(props){
        super(props);
        this.state = {
            move: false,
            selected:[],
        }
    }

    cardView(cards){
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
        console.log("card", card);
        let newArr = [...this.state.selected]
        if (newArr.find(c=>c.code===card.code)) newArr = newArr.filter(c=>c.code!==card.code)
            else newArr.push(card)
        this.setState({selected: newArr})
    }

    show(value){
        return value?this.cardView(value):''
    }

    render(){
        console.log("state.selected: ",this.state.selected)
        return(
            <DeskZone> { this.show(this.props.desk) } </DeskZone>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        desk:store.desk,
        zone:store.zone,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCards: (player, cards) => dispatch(AddCards(player, cards)),
        addDeckID: (id) => dispatch(AddDeckID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk);