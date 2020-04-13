import styled from 'styled-components';
import texture from '../images/texture.jpg';

export const CardTable = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    background:url(${texture});
    height:100vh;
`
export const TableZone = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    color:white;
`
export const PlayerZone = styled.div`
    width:60vw;
    height:15vh;
`
export const DeskZone = styled.div`
    align-self:center;
    width:50vw;
    height:15vh;
`
export const CardBlock = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:100%;
`
export const PokupljeneKarteIgraca = styled.div`
    width:60%;
    height:100px;
    opacity:0.5;
`
export const Box = styled.div`
    background-color:white;
    width:25px;
    padding-left:7px;
    border:1px solid green;
    color:black;
    display:inline-block;
`