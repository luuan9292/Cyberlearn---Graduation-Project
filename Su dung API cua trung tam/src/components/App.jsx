import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes } from "../routes/routes";
import { getCourseRequest, getUsersRequest, setCurrentUser } from '../store/actions';

class App extends React.Component {

    componentDidMount() {
        
        const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {};

        this.props.setCurrentUser(user);

        this.props.getCourseRequest();

        this.props.getUsersRequest();

    }

    render() {
        return (
            <Router>

                {this.showRoutes(routes)}

            </Router>

        );
    }
    /** ----------------------------------------
    * Function: Mapping route
    * Component: App
----------------------------------------**/
    showRoutes = routes => {
        let result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route path={route.path} exact={route.exact} component={route.main} key={index} />
            })
        }

        return <Switch>{result}</Switch>;
    }
}

export default connect(null, { getCourseRequest, getUsersRequest, setCurrentUser })(App);
