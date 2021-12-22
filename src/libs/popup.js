import Swal from "sweetalert2";

export const Popup = async () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
  });
  await Toast.fire({
    title: "Onprogress, Coming Soon Cuy!",
  });
};
