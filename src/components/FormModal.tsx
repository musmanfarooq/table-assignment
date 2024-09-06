import React from "react";
import { useSelector } from "react-redux";
import { Modal, Box, Typography, Button } from "@mui/material";

interface FormModalProps {
  open: boolean;
  onClose: (value: any) => void;
}

const FormModal = (props: FormModalProps) => {
  const formData = useSelector((state: any) => state.form || { name: '', age: '', country: '' });

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h2" mb={1}>
          Form Data
        </Typography>
        <Typography variant="h4" mb={1}>
          Summary of the data that you have entered:
        </Typography>
        <Typography mb={1}>Name: {formData.name}</Typography>
        <Typography mb={1}>Age: {formData.age}</Typography>
        <Typography mb={1}>Country: {formData.country}</Typography>
        <Button variant="contained" onClick={props.onClose} sx={{marginTop: '20px'}}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default FormModal;
