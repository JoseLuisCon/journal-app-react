import { Link as RouterLink } from "react-router";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { red } from "@mui/material/colors";
export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid2 container>
          <Grid2 item size={12} sx={{ mt: 2 }}>
            <TextField
              required
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid2>
          <Grid2 item size={12} sx={{ mt: 2 }}>
            <TextField
              required
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid2>
          <Grid2 item size={12} sx={{ mt: 2 }}>
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              placeholder="password"
              autoComplete="current-password"
              fullWidth
            />
          </Grid2>
          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid2 size={12}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container direction="row" size={12} justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
