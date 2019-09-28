import React, { Component } from 'react';
import { Bar, Pie, Polar } from 'react-chartjs-2';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            barData: {
                labels: ['January', 'February', 'March', 'April', 'June', 'July'],
                datasets: [
                    {
                        label: 'Month',
                        data: [
                            15500,
                            20000,
                            30000,
                            40000,
                            50000,
                            60000,
                            70000,
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.3)',
                            'rgba(54, 162, 235, 0.3)',
                            'rgba(255, 206, 86, 0.3)',
                            'rgba(75, 192, 193, 0.3)',
                            'rgba(153, 102, 255, 0.3)',
                            'rgba(255, 159, 64, 0.3)',

                        ],
                        borderWidth: 1,
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 193, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',

                        ]
                    }
                ]
            },
            pieData: {
                labels: ['New Users', 'Old Users', 'Members', 'Guests'],
                datasets: [
                    {
                        label: 'User',
                        data: [60, 20, 10, 10],
                        backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0', '#ffce56']
                    }
                ]
            },
            polarData: {
                labels: ['February', 'March', 'April', 'June', 'July'],
                datasets: [
                    {
                        label: 'Users',
                        data: [20, 30, 15, 10, 25],
                        backgroundColor: ['#ff6384', '#4bc0c0', '#ffce56', '#c9cbcf', '#36a2eb']
                    }
                ]
            }
        }
    }

    render() {
        return (
            <>
                <div className="row dash__new">
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="dash__detail info">
                            <div className="dash__name">
                                <i className="fas fa-comments"></i>
                                <div className="dash__number">
                                    <h3>160</h3>
                                    <h6>New Comments</h6>
                                </div>
                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="dash__detail danger">
                            <div className="dash__name">
                                <i className="fas fa-server"></i>
                                <div className="dash__number">
                                    <h3>28</h3>
                                    <h6>New Users</h6>
                                </div>
                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="dash__detail success">
                            <div className="dash__name">
                                <i className="fas fa-film"></i>
                                <div className="dash__number">
                                    <h3>35</h3>
                                    <h6>New Courses</h6>
                                </div>

                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="dash__detail warning">
                            <div className="dash__name">
                                <i className="fas fa-life-ring"></i>
                                <div className="dash__number">
                                    <h3>10</h3>
                                    <h6>New Messages</h6>
                                </div>

                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row dash__charts">
                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-5">

                        <Bar
                            data={this.state.barData}
                            options={{
                                title: {
                                    display: true,
                                    text: "Total Views Per Month",
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'top'
                                }
                            }}
                        />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
                        <Pie
                            data={this.state.pieData}
                            options={
                                {
                                    title: {
                                        display: true,
                                        text: "Total Users Per Month",
                                        fontSize: 25
                                    },
                                    cutoutPercentage: 50,
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }
                            }
                        />

                        <Polar
                            data={this.state.polarData}
                            options={
                                {
                                    title: {
                                        display: true,
                                        text: "Total Sales Per Month",
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }
                            }
                        />
                    </div>
                </div>

                <div className="row dash__views">

                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="views__detail">
                            <h3>Daily Views</h3>
                            <div className="views__percent">
                                <span className="badge badge-success">30% <i className="fas fa-level-up-alt"></i></span>
                                <h4>5000</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-success progress-bar-striped" style={{width:"30%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="views__detail">
                            <h3>Weekly Views</h3>
                            <div className="views__percent">
                                <span className="badge badge-danger">15% <i className="fas fa-level-down-alt"></i></span>
                                <h4>10000</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-danger progress-bar-striped" style={{width:"15%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="views__detail">
                            <h3>Monthly Views</h3>
                            <div className="views__percent">
                                <span className="badge badge-info">50% <i className="fas fa-level-up-alt"></i></span>
                                <h4>20000</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-info progress-bar-striped" style={{width:"50%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="views__detail">
                            <h3>Yearly Views</h3>
                            <div className="views__percent">
                                <span className="badge badge-warning">80% <i className="fas fa-level-up-alt"></i></span>
                                <h4>50000</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-warning progress-bar-striped" style={{width:"80%"}}></div>
                            </div>
                        </div>
                    </div>

                </div>

            </>

        )
    }
}
