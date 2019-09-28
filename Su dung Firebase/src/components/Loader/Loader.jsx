import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="loader__wrapper">
                <div className="semipolar-spinner">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                </div>
            </div>
        )
    }
}
