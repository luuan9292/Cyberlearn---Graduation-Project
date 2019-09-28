import React, { Component } from 'react'

export default class Countdown extends Component {

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
            <section className="countdown">
                <div className="container">
                    <div className="row countdown__content">
                        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 countdown__left pl-0">
                            <div className="count__img">
                                <img src="/img/countdown.png" alt="countdown" />
                            </div>
                            <div className="count__info">
                                <h4>SCRIBBLE STARTUP COURSE:</h4>
                                <h4>SAVE UP TO 30% + FREE MATERIALS</h4>
                                <p>This course is the first of a two-course sequence: Introduction to Computer Science and
                                  Programming Using Python, and Introduction to Computational Thinking and Data Science.
                                </p>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 countdown__right">
                            <h6>HURRY UP! IT'S ONLY LEFT</h6>
                            <div className="timer">
                                <div className="timer__inner">
                                    <div className="board">{this.state.day}</div>
                                    <span>Days</span>
                                </div>
                                <div className="timer__inner">
                                    <div className="board">{this.state.hours}</div>
                                    <span>Hours</span>
                                </div>
                                <div className="timer__inner">
                                    <div className="board">{this.state.minutes}</div>
                                    <span>Min</span>
                                </div>
                                <div className="timer__inner">
                                    <div className="board">{this.state.seconds}</div>
                                    <span>Sec</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
