import { toast } from "react-toastify";
export const ShowToast = (toastText, toastTheme) => {
  const notify = () => {
    toast[toastTheme](toastText, {
      position: "bottom-center",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  notify();
};
