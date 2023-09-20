import Swal from "sweetalert2";


export const showSuccessMessage = (orderId, totalPrice) => {
    Swal.fire({
        icon: "success",
        title: `Well Done`,
        text: `Order ${orderId} has been generated successfully`,
        showConfirmButton: false,
        timer: 3500,
        toast: true,
        customClass: {
            title: "swal2-title",
            container: "swal2-container",
            popup: "swal2-popup",
            htmlContainer: "swal2-html-container",
        },
        footer: `<h5 className='text-center'>TOTAL TO PAY ${totalPrice}</h5>`,
    });
}


export const showErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: `Ups...`,
        text: `The order cannot be generated because a problems in the stock...`,
        showConfirmButton: false,
        timer: 3500,
        toast: true,
        customClass: {
            title: "swal2-title",
            container: "swal2-container",
            popup: "swal2-popup",
            htmlContainer: "swal2-html-container",
        },
    });
}