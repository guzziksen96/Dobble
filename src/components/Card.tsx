import * as React from "react";
import CardIconCords from '../constants/cardIconCords';
import IconsContainer  from './canvas/IconsContainer';
import IconTemplate from './canvas/IconTemplate';
import cardDealerHelper from '../helpers/cardDealerHelper';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/cardActions';

interface CardProps {
    chosenIcon?: number;
    handleChange(event: any): void;
  }

class Card extends  React.Component<CardProps, {}>  {
    constructor(props) {
        super(props);
        this.state = {
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
        let randomCardNumber = Math.floor(Math.random() * 50) + 1 ; 
        let i =0;
        const icons = cardDealerHelper[randomCardNumber].map((number) => 
        <IconTemplate key={number}
                index={number}
                cords={CardIconCords[i++]}   
                icon ={IconsContainer[number]} 
                onClick = {this.handleClick(number)}
                />

        );
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

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Card);