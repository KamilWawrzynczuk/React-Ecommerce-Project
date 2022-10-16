import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Route, Link, Routes } from "react-router-dom";

// component
export default function FixedBottomNavigation() {
  const MoreNav = styled.div`
    height: 90vh;
    width: 50vw;
    background: black;
    color: white;
    display: flex;
    font-size: 2rem;
  `;
  const [value, setValue] = React.useState(0);
  const [navBarStatus, showHideNavBar] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        {navBarStatus ? (
          <MoreNav>
            <ul style={{ display: "block" }}>
              <li>
                <Link to="/">Men</Link>
              </li>
              <li>
                <Link to="/">Women</Link>
              </li>
              <li>
                <Link to="/">Kids</Link>
              </li>
              <Link to="/">Sale</Link>
              <li>
                <Link to="/">Become a member and receive the best offers</Link>
              </li>
              <Link to="/">Orders</Link>
              <li>
                <Link to="/">Help</Link>
              </li>
            </ul>
          </MoreNav>
        ) : null}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => showHideNavBar(navBarStatus ? false : true)}
            label="More"
            icon={<MenuIcon />}
          />
          <BottomNavigationAction label="Liked Items" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="cart" icon={<ShoppingCartIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
