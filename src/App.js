import React, { Component, Fragment } from 'react';

import { Header, Main, Footer } from './components';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;