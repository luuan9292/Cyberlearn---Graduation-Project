import React, { Component } from 'react'
import { connect } from 'react-redux';

import UsersItem from './UsersItem';
import UserModal from './UserModal';
import { addUserRequest } from '../../store/actions';

class Users extends Component {
    
    render() {

        let { users } = this.props;

        return (
            <>
                <UserModal 
                    addUserRequest={addUserRequest}
                />

                <table className="table table-striped table__users">
                    <thead>
                        <tr>
                            <th>ID <i className="fas fa-sort-amount-up"></i></th>
                            <th>Fullname <i className="fas fa-sort-amount-up"></i></th>
                            <th>Phone <i className="fas fa-sort-amount-up"></i></th>
                            <th>Email <i className="fas fa-sort-amount-up"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.showUsersItem(users)}

                    </tbody>
                </table>
            </>
        )
    }

    /**----------------------------------------
     * Function: Mapping Viewing Item
     * Component: Courses
     ----------------------------------------**/
    showUsersItem = (users) => {
        let result = [];
        if (users.length > 0) {
            for (let index = users.length - 1; index >= 0; index--) {
                result.push(<UsersItem key={index} user={users[index]} />)
            }
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addUserRequest: user => {
            dispatch(addUserRequest(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
