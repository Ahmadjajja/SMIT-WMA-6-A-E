import { toast } from "react-toastify";

window.toastify = (msg, type) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    case "warn":
      toast.warn(msg);
      break;

    default:
      toast(msg);
      break;
  }
};
