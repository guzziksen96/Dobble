import * as React from "react";
import CardIconCords from '../constants/cardIconCords';
import IconsContainer  from './canvas/IconsContainer';
import IconTemplate from './canvas/IconTemplate';
import cardDealerHelper from '../helpers/cardDealerHelper';

interface Element {
    icon: JSX.Element;
    onClick?(): void; 
    index: number;
}

interface CardProps {
    handleClick(): void;
    elements: Element[];
  }

  interface CardState {
    elements: Element[];
    chosenIcon?: number;
  }

class Card extends  React.Component<CardProps, CardState>  {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
            chosenIcon: 0
          };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(icon) {
          return () => {
            alert('Miodzior ' + icon)
            this.setState({ chosenIcon: icon});
          }
    }
    
    render() {
        // let randomCardNumber = Math.floor(Math.random() * 50) + 1 ; 
        // let i =0;
        // const icons = cardDealerHelper[randomCardNumber].map((number) => 
        // <IconTemplate key={number}
        //         index={number}
        //         cords={CardIconCords[i++]}   
        //         icon ={IconsContainer[number]} 
        //         onClick = {this.handleClick(number)}
        //         />

        // );
        const icons = this.props.elements.map((element) => { return element.icon;});
        debugger;
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
let test = function(message){
   return () => alert("Message: " + message);
}

export default Card;