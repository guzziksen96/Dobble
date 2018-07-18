import React, { Component } from 'react';
import WatchIcon from './canvas/WatchIcon';
import CardIconCords from '../constants/cardIconCords';
import WaterBottleIcon from '../svg/001-water-bottle.svg'
//C:\Users\jakub\OneDrive\Pulpit\Klaudia\Dobble\src\svg\001-water-bottle.svg
class Card extends Component {
    render() {
        return (
            <div style={style}>
                {/* {listItems} */}
                <WaterBottleIcon width={50} height={50} />
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
const listItems = numbers.map((number) =>
    <WatchIcon cords={CardIconCords[number]} />
);


export default Card;