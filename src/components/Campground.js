import React from 'react';

export default class Campground extends React.Component {
    render () {
        const Campgrounds = this.props.campgrounds;
        const CampgroundList = Campgrounds.map(c => (
            <div key={c.name}>
                <h1>{c.name}</h1>
                <img alt="Campground" src={c.image}></img>
                <button>More Info</button>
            </div>
        ));
        return (
            <div>
                {CampgroundList}
            </div>
        )
    }
}