import React from "react";
import { Container, Grow, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
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

                      {/* <Posts> */}
                    </Grid>

                    <Paper className={classes.appBar}>
                      <Typography className={classes.userName} variant="h6">
                        Clothing
                      </Typography>
                    </Paper>

                    <Grid item xs={12} sm={12}>
                      {/* <Form> */}
                    </Grid>

                </Grid>
            </Container>
          </Grow>
  )
}

export default Home