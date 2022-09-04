import React from "react";
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

const PlacePage = () => {
  const PlaceList = [
    { id: 1, name: "机の上" },
    { id: 2, name: "本棚" },
    { id: 3, name: "クローゼット（服）" },
    { id: 4, name: "床" },
  ];
  return (
    <div>
      <div>
        <TextField
          id="standard-basic"
          placeholder="掃除場所を追加 例：机の上"
          variant="standard"
        />
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
      <div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.white" }}
        >
          {PlaceList.map((place) => {
            return (
              <ListItem
                key={place.id}
                disablePadding
                secondaryAction={
                  <IconButton>
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
