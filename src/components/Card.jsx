import React, { Component } from 'react';
import WatchIcon from './canvas/WatchIcon';
import CardIconCords from '../constants/cardIconCords';
// import WaterBottleIcon from '../svg/001-water-bottle.svg'

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
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
        const listItems = numbers.map((number) =>
            <WatchIcon key={number}
            cords={CardIconCords[number]} 
            onClick={() => this.handleClick(number)}/>
        );
        return (
            <div style={style}>
                {listItems}
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



export default Card;