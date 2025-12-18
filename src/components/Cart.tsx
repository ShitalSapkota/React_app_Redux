import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { clearCart, removeFromCart } from "@/store/slice/cartSlice";
import type { RootState } from "@/store/store";
import type { CartItem } from "@/types/types";

const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cart.cart);
  const dispatch = useAppDispatch();

  const totalItems = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="400px"
          textAlign="center"
        >
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Your Cart is Empty
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add some products to your cart to see them here.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Shopping Cart
          </Typography>
          <Chip
            label={`${totalItems} item${totalItems !== 1 ? "s" : ""}`}
            color="primary"
            variant="outlined"
          />
        </Box>
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(clearCart())}
          sx={{ minWidth: 120 }}
        >
          Clear Cart
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Cart Items */}
      <Grid container spacing={3}>
        {cart.map((product) => (
          <Grid key={product.id}>
            <Card
              elevation={2}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                "&:hover": {
                  elevation: 4,
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <Box sx={{ flexShrink: 0, mr: 2 }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    objectFit: "cover",
                    width: "80px",
                    height: "80px",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <CardContent sx={{ flex: 1, py: 0 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.title}
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="body2" color="text.secondary">
                    Quantity:
                  </Typography>
                  <Chip label={product.quantity} size="small" color="primary" />
                </Box>
              </CardContent>

              <CardActions>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => dispatch(removeFromCart(product))}
                  sx={{ minWidth: 100 }}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cart;