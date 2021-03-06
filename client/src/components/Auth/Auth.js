import React from "react";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Paper, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import {AUTH} from "../../constants/actionTypes";
import useStyles from "./styles";
import Icon from "./Icon";

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const googleSuccess = (res) => {
        // console.log(res)
        // optional chaining operator
        // the question mark operator is a special operator that's not going to throw an error if we don't have access to res object
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
        dispatch({ type: AUTH, data: { result, token } });

        history.push("/home");

        } catch (error) {
        console.log(error);
        }
    }

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    return (

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                    <GoogleLogin
                        clientId="896500833577-7fkj9rt1t83oqnli8ban9urbp15eathi.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                            className={classes.googleButton}
                            color="primary"
                            fullWidth
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<Icon />}
                            variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
            </Paper>
        </Container>
    );
};

export default Auth;
