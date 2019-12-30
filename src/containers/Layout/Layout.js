import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Navbar from '../../components/UI/Navbar/Navbar';
import SearchWeather from '../SearchWeather/SearchWeather';
const Layout = (props) => {
    return (
        <Aux>
            <Navbar/>
            <SearchWeather/>
        </Aux>
    );
}

export default Layout;