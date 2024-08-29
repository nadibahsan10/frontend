import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, dividerClasses } from "@mui/material";
import UpdateProduct from "./UpdateProduct";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...(theme.palette.mode === "dark" && {
    backgroundColor: "transparent",
    boxShadow: "none",
  }),
}));

const myListedProducts = [
  {
    title: "Smartphone",
    description: "Latest Android smartphone with high-resolution display.",
    price: "BDT. 25,000",
    category: "electronics",
    image: "frontend\\public\\design\\smartphone.jpg",
  },
  {
    title: "Laptop",
    description: "High-performance laptop for gaming and productivity.",
    price: "BDT. 70,000",
    category: "electronics",
    image: "frontend\\public\\design\\laptop.jpg",
  },
  {
    title: "Headphones",
    description:
      "Noise-cancelling over-ear headphones with superior sound quality.",
    price: "BDT. 5,000",
    category: "electronics",
    image: "frontend\\public\\design\\headphones.jpg",
  },
  {
    title: "Digital Camera",
    description:
      "Compact digital camera with 20MP sensor and 4K video recording.",
    price: "BDT. 30,000",
    category: "electronics",
    image: "frontend\\public\\design\\camera.jpg",
  },
  {
    title: "Smartwatch",
    description: "Waterproof smartwatch with heart rate monitor and GPS.",
    price: "BDT. 10,000",
    category: "electronics",
    image: "E:\ProjectSE\frontend\public\design\product.jpg",
  },
];

function MyListings() {
  const [open, setOpen] = useState(false);
  const [componentToShow, setComponentToShow] = useState(null);

  const handleClickOpen = (component) => {
    setComponentToShow(component);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setComponentToShow(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><h3>My Listings</h3></Item>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            {myListedProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={4}>
                    <Item>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ height: "50px", width: "50px" }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={5}>
                    <Item>
                      <h4>{product.title.toUpperCase()}</h4>
                    </Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item>
                      <p>uploaded time</p>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <p>PRICE {product.price}</p>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <p>{product.category.toUpperCase()}</p>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <p>Description: {product.description}</p>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleClickOpen("delete")}
                      >
                        Delete now
                      </Button>

                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleClickOpen("update")}
                        sx={{ marginLeft: 2 }}
                      >
                        Update Products
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        maxWidth="lg"
                        fullWidth={true}
                      >
                        <DialogActions>
                          <Button onClick={handleClose}>
                            <CloseIcon />
                          </Button>
                        </DialogActions>
                        <DialogContent>
                          {componentToShow === "update" && (
                            <UpdateProduct
                              title={product.title}
                              description={product.description}
                              price={product.price}
                              category={product.category}
                              image={product.image}
                            />
                          )}
                          {componentToShow === "delete" && (
                            <Grid
                            container
                            spacing={3}
                            sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center", textAlign: "center" }}
                          >
                            <Grid item xs={12}>
                              <h4>
                                Are you sure to delete {product.title} from Market place.
                              </h4>
                              <Button variant="contained" color="primary" onClick={handleClose}>
                                Cancel
                              </Button>
                          
                              <Button
                                variant="contained"
                                color="secondary"
                                sx={{ marginLeft: 2 }}
                              >
                                Confirm
                              </Button>
                            </Grid>
                          </Grid>
                          
                          )}
                        </DialogContent>
                      </Dialog>
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyListings;
