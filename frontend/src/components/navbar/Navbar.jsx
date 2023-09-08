import {
  Shop,
  SearchOutlined,
  PersonOutline,
  FavoriteBorder,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "200px",
  });

  const Search = styled("div")({
    display: "flex",
    flex: 1,
    alignItems: "center",
    borderRadius: "30px",
  });

  const Menu = styled("div")({
    display: "flex",
    justifyContent: "space-evenly",
    gap: "30px",
    padding: "10px",
    marginRight: "50px",
  });
  const MenuItem = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
        <StyledToolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            E-MART
          </Typography>
          <Shop sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase
              sx={{
                width: "100%",
                backgroundColor: "white",
                height: "32px",
                padding: "5px",
              }}
            />
            <SearchOutlined
              sx={{
                backgroundColor: "red",
                padding: "5px",
                height: "32px",
                width: "40px",
              }}
            />
          </Search>
          <Menu>
            <a href="#">
              <MenuItem>
                <PersonOutline />
                <Typography variant="p" noWrap component="div" sx={{}}>
                  Profile
                </Typography>
              </MenuItem>
            </a>
            <a href="#">
              <MenuItem>
                <FavoriteBorder />
                <Typography variant="p" noWrap component="div" sx={{}}>
                  Wishlist
                </Typography>
              </MenuItem>
            </a>
            <a href="#">
              <MenuItem>
                <ShoppingBagOutlined />
                <Typography variant="p" noWrap component="div" sx={{}}>
                  Bag
                </Typography>
              </MenuItem>
            </a>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
