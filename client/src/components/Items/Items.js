import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Item from "./Item/Item";
import useStyles from "./styles";

const Items = ({ setCurrentId }) => {

    const Items = useSelector((state) => state.Items);
    const classes = useStyles();

    return (
        !Items.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {Items.map((Item) => (

                    <Grid key={Item._id} item xs={12} sm={6} md={6}>
                        <Item Item={Item} setCurrentId={setCurrentId} />
                    </Grid>

                ))}
            </Grid>
        )
    );
};

export default Items;