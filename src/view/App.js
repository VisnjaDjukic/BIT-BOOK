import React, { Component, Fragment } from 'react';

import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { Feed } from './pages/Feed/FeedPage';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Feed />

          {/* <p> Nothing in feed... </p> */}

        </main>
        <Footer />
      </Fragment>

    );
  }
}

export default App;
