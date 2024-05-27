"use client";

import { useState } from "react";

import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import Image from "next/image";
import Link from "next/link";

import logoImg from "@/public/images/logoBFC.jpg";

export const DrawerComp = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const DrawerList = (
    <Box
      sx={{ width: 450, paddingTop: 11 }}
      role="presentation"
      justifyContent="center"
      display="grid"
    >
      <List sx={{ fontFamily: "cooper" }}>
        <Link href="/products/burgers" className=" hover:text-red-500 ">
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={handleClose}>
              <ListItemIcon>
                <LunchDiningIcon sx={{ fontSize: 32 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    style={{ fontSize: "30px", fontFamily: "cooper" }}
                  >
                    <div className="font-cooper">Products</div>
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link href="/deals" className="hover:text-red-500 ">
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={handleClose}>
              <ListItemIcon>
                <FastfoodIcon sx={{ fontSize: 32 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    style={{ fontSize: "30px", fontFamily: "cooper" }}
                  >
                    <div className="font-cooper ">Deals</div>
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem disablePadding>
          <Link href="/restaurants" className="hover:text-red-500 ">
            <ListItemButton component="a" onClick={handleClose}>
              <ListItemIcon>
                <RestaurantIcon sx={{ fontSize: 32 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography style={{ fontSize: "30px", fontFamily: "arvo" }}>
                    <div className="font-cooper ">Restaurants</div>
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <Divider />

      <div id="socials" className="mt-24 pl-5">
        <ul className="flex items-center space-x-6">
          <li onClick={handleClose}>
            <Link href="#">
              <Image src="/icons/tiktok-icon.svg" width={28} height={28} alt="tiktok"/>
            </Link>
          </li>
          <li>
            <div className="h-8 border-l border-gray-800"></div>
          </li>
          <li onClick={handleClose}>
            <Link href="#">
              <Image
                src="/icons/black-instagram-icon.svg"
                width={30}
                height={30}
                alt="instagram"
              />
            </Link>
          </li>
        </ul>
      </div>
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
