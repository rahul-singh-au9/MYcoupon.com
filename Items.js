import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import Electronics from "./Electronics/Electronics";

const Items = ({ setCurrentId }) => {

    const classes = useStyles();

    return (
        !Items.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {Items.map((Item) => (

                    <Grid key={Item._id} item xs={12} sm={6} md={6}>
                        <Electronics/>
                    </Grid>

                ))}
            </Grid>
        )
    );
};

export default Items;