import React from 'react';
import Navbar from '../components/Navbar';

export default class NavbarContainer extends React.Component {
    state = {
        user: {},
        authenticated: true,
    };

    render() {
        return (
            <Navbar user={this.state.user.name} />
        )
    }
}