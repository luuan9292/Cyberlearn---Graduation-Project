import React, { Component } from 'react'

import Fade from 'react-reveal/Fade'

export default class CoursesList extends Component {
    render() {
        return (
            <Fade bottom>
                <div className="courseslist__wrapper">
                    <div className="container">
                        <div className="row">

                            {this.props.children}

                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}
