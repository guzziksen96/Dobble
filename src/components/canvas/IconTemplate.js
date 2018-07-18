import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconTemplate extends Component {
    render() {
        let { left, top } = this.props.cords;
        let x = top - style.height / 2;
        let y = left - style.width / 2;
        let styleMerged = Object.assign({}, style, { left: x, top: y });

        let Icon = this.props.icon;

        return (
                <div style={styleMerged} >
                    <Icon />
                </div>
        );
    }
}
const style = {
    position: "absolute",
    height: 60,
    width: 60,
    fill: "red"
}
IconTemplate.propTypes = {
    cords: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired
};
export default IconTemplate;