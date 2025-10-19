import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchProducts } from "../store/slice/productSlice";

const Products = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <p>{products.length}</p>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Card key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ objectFit: "cover", maxHeight: "100px" }}
            />
            <CardContent>
              <Typography>{product.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
