import React from 'react';
import Campgrounds from '../components/Campgrounds'

export default class CampgroundsContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            campgrounds: []
        };

        this.containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto',
            width: '90%'
        }
    }

    componentDidMount() {
        fetch("/api/campgrounds")
        .then(res => res.json())
        .then((result) => {
                this.setState({
                    isLoaded: true,
                    campgrounds: result.campgrounds
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        if(!this.state.isLoaded) {
            return <div></div>;
        } else {
            return (
                <div style={this.containerStyle}>
                    <div>
                        <h2>Our Most Popular Campgrounds!</h2>
                    </div>
                    <Campgrounds campgrounds={this.state.campgrounds} />
                </div>
            )
        }
    }
}