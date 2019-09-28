import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyword: this.props.searchKeyword
        }
    }

    /**----------------------------------------
    * Function: Gan keyword cho state
    * Component: SearchBar
    ----------------------------------------**/
    onChange = e => {
        this.setState({
            keyword: e.target.value
        }, () => {
            this.props.handleSearch(this.state.keyword)
        })
    }

    /**----------------------------------------
    * Function: 
    *       + submit kich hoat dispatch
    *       + redirect sang trang search
    * Component: SearchBarContainer
    ----------------------------------------**/
    onSubmit = e => {
        e.preventDefault();

        this.props.handleSearch(this.state.keyword);

        this.props.history.push("/courses");
        
    }

    render() {
        return (
            <div className="container">
                <div className="row search__box">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <form className="search-form" onSubmit={this.onSubmit}>
                            <ul className="row search__menu">
                                <li>
                                    <select className="course__category">
                                        <option defaultValue={0}>Category</option>
                                        <option className="level-0" value={21}>Business&nbsp;&nbsp;(2)</option>
                                        <option className="level-1" value={29}>&nbsp;&nbsp;&nbsp;Finance&nbsp;&nbsp;(2)</option>
                                        <option className="level-1" value={38}>&nbsp;&nbsp;&nbsp;Management&nbsp;&nbsp;(1)</option>
                                        <option className="level-1" value={55}>&nbsp;&nbsp;&nbsp;Strategy&nbsp;&nbsp;(1)</option>
                                        <option className="level-0" value={25}>Creative&nbsp;&nbsp;(4)</option>
                                        <option className="level-1" value={33}>&nbsp;&nbsp;&nbsp;GraphicDesign&nbsp;&nbsp;(3)</option>
                                        <option className="level-1" value={34}>&nbsp;&nbsp;&nbsp;Guitar&nbsp;&nbsp;(1)</option>                              <option className="level-1" value={42}>&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;(2)</option>
                                        <option className="level-0" value={31}>General&nbsp;&nbsp;(2)</option>
                                        <option className="level-1" value={36}>&nbsp;&nbsp;&nbsp;Health&nbsp;&nbsp;(1)</option>
                                        <option className="level-1" value={58}>&nbsp;&nbsp;&nbsp;Travel&nbsp;&nbsp;(1)</option>
                                        <option className="level-1" value={60}>&nbsp;&nbsp;&nbsp;Gaming&nbsp;&nbsp;(1)</option>
                                        <option className="level-0" value={56}>Technology&nbsp;&nbsp;(3)</option>
                                        <option className="level-1" value={59}>&nbsp;&nbsp;&nbsp;WebDevelopment&nbsp;&nbsp;(1)</option>
                                        <option className="level-1" value={61}>&nbsp;&nbsp;&nbsp;Hardware&nbsp;&nbsp;(1)</option>
                                        <option className="level-1" value={62}>&nbsp;&nbsp;&nbsp;OperatingSystems&nbsp;&nbsp;(3)</option>
                                    </select>
                                </li>
                                <li>
                                    <select className="status">
                                        <option value>Course Status</option>
                                        <option value="free">Free</option>
                                        <option value="paid">Paid</option>
                                    </select>
                                </li>
                                <li>
                                    <input name="search" onChange={this.onChange} value={this.state.keyword} className="search__input" type="text" placeholder="Type Keyword" autoComplete="off"/>
                                    <div className={this.state.keyword.length > 0 && (this.props.children && this.props.children.length > 0) ? "search__result" : "search__result hiddenForm"}>
                                        <div className="search__form">
                                            {this.props.children}

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="submit" className="search__button">Search</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
