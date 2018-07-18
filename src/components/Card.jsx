import React, { Component } from 'react';
import CardIconCords from '../constants/cardIconCords';
import IconsContainer  from './canvas/IconsContainer';
import IconTemplate from './canvas/IconTemplate';
import cardDealerHelper from '../helpers/cardDealerHelper';
console.log(IconsContainer);


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
        console.log(icon)
        this.setState({ chosenIcon: icon
        });
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

const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
let i =0;
const icons = cardDealerHelper[randomCardNumber].map((number) => 
   <IconTemplate key={number}
        cords={CardIconCords[i++]}   
        icon ={IconsContainer[number]} />

);


export default Card;