import * as React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './Card';
import * as Actions from '../actions/index';

const Board = ({actions}) => {
    let cards = [];
    cards.push(<Card handleClick={() => actions.toggleCell({Card})}></Card>); //musi byc jakis key
    cards.push(<Card handleClick={() => actions.toggleCell({Card})}></Card>);
    return <div>{cards}</div>;
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
