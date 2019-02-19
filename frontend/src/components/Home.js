import React from 'react';
import Generation from './Generation';
import Dragon from './Dragon';

class Home extends React.Component {
    render() {
        return ( 
            <div>
                <h2>Dragon Stack</h2>
                <Generation />
                <Dragon />
            </div>
        );
    }
}

export default Home;