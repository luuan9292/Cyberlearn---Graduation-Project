import * as type from '../../constants/actionType';
import api from "../../services/api";
import { notify } from '../../components/Notify/Notify';

const localUser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {};

export const getCourseRequest = () => {
    return dispatch => {
        api.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
            .then(res => {
                dispatch(getCourse(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getCourse = (coursesData) => {
    return {
        type: type.GET_COURSES,
        payload: coursesData
    }
}

export const addCourseRequest = course => {
    return dispatch => {
        console.log(localUser.accessToken)
        api.defaults.headers.common['Authorization'] = 'Bearer ' + localUser.accessToken;
        api.post("QuanLyKhoaHoc/ThemKhoaHoc", course)
            .then(res => {
                dispatch(addCourse(course))
                console.log(res) 
            })
            .catch(err => { 
                console.log(err) 
            })
    }
}

export const addCourse = course => {
    return {
        type: type.ADD_COURSE,
        payload: course
    }
}

// export const deleteCourseRequest = maKhoaHoc => {
//     return dispatch => {
//         api.delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
//             .then(res => {
//                 dispatch(deleteCourse(maKhoaHoc))
//                 console.log(res) 
//             })
//             .catch(err => { 
//                 console.log(err) 
//             })
//     }
// }

export const deleteCourse = maKhoaHoc => {
    return {
        type: type.DELETE_COURSE,
        payload: maKhoaHoc
    }
}

// export const editCourseRequest = course => {
//     return dispatch => {
//         api.delete("QuanLyKhoaHoc/CapNhatKhoaHoc", course)
//             .then(res => {
//                 dispatch(editCourse(course))
//                 console.log(res) 
//             })
//             .catch(err => { 
//                 console.log(err) 
//             })
//     }
// }

export const editCourse = course => {
    return {
        type: type.EDIT_COURSE,
        payload: course
    }
}

export const updateCourse = course => {
    return {
        type: type.UPDATE_COURSE,
        payload: course
    }
}

export const getUsersRequest = () => {
    return dispatch => {
        api.get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
            .then(res => {
                dispatch(getUsers(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getUsers = (usersData) => {
    return {
        type: type.GET_USERS,
        payload: usersData
    }
}

export const addUserRequest = user => {
    console.log(user.accessToken);
    
    api.defaults.headers.common['Authorization'] = 'Bearer ' + localUser.accessToken;
    api.post('QuanLyNguoiDung/ThemNguoiDung', user)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err)
    })
}

export const signupRequest = (user, callback) => {
    api.post('/QuanLyNguoiDung/DangKy', user)
        .then(res => {
            callback();
            notify('success', 'Sign Up Successful');
        })
        .catch(err => {
            notify('error', 'Something went wrong!');
        })
}

export const signinRequest = (user, callback) => {
    api.post('QuanLyNguoiDung/DangNhap', user)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))
            callback(res.data);
            notify('success', 'Sign In Successful');
        })
        .catch(err => {
            notify('error', 'Something went wrong!');
        })
}

export const setCurrentUser = user => {
    return {
        type: type.SET__CURRENT__USER,
        payload: user
    }
}

export const getUserDetail = (taiKhoan, callback) => {
    api.defaults.headers.common['Authorization'] = 'Bearer ' + localUser.accessToken;
    api.post('QuanLyNguoiDung/ThongTinTaiKhoan', {taiKhoan})
    .then(res => {
        callback(res.data)
    })
    .catch(err => {
        console.log(err);
    })
}

export const displayCourses = displayType => {
    return {
        type: type.DISPLAY_COURSES,
        payload: displayType
    }
}

export const searchCourses = keyword => {
    return {
        type: type.SEARCH_COURSES,
        payload: keyword
    }
}

export const addToCart = course => {
    return {
        type: type.ADD_TO_CART,
        payload: course
    }
}

export const deleteCart = (maKhoaHoc) => {
    return {
        type: type.DELETE_CART,
        payload: maKhoaHoc
    }
}