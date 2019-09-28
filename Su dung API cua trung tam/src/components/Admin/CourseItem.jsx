import React, { Component } from 'react'

export default class CourseItem extends Component {

    onDeleteCourse = () => {
        this.props.deleteCourse(this.props.course.maKhoaHoc);
    }

    showEditCourse = () => {
        this.props.showEditCourse(this.props.course)
    }

    render() {

        let { course } = this.props;

        return (
            <tr>
                <td className="pt-4">{course.maKhoaHoc}</td>
                <td>
                    <div className="name__wrapper d-flex">
                        <img src={course.hinhAnh} alt='avatar' />
                        <div className="course__name ml-3">
                            <h6>{course.tenKhoaHoc}</h6>
                            <span className="badge badge-info">{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
                        </div>
                    </div>
                </td>
                <td className="pt-4">
                    <h6>{course.nguoiTao.hoTen}</h6>
                    <div className="badge badge-danger">{course.nguoiTao.taiKhoan}</div>
                </td>
                <td className="pt-4">{course.ngayTao}</td>
                <td className="pt-4">
                    <label className="switch">
                        <input onClick={this.onCheck} type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                </td>
                <td className="pt-4">
                    <button onClick={this.showEditCourse} data-toggle="modal" data-target="#courseModal" className="btn btn-info mr-2"><i className="far fa-edit"></i></button>
                    <button onClick={this.onDeleteCourse} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                </td>
            </tr>
        )
    }
}
