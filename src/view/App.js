import React, { Component, Fragment } from 'react';

import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { FeedPage } from './pages/Feed/FeedPage';
import { Route, Switch } from 'react-router-dom';

import { MyUserProfile } from './pages/Profile/MyUserProfile';

import { PeoplePage } from './pages/PeoplePage/PeoplePage';

import { PostPage } from './pages/PostPage/PostPage';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Switch>

            < Route exact path="/profile" component={MyUserProfile} />
            < Route exact path="/people/:id" component={MyUserProfile} />
            < Route exact path="/people" component={PeoplePage} />
            < Route exact path="/" component={FeedPage} />

            <Route exact path="/posts/:postType/:postId" component={PostPage} />

            {/* <p> Nothing in feed... </p> */}
          </Switch>
        </main>
        <Footer />
      </Fragment>

    );
  }
}

export default App;
