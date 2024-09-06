import React from "react";
import UserForm from "./components/UserForm.tsx";
import { Container, Grid2 } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Grid2 alignItems="center" alignContent="center" height="100vh">
        <UserForm />
      </Grid2>
    </Container>
  );
};

export default App;
