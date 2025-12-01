import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../store/slice/cartSlice";
import { fetchProducts } from "../store/slice/productSlice";
import type { RootState } from "../store/store";


const Products = () => {
  const products = useAppSelector((state: RootState) => state.products.products);
  const status = useAppSelector((state: RootState) => state.products.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="400px"
        >
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Our Products
          </Typography>
          <Chip
            label={`${products.length} product${
              products.length !== 1 ? "s" : ""
            }`}
            color="primary"
            variant="outlined"
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Products Grid */}
      <Grid container spacing={3} display="flex" justifyContent="center">
        {products.map((product) => (
          <Grid
            key={product.id}
            width="400px"
          >
            <Card
              elevation={2}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  elevation: 6,
                  transform: "translateY(-4px)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{
                  objectFit: "contain",
                  p: 2,
                  backgroundColor: "#f5f5f5",
                }}
              />

              <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    fontSize: "1rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    minHeight: "3rem",
                  }}
                >
                  {product.title}
                </Typography>

                {product.price && (
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    sx={{ mt: 1 }}
                  >
                    ${product.price}
                  </Typography>
                )}

                {product.category && (
                  <Chip
                    label={product.category}
                    size="small"
                    variant="outlined"
                    sx={{ mt: 1, textTransform: "capitalize" }}
                  />
                )}
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => dispatch(addToCart(product))}
                  sx={{
                    py: 1,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {products.length === 0 && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="300px"
          textAlign="center"
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No Products Available
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Please check back later for new products.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Products;