import { Alert } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const ToastMessage = () => {
  const message = useSelector((state) => state.toastMessage.message);
  const isOpen = useSelector((state) => state.toastMessage.isOpen);

  return (
    // <div className="relative w-screen h-screen">
    <div className="fixed bottom-4 left-4 z-50">
      <Alert
        color="blue"
        open={isOpen}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        {message}
      </Alert>
    </div>
    // </div>
  );
};

export default ToastMessage;
