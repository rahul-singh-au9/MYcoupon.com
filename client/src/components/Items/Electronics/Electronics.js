import React from "react";
import { Grid, Grow, Card, CardActions, CardContent, CardMedia, Button, Typography  } from "@material-ui/core";
import useStyles from "./styles";

const itemCards = [
  {
    title: "Iphone",
    name: "Iphone",
    message: "Think Different",
    url: "https://digiday.com/wp-content/uploads/2015/09/iphone7-alt-782x436.jpg",
    id: "Left",
  },
  {
    title: "One plus",
    name: "One plus",
    message: "Pretty much everything you could ask for",
    url: "https://images-na.ssl-images-amazon.com/images/I/51s0Mb5li8L._SX679_.jpg",
    id: "Right"
  },
  {
    title: "Samsung",
    name: "Samsung",
    message: "Inspire the World, Create the Future",
    url: "https://images.samsung.com/is/image/samsung/levant-galaxy-s20-plus-g985-bts-sm-g985fzpdmid-frontbpurple-261902310?$720_576_PNG$",
    id: "Top"
  },
  {
    title: "Nokia",
    name: "Nokia",
    message: "At Nokia, “Connecting People",
    url: "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:180&output-quality=80",
    id: "Bottom",
  },
];

const Electronics = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignitem="stretch"
        spacing={3}
      >
        {itemCards.map((itemCard) => (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.itemCard} key={itemCard.id}
            >
                <Card className={classes.card}>

                    <CardMedia
                    className={classes.media}
                    image={itemCard.url}
                    title={itemCard.title}
                    />

                    <div className={classes.overlay}>
                      <Typography variant="h6">{itemCard.name}</Typography>
                    </div>

                  <Typography
                    className={classes.title} gutterBottom
                    variant="h5" component="h2"
                  >
                    {itemCard.title}
                  </Typography>

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {itemCard.message}
                    </Typography>
                  </CardContent>

                  <CardActions className={classes.cardActions}>
                      <Button size="small"
                      color="primary"
                      >
                        generate coupon code
                      </Button>

                </CardActions>
            </Card>

            </Grid>
          </>
        ))}
      </Grid>
    </Grow>
  );
};

export default Electronics;