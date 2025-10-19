import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <h1>Navbar</h1>
      </Box>
    </Container>
  );
};

export default Navbar;