import { StarRateRounded, Start, StartOutlined } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
export const NothingSelectedView = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid2>
        <StarOutlineIcon sx={{ fontSize: 100, color: "white" }} />
      </Grid2>
      <Grid2>
        <Typography color="white" variant="h4">
          Seleccion o crea una entrada
        </Typography>
      </Grid2>
    </Grid2>
  );
};
