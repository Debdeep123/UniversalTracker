import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import ComponentCard from '../components/ComponentCard'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Dashboard extends Component {
    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                <Sidebar />
                <Container maxWidth="md">
                    <Typography component="div" >
                        <ComponentCard />
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default Dashboard