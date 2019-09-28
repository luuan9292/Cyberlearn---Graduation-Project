import React, { Component } from 'react';

export default class Viewing extends Component {
    render() {
        return (
            <section className="viewing">
                <div className="container-fluid">
                    <div className="row">
                        
                        {this.props.children}

                    </div>
                </div>
            </section>

        )
    }
}
