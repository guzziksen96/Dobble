import * as React from "react";
import PropTypes from 'prop-types';


type IconTemplateProps = {
    cords: object;
    icon: JSX.Element;
    onClick?(): void; 
    index: number;
}

class IconTemplate extends React.Component<IconTemplateProps, {}> {
    render() {
        let { left, top } = this.props.cords;
        let x = top - style.height / 2;
        let y = left - style.width / 2;
        let styleMerged = Object.assign({}, style, { left: x, top: y });

        let Icon = this.props.icon;

        return (
                <div style={styleMerged} onClick={this.props.onClick}>
                    <Icon />
                </div>
        );
    }
}
const style = {
    position: "absolute",
    height: 60,
    width: 60,
    fill: "black"
}



export default IconTemplate;