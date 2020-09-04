import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import CampgroundsContainer from '../containers/CampgroundsContainer';
import {styles} from '../styles/neomorphism';

const divStyle = {
    //backgroundColor:    styles.backgroundColor,
    //color:              styles.color,
    height:             '100vh',
    margin:             '0',
    display:            'flex',
    flexDirection:      'column'
}

export default class Homepage extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <NavbarContainer />
                <CampgroundsContainer />
            </div>
        )
    }
}