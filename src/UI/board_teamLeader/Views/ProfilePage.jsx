import { useState, useEffect } from "react";
import {
    Avatar,
    Box,
    Button,
    Grid,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import axios from "axios";
import PostCards from "../leader_components/postFormCards/PostCards";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginBottom: theme.spacing(2),
    },
}));

const ProfilePage = ({user}) => {
    const classes = useStyles();


    if (!user) {
        return <div>Loading...</div>;
    }

    return (
       <div className="mt-5">
            <Grid container justifyContent="center">
                <Grid item xs={12} md={10} lg={8}>
                   <PostCards
                   content={
                    <>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Avatar
                                            alt={user.name}
                                            src={user.profilepic}
                                            className={classes.avatar}
                                        >
                                            <PersonIcon fontSize="large" />
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h4">{user.name}</Typography>
                                        <Typography variant="subtitle1">{user.email}</Typography>
                                    </Grid>
                                </Grid>
                                <Box mt={4}>
                                    <Typography variant="h6">Personal Information</Typography>
                                    <Grid container spacing={2} mt={2}>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="subtitle1">
                                                <strong>Address:</strong> {user.address}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="subtitle1">
                                                <strong>Phone:</strong> {user.phone}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="subtitle1">
                                                <strong>Gender:</strong> {user.gender}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="subtitle1">
                                                <strong>Category:</strong> {user.category}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                    </>
                   }
                   />
                </Grid>
            </Grid>
       </div>
    );
};

export default ProfilePage;
