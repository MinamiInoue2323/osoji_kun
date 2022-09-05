import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { Place, usePlace } from "../hooks/usePlace";

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

const PlacePage = () => {
  const { placeList, addPlace, deletePlace, renamePlace } = usePlace();
  const [inputPlace, setInputPlace] = useState("");
  const handlePlaceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPlace(event.target.value);
  };

  // modal処理
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = (place: Place) => {
    setTargetPlace(place);
    setInputPlaceRename(place.name);
    setModalOpen(true);
  };
  const handleModalClose = () => setModalOpen(false);

  //rename処理
  const [inputPlaceRename, setInputPlaceRename] = useState("");
  const handleInputPlaceRename = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputPlaceRename(event.target.value);
  };
  const [targetPlace, setTargetPlace] = useState<Place | null>(null);

  return (
    <div>
      <div>
        <TextField
          id="standard-basic"
          placeholder="掃除場所を追加 例：机の上"
          variant="standard"
          onChange={handlePlaceInput}
          value={inputPlace}
        />
        <IconButton
          onClick={() => {
            addPlace(inputPlace);
            setInputPlace("");
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
      <div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.white" }}
        >
          {placeList.map((place) => {
            return (
              <ListItem
                key={place.id}
                disablePadding
                secondaryAction={
                  <IconButton onClick={() => deletePlace(place.id)}>
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemButton onClick={() => handleModalOpen(place)}>
                  <ListItemText primary={place.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
      <div>
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
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
                    if (targetPlace) {
                      renamePlace(targetPlace.id, inputPlaceRename);
                    }
                    setModalOpen(false);
                  }}
                >
                  変更を保存
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default PlacePage;
