import React, { Component } from 'react';

export default class Courses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            display: "grid",
        }
    }

    componentWillUnmount() {
        this.props.handleSearch("")
    }

    /**----------------------------------------
     * Function:
     *          + Send dispatch to reduce xu li kieu display
     *          + Thay doi trang thai hien thi de gan active
     * Component: Courses
     ----------------------------------------**/
    handleDisplay = (displayType) => {
        this.setState({
            display: displayType
        })

        this.props.handlelDisplay(displayType);
    }

    render() {

        return (
            <section className="courses">
                <div className="container">
                    <div className="row sort__filter align-items-center">
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-0">
                            <div className="sort">

                                <span onClick={() => this.handleDisplay("grid")}><i className={`fas fa-th ${this.state.display === "grid" ? "active" : ""}`} /></span>
                                <span onClick={() => this.handleDisplay("list")}><i className={`fas fa-th ${this.state.display === "list" ? "active" : ""}`} /></span>

                                <select className="sort__select" disabled>
                                    <option value="newness">Sort by name high to low</option>
                                    <option value="popularity">Sort by name low to high</option>
                                    <option value="low">Sort by price low to high</option>
                                    <option value="high">Sort by price high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right pr-0">
                            <div className="filter">
                                <span className="pr-4 showing">Showing 1–{this.props.children.props.children.length} of {this.props.children.props.children.length} results</span>
                                <span className="pl-4 filter__bar"><a href="#1">Filter <i className="fas fa-bars" /></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">

                            {this.props.children}

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
