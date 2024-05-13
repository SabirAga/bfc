"use client";

import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

import logoImg from "@/public/images/logoBFC.jpg";
import Image from "next/image";

import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const DrawerComp = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const DrawerList = (
    <Box
      sx={{ width: 450, paddingTop: 11 }}
      role="presentation"
      justifyContent="center"
      display="grid"
      onClick={() => setDrawerOpen(true)}
    >
      <List sx={{ fontFamily: "montAlt" }}>
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <LunchDiningIcon sx={{ fontSize: 32 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ fontSize: "32px", fontFamily: "montAlt" }}>
                  Products
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <FastfoodIcon sx={{ fontSize: 32 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ fontSize: "32px", fontFamily: "arvo" }}>
                  Deals
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <RestaurantIcon sx={{ fontSize: 32 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ fontSize: "32px", fontFamily: "arvo" }}>
                  Restaurants
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="flex justify-center items-center pt-6">
          <Image
            src={logoImg}
            width={250}
            height={150}
            className=" max-w-full h-auto"
            alt="logo"
          />
        </div>
        {DrawerList}
      </Drawer>
    </>
  );
};
