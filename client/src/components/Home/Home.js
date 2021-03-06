import React, { useState } from "react";
import { Container, Grow, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Electronics from "../Items/Electronics/Electronics";
import Clothing from "../Items/Clothing/Clothing";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();

    return (
          <Grow in>
              <Container>
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                      <Paper className={classes.appBar}>
                        <Typography className={classes.userName} variant="h6">
                          Electronics
                        </Typography>
                      </Paper>

                      <Grid item xs={12} sm={12}>
                        <Electronics setCurrentId={setCurrentId}/>
                      </Grid>


                      <Paper className={classes.appBar}>
                        <Typography className={classes.userName} variant="h6">
                          Clothing
                        </Typography>
                      </Paper>

                      <Grid item xs={12} sm={12}>
                        <Clothing setCurrentId={setCurrentId}/>
                      </Grid>

                  </Grid>
              </Container>
            </Grow>
    )
}

export default Home