import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routhPath } from "../constant/route";

const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Link to={`${routhPath.categories}?category=popular`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Link>
      <Link to={`${routhPath.categories}?category=toprated`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </Link>
      <Link to={`${routhPath.categories}?category=upcoming`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Link>
    </Menu>
  );
};

export default HeaderMenu;
