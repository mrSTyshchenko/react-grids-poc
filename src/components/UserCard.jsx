import React from "react";
import { Card, CardContent, Typography } from "@mui/material";


const UserCard = ({ user }) => {
    return (
        <Card sx={{ maxWidth: 400, mt: 2, p: 2 }}>
            <CardContent>
                <Typography variant="h5">{user.name}</Typography>
                <Typography variant="body1">Address:{user.address}</Typography>
                <Typography variant="body1">Email:{user.Name}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;