import Swal from "sweetalert2";

export const showAlert = (title: string, text: string) => {
    Swal.fire({
        title: title,
        text: text,
        icon: "success",
        confirmButtonText: "OK",
    });
}