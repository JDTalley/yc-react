import React from 'react';
import Campground from '../components/Campground'

export default class CampgroundContainer extends React.Component {
    state = {
        isLoaded: false,
        campgrounds: []
    };

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
                <Campground campgrounds={this.state.campgrounds} />
            )
        }
    }
}