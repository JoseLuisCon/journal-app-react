import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant={"permanent"}
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Typography
          variant="h4"
          noWrap
          component={"div"}
          sx={{ textAlign: "center" }}
        >
          Condemor
        </Typography>
        <Divider />

        <List>
          {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                  <ListItemText primary={text} />
                  <ListItemText
                    secondary={
                      "loremLorem ipsum dolor sit, amet consectetur adipisicing elit."
                    }
                  />
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
