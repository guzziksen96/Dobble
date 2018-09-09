import * as React from "react";
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Card from './Card';
import cardDealerHelper from '../helpers/cardDealerHelper';
import CardIconCords from '../constants/cardIconCords';
import IconsContainer  from './canvas/IconsContainer';
import IconTemplate from './canvas/IconTemplate';

interface RootProps {
  store: object;
  history: object;
}

interface CardProps {
  handleChange(event: any): void;
  elements: Element[];
}

interface Element {
  icon: JSX.Element;
  onClick?(): void; 
  index: number;
}

export default class Root extends React.Component<RootProps, {} > {
  render() {
    const { store, history } = this.props;
    const elements = generateElements();
    
    debugger;   
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Card elements={elements} handleClick={handleClick}/>
          {/* <Card/> */}
        </ConnectedRouter>
      </Provider>
    );
  }
}

function generateElements() : Element[]  {
  let randomCardNumber = Math.floor(Math.random() * 50) + 1 ; 
  let i = 0;
  const icons: Element[] = cardDealerHelper[randomCardNumber].map((number) => {
    console.log(i);
    
    console.log(CardIconCords[i]);
    
    let icon: JSX.Element = 
        <IconTemplate key={number}
                index={number}
                cords= {CardIconCords[i++]}   
                icon ={IconsContainer[number]} 
                onClick = {handleClick}
                />;
    let element: Element = {
      index: number,
      onClick: handleClick,
      icon: icon
    };
    return element;
  });
  return icons;
}
function handleClick() {

}