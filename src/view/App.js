import React, { Component, Fragment } from 'react';

import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { FeedPage } from './pages/Feed/FeedPage';
import { Route, Switch } from 'react-router-dom';
import { ImagePost } from './pages/Feed/ImagePost';
import { VideoPost } from './pages/Feed/VideoPost';
import { TextPost } from './pages/Feed/TextPost';
import { MyUserProfile } from './pages/Profile/MyUserProfile';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Switch>
            < Route exact path="/profile" component={MyUserProfile} />
            < Route exact path="/imagePost" component={ImagePost} />
            < Route exact path="/videoPost" component={VideoPost} />
            < Route exact path="/textPost" component={TextPost} />
            < Route exact path="/" component={FeedPage} />
            {/* <p> Nothing in feed... </p> */}
          </Switch>
        </main>
        <Footer />
      </Fragment>

    );
  }
}

export default App;
