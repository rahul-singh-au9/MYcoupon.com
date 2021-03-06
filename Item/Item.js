import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core/";
import { useDispatch } from "react-redux";
// import { likePost} from "../../../actions/postsActions";
import useStyles from "./styles";
import moment from "moment";

const Item = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));


  return (
      <Card className={classes.card}>

          <CardMedia
          className={classes.media}
          image={post.selectedFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
          title={post.title}
          />

          <div className={classes.overlay}>

            <Typography variant="h6">{post.name}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

          </div>

          <Typography
            className={classes.title} gutterBottom
            variant="h5" component="h2"
          >
            {post.title}
          </Typography>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.message}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActions}>

            <Button size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}>

            </Button>


          </CardActions>
      </Card>
  );
};

export default Item;