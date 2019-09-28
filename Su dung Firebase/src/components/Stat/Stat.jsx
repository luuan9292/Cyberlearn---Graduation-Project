import React from 'react'

export default function Stat() {
    return (
        <section className="stat">
            <div className="container px-3">
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item" style={{ background: '#2abfd4' }}>
                        <h6>DEVELOPER</h6>
                        <span className="lnr lnr-laptop-phone" />
                        <div className="stat__number">224</div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item" style={{ background: '#ffc000' }}>
                        <h6>PHOTOGRAPHER</h6>
                        <span className="lnr lnr-camera" />
                        <div className="stat__number">224</div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item" style={{ background: '#1a71b0' }}>
                        <h6>DESIGN</h6>
                        <span className="lnr lnr-briefcase" />
                        <div className="stat__number">224</div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item" style={{ background: '#ff9d00' }}>
                        <h6>EDUCATION</h6>
                        <span className="lnr lnr-book" />
                        <div className="stat__number">224</div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item" style={{ background: '#4c699e' }}>
                        <h6>VIDEO</h6>
                        <span className="lnr lnr-camera-video" />
                        <div className="stat__number">224</div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item" style={{ background: '#624aad' }}>
                        <h6>LANGUAGE</h6>
                        <span className="lnr lnr-flag" />
                        <div className="stat__number">224</div>
                    </div>
                </div>
            </div>
        </section>

    )
}
