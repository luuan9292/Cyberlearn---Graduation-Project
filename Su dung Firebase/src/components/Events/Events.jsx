import React, { Component } from 'react'

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '...',
            hours: '...',
            minutes: '...',
            seconds: '...',
        }
    }

    countdownTimer = () => {

        let currentTime = new Date().getTime();

        let eventTime = new Date(2019, 8, 30).getTime();

        let remainTime = eventTime - currentTime;

        let s = Math.floor(remainTime / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);

        d %= 31;
        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        this.setState({
            day: d,
            hours: h,
            minutes: m,
            seconds: s
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidMount() {
        this.interval = setInterval(() => this.countdownTimer(), 1000);
    }
    render() {
        return (
            <>
                <section className="events">
                    <div className="container countdown__wrapper">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="countdown__event">
                                    <div className="countdown__timer">
                                        <div className="countdown__section">
                                            <div className="countdown__amount countdown__days">101</div>
                                            <div className="countdown__period">DAYS</div>
                                        </div>
                                        <div className="countdown__section">
                                            <div className="countdown__amount countdown__hours">{this.state.hours}</div>
                                            <div className="countdown__period">HOURS</div>
                                        </div>
                                        <div className="countdown__section">
                                            <div className="countdown__amount countdown__minutes">{this.state.minutes}</div>
                                            <div className="countdown__period">MINUTES</div>
                                        </div>
                                        <div className="countdown__section">
                                            <div className="countdown__amount countdown__seconds">{this.state.seconds}</div>
                                            <div className="countdown__period">SECONDS</div>
                                        </div>
                                    </div>
                                    <h2 className="countdown__title">BUSINESS CONFERENCE 2019</h2>
                                    <h3 className="countdown__subtitle">10 - 12 DECEMBER, 2019, DUBLIN</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ticket">
                    <div className="container ticket__wrapper">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 ticket__left">
                                <div className="ticket__image">
                                    <img src="/img/event-icon.png" alt="ticket" />
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 ticket__right">
                                <div className="ticket__content">
                                    <h3 className="ticket__title">WHAT IS BUSINESS CONFERENCE 2019</h3>
                                    <h4 className="ticket__sub__title">Where The Business World Meets</h4>
                                </div>
                                <p>Conference dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                <div className="ticket__btn">
                                    <button className="buy__btn">Buy Ticket</button>
                                    <button className="knowmore__btn">Know More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="events_speaker">
                    <div className="container speaker__wrapper">
                        <div className="row speakers">
                            <h3 className="speaker__title">Who's Speaking?</h3>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker1.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>JEFF SEVERIN</h5>
                                        <p>Pixar Animation Studios</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="speaker">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker2.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>JAMIE WEN</h5>
                                        <p>GM, The boxtrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="speaker">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker3.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>CHELSIE</h5>
                                        <p>CEO, Hatem Co.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="speaker">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker4.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>WILLIAM JOHNSON</h5>
                                        <p>Producer, CSI:Cyber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="speaker">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker5.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>RUTH SMITH</h5>
                                        <p>CCO, Bittorrent [CCO, Bittorrent]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="speaker">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker6.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>RICKEY D.NG</h5>
                                        <p>CEO, The Sage Group</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="speaker">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker7.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>ROBIN GUZMAN</h5>
                                        <p>Co-Founder & CEO, Slack</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 speaker">
                                <div className="speaker">
                                    <div className="speaker__image">
                                        <img src="/img/event-speaker8.jpg" alt="speaker" />
                                    </div>
                                    <div className="speaker__info">
                                        <h5>CODY BALL</h5>
                                        <p>Pixar Animation Studios</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events__subscripe">
                        <div className="container subscripe__wrapper">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <h4>Sign Up For Our Newsletter</h4>
                                </div>
                                <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 px-0">
                                    <input type="text" placeholder="Your email adress" />
                                </div>
                                <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <button className="subscribe__btn">Subscribe</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Events;
