import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <header>
            <div id='logo'>
                <div>
                    <div className="white-key"></div>
                    <div className="white-key"></div>
                    <div className="white-key"></div>
                    <div className="white-key"></div>
                    <div className="white-key"></div>
                </div>
                <div className="black-key first"></div>
                <div className="black-key second"></div>
                <div className="black-key third"></div>
            </div>
            <div id='title'>Practice Perfect</div>
        </header>
    )
}