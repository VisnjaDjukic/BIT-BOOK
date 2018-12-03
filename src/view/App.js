import React, { Component, Fragment } from 'react';

import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { FeedPage } from './pages/Feed/FeedPage';
import { Route, Switch } from 'react-router-dom';
import { PostPage } from './pages/PostPage/PostPage';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path="/posts/:postType/:postId" component={PostPage} />
            <Route exact path="/" component={FeedPage} />
            {/* <p> Nothing in feed... </p> */}
          </Switch>
        </main>
        <Footer />
      </Fragment>

    );
  }
}

export default App;
