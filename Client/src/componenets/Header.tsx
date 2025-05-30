import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Container>
          <Typography variant="h6">Vural Mobile & Telekom</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header