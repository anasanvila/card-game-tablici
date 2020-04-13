import React, {Component} from 'react';
import {SelectPlayerCard,AddAceAsOne,AddAceNum} from '../redux/action'
import {connect} from 'react-redux'
import styled from 'styled-components'
import '../styles/index.css'
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
            move: false
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.props.playerNumber!==this.props.blockedZone) {
            const newMove = !this.state.move;
            this.setState({move: newMove});
        }
    }

    handleClick1 = () => {
        this.props.addAceNum(1);
        if (this.props.playerNumber!==this.props.blockedZone) {
            const newMove = !this.state.move;
            this.setState({move: newMove});
        }
        this.props.addAceAsOne(true);
        
    }

    render(){
        //if (this.props.selectedDeskCards!==[]) console.log("selectedDeskCards",this.props.selectedDeskCards)
        // console.log("playerNumber", this.props.playerNumber,"blockedZone", this.props.blockedZone)
        if (this.props.ace===true) 
        return(<CardStyle onClick={this.props.onClick} move={this.state.move&&this.props.playerNumber===0}>
                <div className="box">
                    <img src={this.props.card.image}  key={this.props.card.code} height="100%" alt={this.props.card.code}/>
                    <div className="tip">
                        <button onClick={this.handleClick1} id="button1" className="buttonInside" key="button1">A = 1</button>
                        <button onClick={this.handleClick} id="button2"  className="buttonInside" key="button11">A = 11</button>
          	        </div>
                </div>
            </CardStyle>
        )
        else return (<CardStyle onClick={this.props.onClick} move={this.state.move&&this.props.playerNumber===0}>
                <img src={this.props.card.image} onClick={this.handleClick} key={this.props.card.code} height="100%" alt={this.props.card.code}/>
            </CardStyle>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        blockedZone: store.blockedZone,
        selectedDeskCards:store.selectedDeskCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPlayerCard: (card, player) => dispatch(SelectPlayerCard(card,player)),
        addAceAsOne:()=>dispatch(AddAceAsOne(true)),
        addAceNum:(num)=>dispatch(AddAceNum(num)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);