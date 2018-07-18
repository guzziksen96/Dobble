import React, { Component } from 'react';
import CardIconCords from '../constants/cardIconCords';
import IconsContainer  from './canvas/IconsContainer';
import IconTemplate from './canvas/IconTemplate';
import cardDealerHelper from '../helpers/cardDealerHelper';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenIcon: 0
          };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(icon) {
        alert('Miodzior ' + icon)
        this.setState({ chosenIcon: icon});
    }
    
    render() {

        return (
            <div style={style}>
                {icons} 
            </div>
        );
    }
}
let randomCardNumber = Math.floor(Math.random() * 50) + 1 ; 
const style = {
    width: 500,
    height: 500,
    borderRadius: "50%",
    border: "3px solid black",
    backgroundColor: "#eee",
    position: "relative"
}
let test = function(message){
   return () => alert("Message: " + message);
}

let i =0;
const icons = cardDealerHelper[randomCardNumber].map((number) => 
   <IconTemplate key={number}
        index={number}
        cords={CardIconCords[i++]}   
        icon ={IconsContainer[number]} 
        onClick = {test(number)}
        />

);


export default Card;