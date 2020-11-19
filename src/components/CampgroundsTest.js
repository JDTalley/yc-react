import React, {useState, useEffect} from 'react';
import Campgrounds from './Campgrounds';

export default function CampgroundsTest() {

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

    const [campgrounds, setCampgrounds] = useState([]);

    useEffect(() => {
        const url = "https://yelpcamp.jdtalley.com/api/campgrounds"

        try {
            fetch(url)
            .then(res => res.json())
            .then((result) => setCampgrounds(result.campgrounds));
        } catch(err) {
            console.error(err);
        }
    });

    return (
        <div>
            <div>
                <h2>Our Most Popular Campgrounds!</h2>
            </div>
            <div style={pageStyle}>
                {campgrounds.map( c => (
                    <div key={c._id} style={divStyle}>
                        <h1>{c.name}</h1>
                        <img alt={c.name} src={c.image} width='100%'></img>
                        <button>More Info</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
