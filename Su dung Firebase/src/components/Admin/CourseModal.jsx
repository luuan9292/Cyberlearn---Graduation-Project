import React, { Component } from "react";
import _ from "lodash";

import { notify } from "../Notify/Notify";

export default class CourseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                tenKhoaHoc: "",
                moTa: "",
                hinhAnh: "/img/default-image.jpg"
            },
            courseEdit: {},
            search: ""
        };
    }

    onChange = e => {
        this.setState({
            course: {
                ...this.state.course,
                [e.target.name]: e.target.value
            }
        });
    };

    onSearchChange = e => {
        this.setState(
            {
                search: e.target.value
            },
            () => {
                this.props.searchCourses(this.state.search);
            }
        );
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!_.isEmpty(nextProps.courseEdit) && nextProps.courseEdit !== prevState.courseEdit) {
            return {
                course: nextProps.courseEdit,
                courseEdit: nextProps.courseEdit
            };
        }
        return null;
    }

    onAddCourse = () => {
        let ngayTao = new Date();

        if (this.props.currentUser.taiKhoan === "Admin") {
            this.props.addCourseRequest({
                ...this.state.course,
                ngayTao: `${ngayTao.getDate()}/${ngayTao.getMonth() + 1}/${ngayTao.getFullYear()}`,
                luotXem: 155,
                soLuongHocVien: 100,
                nguoiTao: {
                    taiKhoan: "Admin",
                    hoTen: "Hoang An",
                    maLoaiNguoiDung: "GV"
                },
                danhMucKhoaHoc: {
                    maDanhMucKhoahoc: "development",
                    tenDanhMucKhoaHoc: "development"
                }
            });
        } else {
            notify("error", "Tài khoản của bạn không được phép thực hiện!");
        }
    };

    onUpdateCourse = () => {
        if (this.props.currentUser.taiKhoan === "Admin") {
            this.props.updateCourseRequest(this.state.course);
        } else {
            notify("error", "Tài khoản của bạn không được phép thực hiện!");
        }
    };

    onClearForm = () => {
        this.setState({
            course: {
                tenKhoaHoc: "",
                moTa: "",
                hinhAnh: "/img/default-image.jpg"
            },
            courseEdit: {}
        });
        this.props.showEditCourse({});
    };

    render() {
        return (
            <>
                <div className="row post__title">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 add__search">
                        <button onClick={this.onClearForm} className="add__course" data-toggle="modal" data-target="#courseModal">
                            <i className="fas fa-plus"></i> ADD COURSE
                        </button>
                        <input name="search" onChange={this.onSearchChange} type="text" placeholder="Search Course" />
                    </div>
                </div>
                <div className="modal" id="courseModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add New Course</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    &times;
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="tenKhoaHoc">Course's Name</label>
                                    <input name="tenKhoaHoc" onChange={this.onChange} value={this.state.course.tenKhoaHoc || ""} type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="moTa">Description</label>
                                    <input value={_.get(this.state.course, "moTa", "")} name="moTa" onChange={this.onChange} type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hinhAnh">Image</label>
                                    <input value={_.get(this.state.course, "hinhAnh", "")} name="hinhAnh" onChange={this.onChange} type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="modal-footer">
                                {!_.isEmpty(this.state.courseEdit) ? (
                                    <button type="button" className="btn btn-warning" onClick={this.onUpdateCourse}>
                                        Edit
                                    </button>
                                ) : (
                                    <button type="button" className="btn btn-primary" onClick={this.onAddCourse}>
                                        Add
                                    </button>
                                )}

                                <button type="button" className="btn btn-danger" data-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
