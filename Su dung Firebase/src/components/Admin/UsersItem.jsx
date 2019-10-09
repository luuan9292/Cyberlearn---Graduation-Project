import React, { Component } from "react";

import { notify } from "../Notify/Notify";

export default class UsersItem extends Component {
    onDeleteUser = taiKhoan => {
        notify("error", "Chỉ có thể xóa user trong Database!");
    };

    render() {
        let { user } = this.props;

        return (
            <tr>
                <td>
                    <img src="/img/avatar.png" alt="avatar" />
                    <div className="user__name">
                        <h6>{user.taiKhoan}</h6>
                        {user.loaiNguoiDung === "Admin" ? (
                            <span className="badge badge-danger">Admin</span>
                        ) : user.loaiNguoiDung === "Author" ? (
                            <span className="badge badge-success">Author</span>
                        ) : (
                            <span className="badge badge-info">Member</span>
                        )}
                    </div>
                </td>
                <td className="pt-4">{user.hoTen}</td>
                <td className="pt-4">{user.soDT}</td>
                <td className="pt-4">{user.email}</td>
                <td className="pt-4">
                    <button onClick={() => this.onDeleteUser(user.taiKhoan)} className="btn btn-info user__btn mr-2">
                        <i className="fas fa-user-edit"></i>
                    </button>
                    <button onClick={() => this.onDeleteUser(user.taiKhoan)} className="btn btn-danger user__btn mr-2">
                        <i className="fas fa-user-slash"></i>
                    </button>
                </td>
            </tr>
        );
    }
}
