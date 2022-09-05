import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Place } from "../hooks/usePlace";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export type ModalProps = {
  //add after
  modalOpen: boolean;
  handleModalClose: () => void;
  targetPlace: null | Place;
  renamePlace: (id: string, name: string) => void;
};

const PlaceModal: React.FC<ModalProps> = (props) => {
  const [inputPlaceRename, setInputPlaceRename] = useState("");
  const handleInputPlaceRename = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputPlaceRename(event.target.value);
  };

  useEffect(() => {
    setInputPlaceRename(props.targetPlace?.name ?? "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.modalOpen]);

  return (
    <Modal
      open={props.modalOpen}
      onClose={props.handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs="auto">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              場所名を編集
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={handleInputPlaceRename}
              value={inputPlaceRename}
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              onClick={() => {
                if (props.targetPlace) {
                  props.renamePlace(props.targetPlace.id, inputPlaceRename);
                }
                props.handleModalClose();
              }}
            >
              変更を保存
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default PlaceModal;
