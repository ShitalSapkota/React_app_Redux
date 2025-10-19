import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-around">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </Box>
    </Container>
  );
};

export default Navbar;