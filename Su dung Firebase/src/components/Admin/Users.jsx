import React, { Component } from 'react'
import { connect } from 'react-redux';

import UsersItem from './UsersItem';
import UserModal from './UserModal';
import { signupRequest, searchUser } from '../../store/actions/users';

class Users extends Component {
    
    render() {

        let { users, displayUser,searchUser,currentUser } = this.props;

        return (
            <>
                <UserModal 
                    signupRequest={signupRequest}
                    searchUser={searchUser}
                    currentUser={currentUser}
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

                        {this.showUsersItem(users, displayUser)}

                    </tbody>
                </table>
            </>
        )
    }

    /**----------------------------------------
     * Function: Mapping Viewing Item
     * Component: Courses
     ----------------------------------------**/
    showUsersItem = (users, searchKeyword) => {
        let result = [];
        if (users.length > 0) {
            if (searchKeyword.length > 0 && searchKeyword.length !== "") {
                users = users.filter(user => user.taiKhoan.toLowerCase().indexOf(searchKeyword.toLowerCase().trim()) !== -1);
            }

            for (let index = users.length - 1; index >= 0; index--) {
                result.push(<UsersItem key={index} user={users[index]} />)
            }
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        displayUser: state.displayUser,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signupRequest: user => {
            dispatch(signupRequest(user))
        },
        searchUser: keyword => {
            dispatch(searchUser(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
