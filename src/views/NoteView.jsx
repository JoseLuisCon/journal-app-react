import { SaveOutlined } from "@mui/icons-material";
import { Button, Container, Grid2, TextField, Typography } from "@mui/material";
import { ImageGalery } from "../journal/components";

export const NoteView = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2
        container
        size={12}
        direction="row"
        justifyContent={"space-between"}
      >
        <Grid2>
          <Typography fontSize={39} fontWeight="light">
            28 de agosto, 2023
          </Typography>
        </Grid2>
        <Grid2>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container size={12}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          sx={{ border: "none", mb: 1 }}
        />
        <ImageGalery />
      </Grid2>
    </Grid2>
  );
};
