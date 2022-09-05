import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { Place, usePlace } from "../hooks/usePlace";
import PlaceModal from "../components/PlaceModal";

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
    setModalOpen(true);
  };
  const handleModalClose = () => setModalOpen(false);

  //rename処理
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
      <PlaceModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        targetPlace={targetPlace}
        renamePlace={renamePlace}
      />
    </div>
  );
};

export default PlacePage;
