import React, {Component} from 'react';
import {SelectPlayerCard, AddChosenDeskCard} from '../redux/action'
import {connect} from 'react-redux'
import styled from 'styled-components';
//import {CardStyle } from '../styles/mainStyle'

const CardStyle = styled.div`
    height:100%;
    margin-top: ${(props) => props.move ? "-30px" : "0px"};
    filter: ${(props) => props.move ? "sepia(100%)" : "none"};
`
//   pointer-events:  ${(props) => props.clickable ? "none" : "auto"};
class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            move: false,
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.props.playerNumber===this.props.zone) {
            const newMove = !this.state.move;
            this.setState({move: newMove});
        }
    }

    render(){
        //if (this.props.selectedDeskCards!==[]) console.log("selectedDeskCards",this.props.selectedDeskCards)
        return(
            <CardStyle onClick={this.props.onClick} move={this.state.move}>
                <img src={this.props.card.image} onClick={this.handleClick} key={this.props.card.code} height="100%" alt={this.props.card.code}/>
            </CardStyle>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        player1cards:store.player1cards,
        player2cards:store.player2cards,
        zone: store.zone,
        selectedDeskCards:store.selectedDeskCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPlayerCard: (card, player) => dispatch(SelectPlayerCard(card,player)),
        addChosenDeskCard: (card) => dispatch(AddChosenDeskCard(card)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);