import React from 'react'

export default function Register() {
    return (
        <>
            <div className="row messages">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="messages__titles">
                        <h3>Messages</h3>
                        <div className="filter__page">
                            <button className='filter__btn mr-1'>All</button>
                            <button className='filter__btn'>Unread</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row messages__overview">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="overview">
                        <div className="overview__image">
                            <span><i className="fas fa-comment-dots"></i></span>
                        </div>

                        <div className="overview__info">
                            <h6>Overall Messages</h6>
                            <div className="quantity">
                                <h3>2389 <span>This month</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 px-0">
                    <div className="overview between">
                        <div className="overview__image">
                            <span><i className="fas fa-paper-plane"></i></span>
                        </div>
                        <div className="overview__info">
                            <h6>Unread Messages</h6>
                            <div className="quantity">
                                <h3>1494 <span>This month</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="overview">
                        <div className="overview__image">
                            <span><i className="fas fa-reply-all"></i></span>
                        </div>
                        <div className="overview__info">
                            <h6>Received Messages</h6>
                            <div className="quantity">
                                <h3>895 <span>This month</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row messages__content">
                <div className='message__item'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 messages__left'>
                        <input type="checkbox" />
                        <div className='message__avatar'>
                            <img src='/img/teacher.jpg' alt='avatar' />
                        </div>
                        <h5>Hoang An</h5>
                    </div>
                    <div className='col-sm-9 col-md-9 col-lg-9 col-xl-9 messages__right'>
                        <span className="badge badge-info">Member</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                    </div>
                </div>
                <div className='message__item'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 messages__left'>
                        <input type="checkbox" />
                        <div className='message__avatar'>
                            <img src='/img/teacher2.jpg' alt='avatar' />
                        </div>
                        <h5>Hoang An</h5>
                    </div>
                    <div className='col-sm-9 col-md-9 col-lg-9 col-xl-9 messages__right'>
                        <span className="badge badge-info">Member</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                    </div>
                </div>
                <div className='message__item'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 messages__left'>
                        <input type="checkbox" />
                        <div className='message__avatar'>
                            <img src='/img/teacher3.jpg' alt='avatar' />
                        </div>
                        <h5>Hoang An</h5>
                    </div>
                    <div className='col-sm-9 col-md-9 col-lg-9 col-xl-9 messages__right'>
                        <span className="badge badge-success">Author</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                    </div>
                </div>
                <div className='message__item'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 messages__left'>
                        <input type="checkbox" />
                        <div className='message__avatar'>
                            <img src='/img/teacher4.jpg' alt='avatar' />
                        </div>
                        <h5>Hoang An</h5>
                    </div>
                    <div className='col-sm-9 col-md-9 col-lg-9 col-xl-9 messages__right'>
                        <span className="badge badge-info">Member</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                    </div>
                </div>
                <div className='message__item'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 messages__left'>
                        <input type="checkbox" />
                        <div className='message__avatar'>
                            <img src='/img/teacher5.jpg' alt='avatar' />
                        </div>
                        <h5>Hoang An</h5>
                    </div>
                    <div className='col-sm-9 col-md-9 col-lg-9 col-xl-9 messages__right'>
                        <span className="badge badge-success">Author</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                    </div>
                </div>
                <div className='message__item'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 messages__left'>
                        <input type="checkbox" />
                        <div className='message__avatar'>
                            <img src='/img/teacher6.jpg' alt='avatar' />
                        </div>
                        <h5>Hoang An</h5>
                    </div>
                    <div className='col-sm-9 col-md-9 col-lg-9 col-xl-9 messages__right'>
                        <span className="badge badge-info">Member</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                    </div>
                </div>
            </div>

        </>
    )
}
