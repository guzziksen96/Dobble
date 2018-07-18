import React, { Component } from 'react';
import CardIconCords from '../constants/cardIconCords';
import IconsContainer  from './canvas/IconsContainer';
import IconTemplate from './canvas/IconTemplate';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenIcon: 0
          };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(icon) {
        alert('Miodzio ' + icon)
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

const style = {

    width: 500,
    height: 500,
    borderRadius: "50%",
    border: "3px solid black",
    backgroundColor: "#eee",
    position: "relative"
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

const icons = numbers.map((number) => 
   <IconTemplate key={number}
        cords={CardIconCords[number]}   
        icon ={IconsContainer[number]} />

);


export default Card;