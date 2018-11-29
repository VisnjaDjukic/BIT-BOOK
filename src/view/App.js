import React, { Component, Fragment } from 'react';
import { Header } from './common/Header';
import { Footer } from './common/Footer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <p> Nothing in feed... </p>

        </main>
        <Footer />
      </Fragment>

    );
  }
}

export default App;
