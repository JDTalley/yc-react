import React from 'react';
import {styles} from '../styles/neomorphism';

const divStyle = {
    //borderRadius:   styles.borderRadius,
    //boxShadow:      styles.boxShadow,
    flex:           '0 0 350px',
    margin:         10
}

const pageStyle = {
    display:        'flex',
    flexWrap:       'wrap',
    alignItems:     'stretch',
    flexDirection:  'row'
    //justifyContent: 'space-between'
}

export default class Campgrounds extends React.Component {
    render () {
        const Campgrounds = this.props.campgrounds;
        const CampgroundList = Campgrounds.map(c => (
            <div key={c.name} style={divStyle}>
                <h1>{c.name}</h1>
                <img alt="Campground" src={c.image} width='100%'></img>
                <button>More Info</button>
            </div>
        ));
        return (
            <div style={pageStyle}>
                {CampgroundList}
            </div>
        )
    }
}