import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer';
import Events from '../components/Events/Events';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Fade from 'react-reveal/Fade';
import CatchScroll from '../components/CatchScroll/CatchScroll';

export default class EventsPage extends Component {
    render() {
        return (
            <>
                <CatchScroll />

                <HeaderContainer header="header" />

                <Fade bottom>

                    <Events />

                </Fade>
                
                <ScrollUpButton EasingType="linear" />

            </>
        )
    }
}
