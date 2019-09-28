import React, { Component } from 'react'

export default class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 16,
            startIndex: 0,
            endIndex: 3
        }
    }

    /**----------------------------------------
    * Function: render ra cac page cua pagination
    * Component: Courses
    ----------------------------------------**/
    renderPageNumbers = (pageNumbers) => {
        let result = null;
        let active = false;
        let { startIndex, endIndex } = this.state
        if (pageNumbers !== undefined) {
            //cat ra array bang vi tri bat dau va ket thuc (so voi currentPage)
            result = pageNumbers.slice(startIndex, endIndex).map(number => {
                this.state.currentPage === number ? active = 'active' : active = '';
                if (number < pageNumbers.length) {
                    return (
                        <li className={`pagi__item ${active}`}
                            id={number}
                            onClick={this.handleClick}
                            key={number}>

                            {number}

                        </li>
                    );
                }
                return "";
            })
        }
        return result;
    }

    /**----------------------------------------
    * Function: 
    *       + Moi lan click gan currentPage bang id hien tai (number page)
    *       + Gan length cua page
    * Component: Courses
    ----------------------------------------**/
    handleClick = e => {
        this.setState({
            currentPage: +e.target.id
        }, () => {
            this.props.handlePagination(this.state.currentPage, this.state.itemsPerPage);
        });
        window.scrollTo(0, 0);
    }

    /**----------------------------------------
    * Function: Tien toi mot trang
    * Component: Courses
    ----------------------------------------**/
    handleBack = () => {
        let { currentPage } = this.state;
        this.setState(state => {
            return {
                currentPage: currentPage - 1
            }
        }, () => {
            this.props.handlePagination(this.state.currentPage, this.state.itemsPerPage);
        })
        window.scrollTo(0, 0);
    }

    /**----------------------------------------
    * Function: Lui ve mot trang
    * Component: Courses
    ----------------------------------------**/
    handleNext = () => {
        let { currentPage } = this.state;
        this.setState(state => {
            return {
                currentPage: currentPage + 1
            }
        }, () => {
            this.props.handlePagination(this.state.currentPage, this.state.itemsPerPage);
        })
        window.scrollTo(0, 0);
    }

    /**----------------------------------------
    * Function: Toi trang cuoi cung
    * Component: Courses
    ----------------------------------------**/
    handleBackFirstPage = () => {
        this.setState(state => {
            return {
                currentPage: 1
            }
        }, () => {
            this.props.handlePagination(this.state.currentPage, this.state.itemsPerPage);
        })
        window.scrollTo(0, 0);
    }

    /**----------------------------------------
    * Function: Lui ve trang dau tien
    * Component: Courses
    ----------------------------------------**/
    handleGoLastPage = (lastPage) => {
        this.setState(state => {
            return {
                currentPage: lastPage,
                pageQuantity: lastPage
            }
        }, () => {
            this.props.handlePagination(this.state.currentPage, this.state.itemsPerPage);
        })
        window.scrollTo(0, 0);
    }

    /**----------------------------------------
    * Function: Render lai so page moi lan chuyen page moi
    * Component: Courses
    ----------------------------------------**/
    static getDerivedStateFromProps(prevProps, nextState) {
        if (nextState.currentPage > 1) {// Moi lan chuyen trang
            nextState.startIndex = nextState.currentPage - 2;
            nextState.endIndex = nextState.currentPage + 1;

        }
        else if (nextState.currentPage === 1) { //Truong hop chuyen ve first page
            nextState.startIndex = 0;
            nextState.endIndex = 3;
        }
        else if (nextState.currentPage === nextState.pageQuantity) {//Truong hop chuyen den last page
            nextState.startIndex = nextState.pageQuantity - 4;
            nextState.endIndex = nextState.pageQuantity + 1;
        }

        return null;
    }

    render() {

        /**----------------------------------------
        * Function: 
        *       + Dat bien, xac dinh so luong item 
        *       + Xac dinh so luong page
        * Component: CoursesContainer
        ----------------------------------------**/

        const {JSXitems} = this.props;// Mang JSX truyen tu CoursesContainer

        const { itemsPerPage } = this.state;// Trang hien tai va so luong item moi trang

        const pageNumbers = [];//So luong trang

        // Chuan bi cac bien can thiet
        if (JSXitems !== null && JSXitems !== undefined && JSXitems.length > 0) {

            // Lap so trang hien thi
            for (let i = 1; i <= Math.ceil(JSXitems.length / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
        }

        return (
            <section className="pagi">
                <ul className="pagi__wrapper">
                    
                    
                <li className={`pagi__item ${this.state.currentPage === pageNumbers[0] ? "disabled" : ""}`} onClick={this.handleBack}>
                            <i className="fas fa-chevron-left" />
                    </li>

                    {
                        this.state.currentPage >= 3
                            ?
                            <>
                                <li className={`pagi__item`} onClick={this.handleBackFirstPage}>1</li>
                                <li className="pagi__item disabled">...</li>
                            </>
                            :
                            ""
                    }

                    {this.renderPageNumbers(pageNumbers)}

                    <li className="pagi__item disabled">...</li>

                    <li className={`pagi__item ${this.state.currentPage === pageNumbers.length ? "active" : ""}`}
                        onClick={() => this.handleGoLastPage(pageNumbers.length)}>
                        {pageNumbers.length}
                    </li>

                    <li className={`pagi__item ${this.state.currentPage === pageNumbers.length ? "disabled" : ""}`} onClick={this.handleNext}>
                            <i className="fas fa-chevron-right" />
                    </li>

                    
                </ul>
            </section>
        )
    }
}
