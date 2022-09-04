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
import { usePlace } from "../hooks/usePlace";

const PlacePage = () => {
  const { placeList, addPlace, deletePlace } = usePlace();
  const [inputPlace, setInputPlace] = useState("");
  const handlePlaceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPlace(event.target.value);
  };

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
                <ListItemButton>
                  <ListItemText primary={place.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default PlacePage;
