import React from 'react';

export default class Navbar extends React.Component {
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
            <nav>
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