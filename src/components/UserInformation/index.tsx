import React from 'react';

import {Avatar, Typography, useTheme} from '@material-ui/core';

const UserInformation: React.FunctionComponent = () => {
    const theme = useTheme();

    return (
        <>
            <Avatar src="" style={{marginRight: theme.spacing(1)}}>
                UN
            </Avatar>
            <Typography noWrap>Username</Typography>
        </>
    );
};

export default UserInformation;
