import React, { useState, useEffect} from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import {AppBar, Typography, Toolbar, Avatar, Button} from "@material-ui/core";
import {LOGOUT} from "../../constants/actionTypes";
import decode from 'jwt-decode';


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {

      const token = user?.token;

      if(token){
        const decodedToken = decode(token)

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem("profile")))

    },[location]);

    const logout = () => {
      dispatch({
        type: LOGOUT
      });

      history.push('/');

      setUser(null);
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">

          <div className={classes.brandContainer}>
              <Typography component={Link} to="/home" className={classes.heading} variant="h2" align="center">
                MYcoupon.com
              </Typography>
          </div>

          <Toolbar className={classes.toolbar}>

            {
              user?.result? (
                <div className = {classes.profile}>

                  <Avatar className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.ImageUrl}
                  >
                    {user?.result.name.charAt(0)}
                  </Avatar>

                  <Typography className={classes.userName} variant="h6">
                      {user?.result.name}
                  </Typography>

                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
                      Logout
                  </Button>
                </div>

              ) : (null)
            }

          </Toolbar>

        </AppBar>
    )
}

export default Navbar