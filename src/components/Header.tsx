import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";

import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export type HeaderProps = {
  isLogin: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const { signOutAction } = useFirebaseAuth();

  const toggleDrawer = () => {
    setModalOpen(!modalOpen);
  };

  const pageList = [
    { name: "タイマー", url: "/timer" },
    { name: "掃除場所一覧", url: "/place" },
    { name: "設定", url: "/config" },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              何かしらのページタイトル
            </Typography>

            {props.isLogin && (
              <Button variant="contained" onClick={signOutAction}>
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={modalOpen} onClose={toggleDrawer}>
        <Typography variant="h4" component="div">
          お掃除くん
        </Typography>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {pageList.map((page) => (
              <ListItem key={page.name} disablePadding>
                <ListItemButton
                  onClick={() => {
                    toggleDrawer();
                    navigate(page.url);
                  }}
                >
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};
export default Header;
