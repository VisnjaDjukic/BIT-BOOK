import React, { Component, Fragment } from 'react';
import { Header } from './common/Header';
import { Footer } from './common/Footer';

import { FeedPage } from "./pages/FeedPage"



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <p> Nothing in feed... </p>
          <FeedPage />
        </main>
        <Footer />
      </Fragment>

    );
  }
}

export default App;
