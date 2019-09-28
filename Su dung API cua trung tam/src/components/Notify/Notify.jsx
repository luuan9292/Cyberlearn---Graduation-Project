import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

export const notify = (type, text) => {
    return Swal.fire({
        type,
        text,
        title: 'Oops...',
        showConfirmButton: false,
        timer: 1500
    })
}
