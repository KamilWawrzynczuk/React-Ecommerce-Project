import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
const styles = {
  display: "hidden",
};
export default function FixedBottomNavigation() {
  const MoreNav = styled.div`
    height: 90vh;
    width: 50vw;
    background: black;
    color: white;
    display: styles.display;
  `;
  const [value, setValue] = React.useState(0);
  const [navBarStatus, showHideNavBar] = React.useState("block");
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <MoreNav>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
          </ul>
        </MoreNav>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          Deutschland (DE)
          <BottomNavigationAction label="Shop" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Liked Items" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="cart" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
