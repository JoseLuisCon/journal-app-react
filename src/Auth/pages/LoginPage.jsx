import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid2 container>
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
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
