import React, { useState} from "react";
import { Grid, Grow, Card, CardActions, CardContent, CardMedia, Button, Typography  } from "@material-ui/core";
import useStyles from "./styles";
import QRCode from 'qrcode';

const itemCards = [
  {
    title: "Denim",
    name: "Denim",
    value: "Denim",
    message: "Denim that makes you.",
    url: "https://cdn.shopify.com/s/files/1/2109/3725/products/Men-Light-Blue-Winter-Jean-Jackets-Outerwear-Warm-Denim-Coats-New-Men-Large-Size-Wool-Liner_791x.jpg?v=1580464206",
    id: "Left",
  },
  {
    title: "Mango",
    name: "Mango",
    value: "Mango",
    message: "this is not the same",
    url: "https://economictimes.indiatimes.com/thumb/msid-78425697,width-1200,height-900,resizemode-4,imgsize-207002/mango.jpg?from=mdr",
    id: "Right"
  },
  {
    title: "Nike",
    name: "Nike",
    value: "Nike",
    message: " JUST DO IT",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gE-FNFYDh5ZM226OOSLsTVb7soXCbGZPrQ&usqp=CAU",
    id: "Top"
  },
  {
    title: "Adidas",
    name: "Adidas",
    value: "Adidas",
    message: "Impossible is nothing",
    url: "https://cf.shopee.com.my/file/1118efdaac7fe371c49904c2f3c12fc0",
    id: "Bottom",
  },
];

const Clothing = () => {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState('')

    const generateQrCode = async () => {
      try {
          const response = await QRCode.toDataURL(itemCards.map((itemCard) =>(itemCard.value) ));
          setImageUrl(response);

      } catch (error) {
        console.log(error);
      }
  }

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
                      onClick={() => generateQrCode()}
                      >
                        generate coupon code
                      </Button>
                  <br/>
                  <br/>
                  {imageUrl ? (
                    <a href={imageUrl} download>
                        <img src={imageUrl} alt="img"/>
                    </a>) : null}

                </CardActions>
            </Card>

            </Grid>
          </>
        ))}
      </Grid>
    </Grow>
  );
};

export default Clothing;