import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import './modal.css'

interface ModalPobProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function ModalPob({ open, handleClose, children }: ModalPobProps) {
  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
}

