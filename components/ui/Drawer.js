"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

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

import logoImg from "@/public/images/logoBFC.jpg";
import LanguageChanger from "./languageChanger";

export const DrawerComp = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { t } = useTranslation();

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left", // This centers the content horizontally
        justifyContent: "center", // This centers the content vertically (optional)
        height: "100%", //tically centers the content (optional)
        padding: "70px",
      }}
    >
      <List>
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
                    <div className="font-cooper">{t("products")}</div>
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
                    <div className="font-cooper ">{t("deals")}</div>
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
                    <div className="font-cooper ">{t("restaurants")}</div>
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
              <Image
                src="/icons/tiktok-icon.svg"
                width={28}
                height={28}
                alt="tiktok"
              />
            </Link>
          </li>
          <li>
            <div className="h-8 border-l border-gray-800"></div>
          </li>
          <li onClick={handleClose}>
          <a target="_blank" href="https://www.instagram.com/bfc_belgium/">
              <Image
                src="/icons/black-instagram-icon.svg"
                width={30}
                height={30}
                alt="instagram"
              />
            </a>
          </li>
          <li className="pl-[40px]">
            <LanguageChanger />
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
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "450px" }, // Full width on xs, 450px on sm and up
          },
        }}
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
        <button
          className="absolute right-5 top-5 text-2xl"
          onClick={() => setDrawerOpen(false)}
        >
          X
        </button>
      </Drawer>
    </>
  );
};
