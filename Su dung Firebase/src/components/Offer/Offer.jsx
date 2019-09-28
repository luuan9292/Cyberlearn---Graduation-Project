import React from 'react'

export default function Offer() {
    return (
        <section className="offer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 offer__left px-0">
                        <div className="offer__wrapper">
                            <h5>THE COMPLETE INSTRUCTOR</h5>
                            <h6>COURSE TEACH FULL TIME</h6>
                            <p>Take this course to get motivation to teach create your new</p>
                            <button className="offer__btn">VIEW OFFER</button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 offer__right px-0">
                        <div className="offer__wrapper">
                            <h5>WRITING BASICS</h5>
                            <h6>PROCESS IN EASY 5 STEPS</h6>
                            <p>From emptying a litter box, to walking and feeding pet is cared for as well.</p>
                            <button className="offer__btn">VIEW OFFER</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
