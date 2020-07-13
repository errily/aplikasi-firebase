import React from 'react'

import Container from '@material-ui/core/Container';
import Typograhpy from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from "./style.js";

export default function AppLoading() {

    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <div className={classes.loadingBox}>
                <Typograhpy
                    variant="h6"
                    component="h2"
                    className={classes.title}
                >
                    Aplikasi Penjualan Loading...
                </Typograhpy>
                <LinearProgress/>
            </div>

        </Container>
    )
}
