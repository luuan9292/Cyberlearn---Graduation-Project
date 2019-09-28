import React, { Component } from 'react'
import SubMenu from '../SubMenu/SubMenu';

export default class CatchScroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0
        }
    }

    /**----------------------------------------
     * Function: Xu li hieu bat scroll
     ----------------------------------------**/
    handleScroll = () => {
        this.setState({
            scrollPosition: Math.ceil(window.pageYOffset)
        })
    }
    componentDidMount() {   // kich hoat su kien scroll
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <>
                {
                    this.state.scrollPosition > 150 ? <SubMenu /> : ""
                }
            </>
        )
    }
}
