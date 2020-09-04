import React from 'react';

export default class Navbar extends React.Component {
    constructor() {
        super()

        this.navStyle = {
            display: 'flex',
            backgroundColor:    '#f8f8f8'
        }
    }

    render() {
        // Check for User
        let loginMes;
        if(this.props.user) {
            loginMes = (
                <ul>
                    <li>Signed In As {this.props.user}</li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            )
        } else {
            loginMes = (
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            )
        }

        return (
            <nav style={this.navStyle}>
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">YelpCamp</a>
                </div>
                <div className="collapse navbar-collapse">
                    {loginMes}
                </div>
            </nav>
        )
    }
}