import React, { Component } from 'react';

import api from "../../services/api";
import { notify } from '../Notify/Notify';

export default class UsersItem extends Component {

    onDeleteUser = (taiKhoan) => {
        api.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`, null)
        .then(res => {
            notify('success', 'Delete Successful');
        })
        .catch(err => {
            notify('error', 'Something went wrong!');
        })
    }

    render() {

        let { user } = this.props;

        return (
            <tr>
                <td>
                    <img src="/img/teacher6.jpg" alt='avatar' />
                    <div className="user__name">
                        <h6>{user.taiKhoan}</h6>
                        <span className="badge badge-info">Member</span>
                    </div>
                </td>
                <td className="pt-4">{user.hoTen}</td>
                <td className="pt-4">{user.soDt}</td>
                <td className="pt-4">{user.email}</td>
                <td className="pt-4">
                    <button onClick={() => this.onDeleteUser(user.taiKhoan)} className="delete__btn"><i className="fas fa-user-slash"></i> Delete</button>
                </td>
            </tr>
        )
    }
}
