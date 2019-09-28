import React, { Component } from 'react';

import Fade from 'react-reveal/Fade'

export default class CoursesGrid extends Component {
    render() {
        return (
            <Fade bottom>
                <div className="product__items">

                    {this.props.children}

                </div>
            </Fade>
        )
    }
}
