import React, { Component } from 'react';
import menuBtnIcon from './img/menuBtnIcon.svg';
import spinSymbol from "./img/spinSymbol.svg";

class ButtonSpin extends Component {
    render() {
        return (
            <div className="wrap-btn-spin">
                <div className="btn-spin">
                    <div className="img-btn-symbol"></div>
                </div>
                <div className="men-bar">
                    <div className="side-spin-men-bar"></div>
                </div>
            </div>
        );
    }
}

export default ButtonSpin;