import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes } from "../routes/routes";
import { getUsersRequest  } from '../store/actions/users';

import { getCoursesRequest } from '../store/actions/courses';

class App extends React.Component {

    componentDidMount() {
        
        this.props.getCoursesRequest();

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

export default connect(null, { getCoursesRequest, getUsersRequest })(App);
