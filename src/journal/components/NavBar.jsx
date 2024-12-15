import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid2
          container
          direction="row"
          justifyContent="space-between"
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="h4" noWrap component={"div"}>
            JournalApp
          </Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
